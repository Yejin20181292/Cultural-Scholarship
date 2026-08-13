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
          <div class="performance-container">
            <!-- Top Summary Stats -->
            <div class="perf-stats-grid">
              <div class="glass-card perf-stat-card">
                <div class="stat-icon-box">🎓</div>
                <div class="stat-number title-serif">1,280<span class="stat-unit">명</span></div>
                <div class="stat-label">누적 수혜 장학생</div>
                <div class="stat-subtext">전국 초·중·고 및 대학(원)생</div>
              </div>
              <div class="glass-card perf-stat-card">
                <div class="stat-icon-box">💰</div>
                <div class="stat-number title-serif">48.5<span class="stat-unit">억 원</span></div>
                <div class="stat-label">누적 장학금 지급액</div>
                <div class="stat-subtext">학업 및 창작 후원금 총액</div>
              </div>
              <div class="glass-card perf-stat-card">
                <div class="stat-icon-box">🏫</div>
                <div class="stat-number title-serif">135<span class="stat-unit">개교</span></div>
                <div class="stat-label">지원 연계 학술 기관</div>
                <div class="stat-subtext">국내외 주요 대학 및 예고</div>
              </div>
              <div class="glass-card perf-stat-card">
                <div class="stat-icon-box">🤝</div>
                <div class="stat-number title-serif">96<span class="stat-unit">%</span></div>
                <div class="stat-label">멘토십 프로그램 수혜율</div>
                <div class="stat-subtext">전문가 및 선배 1:1 매칭</div>
              </div>
            </div>

            <!-- Yearly Performance Table / List -->
            <div class="glass-card perf-table-card">
              <div class="card-header-row">
                <h3 class="perf-section-title title-serif">연도별 장학 사업 집행 실적</h3>
                <span class="perf-badge">최근 5개년 현황</span>
              </div>
              
              <div class="perf-table-wrapper">
                <table class="perf-table">
                  <thead>
                    <tr>
                      <th>연도</th>
                      <th>지원 대상 및 프로그램</th>
                      <th>수혜 인원</th>
                      <th>지원 금액</th>
                      <th>주요 성과</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in performanceItems" :key="item.year">
                      <td class="year-cell title-serif">{{ item.year }}년</td>
                      <td class="program-cell">{{ item.program }}</td>
                      <td class="count-cell">{{ item.count }}명</td>
                      <td class="amount-cell">{{ item.amount }}</td>
                      <td class="highlight-cell">{{ item.highlight }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Category Impact Cards -->
            <div class="perf-category-section">
              <h3 class="perf-section-title title-serif text-center">분야별 주요 사업 성과</h3>
              <div class="category-grid">
                <div class="glass-card category-card">
                  <div class="cat-badge">순수예술 분야</div>
                  <h4 class="cat-title">문화예술 꿈나무 육성</h4>
                  <p class="cat-desc">
                    미술, 음악, 무용 등 순수예술 분야의 미래 아티스트를 발굴하여 지속적인 창작 지원금과 1:1 명사 멘토링을 제공합니다.
                  </p>
                  <ul class="cat-metrics">
                    <li><span>누적 지원 인원</span> <strong>620명</strong></li>
                    <li><span>국내외 콩쿠르 입상</span> <strong>45건</strong></li>
                  </ul>
                </div>

                <div class="glass-card category-card">
                  <div class="cat-badge gold">전통문화 분야</div>
                  <h4 class="cat-title">전통문화 계승 및 보존</h4>
                  <p class="cat-desc">
                    국악, 전통공예, 무형문화재 전수자들이 경제적 걱정 없이 전통 예술의 맥을 이어나갈 수 있도록 전폭적인 지원을 시행합니다.
                  </p>
                  <ul class="cat-metrics">
                    <li><span>누적 지원 인원</span> <strong>410명</strong></li>
                    <li><span>무형문화재 전수 완료</span> <strong>28명</strong></li>
                  </ul>
                </div>

                <div class="glass-card category-card">
                  <div class="cat-badge blue">글로벌 분야</div>
                  <h4 class="cat-title">글로벌 아티스트 해외 진출</h4>
                  <p class="cat-desc">
                    세계 무대에 도전하는 유망 아티스트들의 해외 예술대학 체재비, 국제 비엔날레 참가비, 해외 쇼케이스를 지원합니다.
                  </p>
                  <ul class="cat-metrics">
                    <li><span>누적 지원 인원</span> <strong>250명</strong></li>
                    <li><span>글로벌 전시/공연 지원</span> <strong>64회</strong></li>
                  </ul>
                </div>
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

            <!-- Placeholder Map -->
            <div class="glass-card map-card">
              <div class="map-placeholder" style="position: relative;">
                <div id="daumRoughmapContainer1784779755354" class="root_daum_roughmap root_daum_roughmap_landing" style="width: 100%; height: 100%;"></div>
                <div class="map-inner" v-if="!isMapLoaded" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 10;">
                  <div class="map-marker">📍</div>
                  <div class="map-tooltip">지도를 불러오는 중...</div>
                </div>
              </div>
              <div class="map-actions">
                <a href="https://map.kakao.com" target="_blank" class="btn btn-outline map-btn">카카오맵 바로가기</a>
                <a href="https://map.naver.com" target="_blank" class="btn btn-outline map-btn">네이버지도 바로가기</a>
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
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue';

defineEmits(['back']);

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
  if (activeTab.value === 'contact') {
    initKakaoMap();
  }
});

onUnmounted(() => {
  window.removeEventListener('hashchange', updateTabFromHash);
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
.performance-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.perf-stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.perf-stat-card {
  padding: 24px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.perf-stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px var(--primary-glow);
}

.stat-icon-box {
  font-size: 1.8rem;
  margin-bottom: 8px;
}

.stat-number {
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 4px;
}

.stat-unit {
  font-size: 1rem;
  font-weight: 500;
  margin-left: 4px;
}

.stat-label {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.stat-subtext {
  font-size: 0.8rem;
  color: var(--text-muted);
  font-weight: 300;
}

/* Performance Table */
.perf-table-card {
  padding: 36px 40px;
}

.card-header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border-color);
}

.perf-section-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--text-primary);
}

.perf-badge {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--primary-color);
  background: rgba(6, 91, 137, 0.08);
  padding: 4px 12px;
  border-radius: 20px;
}

.perf-table-wrapper {
  overflow-x: auto;
}

.perf-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

.perf-table th {
  padding: 14px 16px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--primary-color);
  background: rgba(6, 91, 137, 0.03);
  border-bottom: 1px solid var(--border-color-hover);
  white-space: nowrap;
}

.perf-table td {
  padding: 16px;
  font-size: 0.92rem;
  color: var(--text-secondary);
  border-bottom: 1px solid var(--border-color);
}

.year-cell {
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--primary-color);
  white-space: nowrap;
}

.program-cell {
  font-weight: 500;
  color: var(--text-primary);
}

.count-cell {
  font-weight: 600;
  color: var(--text-primary);
  white-space: nowrap;
}

.amount-cell {
  font-weight: 700;
  color: var(--secondary-color);
  white-space: nowrap;
}

.highlight-cell {
  font-weight: 300;
  font-size: 0.88rem;
}

/* Category Section */
.perf-category-section {
  margin-top: 10px;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 24px;
}

.category-card {
  padding: 30px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.cat-badge {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  color: #0369a1;
  background: #e0f2fe;
  padding: 4px 10px;
  border-radius: 4px;
  margin-bottom: 16px;
}

.cat-badge.gold {
  color: #b45309;
  background: #fef3c7;
}

.cat-badge.blue {
  color: #4338ca;
  background: #e0e7ff;
}

.cat-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.cat-desc {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.6;
  font-weight: 300;
  margin-bottom: 20px;
  flex: 1;
}

.cat-metrics {
  width: 100%;
  list-style: none;
  padding-top: 16px;
  border-top: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.cat-metrics li {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.cat-metrics strong {
  color: var(--primary-color);
  font-weight: 700;
}

.node-title {
  font-weight: 600;
  font-size: 1.05rem;
  color: var(--primary-color);
  margin-bottom: 4px;
}

.node-desc {
  font-size: 0.8rem;
  color: var(--text-secondary);
  font-weight: 300;
}

.root-node {
  background-color: rgba(6, 91, 137, 0.03);
}

.sub-root-node {
  background-color: rgba(6, 91, 137, 0.05);
  border-color: var(--primary-color);
}

.chart-branch-line {
  width: 1px;
  height: 35px;
  background-color: var(--border-color-hover);
}

.audit-row {
  margin: 0;
  position: relative;
}

.special-node {
  border-style: dashed;
}

.chart-leaves {
  display: flex;
  gap: 40px;
  justify-content: center;
  margin-top: 0;
}

/* 5. Contact / Location */
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

.back-btn:hover .back-arrow {
  transform: translateX(-4px);
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

  .perf-stats-grid {
    grid-template-columns: 1fr;
  }

  .perf-table-card {
    padding: 20px 16px;
  }

  .mission-grid {
    grid-template-columns: 1fr;
    flex-direction: column;
    align-items: center;
  }
}
</style>
