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
          <button class="tab-btn" :class="{ 'active': activeTab === 'archive' }" @click="activeTab = 'archive'">
            자료실
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

          <!-- Archive / Resources Downloads -->
          <div v-if="activeTab === 'archive'" class="resources-grid">
            <div v-for="item in resources" :key="item.id" class="resource-card">
              <div class="resource-info">
                <span class="file-format-badge" :class="item.format.toLowerCase()">{{ item.format }}</span>
                <div class="resource-text">
                  <div class="resource-meta">
                    <span class="resource-category">{{ item.category }}</span>
                    <span class="resource-date">{{ item.date }}</span>
                  </div>
                  <h4 class="resource-title">{{ item.title }}</h4>
                  <p class="resource-desc">{{ item.desc }}</p>
                </div>
              </div>
              <div class="resource-download">
                <span class="file-size">{{ item.size }}</span>
                <button class="btn btn-outline download-btn" @click.prevent>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  <span>다운로드</span>
                </button>
              </div>
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
import { ref, onMounted, onUnmounted } from 'vue';

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

const resources = [
  {
    id: 1,
    category: '장학 서식',
    title: '2026년도 하반기 장학금 지원 신청서 및 지도교수 추천서 양식',
    desc: '신라문화장학재단 장학금 신청을 위한 공통 제출 서식 팩 (신청서, 자기소개서, 추천서 합본)',
    format: 'HWP',
    size: '1.2 MB',
    date: '2026.07.20'
  },
  {
    id: 2,
    category: '동의서/안내',
    title: '개인정보 수집·이용 및 제3자 제공 동의서 (장학생용)',
    desc: '장학생 선발 심사 및 장학금 지급 처리를 위한 필수 제출 동의서 양식',
    format: 'PDF',
    size: '450 KB',
    date: '2026.07.15'
  },
  {
    id: 3,
    category: '작성 가이드',
    title: '학업·창작 계획서 및 포트폴리오 작성 가이드라인',
    desc: '문화예술 및 전통문화 분야 장학금 신청자를 위한 포트폴리오 작성 표준 안내서',
    format: 'PDF',
    size: '2.8 MB',
    date: '2026.07.01'
  },
  {
    id: 4,
    category: '재단 공시',
    title: '2025년도 재단법인 신라문화장학재단 결산보고서 및 사업실적 공시',
    desc: '공익법인 결산 서류 및 기부금 모금·활용 실적에 관한 공시 보고서',
    format: 'PDF',
    size: '4.1 MB',
    date: '2026.04.30'
  },
  {
    id: 5,
    category: '재단 규정',
    title: '신라문화장학재단 정관 및 장학생 선발·관리 규정',
    desc: '재단 설립 정관 및 장학생 수혜 자격 유지, 의무사항에 관한 세부 규정',
    format: 'PDF',
    size: '880 KB',
    date: '2026.01.10'
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

const handleNoticeTabEvent = (e: Event) => {
  const customEvent = e as CustomEvent;
  if (customEvent.detail) {
    activeTab.value = customEvent.detail;
  }
};

onMounted(() => {
  window.addEventListener('set-notice-tab', handleNoticeTabEvent);

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

onUnmounted(() => {
  window.removeEventListener('set-notice-tab', handleNoticeTabEvent);
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

/* Resources Grid / List */
.resources-grid {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.resource-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 28px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  transition: all var(--transition-fast);
}

.resource-card:hover {
  border-color: var(--primary-color);
  box-shadow: 0 8px 24px rgba(6, 91, 137, 0.08);
  transform: translateY(-2px);
}

.resource-info {
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1;
}

.file-format-badge {
  font-size: 0.75rem;
  font-weight: 800;
  padding: 8px 12px;
  border-radius: 8px;
  min-width: 52px;
  text-align: center;
  letter-spacing: 0.05em;
}

.file-format-badge.hwp {
  background: rgba(59, 130, 246, 0.12);
  color: #2563eb;
  border: 1px solid rgba(59, 130, 246, 0.25);
}

.file-format-badge.pdf {
  background: rgba(220, 38, 38, 0.12);
  color: #dc2626;
  border: 1px solid rgba(220, 38, 38, 0.25);
}

.resource-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: left;
}

.resource-meta {
  display: flex;
  align-items: center;
  gap: 10px;
}

.resource-category {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--primary-color);
  background: rgba(6, 91, 137, 0.08);
  padding: 2px 8px;
  border-radius: 4px;
}

.resource-date {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.resource-title {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.4;
}

.resource-desc {
  font-size: 0.88rem;
  color: var(--text-secondary);
  font-weight: 300;
}

.resource-download {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: 20px;
}

.file-size {
  font-size: 0.8rem;
  color: var(--text-muted);
  white-space: nowrap;
}

.download-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  font-size: 0.85rem;
  font-weight: 500;
  border-radius: 6px;
  white-space: nowrap;
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

  .resource-card {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    padding: 18px 20px;
  }

  .resource-download {
    margin-left: 0;
    width: 100%;
    justify-content: space-between;
    padding-top: 12px;
    border-top: 1px dashed var(--border-color);
  }
}
</style>
