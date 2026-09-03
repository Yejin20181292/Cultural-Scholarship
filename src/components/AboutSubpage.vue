<template>
  <div class="subpage-wrapper">
    <!-- Hero Banner -->
    <div class="sub-banner">
      <div class="container banner-container">
        <span class="banner-subtitle">ABOUT US</span>
        <h1 class="banner-title title-serif">재단 소개</h1>
        <p class="banner-desc">신라문화장학재단은 인재들의 꿈을 키우고, 미래의 가치를 함께 창조합니다.</p>
      </div>
    </div>

    <!-- Tab Section -->
    <div class="container sub-content">
      <div class="sub-tabs-wrapper">
        <div class="sub-tabs">
          <button v-for="tab in tabs" :key="tab.id" class="tab-btn" :class="{ active: activeTab === tab.id }"
            @click="setActiveTab(tab.id)">
            {{ tab.name }}
          </button>
        </div>
      </div>

      <!-- Tab Content Area -->
      <div class="tab-view-content">
        <!-- 1. 인사말 -->
        <div v-if="activeTab === 'greetings'" class="tab-pane reveal active">
          <div class="greetings-layout glass-card">
            <div class="greetings-text">
              <span class="greet-badge">OUR MISSION & MESSAGE</span>
              <h2 class="greet-title title-serif">“꿈을 꾸는 학생들의 모든 순간에 함께하겠습니다”</h2>
              <p class="greet-paragraph">
                인간은 누구나 평등하고 주어진 여건 하에서 자유를 만끽할 수 있도록 세상에 태어났다.
              </p>
              <p class="greet-paragraph">
                또한 교육을 받을 권리가 있고 교육을 받음으로써 사회봉사에 대한 보다 높은 의무가 생긴다.
                이 권리와 의무에는 남녀연령, 빈부 계급 등 그 어떤 신분상의 구애를 받지 않는다.
              </p>
              <p class="greet-paragraph">
                그러나 오늘의 사회현상은 이와 같은 원리가 적용되지 않고 있음이 현실이며 재능 있는 청소년들이
                가정이 어려워 교육을 받는 권리에서 소외되어 불행한 삶을 살게 됨은 안타까운 일이라 할 것이다.
                이는 그 자신의 불행일 뿐 아니라 국가 발전의 귀중한 동량(棟樑)을 잃게 됨이니
                국가사회가 유능한 인재를 뽑아내고 기르고 그들의 재능을 닦고 갈아서 빛나게 하는 것은
                무엇보다도 국가 백년대계(百年大計)를 위하여 우선해야 할 당면과업이라 하겠다.
              </p>
              <p class="greet-paragraph">
                본 장학재단은 경제적 어려움 때문에 보다 높은 교육을 받지 못하고 연구하지 못하는
                재능있는 학생들에게 장학금을 지급함으로써 그들의 교육받을 권리를 보장해주고
                그들이 가지고 있는 재능을 국가사회에 봉사하게 하는 기회를 마련해주고자 하는 목적으로 설립하였다.
              </p>
              <p class="greet-paragraph">
                이로써 국가 백년대계를 위한 동량을 계발하여 조금이나마 국가 발전에 기여하고자
                신라문화장학재단을 설립한다.
              </p>
              <div class="signature">
                <span class="sig-label">재단법인 신라문화장학재단 이사장</span>
                <span class="sig-name title-serif">홍 길 동</span>
              </div>
            </div>
            <div class="greetings-portrait-wrapper">
              <img src="../assets/founder_portrait.jpg" alt="신라문화장학재단 설립자" class="founder-portrait-img" />
              <div class="portrait-caption">재단 설립자</div>
            </div>
          </div>
        </div>

        <!-- 2. 연혁 (History) -->
        <div v-if="activeTab === 'history'" class="tab-pane reveal active">
          <div class="history-timeline-wrapper glass-card">
            <div class="timeline-header">
              <span class="timeline-subtitle">FOUNDATION HISTORY</span>
              <h2 class="timeline-title title-serif">신라문화장학재단 발자취</h2>
              <p class="timeline-desc">1978년 설립 이래 인재 육성과 문화예술 발전을 위해 걸어온 47년간의 역사입니다.</p>
            </div>

            <div class="timeline-container">
              <div v-for="item in historyData" :key="item.era" class="timeline-era-block">
                <div class="era-badge-column">
                  <span class="era-badge title-serif">{{ item.era }}</span>
                </div>
                <div class="timeline-content-column">
                  <div v-for="event in item.events" :key="event.year" class="timeline-event-card">
                    <div class="event-year-tag">{{ event.year }}</div>
                    <div class="event-body">
                      <h4 class="event-title">{{ event.title }}</h4>
                      <p class="event-desc">{{ event.desc }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 3. 출연사 (Donors & Contributors) -->
        <div v-if="activeTab === 'donors'" class="tab-pane reveal active">
          <div class="donors-wrapper glass-card">
            <div class="donors-header">
              <span class="donors-subtitle">FOUNDATION CONTRIBUTORS & PARTNERS</span>
              <h2 class="donors-title title-serif">신라문화장학재단 출연사 안내</h2>
              <p class="donors-desc">뜻을 함께하고 장학 기금을 위해 출연해 주신 동반자 기업입니다.</p>
            </div>

            <!-- Summary Stats -->
            <div class="donors-stats-grid">
              <div class="donor-stat-card">
                <div class="stat-icon">🏢</div>
                <div class="stat-info">
                  <span class="stat-num">12개사</span>
                  <span class="stat-label">총 출연 기업</span>
                </div>
              </div>
              <div class="donor-stat-card">
                <div class="stat-icon">💰</div>
                <div class="stat-info">
                  <span class="stat-num">350억 원</span>
                  <span class="stat-label">누적 출연 기금</span>
                </div>
              </div>
              <div class="donor-stat-card">
                <div class="stat-icon">🤝</div>
                <div class="stat-info">
                  <span class="stat-num">47년</span>
                  <span class="stat-label">동반 파트너십</span>
                </div>
              </div>
            </div>

            <!-- Donors Grid -->
            <div class="donors-grid">
              <div v-for="company in donorCompanies" :key="company.name" class="donor-card">
                <div class="donor-card-header">
                  <div class="donor-avatar-box">
                    <span class="donor-avatar-text">{{ company.logoText }}</span>
                  </div>
                  <div class="donor-title-group">
                    <h4 class="donor-name">{{ company.name }}</h4>
                    <span class="donor-category-badge">{{ company.category }}</span>
                  </div>
                </div>
                <p class="donor-desc">{{ company.desc }}</p>
                <div class="donor-footer-meta">
                  <span class="meta-label">출연 기간</span>
                  <span class="meta-value">{{ company.period }}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- 4. 찾아오시는 길 -->
        <div v-if="activeTab === 'contact'" class="tab-pane reveal active">
          <div class="contact-grid">
            <div class="glass-card contact-info-card">
              <div class="contact-detail-item">
                <span class="detail-icon">📍</span>
                <div class="detail-text">
                  <h5>주소</h5>
                  <p>(우)05685 서울특별시 송파구 백제고분로 362, 8층 (석촌동, 신라빌딩)</p>
                </div>
              </div>
              <div class="contact-detail-item">
                <span class="detail-icon">📞</span>
                <div class="detail-text">
                  <h5>대표 전화</h5>
                  <p>02-413-0795</p>
                </div>
              </div>
              <div class="contact-detail-item">
                <span class="detail-icon">✉️</span>
                <div class="detail-text">
                  <h5>이메일</h5>
                  <p>silla_yujin@naver.com</p>
                </div>
              </div>
              <div class="contact-detail-item">
                <span class="detail-icon">🚇</span>
                <div class="detail-text">
                  <h5>대중교통 안내</h5>
                  <p>
                    <span class="subway-badge line-8">8</span><span class="subway-badge line-9">9</span>
                    <span class="subway-text">석촌역 6번 출구에서 55m</span>
                  </p>
                </div>
              </div>
            </div>

            <!-- Map Card -->
            <div class="glass-card map-card">
              <div class="map-placeholder" style="height: 280px; overflow: hidden; border-radius: 6px;">
                <iframe
                  title="신라문화장학재단 위치 지도 (석촌역 6번 출구 55m)"
                  width="100%"
                  height="100%"
                  style="border: 0;"
                  loading="lazy"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=127.09843%2C37.49962%2C127.11043%2C37.50762&amp;layer=mapnik&amp;marker=37.50362%2C127.10443"
                ></iframe>
              </div>
              <div class="map-actions">
                <a
                  href="https://map.kakao.com/link/map/신라문화장학재단(신라빌딩),37.50362,127.10443"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-outline map-btn"
                >
                  <span style="margin-right: 4px;">📍</span> 카카오맵 바로가기
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Back Action -->
      <div class="back-action-row">
        <button class="btn btn-outline back-btn" @click="$emit('back')">
          <span class="back-arrow">←</span> 메인 페이지로 돌아가기
        </button>
      </div>
    </div>

    <!-- Image Modal / Lightbox -->
    <Teleport to="body">
      <Transition name="modal-fade">
        <div v-if="previewImage" class="image-modal-overlay" @click.self="closeImageModal">
          <div class="image-modal-content">
            <button class="image-modal-close" @click="closeImageModal" aria-label="닫기">
              &times;
            </button>
            <div class="image-modal-body">
              <img :src="previewImage.src" :alt="previewImage.title" class="enlarged-image" />
            </div>
            <div class="image-modal-caption">
              {{ previewImage.title }}
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue';
import historyPhoto1 from '../assets/history_photo1.jpg';
import historyPhoto2 from '../assets/history_photo2.jpg';

defineEmits(['back']);

const previewImage = ref<{ src: string; title: string } | null>(null);

const openImageModal = (src: string, title: string) => {
  previewImage.value = { src, title };
  document.body.style.overflow = 'hidden';
};

const closeImageModal = () => {
  previewImage.value = null;
  document.body.style.overflow = '';
};

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && previewImage.value) {
    closeImageModal();
  }
};

const tabs = [
  { id: 'greetings', name: '설립취지 & 인사말' },
  { id: 'history', name: '회사연혁' },
  { id: 'donors', name: '출연사' },
  { id: 'contact', name: '찾아오시는 길' }
];

const donorCompanies = [
  {
    name: '(주)신라산업',
    logoText: '신라',
    category: '주력 출연사',
    desc: '재단 설립 발기인 기업으로, 지속적인 기본 재산 증자 및 학술 장학 기금 출연을 통해 장학 사업의 터전을 마련했습니다.',
    period: '1978년 ~ 현재'
  },
  {
    name: '신라건설(주)',
    logoText: '건설',
    category: '예술·문화 인재 기금',
    desc: '전통 문화예술 보존 및 청년 예술가 멘토링 지원을 위한 전용 장학 펀드를 지속적으로 출연하고 있습니다.',
    period: '1985년 ~ 현재'
  },
  {
    name: '(주)신라통상',
    logoText: '통상',
    category: '글로벌 연수 펀드',
    desc: '글로벌 아티스트 파리·유럽 해외 연수 지원 및 국제 콩쿠르 참가 장학생 펀드를 지속 후원합니다.',
    period: '1992년 ~ 현재'
  },
  {
    name: '신라에너지(주)',
    logoText: '에너지',
    category: '전통문화 계승 펀드',
    desc: '무형문화재 전수자 및 초·중·고 예능 꿈나무 육성을 위해 특화된 장학 기금을 전액 지원하고 있습니다.',
    period: '2001년 ~ 현재'
  },
  {
    name: '(주)신라로지스',
    logoText: '로지스',
    category: '미래 융합 인재 기금',
    desc: '학술 연구자 및 ICT 융합 문화예술 프로젝트 분야 지원을 위한 장학 기금을 지속 출연합니다.',
    period: '2008년 ~ 현재'
  },
  {
    name: '(주)신라미디어',
    logoText: '미디어',
    category: '미디어·공연 지원 기금',
    desc: '청년 창작자 공모전 및 전시·연주회 개최 후원 펀드를 출연하여 예술 생태계 활성화에 기여합니다.',
    period: '2015년 ~ 현재'
  }
];

const historyData = [
  {
    era: '2020s ~ 현재',
    events: [
      { year: '2025.12', title: '누적 장학생 5,390명 배출 및 지원액 400억 원 돌파', desc: '47년간 지속적인 장학 사업을 통해 국내외 문화예술 및 학술 인재 육성 성과 달성' },
      { year: '2023.05', title: '글로벌 아티스트 장학 프로그램 확대', desc: '해외 예술대학(원) 진학자 및 글로벌 콩쿠르 참가 장학생에 대한 파리·유럽 연수 지원' },
      { year: '2021.03', title: '문화예술 꿈나무 및 전통문화 계승 장학 개편', desc: '초·중·고 예능 인재 1:1 명사 멘토링 매칭 및 무형문화재 전수자 지원 강화' }
    ]
  },
  {
    era: '2000s ~ 2010s',
    events: [
      { year: '2018.10', title: '제40기 장학증서 수여식 및 동문 네트워킹 데이', desc: '역대 장학생 및 후원자가 함께하는 멘토링 네트워크 프로그램 개시' },
      { year: '2011.04', title: '재단법인 인재 육성 공모 사업 도입', desc: '순수미술, 음악, 전통공예 등 예술 전공자 대상 전액 등록금 지원 사업 시행' },
      { year: '2005.09', title: '장학 재단 기본 재산 200억 원 확충', desc: '안정적인 장학 사업 추진을 위한 기본 재산 증자 및 서울 송파 사옥 확보' }
    ]
  },
  {
    era: '1978s ~ 1990s',
    events: [
      { year: '1996.03', title: '누적 장학생 1,000명 돌파', desc: '전국 우수 대학생 및 학술 연구자에 대한 연구 장려금 확대 지원' },
      { year: '1988.05', title: '학술연구비 및 대학생 연구 지원 확대', desc: '인문·예술 분야 연구자에 대한 장학금 지원 규정 신설' },
      { year: '1979.03', title: '제1기 장학증서 수여식 개최 (1979. 3. 17)', desc: '재단법인 신라문화장학재단 설립 승인 및 첫 번째 장학생 수여식 집행' },
      { year: '1978.11', title: '재단법인 신라문화장학재단 설립 발기인 대회', desc: '경제적 여건에 구애받지 않고 인재를 육성하기 위한 장학재단 설립 추진' }
    ]
  }
];

const getTabFromHash = (): string => {
  const hash = window.location.hash;
  if (hash.startsWith('#about-sub')) {
    const parts = hash.split('/');
    if (parts.length > 1) {
      const tabId = parts[1];
      if (tabs.some(t => t.id === tabId)) {
        return tabId;
      }
    }
  }
  return 'greetings';
};

const activeTab = ref(getTabFromHash());

const updateTabFromHash = () => {
  activeTab.value = getTabFromHash();
};

const setActiveTab = (tabId: string) => {
  activeTab.value = tabId;
  window.location.hash = `#about-sub/${tabId}`;
};

onMounted(() => {
  updateTabFromHash();
  window.addEventListener('hashchange', updateTabFromHash);
  window.addEventListener('keydown', handleKeyDown);
  if (activeTab.value === 'contact') {
    initKakaoMap();
  }
});

onUnmounted(() => {
  window.removeEventListener('hashchange', updateTabFromHash);
  window.removeEventListener('keydown', handleKeyDown);
  document.body.style.overflow = '';
});

const isMapLoaded = ref(false);

const initKakaoMap = () => {
  renderKakaoMap();
};

const renderKakaoMap = (retryCount = 0) => {
  nextTick(() => {
    const container = document.getElementById('daumRoughmapContainer1784779755354');
    if (!container) return;

    if (container.children.length > 0) {
      isMapLoaded.value = true;
      return;
    }

    if (!(window as any).daum || !(window as any).daum.roughmap || !(window as any).daum.roughmap.Lander) {
      if (retryCount < 20) {
        setTimeout(() => renderKakaoMap(retryCount + 1), 100);
      } else {
        console.error('카카오 지도 객체(daum.roughmap.Lander)를 찾을 수 없습니다.');
      }
      return;
    }

    new (window as any).daum.roughmap.Lander({
      "timestamp": "1784779755354",
      "key": "rbrm7buwqr9",
      "mapWidth": "100%",
      "mapHeight": "280"
    }).render();

    isMapLoaded.value = true;
  });
};

watch(activeTab, (newTab) => {
  if (newTab === 'contact') {
    initKakaoMap();
  }
});
</script>

<style scoped>
.subpage-wrapper {
  padding-bottom: 80px;
}

/* Banner */
.sub-banner {
  position: relative;
  background-image: url('../assets/history_founder.png');
  background-size: cover;
  background-position: center 30%;
  padding: 140px 0 120px;
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

/* Tabs */
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
  padding: 12px 24px;
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

/* Pane Animation */
.tab-pane {
  display: none;
}

.tab-pane.active {
  display: block;
}

/* 1. Greetings */
.greetings-layout {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 40px;
  align-items: center;
}

.greetings-text {
  text-align: left;
}

.greet-badge {
  display: inline-block;
  color: var(--primary-color);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  margin-bottom: 16px;
}

.greet-title {
  font-size: 1.7rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 24px;
  line-height: 1.4;
}

.greet-paragraph {
  color: var(--text-secondary);
  font-size: 1.05rem;
  line-height: 1.7;
  margin-bottom: 16px;
  font-weight: 300;
}

.signature {
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-end;
  border-top: 1px solid var(--border-color);
  padding-top: 20px;
}

.sig-label {
  font-size: 0.9rem;
  color: var(--text-muted);
}

.sig-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: 0.2em;
}

.greetings-portrait-wrapper {
  background: var(--white);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 10px 30px rgba(6, 91, 137, 0.04);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  max-width: 320px;
  margin: 0 auto;
}

.founder-portrait-img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid var(--border-color);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.founder-portrait-img:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px var(--primary-glow);
}

.portrait-caption {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--primary-color);
  text-align: center;
}

/* 2. History Timeline (연혁) */
.history-timeline-wrapper {
  max-width: 900px;
  margin: 0 auto 40px;
  padding: 45px 50px;
  text-align: left;
}

.timeline-header {
  text-align: center;
  margin-bottom: 50px;
}

.timeline-subtitle {
  color: var(--primary-color);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  margin-bottom: 10px;
  display: block;
}

.timeline-title {
  font-size: 2.2rem;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.timeline-desc {
  color: var(--text-secondary);
  font-size: 1rem;
  font-weight: 300;
}

.timeline-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
  position: relative;
}

.timeline-era-block {
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 30px;
  align-items: flex-start;
  position: relative;
}

.era-badge-column {
  position: sticky;
  top: 100px;
}

.era-badge {
  display: inline-block;
  font-size: 1.1rem;
  font-weight: 700;
  color: #ffffff;
  background: var(--primary-color);
  padding: 8px 16px;
  border-radius: 20px;
  box-shadow: 0 4px 14px var(--primary-glow);
}

.timeline-content-column {
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-left: 2px dashed rgba(6, 91, 137, 0.2);
  padding-left: 28px;
}

.timeline-event-card {
  position: relative;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 20px 24px;
  transition: transform var(--transition-fast), box-shadow var(--transition-fast), border-color var(--transition-fast);
}

.timeline-event-card::before {
  content: '';
  position: absolute;
  left: -35px;
  top: 24px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--primary-color);
  border: 3px solid #ffffff;
  box-shadow: 0 0 0 2px var(--primary-color);
}

.timeline-event-card:hover {
  transform: translateX(4px);
  border-color: var(--primary-color);
  box-shadow: 0 6px 20px rgba(6, 91, 137, 0.08);
}

.event-year-tag {
  font-size: 0.85rem;
  font-weight: 800;
  color: var(--primary-color);
  margin-bottom: 6px;
  letter-spacing: 0.05em;
}

.event-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 6px;
}

.event-desc {
  font-size: 0.92rem;
  color: var(--text-secondary);
  line-height: 1.6;
  font-weight: 300;
}

/* 2. Mission & Vision */
.mission-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.mission-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.card-icon {
  font-size: 2.2rem;
  margin-bottom: 20px;
}

.card-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 16px;
}

.card-desc {
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.6;
  font-weight: 300;
}

/* 2. Performance (사업실적) */
.performance-simple-wrapper {
  display: flex;
  justify-content: center;
  margin: 10px 0 40px;
}

.perf-main-card {
  width: 100%;
  max-width: 800px;
  padding: 45px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

/* Intro Banner */
.perf-intro-banner {
  background: rgba(6, 91, 137, 0.04);
  border: 1px solid rgba(6, 91, 137, 0.15);
  border-radius: 12px;
  padding: 22px 30px;
  margin-bottom: 35px;
  width: 100%;
}

.perf-intro-text {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--primary-color, #065b89);
  line-height: 1.6;
  word-break: keep-all;
}

/* Photos Grid */
.perf-photos-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  width: 100%;
  margin-bottom: 35px;
}

.perf-photo-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  border: 1px solid var(--border-color, #e2e8f0);
  border-radius: 10px;
  padding: 12px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.perf-photo-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(6, 91, 137, 0.12);
}

.photo-img-wrapper {
  width: 100%;
  height: 240px;
  overflow: hidden;
  border-radius: 6px;
  background: #f1f5f9;
}

.perf-photo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.perf-photo-card:hover .perf-photo-img {
  transform: scale(1.03);
}

.photo-caption {
  margin-top: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-secondary, #475569);
}

.perf-section-divider {
  width: 100%;
  height: 1px;
  background: var(--border-color, #e2e8f0);
  margin-bottom: 35px;
}

.perf-summary-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  flex-wrap: wrap;
}

.perf-summary-title u {
  text-underline-offset: 6px;
  text-decoration-thickness: 2px;
}

.perf-summary-title .year-range {
  font-size: 1.55rem;
  font-weight: 500;
  color: var(--text-primary);
}

.perf-simple-table-wrapper {
  width: 100%;
  overflow-x: auto;
}

.perf-simple-table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #d1d5db;
  background: #ffffff;
}

.perf-simple-table th,
.perf-simple-table td {
  border: 1px solid #d1d5db;
  padding: 16px 24px;
}

.perf-simple-table th {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  background-color: #ffffff;
  border-bottom: 2px solid var(--primary-color, #065b89);
}

.col-type {
  width: 42%;
  text-align: center;
}

.col-amount {
  width: 58%;
  text-align: center;
}

.cell-type {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--text-primary);
  text-align: center;
  letter-spacing: 0.08em;
}

.cell-amount {
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--text-primary);
  text-align: right;
  padding-right: 36px;
  font-family: 'Inter', -apple-system, sans-serif;
}

.row-total .cell-type {
  font-weight: 700;
}

.row-total .cell-amount {
  font-weight: 700;
  color: var(--text-primary);
}

/* 3. Contact / Location */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 30px;
}

.contact-info-card {
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: left;
}

.contact-detail-item {
  display: flex;
  gap: 20px;
}

.detail-icon {
  font-size: 1.8rem;
  line-height: 1.2;
}

.detail-text h5 {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 6px;
}

.detail-text p {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
  font-weight: 300;
}

.subway-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  margin-right: 4px;
  vertical-align: middle;
  line-height: 1;
  font-family: sans-serif;
}

.subway-badge.line-8 {
  background-color: #e6186c;
}

.subway-badge.line-9 {
  background-color: #bda03f;
}

.subway-text {
  vertical-align: middle;
  font-weight: 300;
  margin-left: 2px;
}

.map-card {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.map-placeholder {
  height: 280px;
  background: #f1f5f9;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  position: relative;
  overflow: hidden;
}

/* Fake Stylized Map Graphic */
.map-inner {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 40% 60%, transparent 10%, #e2e8f0 10%),
    radial-gradient(circle at 80% 20%, transparent 15%, #cbd5e1 15%),
    linear-gradient(45deg, #e2e8f0 25%, #f1f5f9 25%, #f1f5f9 50%, #e2e8f0 50%, #e2e8f0 75%, #f1f5f9 75%);
  background-size: 40px 40px, 60px 60px, 10px 10px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.map-marker {
  font-size: 2.5rem;
  animation: bounce 2s infinite alternate;
}

.map-tooltip {
  position: absolute;
  top: 190px;
  background: #0f172a;
  color: #ffffff;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

.map-actions {
  display: flex;
  gap: 12px;
}

.map-btn {
  flex: 1;
  font-size: 0.85rem;
  padding: 10px;
}

/* Animations */
@keyframes bounce {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-10px);
  }
}

/* Back Button Row */
.back-action-row {
  margin-top: 60px;
  display: flex;
  justify-content: center;
}

.back-btn {
  padding: 14px 32px;
  font-weight: 500;
  font-size: 1rem;
}

.back-arrow {
  margin-right: 8px;
  transition: transform var(--transition-fast);
  display: inline-block;
}

.perf-photo-card {
  cursor: pointer;
}

.photo-img-wrapper {
  position: relative;
}

.photo-zoom-badge {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(12, 21, 36, 0.45);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  opacity: 0;
  transition: opacity var(--transition-normal);
  font-size: 0.88rem;
  font-weight: 600;
  border-radius: 6px;
}

.perf-photo-card:hover .photo-zoom-badge {
  opacity: 1;
}

/* Image Modal / Lightbox */
.image-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(12, 21, 36, 0.88);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.image-modal-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(15, 23, 42, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 14px;
  padding: 20px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

.image-modal-close {
  position: absolute;
  top: -16px;
  right: -16px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ffffff;
  color: #0f172a;
  border: none;
  font-size: 1.8rem;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35);
  transition: transform var(--transition-fast), background var(--transition-fast), color var(--transition-fast);
  z-index: 2010;
}

.image-modal-close:hover {
  transform: scale(1.1);
  background: var(--primary-color);
  color: #ffffff;
}

.image-modal-body {
  max-width: 100%;
  max-height: calc(85vh - 60px);
  overflow: hidden;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.enlarged-image {
  max-width: 100%;
  max-height: calc(85vh - 60px);
  object-fit: contain;
  border-radius: 6px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
}

.image-modal-caption {
  margin-top: 14px;
  color: rgba(255, 255, 255, 0.92);
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: 0.02em;
}

/* Modal Fade Animation */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
  transform: scale(0.96);
}

/* Responsive */
@media (max-width: 992px) {

  .greetings-layout,
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .perf-stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .category-grid {
    grid-template-columns: 1fr;
  }

  .greetings-image-placeholder {
    height: 300px;
  }
}

@media (max-width: 768px) {
  .banner-title {
    font-size: 2.2rem;
  }

  .sub-tabs {
    flex-wrap: wrap;
    justify-content: center;
    border-radius: 12px;
  }

  .tab-btn {
    padding: 8px 16px;
    font-size: 0.85rem;
  }

  .perf-main-card {
    padding: 28px 18px;
  }

  .perf-intro-banner {
    padding: 16px 20px;
  }

  .perf-intro-text {
    font-size: 1.05rem;
  }

  .perf-photos-grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .photo-img-wrapper {
    height: 200px;
  }

  .mission-grid {
    grid-template-columns: 1fr;
    flex-direction: column;
    align-items: center;
  }

  .donors-wrapper {
    padding: 30px 20px;
  }

  .donors-stats-grid {
    grid-template-columns: 1fr;
  }

  .donors-grid {
    grid-template-columns: 1fr;
  }
}

/* Donors Tab Styles */
.donors-wrapper {
  max-width: 1000px;
  margin: 0 auto 40px;
  padding: 45px 50px;
  text-align: left;
}

.donors-header {
  text-align: center;
  margin-bottom: 40px;
}

.donors-subtitle {
  color: var(--primary-color);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  margin-bottom: 10px;
  display: block;
}

.donors-title {
  font-size: 2.2rem;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.donors-desc {
  color: var(--text-secondary);
  font-size: 1rem;
  font-weight: 300;
}

.donors-stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 40px;
}

.donor-stat-card {
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 20px 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: 0 4px 14px rgba(6, 91, 137, 0.04);
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

.donor-stat-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(6, 91, 137, 0.1);
}

.stat-icon {
  font-size: 2rem;
  background: rgba(6, 91, 137, 0.08);
  width: 48px;
  height: 48px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-info {
  display: flex;
  flex-direction: column;
}

.stat-num {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--primary-color);
}

.stat-label {
  font-size: 0.85rem;
  color: var(--text-secondary);
  font-weight: 400;
}

.donors-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 40px;
}

.donor-card {
  background: rgba(255, 255, 255, 0.65);
  border: 1px solid var(--border-color);
  border-radius: 14px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform var(--transition-fast), box-shadow var(--transition-fast), border-color var(--transition-fast);
}

.donor-card:hover {
  transform: translateY(-4px);
  border-color: var(--primary-color);
  box-shadow: 0 10px 28px rgba(6, 91, 137, 0.12);
}

.donor-card-header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 14px;
}

.donor-avatar-box {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--primary-color), #097ab7);
  color: #ffffff;
  font-weight: 700;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 4px 10px rgba(6, 91, 137, 0.2);
}

.donor-title-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.donor-name {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
}

.donor-category-badge {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--primary-color);
  background: rgba(6, 91, 137, 0.08);
  padding: 2px 8px;
  border-radius: 12px;
  display: inline-block;
  width: fit-content;
}

.donor-desc {
  font-size: 0.92rem;
  color: var(--text-secondary);
  line-height: 1.65;
  font-weight: 300;
  margin-bottom: 16px;
  flex-grow: 1;
}

.donor-footer-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 12px;
  border-top: 1px dashed rgba(6, 91, 137, 0.15);
  font-size: 0.82rem;
}

.meta-label {
  color: var(--text-muted);
}

.meta-value {
  color: var(--primary-color);
  font-weight: 600;
}

.donors-footer-banner {
  background: linear-gradient(135deg, rgba(6, 91, 137, 0.06), rgba(6, 91, 137, 0.02));
  border: 1px solid rgba(6, 91, 137, 0.15);
  border-radius: 12px;
  padding: 20px 24px;
  display: flex;
  align-items: center;
  gap: 16px;
}

.banner-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.banner-text {
  font-size: 0.93rem;
  color: var(--text-primary);
  line-height: 1.6;
  margin: 0;
}
</style>
