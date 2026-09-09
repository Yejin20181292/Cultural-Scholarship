<template>
  <div class="subpage-wrapper">
    <!-- Hero Banner -->
    <div class="sub-banner">
      <div class="container banner-container">
        <span class="banner-subtitle">ANNOUNCEMENTS</span>
        <h1 class="banner-title title-serif">공지사항</h1>
        <p class="banner-desc">신라문화장학재단의 장학생 선발 공모, 행사 안내 및 재단 주요 소식입니다.</p>
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
        <div v-if="activeTab === 'notice'" class="tab-pane reveal active">
          <div class="notice-container">
            <!-- 목록 -->
            <template v-if="!selectedNotice">
              <div class="notice-search-bar glass-card">
                <div class="search-input-wrapper">
                  <input type="text" v-model="searchQuery" placeholder="공지사항 제목/내용 검색..." class="notice-search-input" />
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="search-icon"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </div>
              </div>

              <div class="notice-list glass-card">
                <div v-for="item in filteredNotices" :key="item.id" class="notice-item" @click="openNotice(item.id)">
                  <span class="item-tag" :class="item.type">{{ item.tagText }}</span>
                  <div class="item-main">
                    <a :href="`#notice-sub/detail/${item.id}`" class="item-title" @click.prevent>{{ item.title }}</a>
                    <span class="item-date">{{ item.date }}</span>
                  </div>
                  <svg class="item-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>
              </div>
            </template>

            <!-- 상세 -->
            <div v-else class="notice-detail glass-card">
              <div class="detail-header">
                <span class="item-tag" :class="selectedNotice.type">{{ selectedNotice.tagText }}</span>
                <h2 class="detail-title">{{ selectedNotice.title }}</h2>
                <span class="detail-date">{{ selectedNotice.date }}</span>
              </div>

              <div class="detail-body">
                <p v-for="(para, i) in selectedNotice.content" :key="i" class="detail-para">{{ para }}</p>
                <div v-if="selectedNotice.images" class="detail-images">
                  <img v-for="(src, i) in selectedNotice.images" :key="i" :src="src"
                    :alt="`${selectedNotice.title} ${i + 1}쪽`" class="detail-image" />
                </div>

                <a v-if="selectedNotice.file" class="btn btn-primary detail-download-btn"
                  :href="selectedNotice.file" :download="selectedNotice.filename">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  <span>{{ selectedNotice.filename }}</span>
                </a>
              </div>

              <div class="detail-nav">
                <button v-if="prevNotice" class="detail-nav-btn" @click="openNotice(prevNotice.id)">
                  <span class="nav-label">이전 글</span>
                  <span class="nav-title">{{ prevNotice.title }}</span>
                </button>
                <button v-if="nextNotice" class="detail-nav-btn" @click="openNotice(nextNotice.id)">
                  <span class="nav-label">다음 글</span>
                  <span class="nav-title">{{ nextNotice.title }}</span>
                </button>
              </div>

              <div class="detail-actions">
                <button class="btn btn-outline" @click="closeNotice">목록으로</button>
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
import noticeLetter01 from '../assets/notice_letter01.jpeg';
import noticeLetter02 from '../assets/notice_letter02.jpeg';
import notice2021Recruit from '../assets/notice_2021_recruit.jpeg';
import notice2022Recruit from '../assets/notice_2022_recruit.jpeg';
import notice2023Recruit from '../assets/notice_2023_recruit.jpeg';

defineEmits(['back']);

const tabs = [
  { id: 'notice', name: '공지사항' }
];

const activeTab = ref('notice');
const searchQuery = ref('');

const setActiveTab = (tabId: string) => {
  activeTab.value = tabId;
  window.location.hash = `#notice-sub/${tabId}`;
};

interface Notice {
  id: number;
  type: string;
  tagText: string;
  title: string;
  date: string;
  content: string[];
  images?: string[]; // 본문이 이미지로 된 공지에만 사용한다.
  file?: string; // public/ 기준 첨부파일 경로
  filename?: string; // 내려받을 때 저장될 이름
}

const notices: Notice[] = [
  {
    id: 1,
    type: 'event',
    tagText: '안내',
    title: '2025 신라문화장학재단 장학생 공개선발',
    date: '2025.01.21',
    content: ['내용 준비 중입니다.']
  },
  {
    id: 2,
    type: 'event',
    tagText: '안내',
    title: '2023 신라문화장학재단 장학생 공개선발',
    date: '2023.02.02',
    content: [
      '2023년 신라문화장학재단 장학생 공개선발',
      '선발 대상 학교 홈페이지에 지원서와 함께 공지되었습니다.',
      '각 학교 홈페이지에서 공고 및 지원서류를 확인하시고 많은 지원 부탁드립니다.'
    ],
    images: [notice2023Recruit],
    file: '/docs/2023-scholarship-recruitment.pdf',
    filename: '2023공개선발요강.pdf'
  },
  {
    id: 3,
    type: 'event',
    tagText: '안내',
    title: '2022 신라문화장학재단 장학생 공개선발',
    date: '2022.01.27',
    content: [
      '2022년 신라문화장학재단 장학생 공개선발',
      '선발 대상 학교 홈페이지에 지원서와 함께 공지되었습니다.',
      '각 학교 홈페이지에서 공고 및 지원서류를 확인하시고 많은 지원 부탁드립니다.'
    ],
    images: [notice2022Recruit],
    file: '/docs/2022-scholarship-recruitment.pdf',
    filename: '2022공개선발요강.pdf'
  },
  {
    id: 4,
    type: 'event',
    tagText: '안내',
    title: '2021 신라문화장학재단 장학생 공개선발',
    date: '2021.01.27',
    content: [
      '2021년 신라문화장학재단 장학생 공개선발',
      '선발 대상 학교 홈페이지에 지원서와 함께 공지되었습니다.',
      '각 학교 홈페이지에서 공고 및 지원서류를 확인하시고 많은 지원 부탁드립니다.'
    ],
    images: [notice2021Recruit],
    file: '/docs/2021-scholarship-recruitment.pdf',
    filename: '2021공개선발요강.pdf'
  },
  {
    id: 5,
    type: 'normal',
    tagText: '일반',
    title: '장학생 여러분께',
    date: '2020.12.03',
    content: [],
    images: [noticeLetter01, noticeLetter02]
  }
];

const filteredNotices = computed(() => {
  if (!searchQuery.value) return notices;
  return notices.filter(n => n.title.toLowerCase().includes(searchQuery.value.toLowerCase()));
});

const getDetailIdFromHash = (): number | null => {
  const parts = window.location.hash.split('/');
  if (parts[1] === 'detail' && parts[2]) {
    const id = Number(parts[2]);
    return Number.isFinite(id) ? id : null;
  }
  return null;
};

const selectedId = ref<number | null>(getDetailIdFromHash());

const selectedNotice = computed(() => notices.find(n => n.id === selectedId.value) ?? null);

const currentIndex = computed(() => notices.findIndex(n => n.id === selectedId.value));
// 목록이 최신순이라 배열 뒤로 갈수록 오래된 글이다.
// 따라서 이전 글 = 배열의 다음 항목(더 오래된 글), 다음 글 = 배열의 앞 항목(더 최근 글)이다.
const prevNotice = computed(() =>
  currentIndex.value >= 0 && currentIndex.value < notices.length - 1 ? notices[currentIndex.value + 1] : null
);
const nextNotice = computed(() => (currentIndex.value > 0 ? notices[currentIndex.value - 1] : null));

const openNotice = (id: number) => {
  window.location.hash = `#notice-sub/detail/${id}`;
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const closeNotice = () => {
  window.location.hash = '#notice-sub/notice';
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// 뒤로 가기/앞으로 가기로도 목록과 상세를 오갈 수 있어야 한다.
const syncFromHash = () => {
  selectedId.value = getDetailIdFromHash();
};

onMounted(() => {
  if (!window.location.hash.startsWith('#notice-sub')) {
    window.location.hash = '#notice-sub/notice';
  }
  window.addEventListener('hashchange', syncFromHash);
});

onUnmounted(() => {
  window.removeEventListener('hashchange', syncFromHash);
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
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
}

.sub-tabs {
  display: flex;
  background: var(--bg-card);
  padding: 6px;
  border-radius: 30px;
  border: 1px solid var(--border-color);
}

.tab-btn {
  padding: 12px 32px;
  border-radius: 25px;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-secondary);
}

.tab-btn.active {
  color: #ffffff;
  background: var(--primary-color);
  box-shadow: 0 4px 12px var(--primary-glow);
}

.notice-container {
  max-width: 900px;
  margin: 0 auto;
}

.notice-search-bar {
  padding: 16px 20px;
  border-radius: 12px;
  margin-bottom: 24px;
}

.search-input-wrapper {
  position: relative;
  width: 100%;
}

.notice-search-input {
  width: 100%;
  padding: 10px 40px 10px 16px;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  background: var(--bg-card);
  color: var(--text-primary);
  font-size: 0.95rem;
}

.search-icon {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted);
}

.notice-list {
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border-color);
}

.notice-item {
  display: flex;
  align-items: center;
  padding: 22px 30px;
  border-bottom: 1px solid var(--border-color);
  transition: background-color var(--transition-fast);
}

.notice-item:last-child {
  border-bottom: none;
}

.notice-item:hover {
  background-color: rgba(6, 91, 137, 0.03);
}

.item-tag {
  font-size: 0.8rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 4px;
  margin-right: 20px;
  min-width: 60px;
  text-align: center;
}

.item-tag.important {
  background-color: rgba(220, 38, 38, 0.15);
  color: #ef4444;
  border: 1px solid rgba(220, 38, 38, 0.3);
}

.item-tag.normal {
  background-color: rgba(6, 91, 137, 0.15);
  color: var(--primary-color);
  border: 1px solid var(--border-color);
}

.item-tag.event {
  background-color: rgba(59, 130, 246, 0.15);
  color: #60a5fa;
  border: 1px solid rgba(59, 130, 246, 0.3);
}

.item-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  gap: 20px;
}

.item-title {
  color: var(--text-primary);
  font-size: 0.98rem;
  font-weight: 400;
  text-align: left;
  line-height: 1.5;
  transition: color var(--transition-fast);
}

.notice-item:hover .item-title {
  color: var(--secondary-color);
}

.item-date {
  color: var(--text-muted);
  font-size: 0.85rem;
  white-space: nowrap;
}

.item-arrow {
  width: 16px;
  height: 16px;
  color: var(--text-muted);
  margin-left: 20px;
  transition: transform var(--transition-fast), color var(--transition-fast);
}

.notice-item:hover .item-arrow {
  color: var(--primary-color);
  transform: translateX(3px);
}

/* ===== 공지 상세 ===== */
.notice-item {
  cursor: pointer;
}

.notice-detail {
  padding: 40px 44px;
  text-align: left;
}

.detail-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  padding-bottom: 22px;
  margin-bottom: 28px;
  border-bottom: 2px solid var(--border-color);
}

.detail-title {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.4;
  margin: 0;
  word-break: keep-all;
}

.detail-date {
  font-size: 0.88rem;
  color: var(--text-secondary);
  font-weight: 300;
}

.detail-body {
  min-height: 180px;
  margin-bottom: 36px;
}

.detail-para {
  font-size: 1rem;
  line-height: 1.9;
  color: var(--text-secondary);
  font-weight: 300;
  word-break: keep-all;
}

.detail-images {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 46px;
}

.detail-image {
  display: block;
  width: 100%;
  height: auto;
  border: 1px solid var(--border-color);
  border-radius: 8px;
}

.detail-para + .detail-para {
  margin-top: 16px;
}

.detail-download-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: fit-content;
  margin: 24px auto 0;
  padding: 11px 20px;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  background-color: var(--primary-color);
  color: var(--white);
}

.detail-nav {
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--border-color);
}

.detail-nav-btn {
  display: flex;
  align-items: center;
  gap: 14px;
  width: 100%;
  padding: 14px 4px;
  background: none;
  border: none;
  border-bottom: 1px solid var(--border-color);
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  transition: background var(--transition-fast);
}

.detail-nav-btn:hover {
  background: rgba(6, 91, 137, 0.04);
}

.nav-label {
  flex-shrink: 0;
  width: 56px;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--primary-color);
}

.nav-title {
  font-size: 0.92rem;
  color: var(--text-secondary);
  font-weight: 300;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.detail-actions {
  display: flex;
  justify-content: center;
  margin-top: 32px;
}

@media (max-width: 768px) {
  .notice-detail {
    padding: 28px 20px;
  }

  .detail-title {
    font-size: 1.25rem;
  }
}
</style>
