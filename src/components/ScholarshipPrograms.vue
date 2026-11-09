<template>
  <section id="programs" class="programs-section">
    <div class="container">
      <div class="section-header reveal" ref="headerRef">
        <span class="section-subtitle">COMMUNITY & SCHOLARSHIP</span>
        <h2 class="section-title">재단 커뮤니티 & 장학 안내</h2>
        <p class="section-description">
          지금까지 지원해 온 장학생 선발 인원과 지급 현황부터 장학생이 지켜야 할 사항,
          장학생들의 소통 게시판까지 한곳에서 확인해보세요.
        </p>
      </div>

      <!-- Main Section Tabs -->
      <div class="tabs-container reveal" ref="tabsRef">
        <div class="main-tabs">
          <button class="tab-btn" :class="{ 'active': activeProgramTab === 'awards' }" @click="activeProgramTab = 'awards'">
            선발인원 및 지급 현황
          </button>
          <button class="tab-btn" :class="{ 'active': activeProgramTab === 'rules' }" @click="activeProgramTab = 'rules'">
            장학생 준수사항
          </button>
          <button class="tab-btn" :class="{ 'active': activeProgramTab === 'board' }" @click="activeProgramTab = 'board'">
            게시판
          </button>
        </div>

        <div class="tab-content-area">
          <!-- 1. 선발인원 및 지급 현황 -->
          <div v-if="activeProgramTab === 'awards'" class="tab-pane-fade">
            <div class="awards-summary">
              <div class="glass-card summary-card reveal" ref="card1Ref">
                <span class="summary-label">누적 선발인원</span>
                <span class="summary-value title-serif">{{ awardTotalCount }}<em>명</em></span>
                <span class="summary-note">{{ cohortLabel }}</span>
              </div>
              <div class="glass-card summary-card reveal" ref="card2Ref">
                <span class="summary-label">누적 지급액</span>
                <span class="summary-value title-serif">{{ totalAmountShort }}</span>
                <span class="summary-note">{{ awardTotalAmount }}원</span>
              </div>
              <div class="glass-card summary-card reveal" ref="card3Ref">
                <span class="summary-label">집계 기간</span>
                <span class="summary-value title-serif">{{ periodLabel }}</span>
                <span class="summary-note">학기별 지급 기준</span>
              </div>
            </div>

            <div class="glass-card awards-recent reveal" ref="calcRef">
              <div class="awards-recent-head">
                <h3 class="awards-recent-title title-serif">최근 지급 내역</h3>
                <button class="btn btn-outline awards-more-btn"
                  @click="emit('navigate', 'scholarship-sub', 'awards')">
                  전체 현황 보기 <span class="arrow">→</span>
                </button>
              </div>

              <div class="home-table-wrap">
                <table class="home-awards-table">
                  <thead>
                    <tr>
                      <th>지급일자</th>
                      <th>구분</th>
                      <th class="num">선발인원</th>
                      <th class="num">지급액 (원)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(row, i) in recentAwards" :key="i">
                      <td class="td-date-cell">{{ row.date }}</td>
                      <td><span class="award-chip">{{ row.note }}</span></td>
                      <td class="num">{{ row.count }}</td>
                      <td class="num">{{ row.amount }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p class="awards-foot">
                대괄호가 붙은 인원([39] 등)은 기존 장학생에게 이어서 지급한 인원으로 누계에 더하지 않습니다.
              </p>
            </div>
          </div>
          <!-- 2. 게시판 Tab Content -->
          <div v-if="activeProgramTab === 'board'" class="tab-pane-fade">
            <div class="board-wrapper glass-card">
              <div class="board-header-bar">
                <div class="board-search-group">
                  <select v-model="selectedBoardCategory" class="board-select">
                    <option value="all">전체 카테고리</option>
                    <option value="Q&A">Q&A</option>
                    <option value="후기">후기</option>
                    <option value="소식">소식</option>
                    <option value="자유소통">자유소통</option>
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

              <div class="board-foot">
                <button class="btn btn-outline"
                  @click="emit('navigate', 'community-sub', 'board')">
                  게시판 전체 보기 <span class="arrow">→</span>
                </button>
              </div>
            </div>
          </div>

          <!-- 3. 장학생 준수사항 -->
          <div v-if="activeProgramTab === 'rules'" class="tab-pane-fade">
            <div class="rules-grid">
              <div
                v-for="item in ruleItems"
                :key="item.badge"
                class="glass-card rule-card"
                role="button"
                tabindex="0"
                :aria-label="`${item.title} 자세히 보기`"
                @click="goRules()"
                @keydown.enter.prevent="goRules()"
                @keydown.space.prevent="goRules()"
              >
                <span class="rule-badge title-serif">{{ item.badge }}</span>
                <h4 class="rule-title">{{ item.title }}</h4>
                <p class="rule-target">{{ item.target }}</p>
              </div>
            </div>

            <div class="rules-cta">
              <button class="btn btn-primary" @click="goRules()">
                장학생 준수사항 전체 보기 <span class="arrow">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { awardRows, awardTotalCount, awardTotalAmount } from '../data/awards';

const emit = defineEmits(['navigate']);

const headerRef = ref<HTMLElement | null>(null);
const tabsRef = ref<HTMLElement | null>(null);
const card1Ref = ref<HTMLElement | null>(null);
const card2Ref = ref<HTMLElement | null>(null);
const card3Ref = ref<HTMLElement | null>(null);
const calcRef = ref<HTMLElement | null>(null);

const activeProgramTab = ref<'awards' | 'rules' | 'board'>('awards');

// ----- 선발인원 및 지급 현황 -----
// 수치는 src/data/awards.ts 한 곳에서 가져오므로 재단사업 탭의 표와 어긋날 일이 없다.
const recentAwards = computed(() => [...awardRows].slice(-5).reverse());

// '1,837,000,000' -> '18억 3,700만원'
const totalAmountShort = computed(() => {
  const n = Number(awardTotalAmount.replace(/,/g, ''));
  if (!Number.isFinite(n) || n <= 0) return `${awardTotalAmount}원`;
  const eok = Math.floor(n / 100000000);
  const man = Math.floor((n % 100000000) / 10000);
  if (eok && man) return `${eok}억 ${man.toLocaleString()}만원`;
  if (eok) return `${eok}억원`;
  return `${man.toLocaleString()}만원`;
});

const periodLabel = computed(() => {
  const first = awardRows[0]?.date.slice(0, 4) ?? '';
  const last = awardRows[awardRows.length - 1]?.date.slice(0, 4) ?? '';
  return first === last ? first : `${first} ~ ${last}`;
});

const cohortLabel = computed(() => {
  const last = awardRows[awardRows.length - 1]?.date.match(/<(.+?)>/);
  return last ? `제1기 ~ ${last[1]}` : '';
});

// ----- 장학생 준수사항 -----
// 본문은 [재단사업] > [장학생 준수사항]에 있고, 여기에는 목록만 둔다.
// 항목을 고칠 때는 ScholarshipSubpage.vue 의 details 도 함께 고쳐야 한다.
const ruleItems = [
  { badge: '01', title: '장학생 자격 유지 조건', target: '국내 소재 대학교 재학생' },
  { badge: '02', title: '장학금 지급 및 등록', target: '장학생으로 선발된 대학교 재학생' },
  { badge: '03', title: '장학금 계속 지급 신청', target: '다음 학기 등록 예정인 재학생 및 복학 예정자' },
  { badge: '04', title: '휴학 및 복학 신청', target: '휴학 또는 복학을 신청하는 장학생' },
  { badge: '05', title: '편입학 및 전과 신고', target: '편입학 또는 전과를 한 장학생' },
  { badge: '06', title: '교환학생 신고', target: '교환학생으로 파견되는 장학생' },
  { badge: '07', title: '장학금 이중 수혜', target: '타 장학금을 함께 받는 장학생' }
];

const goRules = () => emit('navigate', 'scholarship-sub', 'rules');

// Board State & Data
const selectedBoardCategory = ref('all');
const boardSearchQuery = ref('');

const boardPosts = ref([
  { id: 1, category: 'Q&A', title: '2026 하반기 글로벌 아티스트 장학금 추천서 작성 양식 문의', author: '김예은', date: '2026.07.21', views: 142, replies: 3 },
  { id: 2, category: '후기', title: '[파리 연수] 3주간의 예술 워크숍 참여 후기 및 팁 공유', author: '이진우 (10기)', date: '2026.07.19', views: 320, replies: 8 },
  { id: 3, category: '자유소통', title: '전통공예 및 국악 전공 장학생분들 네트워킹 모임 제안합니다!', author: '박서연', date: '2026.07.12', views: 98, replies: 5 },
  { id: 4, category: '소식', title: '제12회 장학생 단체전 <미래의 캔버스> 인사갤러리 초대권 나눔', author: '최현수', date: '2026.07.02', views: 215, replies: 12 },
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
    case '후기': return 'tag-review';
    case '소식': return 'tag-event';
    default: return 'tag-free';
  }
};

const openWriteModal = () => {
  alert('로그인 후 글쓰기가 가능합니다.');
};

const handleProgramTabEvent = (e: Event) => {
  const customEvent = e as CustomEvent;
  if (customEvent.detail) {
    if (['awards', 'rules', 'board'].includes(customEvent.detail)) {
      activeProgramTab.value = customEvent.detail;
    }
  }
};

onMounted(() => {
  window.addEventListener('set-program-tab', handleProgramTabEvent);

  const elements = [headerRef.value, tabsRef.value, card1Ref.value, card2Ref.value, card3Ref.value, calcRef.value];
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  elements.forEach(el => {
    if (el) observer.observe(el);
  });
});

onUnmounted(() => {
  window.removeEventListener('set-program-tab', handleProgramTabEvent);
});
</script>

<style scoped>
/* Main Tabs */
.tabs-container {
  max-width: 960px;
  margin: 0 auto;
}

.main-tabs {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 40px;
}

.main-tabs .tab-btn {
  font-size: 1.05rem;
  font-weight: 500;
  color: var(--text-secondary);
  padding: 12px 30px;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-color);
  transition: all var(--transition-normal);
}

.main-tabs .tab-btn:hover {
  color: var(--primary-color);
  border-color: var(--primary-color);
  background: rgba(6, 91, 137, 0.08);
}

.main-tabs .tab-btn.active {
  color: #ffffff;
  background: var(--primary-color);
  border-color: var(--primary-color);
  box-shadow: 0 4px 14px var(--primary-glow);
}

.tab-pane-fade {
  animation: fade-in-up 0.4s ease forwards;
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

/* ===== 선발인원 및 지급 현황 ===== */
.awards-summary {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 28px;
}

.summary-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 32px 28px;
  text-align: center;
}

.summary-label {
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: var(--text-secondary);
}

.summary-value {
  font-size: 2.1rem;
  font-weight: 700;
  line-height: 1.2;
  color: var(--primary-color);
}

.summary-value em {
  font-style: normal;
  font-size: 1.1rem;
  margin-left: 2px;
}

.summary-note {
  font-size: 0.82rem;
  font-weight: 300;
  color: var(--text-secondary);
  opacity: 0.85;
}

.awards-recent {
  padding: 32px 34px;
}

.awards-recent-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 20px;
}

.awards-recent-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
}

.awards-more-btn {
  white-space: nowrap;
  padding: 10px 18px;
  font-size: 0.85rem;
}

.home-table-wrap {
  overflow-x: auto;
}

.home-awards-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.92rem;
}

.home-awards-table th {
  background: #f3f6fa;
  padding: 13px 14px;
  font-weight: 700;
  color: var(--text-primary);
  text-align: left;
  white-space: nowrap;
  border-bottom: 1px solid var(--border-color);
}

.home-awards-table td {
  padding: 14px;
  color: var(--text-secondary);
  border-bottom: 1px solid var(--border-color);
}

.home-awards-table .num {
  text-align: right;
}

.home-awards-table tbody tr:last-child td {
  border-bottom: none;
}

.td-date-cell {
  white-space: nowrap;
}

.award-chip {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 600;
  background: rgba(6, 91, 137, 0.08);
  color: var(--primary-color);
}

.awards-foot {
  margin-top: 16px;
  font-size: 0.8rem;
  font-weight: 300;
  line-height: 1.6;
  color: var(--text-secondary);
  opacity: 0.8;
}

/* ===== 장학생 준수사항 ===== */
.rules-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.rule-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 26px 24px;
  cursor: pointer;
}

.rule-card:hover {
  transform: translateY(-5px);
}

.rule-card:focus-visible {
  outline: 2px solid var(--primary-color);
  outline-offset: 3px;
}

.rule-badge {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: rgba(6, 91, 137, 0.35);
}

.rule-title {
  font-size: 1.02rem;
  font-weight: 700;
  line-height: 1.4;
  color: var(--text-primary);
  word-break: keep-all;
}

.rule-target {
  font-size: 0.83rem;
  font-weight: 300;
  line-height: 1.5;
  color: var(--text-secondary);
  word-break: keep-all;
}

.rules-cta {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

/* ===== 게시판 ===== */
.board-foot {
  display: flex;
  justify-content: center;
  margin-top: 24px;
}

@media (max-width: 1024px) {
  .awards-summary {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .rules-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .awards-recent {
    padding: 24px 18px;
  }

  .awards-recent-head {
    flex-direction: column;
    align-items: flex-start;
  }

  .rules-grid {
    grid-template-columns: 1fr;
  }

  .summary-value {
    font-size: 1.8rem;
  }
}

</style>
