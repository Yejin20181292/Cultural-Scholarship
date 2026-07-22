<template>
  <section id="notices" class="notice-section">
    <div class="container">
      <div class="section-header reveal" ref="headerRef">
        <span class="section-subtitle">ANNOUNCEMENTS & NEWS</span>
        <h2 class="section-title">재단 소식 및 공지</h2>
        <p class="section-description">
          신라문화장학재단의 최신 공지사항과 활동 소식, 장학생들의 빛나는 창작 이야기를 전해드립니다.
        </p>
      </div>

      <div class="tabs-container reveal" ref="tabsRef">
        <div class="tabs">
          <button class="tab-btn" :class="{ 'active': activeTab === 'notice' }" @click="activeTab = 'notice'">
            공지사항
          </button>
          <button class="tab-btn" :class="{ 'active': activeTab === 'news' }" @click="activeTab = 'news'">
            언론 보도 & 소식
          </button>
        </div>

        <div class="tab-content">
          <!-- Announcements List -->
          <div v-if="activeTab === 'notice'" class="notice-list">
            <div v-for="item in notices" :key="item.id" class="notice-item">
              <span class="item-tag" :class="item.type">{{ item.tagText }}</span>
              <div class="item-main">
                <a href="#" class="item-title">{{ item.title }}</a>
                <span class="item-date">{{ item.date }}</span>
              </div>
              <svg class="item-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </div>

          <!-- News Cards Grid -->
          <div v-if="activeTab === 'news'" class="news-grid">
            <div v-for="item in news" :key="item.id" class="news-card glass-card">
              <div class="news-img-placeholder">
                <div class="news-img-overlay">
                  <span class="news-badge">{{ item.category }}</span>
                </div>
                <!-- Visual graphic represented with gradient in CSS -->
                <div class="gradient-graphic" :style="{ background: item.gradient }">
                  <span class="graphic-logo title-serif">CSF</span>
                </div>
              </div>
              <div class="news-info">
                <span class="news-date">{{ item.date }}</span>
                <h4 class="news-title"><a href="#">{{ item.title }}</a></h4>
                <p class="news-summary">{{ item.summary }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const headerRef = ref<HTMLElement | null>(null);
const tabsRef = ref<HTMLElement | null>(null);

const activeTab = ref('notice');

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

const news = [
  {
    id: 1,
    category: '재단 소식',
    date: '2026.07.18',
    title: '제10기 글로벌 아티스트 파리 연수 지원사업 마무리',
    summary: '프랑스 파리 국립 예술대학교에서 진행된 3주간의 하계 심화 연수 프로그램에 참여한 12명의 장학생들이 성공적으로 창작 연구 워크숍을 마쳤습니다.',
    gradient: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)'
  },
  {
    id: 2,
    category: '언론 보도',
    date: '2026.07.05',
    title: '전통문화 장학생 이지윤 양, 국가무형문화재 최연소 이수',
    summary: '신라문화장학재단으로부터 3년간 전통문화 계승 장학금을 수여 받은 이지윤(가야금 병창 전공) 학생이 문화재청 주관 심사를 통해 역대 최연소 무형문화재 이수자로 선정되었습니다.',
    gradient: 'linear-gradient(135deg, #4f3b32 0%, #8c6d4f 100%)'
  },
  {
    id: 3,
    category: '인재 기획',
    date: '2026.06.12',
    title: '미래를 여는 미디어 아티스트, 장학생 송민우 군 전시 성황',
    summary: '가상 공간과 현실을 넘나드는 디지털 캔버스로 화제를 모은 미디어 아티스트 송민우 군이 인사동 갤러리에서 개최한 첫 단독 초대전이 많은 호평 속에 마쳤습니다.',
    gradient: 'linear-gradient(135deg, #1f4037 0%, #99f2c8 100%)'
  }
];

onMounted(() => {
  const elements = [headerRef.value, tabsRef.value];
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
</script>

<style scoped>
.notice-section {
  background-color: var(--bg-color);
}

.tabs-container {
  max-width: 900px;
  margin: 0 auto;
}

.tabs {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 1px;
}

.tab-btn {
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--text-secondary);
  padding: 12px 24px;
  position: relative;
  transition: color var(--transition-fast);
}

.tab-btn::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--primary-color);
  transform: scaleX(0);
  transition: transform var(--transition-normal);
}

.tab-btn:hover {
  color: var(--primary-color);
}

.tab-btn.active {
  color: var(--primary-color);
  font-weight: 700;
}

.tab-btn.active::after {
  transform: scaleX(1);
}

/* Notice List Styles */
.notice-list {
  display: flex;
  flex-direction: column;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
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
  background-color: rgba(197, 168, 128, 0.03);
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
  background-color: rgba(197, 168, 128, 0.15);
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

/* News Grid Styles */
.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.news-card {
  padding: 0;
  overflow: hidden;
  text-align: left;
  display: flex;
  flex-direction: column;
}

.news-img-placeholder {
  height: 180px;
  position: relative;
  overflow: hidden;
}

.news-img-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, transparent, rgba(11, 12, 16, 0.5));
  z-index: 2;
  padding: 16px;
  display: flex;
  align-items: flex-start;
}

.news-badge {
  background-color: rgba(11, 12, 16, 0.7);
  border: 1px solid var(--border-color);
  backdrop-filter: blur(4px);
  color: var(--primary-color);
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 4px;
}

.gradient-graphic {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.news-card:hover .gradient-graphic {
  transform: scale(1.05);
}

.graphic-logo {
  font-size: 2.2rem;
  color: rgba(255, 255, 255, 0.15);
  font-weight: 800;
  letter-spacing: 0.1em;
}

.news-info {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.news-date {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-bottom: 10px;
}

.news-title {
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 1.4;
  margin-bottom: 12px;
}

.news-title a {
  color: var(--text-primary);
  transition: color var(--transition-fast);
}

.news-card:hover .news-title a {
  color: var(--primary-color);
}

.news-summary {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.6;
  font-weight: 300;
  word-break: keep-all;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media (max-width: 1024px) {
  .news-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .notice-item {
    padding: 18px 20px;
  }
  
  .item-tag {
    margin-right: 12px;
  }
  
  .item-main {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }
  
  .item-date {
    font-size: 0.8rem;
  }
  
  .news-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>
