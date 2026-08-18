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


        <!-- 2. 사업실적 -->
        <div v-if="activeTab === 'performance'" class="tab-pane reveal active">
          <div class="performance-simple-wrapper">
            <div class="glass-card perf-main-card">
              <!-- Top Banner Quote Text -->
              <div class="perf-intro-banner">
                <p class="perf-intro-text">
                  “(재)신라문화장학재단은<br />지난 47년간 약 5,390명에 달하는 학생들의 소중한 꿈을 지원하였습니다.”
                </p>
              </div>

              <!-- Historical Photos Grid -->
              <div class="perf-photos-grid">
                <div class="perf-photo-card" @click="openImageModal(historyPhoto1, '제28기 장학증서 수여식')">
                  <div class="photo-img-wrapper">
                    <img :src="historyPhoto1" alt="제28기 장학증서 수여식" class="perf-photo-img" />
                    <div class="photo-zoom-badge">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                      <span>확대보기</span>
                    </div>
                  </div>
                  <div class="photo-caption">제28기 장학증서 수여식</div>
                </div>

                <div class="perf-photo-card" @click="openImageModal(historyPhoto2, '제1기 장학증서 수여식 (1979.3.17)')">
                  <div class="photo-img-wrapper">
                    <img :src="historyPhoto2" alt="제1기 장학증서 수여식 (1979.3.17)" class="perf-photo-img" />
                    <div class="photo-zoom-badge">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                      <span>확대보기</span>
                    </div>
                  </div>
                  <div class="photo-caption">제1기 장학증서 수여식 (1979.3.17)</div>
                </div>
              </div>

              <div class="perf-section-divider"></div>

              <!-- Table Section -->
              <h2 class="perf-summary-title title-serif">
                <u>사업 실적</u><span class="year-range">(1979년 ~ 2025년)</span>
              </h2>
              
              <div class="perf-simple-table-wrapper">
                <table class="perf-simple-table">
                  <thead>
                    <tr>
                      <th class="col-type">사업의 종류</th>
                      <th class="col-amount">금 &nbsp; &nbsp; &nbsp; 액</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="cell-type">장 &nbsp; &nbsp; 학 &nbsp; &nbsp; 금</td>
                      <td class="cell-amount">39,046,757,858</td>
                    </tr>
                    <tr>
                      <td class="cell-type">연 &nbsp; &nbsp; 구 &nbsp; &nbsp; 비</td>
                      <td class="cell-amount">234,400,000</td>
                    </tr>
                    <tr>
                      <td class="cell-type">행 &nbsp; 사 &nbsp; 경 &nbsp; 비</td>
                      <td class="cell-amount">1,160,483,461</td>
                    </tr>
                    <tr class="row-total">
                      <td class="cell-type">합 &nbsp; &nbsp; &nbsp; &nbsp; 계</td>
                      <td class="cell-amount total-val">₩40,441,641,319</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <!-- 3. 찾아오시는 길 -->
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
  { id: 'performance', name: '사업실적' },
  { id: 'contact', name: '찾아오시는 길' }
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

const performanceItems = [
  { year: '2025', program: '문화예술 꿈나무 및 전통문화 계승 장학', count: '145', amount: '6억 2,000만 원', highlight: '글로벌 아티스트 해외 전시 12회 지원 및 성과발표회 개최' },
  { year: '2024', program: '전통예술 전수자 및 대학생 창작 지원금', count: '130', amount: '5억 8,000만 원', highlight: '국악·전통공예 이수자 지원 확대 (30명 신규 선발)' },
  { year: '2023', program: '문화예술 꿈나무 멘토링 및 학업 장학', count: '125', amount: '5억 3,000만 원', highlight: '장학생 멘토링 봉사단 2기 출범 및 아동 멘토링 진행' },
  { year: '2022', program: '신진 아티스트 및 학술 연구 지원', count: '115', amount: '4억 9,000만 원', highlight: '학술 연구 지원 펀드 1억 원 확충 및 공모전 개최' },
  { year: '2021', program: '코로나19 긴급 창작 지원 장학금', count: '110', amount: '4억 5,000만 원', highlight: '예술계 격려 특별 지원금 및 온라인 전시회 지원' }
];
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
}
</style>
