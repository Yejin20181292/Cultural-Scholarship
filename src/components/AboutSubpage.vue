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
          <button 
            v-for="tab in tabs" 
            :key="tab.id"
            class="tab-btn" 
            :class="{ active: activeTab === tab.id }"
            @click="activeTab = tab.id"
          >
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
                <span class="sig-name title-serif">함 예 진</span>
              </div>
            </div>
            <div class="greetings-portrait-wrapper">
              <img src="../assets/founder_portrait.jpg" alt="신라문화장학재단 설립자" class="founder-portrait-img" />
              <div class="portrait-caption">재단 설립자 및 이사장</div>
            </div>
          </div>
        </div>


        <!-- 3. 연혁 -->
        <div v-if="activeTab === 'history'" class="tab-pane reveal active">
          <div class="timeline-wrapper glass-card">
            <div class="timeline">
              <div v-for="item in historyItems" :key="item.year" class="timeline-item">
                <div class="timeline-year title-serif">{{ item.year }}</div>
                <div class="timeline-content">
                  <h4 class="timeline-title">{{ item.title }}</h4>
                  <p class="timeline-desc">{{ item.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 4. 조직도 -->
        <div v-if="activeTab === 'organization'" class="tab-pane reveal active">
          <div class="org-chart-wrapper glass-card">
            <div class="chart-node root-node">
              <div class="node-title">이사회</div>
              <div class="node-desc">최고 의결 기구 및 정책 결정</div>
            </div>
            
            <div class="chart-branch-line"></div>
            
            <div class="chart-row audit-row">
              <div class="chart-node special-node">
                <div class="node-title">감사</div>
                <div class="node-desc">재정 및 업무 감사</div>
              </div>
            </div>
            
            <div class="chart-branch-line"></div>

            <div class="chart-node sub-root-node">
              <div class="node-title">이사장</div>
              <div class="node-desc">재단 총괄 대표</div>
            </div>

            <div class="chart-branch-line"></div>

            <div class="chart-leaves">
              <div class="chart-node leaf-node">
                <div class="node-title">장학심의위원회</div>
                <div class="node-desc">장학생 선발 기준 및 심사</div>
              </div>
              <div class="chart-node leaf-node">
                <div class="node-title">사무국 (운영총괄)</div>
                <div class="node-desc">장학 사업 집행 및 행정 지원</div>
              </div>
              <div class="chart-node leaf-node">
                <div class="node-title">대외협력팀</div>
                <div class="node-desc">홍보, 멘토링, 대외 교류</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 5. 찾아오시는 길 -->
        <div v-if="activeTab === 'contact'" class="tab-pane reveal active">
          <div class="contact-grid">
            <div class="glass-card contact-info-card">
              <div class="contact-detail-item">
                <span class="detail-icon">📍</span>
                <div class="detail-text">
                  <h5>주소</h5>
                  <p>서울특별시 서초구 서초대로 314, 신라빌딩 7층</p>
                </div>
              </div>
              <div class="contact-detail-item">
                <span class="detail-icon">📞</span>
                <div class="detail-text">
                  <h5>대표 전화</h5>
                  <p>02-123-4567</p>
                </div>
              </div>
              <div class="contact-detail-item">
                <span class="detail-icon">✉️</span>
                <div class="detail-text">
                  <h5>이메일</h5>
                  <p>info@silla-scholarship.or.kr</p>
                </div>
              </div>
              <div class="contact-detail-item">
                <span class="detail-icon">🚇</span>
                <div class="detail-text">
                  <h5>대중교통 안내</h5>
                  <p>지하철 2호선 서초역 2번 출구에서 도보 150m</p>
                  <p>지하철 2/3호선 교대역 9번 출구에서 도보 300m</p>
                </div>
              </div>
            </div>

            <!-- Placeholder Map -->
            <div class="glass-card map-card">
              <div class="map-placeholder">
                <div class="map-inner">
                  <div class="map-marker">📍</div>
                  <div class="map-tooltip">신라문화장학재단</div>
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
import { ref } from 'vue';

defineEmits(['back']);

const activeTab = ref('greetings');

const tabs = [
  { id: 'greetings', name: '설립취지 & 인사말' },
  { id: 'history', name: '재단 연혁' },
  { id: 'organization', name: '조직도' },
  { id: 'contact', name: '찾아오시는 길' }
];

const historyItems = [
  { year: '2026', title: '누적 장학생 1,200명 돌파 및 화이트 테마 웹 개편', desc: '장학 수혜 범위와 사회 기여 멘토링 프로그램 확장 시행' },
  { year: '2020', title: '학술 장학 연구 지원 분야 창설', desc: '전통 문화 및 기초 학문 보존을 위한 특별 학술 기금 확대 편성' },
  { year: '2015', title: '사회 환원 장학생 봉사단 창단', desc: '장학생 선배들이 지역 사회 아동들을 밀착 케어하는 멘토링 프로그램 출범' },
  { year: '2008', title: '신라문화장학재단 기금 300억 확충', desc: '대규모 재정 기반 확보로 연간 수혜 인원을 기존의 2배 규모로 확대' },
  { year: '2000', title: '밀레니엄 우수 인적 자원 특별 선발제 도입', desc: '지방 인재 및 기초생활수급자 등 사회적 소외 계층 특별 전형 추가' },
  { year: '1988', title: '재단법인 신라문화장학재단 공식 설립 인가', desc: '초대 이사장 취임 및 제1기 대학 장학생 30명 선발 수여식 개최' }
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
  background: linear-gradient(
    to bottom,
    rgba(248, 250, 252, 0.52) 0%,
    rgba(248, 250, 252, 0.42) 60%,
    var(--bg-color) 100%
  );
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

/* 3. History Timeline */
.timeline-wrapper {
  padding: 50px 80px;
}

.timeline {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 120px;
  top: 0;
  height: 100%;
  width: 1px;
  background-color: var(--border-color-hover);
}

.timeline-item {
  display: flex;
  margin-bottom: 45px;
  position: relative;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-year {
  width: 120px;
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--primary-color);
  text-align: left;
  padding-right: 30px;
  position: relative;
}

.timeline-year::after {
  content: '';
  position: absolute;
  right: -5px;
  top: 10px;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: var(--primary-color);
  box-shadow: 0 0 0 4px var(--primary-glow);
  z-index: 2;
}

.timeline-content {
  flex: 1;
  padding-left: 30px;
  text-align: left;
}

.timeline-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.timeline-desc {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.5;
  font-weight: 300;
}

/* 4. Organization Chart */
.org-chart-wrapper {
  padding: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.chart-node {
  border: 1px solid var(--border-color-hover);
  background: var(--white);
  padding: 16px 28px;
  border-radius: 8px;
  width: 250px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(6, 91, 137, 0.04);
  transition: all var(--transition-normal);
}

.chart-node:hover {
  border-color: var(--primary-color);
  transform: translateY(-2px);
  box-shadow: 0 6px 18px var(--primary-glow);
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
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
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
  0% { transform: translateY(0); }
  100% { transform: translateY(-10px); }
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
  .greetings-layout, .contact-grid {
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
  
  .mission-grid, .chart-leaves {
    grid-template-columns: 1fr;
    flex-direction: column;
    align-items: center;
  }
  
  .timeline::before {
    left: 20px;
  }
  
  .timeline-item {
    flex-direction: column;
  }
  
  .timeline-year {
    width: auto;
    padding-left: 40px;
    margin-bottom: 10px;
  }
  
  .timeline-year::after {
    left: 15px;
    right: auto;
  }
  
  .timeline-content {
    padding-left: 40px;
  }
  
  .timeline-wrapper {
    padding: 30px;
  }
  
  .org-chart-wrapper {
    padding: 20px;
  }
}
</style>
