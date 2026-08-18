<template>
  <div class="subpage-wrapper">
    <!-- Hero Banner -->
    <div class="sub-banner">
      <div class="container banner-container">
        <span class="banner-subtitle">COMMUNITY</span>
        <h1 class="banner-title title-serif">재단 커뮤니티</h1>
        <p class="banner-desc">장학생과 후원자가 함께 소통하고 성장하는 온·오프라인 네트워크 공간입니다.</p>
      </div>
    </div>

    <!-- Tab Section -->
    <div class="container sub-content">
      <div class="sub-tabs-wrapper">
        <div class="sub-tabs">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            class="tab-btn"
            :class="{ active: activeTab === tab.id }"
            @click="setActiveTab(tab.id)"
          >
            {{ tab.name }}
          </button>
        </div>
      </div>

      <!-- Tab Content Area -->
      <div class="tab-view-content">
        <!-- 1. 게시판 Tab -->
        <div v-if="activeTab === 'board'" class="tab-pane reveal active">
          <div class="board-wrapper glass-card">
            <div class="board-header-bar">
              <div class="board-search-group">
                <select v-model="selectedBoardCategory" class="board-select">
                  <option value="all">전체 카테고리</option>
                  <option value="자유소통">자유소통</option>
                  <option value="Q&A">Q&A</option>
                  <option value="연수후기">연수후기</option>
                  <option value="전시공연">전시공연소식</option>
                </select>
                <div class="search-input-wrapper">
                  <input type="text" v-model="boardSearchQuery" placeholder="검색어를 입력하세요..." class="board-input" />
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="search-icon"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </div>
              </div>
              <button class="btn btn-primary post-write-btn" @click="openWriteModal">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                <span>새 글 쓰기</span>
              </button>
            </div>

            <div class="board-table-container">
              <table class="board-table">
                <thead>
                  <tr>
                    <th class="th-cat">구분</th>
                    <th class="th-title">제목</th>
                    <th class="th-author">작성자</th>
                    <th class="th-date">작성일</th>
                    <th class="th-views">조회수</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="post in filteredBoardPosts" :key="post.id" class="board-tr">
                    <td class="td-cat"><span class="board-tag" :class="getCategoryClass(post.category)">{{ post.category }}</span></td>
                    <td class="td-title">
                      <a href="#" class="board-title-link" @click.prevent>{{ post.title }}</a>
                      <span v-if="post.replies > 0" class="reply-count">[{{ post.replies }}]</span>
                    </td>
                    <td class="td-author">{{ post.author }}</td>
                    <td class="td-date">{{ post.date }}</td>
                    <td class="td-views">{{ post.views }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- 2. 동문찾기 Tab -->
        <div v-if="activeTab === 'alumni'" class="tab-pane reveal active">
          <div class="alumni-wrapper">
            <div class="alumni-filter-bar glass-card">
              <div class="filter-buttons">
                <button class="filter-chip" :class="{ active: selectedAlumniFilter === 'all' }" @click="selectedAlumniFilter = 'all'">전체 동문</button>
                <button class="filter-chip" :class="{ active: selectedAlumniFilter === '순수예술' }" @click="selectedAlumniFilter = '순수예술'">순수예술</button>
                <button class="filter-chip" :class="{ active: selectedAlumniFilter === '전통문화' }" @click="selectedAlumniFilter = '전통문화'">전통문화</button>
                <button class="filter-chip" :class="{ active: selectedAlumniFilter === '미디어아트' }" @click="selectedAlumniFilter = '미디어아트'">미디어아트</button>
              </div>
              <div class="alumni-search-box">
                <input type="text" v-model="alumniSearchQuery" placeholder="동문 이름 / 전공 검색..." class="alumni-input" />
              </div>
            </div>

            <div class="alumni-grid">
              <div v-for="alumni in filteredAlumniList" :key="alumni.id" class="alumni-card glass-card">
                <div class="alumni-avatar-section" :style="{ background: alumni.avatarBg }">
                  <span class="alumni-avatar-initial">{{ alumni.name.charAt(0) }}</span>
                  <span class="alumni-cohort-badge">{{ alumni.cohort }}</span>
                </div>
                <div class="alumni-body">
                  <div class="alumni-main-info">
                    <h4 class="alumni-name">{{ alumni.name }}</h4>
                    <span class="alumni-category-chip">{{ alumni.category }}</span>
                  </div>
                  <p class="alumni-field">{{ alumni.field }}</p>
                  <div class="alumni-divider"></div>
                  <p class="alumni-achievement">🏆 {{ alumni.achievement }}</p>
                  <button class="btn btn-outline alumni-contact-btn" @click.prevent>멘토링 네트워크 연결</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

defineEmits(['back']);

const tabs = [
  { id: 'board', name: '게시판' },
  { id: 'alumni', name: '동문찾기' }
];

const getTabFromHash = (): string => {
  const hash = window.location.hash;
  if (hash.startsWith('#community-sub')) {
    const parts = hash.split('/');
    if (parts.length > 1 && tabs.some(t => t.id === parts[1])) {
      return parts[1];
    }
  }
  return 'board';
};

const activeTab = ref(getTabFromHash());

const updateTabFromHash = () => {
  activeTab.value = getTabFromHash();
};

const setActiveTab = (tabId: string) => {
  activeTab.value = tabId;
  window.location.hash = `#community-sub/${tabId}`;
};

// Board Logic
const selectedBoardCategory = ref('all');
const boardSearchQuery = ref('');

const boardPosts = ref([
  { id: 1, category: 'Q&A', title: '2026 하반기 글로벌 아티스트 장학금 추천서 작성 양식 문의', author: '김예은', date: '2026.07.21', views: 142, replies: 3 },
  { id: 2, category: '연수후기', title: '[파리 연수] 3주간의 예술 워크숍 참여 후기 및 팁 공유', author: '이진우 (10기)', date: '2026.07.19', views: 320, replies: 8 },
  { id: 3, category: '자유소통', title: '전통공예 및 국악 전공 장학생분들 네트워킹 모임 제안합니다!', author: '박서연', date: '2026.07.12', views: 98, replies: 5 },
  { id: 4, category: '전시공연', title: '제12회 장학생 단체전 <미래의 캔버스> 인사갤러리 초대권 나눔', author: '최현수', date: '2026.07.02', views: 215, replies: 12 },
  { id: 5, category: 'Q&A', title: '포트폴리오 제출 시 파일 용량 제한과 해상도 가이드라인', author: '정민재', date: '2026.06.28', views: 180, replies: 2 }
]);

const filteredBoardPosts = computed(() => {
  return boardPosts.value.filter(post => {
    const matchesCat = selectedBoardCategory.value === 'all' || post.category === selectedBoardCategory.value;
    const matchesSearch = !boardSearchQuery.value || post.title.toLowerCase().includes(boardSearchQuery.value.toLowerCase()) || post.author.includes(boardSearchQuery.value);
    return matchesCat && matchesSearch;
  });
});

const getCategoryClass = (category: string) => {
  switch (category) {
    case 'Q&A': return 'tag-qa';
    case '연수후기': return 'tag-review';
    case '전시공연': return 'tag-event';
    default: return 'tag-free';
  }
};

const openWriteModal = () => {
  alert('로그인 후 글쓰기가 가능합니다.');
};

// Alumni Logic
const selectedAlumniFilter = ref('all');
const alumniSearchQuery = ref('');

const alumniList = [
  { id: 1, name: '이지윤', cohort: '7기 장학생', category: '전통문화', field: '가야금 병창 전공', achievement: '국가무형문화재 최연소 이수자 선정', avatarBg: 'linear-gradient(135deg, #c5a880 0%, #8c6d4f 100%)' },
  { id: 2, name: '송민우', cohort: '8기 장학생', category: '미디어아트', field: '디지털 캔버스 & 3D', achievement: '인사동 갤러리 단독 초대전 개최', avatarBg: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)' },
  { id: 3, name: '한소희', cohort: '5기 장학생', category: '순수예술', field: '클래식 바이올린', achievement: '파리 국립 고등음악원 수석 입학', avatarBg: 'linear-gradient(135deg, #1f4037 0%, #99f2c8 100%)' },
  { id: 4, name: '강현우', cohort: '6기 장학생', category: '순수예술', field: '조소 & 아날로그 조각', achievement: '대한민국 미술대전 대상 수상', avatarBg: 'linear-gradient(135deg, #4f3b32 0%, #c5a880 100%)' }
];

const filteredAlumniList = computed(() => {
  return alumniList.filter(item => {
    const matchesFilter = selectedAlumniFilter.value === 'all' || item.category === selectedAlumniFilter.value;
    const matchesQuery = !alumniSearchQuery.value || item.name.includes(alumniSearchQuery.value) || item.field.includes(alumniSearchQuery.value);
    return matchesFilter && matchesQuery;
  });
});

onMounted(() => {
  updateTabFromHash();
  window.addEventListener('hashchange', updateTabFromHash);
});

onUnmounted(() => {
  window.removeEventListener('hashchange', updateTabFromHash);
});
</script>

<style scoped>
.subpage-wrapper {
  padding-bottom: 80px;
}

.sub-banner {
  position: relative;
  background-image: url('../assets/history_founder.png');
  background-size: cover;
  background-position: center 30%;
  padding: 140px 0 100px;
  text-align: center;
  border-bottom: 1px solid var(--border-color);
  overflow: hidden;
}

.sub-banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom,
      rgba(248, 250, 252, 0.52) 0%,
      rgba(248, 250, 252, 0.42) 60%,
      var(--bg-color) 100%);
  z-index: 1;
}

.banner-container {
  position: relative;
  z-index: 2;
}

.banner-subtitle {
  color: var(--primary-color);
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  margin-bottom: 12px;
  display: block;
}

.banner-title {
  font-size: 3rem;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.banner-desc {
  color: var(--text-secondary);
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
  font-weight: 300;
}

.sub-content {
  margin-top: 50px;
}

.sub-tabs-wrapper {
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
}

.sub-tabs {
  display: flex;
  background: var(--bg-card);
  padding: 6px;
  border-radius: 30px;
  border: 1px solid var(--border-color);
  gap: 4px;
}

.tab-btn {
  padding: 12px 28px;
  border-radius: 25px;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-secondary);
  transition: all var(--transition-normal);
}

.tab-btn:hover {
  color: var(--primary-color);
  background: rgba(6, 91, 137, 0.05);
}

.tab-btn.active {
  color: #ffffff;
  background: var(--primary-color);
  box-shadow: 0 4px 12px var(--primary-glow);
}

/* Board Styling */
.board-wrapper {
  padding: 30px;
  border-radius: 16px;
}

.board-header-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 24px;
}

.board-search-group {
  display: flex;
  gap: 12px;
  flex: 1;
  max-width: 550px;
}

.board-select {
  padding: 10px 14px;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  background: var(--bg-card);
  color: var(--text-primary);
  font-size: 0.9rem;
}

.search-input-wrapper {
  position: relative;
  flex: 1;
}

.board-input {
  width: 100%;
  padding: 10px 38px 10px 14px;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  background: var(--bg-card);
  color: var(--text-primary);
  font-size: 0.9rem;
}

.search-icon {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted);
}

.post-write-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 20px;
  font-size: 0.9rem;
  white-space: nowrap;
}

.board-table-container {
  overflow-x: auto;
}

.board-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

.board-table th {
  padding: 14px 16px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--primary-color);
  border-bottom: 2px solid var(--border-color);
  background: rgba(6, 91, 137, 0.04);
}

.board-table td {
  padding: 16px;
  font-size: 0.92rem;
  border-bottom: 1px solid var(--border-color);
  color: var(--text-secondary);
}

.board-tr:hover {
  background: rgba(6, 91, 137, 0.03);
}

.board-tag {
  font-size: 0.75rem;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 4px;
}

.tag-qa { background: rgba(59, 130, 246, 0.15); color: #3b82f6; }
.tag-review { background: rgba(16, 185, 129, 0.15); color: #10b981; }
.tag-event { background: rgba(245, 158, 11, 0.15); color: #f59e0b; }
.tag-free { background: rgba(6, 91, 137, 0.15); color: var(--primary-color); }

.board-title-link {
  color: var(--text-primary);
  font-weight: 500;
  transition: color var(--transition-fast);
}

.board-title-link:hover {
  color: var(--primary-color);
}

.reply-count {
  font-size: 0.8rem;
  color: var(--secondary-color);
  font-weight: 700;
  margin-left: 6px;
}

.th-cat, .td-cat { width: 110px; }
.th-author, .td-author { width: 120px; }
.th-date, .td-date { width: 110px; }
.th-views, .td-views { width: 80px; text-align: center; }

/* Alumni Styling */
.alumni-filter-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-radius: 12px;
  margin-bottom: 30px;
  gap: 20px;
}

.filter-buttons {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.filter-chip {
  padding: 8px 18px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  transition: all var(--transition-fast);
}

.filter-chip:hover, .filter-chip.active {
  background: var(--primary-color);
  color: #ffffff;
  border-color: var(--primary-color);
}

.alumni-input {
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid var(--border-color);
  background: var(--bg-card);
  color: var(--text-primary);
  font-size: 0.88rem;
  min-width: 200px;
}

.alumni-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.alumni-card {
  display: flex;
  border-radius: 16px;
  overflow: hidden;
  text-align: left;
  border: 1px solid var(--border-color);
}

.alumni-avatar-section {
  width: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: #ffffff;
  position: relative;
}

.alumni-avatar-initial {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 8px;
}

.alumni-cohort-badge {
  font-size: 0.75rem;
  font-weight: 700;
  background: rgba(0, 0, 0, 0.35);
  padding: 3px 8px;
  border-radius: 10px;
  backdrop-filter: blur(4px);
}

.alumni-body {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.alumni-main-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
}

.alumni-name {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-primary);
}

.alumni-category-chip {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--primary-color);
  background: rgba(6, 91, 137, 0.1);
  padding: 2px 8px;
  border-radius: 4px;
}

.alumni-field {
  font-size: 0.88rem;
  color: var(--text-secondary);
  margin-bottom: 12px;
}

.alumni-divider {
  height: 1px;
  background: var(--border-color);
  margin-bottom: 12px;
}

.alumni-achievement {
  font-size: 0.88rem;
  color: var(--text-primary);
  font-weight: 500;
  margin-bottom: 16px;
  flex-grow: 1;
}

.alumni-contact-btn {
  width: 100%;
  padding: 8px 0;
  font-size: 0.82rem;
}

@media (max-width: 900px) {
  .alumni-grid {
    grid-template-columns: 1fr;
  }

  .board-header-bar {
    flex-direction: column;
    align-items: stretch;
  }

  .board-search-group {
    max-width: 100%;
  }

  .alumni-filter-bar {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
