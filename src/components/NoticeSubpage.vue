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
            <div class="notice-search-bar glass-card">
              <div class="search-input-wrapper">
                <input type="text" v-model="searchQuery" placeholder="공지사항 제목/내용 검색..." class="notice-search-input" />
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="search-icon"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </div>
            </div>

            <div class="notice-list glass-card">
              <div v-for="item in filteredNotices" :key="item.id" class="notice-item">
                <span class="item-tag" :class="item.type">{{ item.tagText }}</span>
                <div class="item-main">
                  <a href="#" class="item-title" @click.prevent>{{ item.title }}</a>
                  <span class="item-date">{{ item.date }}</span>
                </div>
                <svg class="item-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
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
  { id: 'notice', name: '공지사항' }
];

const activeTab = ref('notice');
const searchQuery = ref('');

const setActiveTab = (tabId: string) => {
  activeTab.value = tabId;
  window.location.hash = `#notice-sub/${tabId}`;
};

const notices = [
  {
    id: 1,
    type: 'important',
    tagText: '중요',
    title: '2026년도 하반기 글로벌 아티스트 장학생 모집 공고',
    date: '2026.07.20'
  },
  {
    id: 2,
    type: 'normal',
    tagText: '일반',
    title: '전통문화 계승 장학금 2차 면접 전형 대상자 발표',
    date: '2026.07.15'
  },
  {
    id: 3,
    type: 'normal',
    tagText: '안내',
    title: '2026 신라문화장학재단 학술 세미나 참가자 모집 안내',
    date: '2026.07.08'
  },
  {
    id: 4,
    type: 'event',
    tagText: '행사',
    title: '제12회 문화예술 꿈나무 장학생 연말 전시회 개최 안내',
    date: '2026.06.30'
  },
  {
    id: 5,
    type: 'normal',
    tagText: '일반',
    title: '재단 개인정보처리방침 변경 고지 및 시행 안내',
    date: '2026.06.25'
  }
];

const filteredNotices = computed(() => {
  if (!searchQuery.value) return notices;
  return notices.filter(n => n.title.toLowerCase().includes(searchQuery.value.toLowerCase()));
});

onMounted(() => {
  window.location.hash = '#notice-sub/notice';
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
</style>
