<template>
  <div class="subpage-wrapper">
    <!-- Hero Banner -->
    <div class="sub-banner">
      <div class="container banner-container">
        <span class="banner-subtitle">ABOUT US</span>
        <h1 class="banner-title title-serif">재단안내</h1>
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
              <span class="greet-badge">GREETINGS</span>
              <h2 class="greet-title title-serif">“신라문화장학재단을 찾아주신 여러분을 환영합니다”</h2>
              <p class="greet-paragraph">
                안녕하십니까. 재단법인 신라문화장학재단 이사장 박준형입니다.
              </p>
              <p class="greet-paragraph">
                저희 재단 홈페이지를 찾아주신 여러분께 깊이 감사드립니다.
              </p>
              <p class="greet-paragraph">
                신라문화장학재단은 경제적 어려움으로 배움의 기회를 충분히 누리지 못하는 학생들에게
                장학금을 지원해 왔습니다. 그동안 재단의 장학생들은 각자의 자리에서 성실히 학업을 이어갔고,
                지금은 우리 사회 곳곳에서 제 몫을 다하고 있습니다.
              </p>
              <p class="greet-paragraph">
                앞으로도 재단은 설립 당시의 뜻을 그대로 이어가겠습니다.
                학생들이 가정 형편 때문에 꿈을 접는 일이 없도록, 그리고 그 꿈이 다시 우리 사회로 돌아올 수 있도록
                변함없이 함께하겠습니다.
              </p>
              <p class="greet-paragraph">
                여러분의 따뜻한 관심과 격려를 부탁드립니다. 감사합니다.
              </p>
              <div class="signature">
                <span class="sig-label">재단법인 신라문화장학재단 이사장</span>
                <span class="sig-name title-serif">박 준 형</span>
              </div>
            </div>
            <div class="greetings-portrait-wrapper">
              <img src="../assets/founder_portrait.jpg" alt="신라문화장학재단 이사장" class="founder-portrait-img" />
              <div class="portrait-caption">이사장</div>
            </div>
          </div>
        </div>

        <!-- 2. 설립취지 -->
        <div v-if="activeTab === 'founding'" class="tab-pane reveal active">
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
                <span class="sig-name title-serif">박 준 형</span>
              </div>
            </div>
            <div class="greetings-portrait-wrapper">
              <img src="../assets/founder_portrait.jpg" alt="신라문화장학재단 이사장" class="founder-portrait-img" />
              <div class="portrait-caption">이사장</div>
            </div>
          </div>
        </div>

        <!-- 3. 연혁 (History) -->
        <div v-if="activeTab === 'history'" class="tab-pane reveal active">
          <div class="history-timeline-wrapper glass-card">
            <div class="timeline-header">
              <span class="timeline-subtitle">FOUNDATION HISTORY</span>
              <h2 class="timeline-title title-serif">신라문화장학재단 발자취</h2>
              <p class="timeline-desc">1978년 설립 이래 인재 육성과 학생들의 발전을 위해 걸어온 47년간의 역사입니다.</p>
            </div>

            <div class="timeline-rail" ref="railRef">
              <!-- 스크롤을 내린 만큼 세로선이 파랗게 차오른다 -->
              <span class="tl-progress" :style="{ height: `${progressPx}px` }" aria-hidden="true"></span>

              <div
                v-for="(item, i) in historyData"
                :key="item.year"
                class="tl-row"
                :class="{ 'is-milestone': item.milestone, 'has-circle': item.circle, 'is-filled': i <= activeIndex }"
              >
                <!-- 세로선 왼쪽: 주요 연도. circle이 있는 연도만 파란 원 안에 넣는다 -->
                <div class="tl-gutter">
                  <template v-if="item.milestone">
                    <span v-if="item.circle" class="tl-blob" aria-hidden="true"></span>
                    <span class="tl-big-year title-serif">{{ item.year }}</span>
                    <span class="tl-big-note">{{ item.milestone }}</span>
                  </template>
                </div>

                <span class="tl-dot" aria-hidden="true"></span>

                <!-- 세로선 오른쪽: 모든 연도의 내용 -->
                <div class="tl-body">
                  <span class="tl-year">{{ item.year }}</span>
                  <h4 class="tl-title">{{ item.title }}</h4>
                  <p v-if="item.desc" class="tl-desc">{{ item.desc }}</p>
                </div>

              </div>

              <!-- 연도에 묶이지 않고 오른쪽 여백에 자유롭게 떠 있는 사진들 -->
              <div class="tl-photo-layer">
                <figure
                  v-for="(p, i) in historyPhotos"
                  :key="i"
                  class="tl-free-photo"
                  :style="{ '--top': p.top, '--right': p.right, '--size': p.size }"
                >
                  <span v-if="p.blob" class="tl-photo-blob" aria-hidden="true"></span>
                  <span class="tl-photo-circle">
                    <img :src="p.src" :alt="p.alt" />
                  </span>
                </figure>
              </div>

              <span class="tl-dots-deco" aria-hidden="true"></span>
            </div>
          </div>
        </div>

        <!-- 4. 자산현황 -->
        <div v-if="activeTab === 'assets'" class="tab-pane reveal active">
          <div class="people-wrapper glass-card">
            <div class="people-header">
              <span class="people-subtitle">FOUNDATION ASSETS</span>
              <h2 class="people-title title-serif">자산현황</h2>
              <p class="people-desc">{{ assetBaseDate }} 기준 재단의 자산 현황입니다.</p>
            </div>

            <div class="assets-total">
              <span class="assets-total-label">총 자산</span>
              <span class="assets-total-value title-serif">{{ assetTotal }}</span>
            </div>

            <div class="donors-stats-grid">
              <div v-for="row in assetRows" :key="row.type" class="donor-stat-card">
                <div class="stat-icon">{{ row.icon }}</div>
                <div class="stat-info">
                  <span class="stat-num">{{ row.amount || '—' }}</span>
                  <span class="stat-label">{{ row.type }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 5. 출연사 (Donors & Contributors) -->
        <div v-if="activeTab === 'donors'" class="tab-pane reveal active">
          <div class="donors-wrapper glass-card">
            <div class="donors-header">
              <span class="donors-subtitle">CONTRIBUTORS &amp; PARTNERS</span>
              <h2 class="donors-title title-serif">출연사 안내</h2>
              <p class="donors-desc">뜻을 함께하고 장학 기금을 위해 출연해 주신 동반자 기업입니다.</p>
            </div>

            <!-- Summary Stats -->
            <div class="donors-stats-grid">
              <div class="donor-stat-card">
                <div class="stat-icon">🏢</div>
                <div class="stat-info">
                  <span class="stat-num">6개사</span>
                  <span class="stat-label">총 출연 기업</span>
                </div>
              </div>
              <div class="donor-stat-card">
                <div class="stat-icon">💰</div>
                <div class="stat-info">
                  <span class="stat-num">500억 원</span>
                  <span class="stat-label">누적 출연 기금</span>
                </div>
              </div>
              <div class="donor-stat-card">
                <div class="stat-icon">🤝</div>
                <div class="stat-info">
                  <span class="stat-num">24년</span>
                  <span class="stat-label">동반 파트너십</span>
                </div>
              </div>
            </div>

            <!-- Donors Grid -->
            <div class="donors-grid">
              <div v-for="company in donorCompanies" :key="company.name" class="donor-card">
                <div class="donor-card-header">
                  <div class="donor-avatar-box" :class="{ 'has-logo': company.logo }">
                    <img v-if="company.logo" :src="company.logo" :alt="company.name" class="donor-avatar-img" />
                    <span v-else class="donor-avatar-text">{{ company.logoText }}</span>
                  </div>
                  <div class="donor-title-group">
                    <h4 class="donor-name">{{ company.name }}</h4>
                    <span class="donor-category-badge">{{ company.category }}</span>
                  </div>
                </div>
                <p class="donor-desc">{{ company.desc }}</p>
                <div v-if="company.site" class="donor-footer-meta">
                  <a
                    class="donor-site-link"
                    :href="company.site"
                    target="_blank"
                    rel="noopener noreferrer"
                    :title="`${company.name} 홈페이지를 새 창에서 엽니다`"
                  >
                    <span>홈페이지 바로가기</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- 6. 함께하는 사람들 (People) -->
        <div v-if="activeTab === 'people'" class="tab-pane reveal active">
          <div class="people-wrapper glass-card">
            <div class="people-header">
              <span class="people-subtitle">BOARD OF DIRECTORS</span>
              <h2 class="people-title title-serif">함께하는 사람들</h2>
              <p class="people-desc">재단의 운영과 장학 사업을 이끌어가는 임원진입니다.</p>
            </div>

            <div class="board-tables">
              <div v-for="group in boardGroups" :key="group.label" class="board-group">
                <div class="board-group-header">
                  <h3 class="board-group-title">{{ group.label }}</h3>
                  <span v-if="group.note" class="board-group-note">{{ group.note }}</span>
                </div>
                <table class="board-table">
                  <thead>
                    <tr>
                      <th scope="col">직위</th>
                      <th scope="col">성명</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(member, idx) in group.members" :key="idx"
                      :class="{ 'is-chair': member.role === '이사장' }">
                      <td class="cell-role">{{ member.role }}</td>
                      <td class="cell-name">{{ member.name }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <!-- 7. 찾아오시는 길 -->
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
import news46thPhoto2 from '../assets/news_46th_photo2.jpg';
import news47thPhoto4 from '../assets/news_47th_photo4.jpg';
import logoEmblem from '../assets/logo_emblem.png';
import logoWonil from '../assets/logo_wonil.png';
import logoSillaSG from '../assets/logo_sillasg.png';
import logoSillaEng from '../assets/logo_sillaeng.png';
import logoSillaTextile from '../assets/logo_sillatextile.png';

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
  { id: 'greetings', name: '이사장 인사말' },
  { id: 'founding', name: '설립취지' },
  { id: 'history', name: '연혁' },
  { id: 'assets', name: '자산현황' },
  { id: 'donors', name: '출연사' },
  { id: 'people', name: '함께하는 사람들' },
  { id: 'contact', name: '오시는 길' }
];

// logo: 실제 로고 이미지가 있을 때만 지정한다. 없으면 logoText 글자가 파란 사각형에 표시된다.
interface DonorCompany {
  name: string;
  logoText: string;
  category: string;
  desc: string;
  logo?: string;
  site?: string; // 회사 홈페이지. 없으면 바로가기 버튼이 표시되지 않는다.
}

const donorCompanies: DonorCompany[] = [
  {
    name: '회장님',
    logoText: '회장',
    category: '주력 출연사',
    desc: '재단 설립을 이끈 발기인으로, 기본재산 증자와 장학 기금 출연을 이어오며 장학 사업의 토대를 마련했습니다.'
  },
  {
    name: '신라교역(주)',
    logoText: '교역',
    logo: logoEmblem,
    site: 'http://www.sla.co.kr',
    category: '원양어업',
    desc: '1967년 설립된 원양어업·수산물 유통 기업으로, 북·남 태평양에서 참치를 어획해 국내외 시장에 공급하고 있습니다.'
  },
  {
    name: '(주)원일특강',
    logoText: '원일',
    logo: logoWonil,
    site: 'https://www.wonilsteel.co.kr',
    category: '특수강·후판',
    desc: '1977년에 설립되어 후판·구조용강판 등 특수강을 가공해 각종 산업에 공급하는 코스닥 상장 기업입니다.'
  },
  {
    name: '신라에스지(주)',
    logoText: '에스지',
    logo: logoSillaSG,
    site: 'https://www.sillasg.co.kr',
    category: '어육소시지·수산물·가공식품·축육·OEM등',
    desc: '1977년에 설립되어 어육소시지·수산물 가공식품 제조와 축육 유통, OEM 생산 등을 주력으로 하는 기업입니다.'
  },
  {
    name: '신라엔지니어링(주)',
    logoText: '엔지',
    logo: logoSillaEng,
    site: 'http://www.sillaeng.co.kr',
    category: '자동차용 외판금형·몰드베이스',
    desc: '1987년에 설립되어 자동차용 외판 금형과 사출 금형용 몰드베이스를 전문으로 제작하는 기업입니다.'
  },
  {
    name: '신라섬유(주)',
    logoText: '섬유',
    logo: logoSillaTextile,
    site: 'http://www.sillatextile.co.kr',
    category: '섬유·부동산·휴대폰',
    desc: '1976년에 섬유사업으로 설립되어 현재는 부동산 임대업과 휴대폰 판매업을 주력으로 하는 코스닥 상장 기업입니다.'
  }
];

// 오래된 연도부터 위에서 아래로 내려간다.
// milestone: 값을 넣으면 세로선 왼쪽에 연도가 크게 나온다. 그 글자가 연도 밑의 설명이 된다.
// circle: 거기에 파란 원까지 두르고 싶을 때만 true로 둔다.
interface HistoryEntry {
  year: string;
  title: string;
  desc?: string;
  milestone?: string;
  circle?: boolean;
}

const historyData: HistoryEntry[] = [
  { year: '1978', title: '(재)신라문화장학재단 설립', desc: '1978. 03. 11', milestone: '재단 설립', circle: true },
  { year: '1988', title: '총자산 50억원 달성' },
  { year: '1994', title: '출연재산 50억원 달성' },
  { year: '1997', title: '총자산 100억원 달성, 출연재산 100억원 달성', milestone: '자산 100억원' },
  { year: '2007', title: '총자산 200억원 달성' },
  { year: '2008', title: '출연재산 200억원 달성' },
  { year: '2011', title: '총자산 300억원 달성, 출연재산 300억원 달성' },
  { year: '2013', title: '총자산 400억원 달성' },
  { year: '2015', title: '총자산 500억원 달성, 출연재산 400억원 달성' },
  { year: '2018', title: '총자산 600억원 달성, 출연재산 500억원 달성', milestone: '자산 600억원' },
  { year: '2024', title: '제46기 장학생 장학증서 수여식', desc: '2024. 08. 31 ~ 09. 01 · 서울올림픽파크텔' },
  { year: '2025', title: '제47기 장학생 장학증서 수여식', desc: '2025. 08. 30 · 서울올림픽파크텔' }
];

// 연표 오른쪽 여백에 자유롭게 띄우는 사진들.
// top은 연표 전체 높이에 대한 비율이라 연도를 늘리거나 줄여도 위치가 같이 따라간다.
// right와 size는 px로 직접 조절한다. 좁은 화면에서는 이 값들이 무시되고 아래에 가로로 늘어선다.
// blob: true로 두면 사진 오른쪽 위에 브랜드 색 원이 겹쳐 깔린다.
interface HistoryPhoto {
  src: string;
  alt: string;
  top: string;
  right: string;
  size: string;
  blob?: boolean;
}

const historyPhotos: HistoryPhoto[] = [
  { src: historyPhoto2, alt: '제1기 장학증서 수여식 (1979. 3. 17)', top: '2%', right: '24px', size: '270px' },
  { src: news46thPhoto2, alt: '제46기 장학증서 수여식 (2024. 8. 31)', top: '36%', right: '120px', size: '165px', blob: true },
  { src: news47thPhoto4, alt: '제47기 장학생 오리엔테이션 (2025. 8. 30)', top: '73%', right: '16px', size: '235px' }
];
interface BoardMember {
  role: string;
  name: string;
}

interface BoardGroup {
  label: string;
  note: string;
  members: BoardMember[];
}

const boardGroups: BoardGroup[] = [
  {
    label: '최초 설립시 이사회',
    note: '1978년 재단 설립 당시',
    members: [
      { role: '이사장', name: '박준형' },
      { role: '이사', name: '박성형' },
      { role: '이사', name: '오상락' },
      { role: '이사', name: '유용근' },
      { role: '이사', name: '최종태' },
      { role: '이사', name: '김찬규' },
      { role: '감사', name: '이보갈' },
      { role: '감사', name: '정재현' }
    ]
  },
  {
    label: '현재 이사회',
    note: '',
    members: [
      { role: '이사장', name: '박준형' },
      { role: '이사', name: '최종태' },
      { role: '이사', name: '이명섭' },
      { role: '이사', name: '김석환' },
      { role: '이사', name: '오인영' },
      { role: '이사', name: '김용식' },
      { role: '감사', name: '최문호' },
      { role: '감사', name: '권익환' }
    ]
  }
];


// amount: 실제 금액이 들어가기 전까지는 빈 문자열로 두면 카드에 '—'로 표시된다.
const assetBaseDate = '2025년 12월 31일';
const assetTotal = '500억원';

const assetRows = [
  { type: '예금', amount: '', icon: '🏦' },
  { type: '부동산', amount: '', icon: '🏢' },
  { type: '유가증권', amount: '', icon: '📈' }
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
  if (activeTab.value === 'history') {
    startTimeline();
  }
});

onUnmounted(() => {
  window.removeEventListener('hashchange', updateTabFromHash);
  window.removeEventListener('keydown', handleKeyDown);
  stopTimeline();
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

// ----- 연혁: 스크롤에 따라 세로선이 차오르고 점이 채워진다 -----
// 화면 위에서 이 비율만큼 내려온 지점을 지나면 그 연도가 채워진 것으로 본다.
const TIMELINE_TRIGGER = 0.62;
const RAIL_TOP_GAP = 10; // .timeline-rail::before 의 top 값과 같아야 한다
const RAIL_BOTTOM_GAP = 30; // .timeline-rail::before 의 bottom 값과 같아야 한다

const railRef = ref<HTMLElement | null>(null);
const activeIndex = ref(-1);
const progressPx = ref(0);
let dotEls: HTMLElement[] = [];
let timelineRaf = 0;

const measureTimeline = () => {
  const rail = railRef.value;
  if (!rail) return;

  const triggerY = window.innerHeight * TIMELINE_TRIGGER;
  const lineStart = rail.getBoundingClientRect().top + RAIL_TOP_GAP;
  const lineLength = Math.max(rail.offsetHeight - RAIL_TOP_GAP - RAIL_BOTTOM_GAP, 0);

  progressPx.value = Math.max(0, Math.min(triggerY - lineStart, lineLength));

  let idx = -1;
  for (let i = 0; i < dotEls.length; i++) {
    if (dotEls[i].getBoundingClientRect().top <= triggerY) idx = i;
  }
  activeIndex.value = idx;
};

const onTimelineScroll = () => {
  if (timelineRaf) return;
  timelineRaf = requestAnimationFrame(() => {
    timelineRaf = 0;
    measureTimeline();
  });
};

const startTimeline = async () => {
  await nextTick();
  const rail = railRef.value;
  if (!rail) return;

  dotEls = Array.from(rail.querySelectorAll<HTMLElement>('.tl-dot'));

  // 움직임을 줄이도록 설정한 사용자에게는 처음부터 전부 채워서 보여준다.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    activeIndex.value = dotEls.length - 1;
    progressPx.value = rail.offsetHeight;
    return;
  }

  measureTimeline();
  window.addEventListener('scroll', onTimelineScroll, { passive: true });
  window.addEventListener('resize', onTimelineScroll);
};

const stopTimeline = () => {
  window.removeEventListener('scroll', onTimelineScroll);
  window.removeEventListener('resize', onTimelineScroll);
  if (timelineRaf) {
    cancelAnimationFrame(timelineRaf);
    timelineRaf = 0;
  }
  dotEls = [];
  activeIndex.value = -1;
  progressPx.value = 0;
};

watch(activeTab, (newTab) => {
  if (newTab === 'contact') {
    initKakaoMap();
  }

  if (newTab === 'history') {
    startTimeline();
  } else {
    stopTimeline();
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
  background-image: url('../assets/scholarship_banner.jpg');
  background-size: cover;
  /* 학사모가 사진 가운데에 있어 그 부분이 보이도록 맞춘다. */
  background-position: center 50%;
  /* 설명문이 한 줄이든 두 줄이든 다섯 페이지 배너 높이가 같도록 고정한다. */
  min-height: 420px;
  display: flex;
  align-items: center;
  /* 고정 메뉴바에 가려지는 위쪽을 뺀, 실제로 보이는 영역의 가운데에 글자를 놓는다. */
  padding: calc(60px + var(--header-height)) 0 60px;
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
  background: linear-gradient(to top,
      rgba(0, 0, 0, 0.75) 0%,
      rgba(0, 0, 0, 0.5) 50%,
      rgba(0, 0, 0, 0.2) 100%);
  z-index: 1;
}

.banner-container {
  position: relative;
  z-index: 2;
}

.banner-subtitle {
  color: rgba(255, 255, 255, 0.85);
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
  color: #ffffff;
  margin-bottom: 16px;
}

.banner-desc {
  color: rgba(255, 255, 255, 0.9);
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

/* 세로선 한 줄을 따라 내려가는 연표.
   선 왼쪽은 주요 연도(큰 원), 오른쪽은 모든 연도의 내용이 들어간다. */
.timeline-rail {
  position: relative;
  padding-bottom: 20px;
}

/* 연표를 관통하는 세로선. 왼쪽 칸(tl-gutter) 바로 오른쪽에 선다. */
.timeline-rail::before {
  content: '';
  position: absolute;
  left: 180px;
  top: 10px;
  bottom: 30px;
  width: 2px;
  background: var(--border-color);
}

.tl-row {
  position: relative;
  /* 뒤쪽 점 무늬보다 위에 둬서 글자가 묻히지 않게 한다. */
  z-index: 1;
  display: grid;
  /* 가운데 칸의 너비를 묶어 두면 오른쪽 사진이 카드 끝까지 밀려나지 않는다. */
  grid-template-columns: 180px minmax(0, 340px) auto;
  column-gap: 30px;
  align-items: start;
  padding-bottom: 46px;
}

.tl-row:last-of-type {
  padding-bottom: 0;
}

/* 스크롤을 내린 만큼 차오르는 파란 선. 회색 세로선 위에 겹쳐 그린다. */
.tl-progress {
  position: absolute;
  left: 180px;
  top: 10px;
  width: 2px;
  background: var(--primary-color, #065b89);
  z-index: 1;
  /* 스크롤 위치를 곧바로 따라가지 않고 한 박자 늦게 따라붙어, 천천히 칠해지는 느낌을 준다. */
  transition: height 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}

/* ----- 세로선 위의 점 ----- */
.tl-dot {
  position: absolute;
  left: 181px;
  top: 7px;
  width: 13px;
  height: 13px;
  transform: translateX(-50%);
  border: 2px solid var(--primary-color, #065b89);
  border-radius: 50%;
  background: #ffffff;
  z-index: 2;
  transition: background-color 0.55s ease, transform 0.55s ease;
}

.tl-row.is-milestone .tl-dot {
  width: 17px;
  height: 17px;
  top: 14px;
}

/* 기준선을 지난 연도의 점이 파랗게 채워진다. */
.tl-row.is-filled .tl-dot {
  background: var(--primary-color, #065b89);
  transform: translateX(-50%) scale(1.15);
}

/* ----- 세로선 왼쪽: 주요 연도 ----- */
.tl-gutter {
  position: relative;
  min-height: 1px;
  text-align: right;
  padding-right: 4px;
}

.tl-blob {
  position: absolute;
  top: 50%;
  right: -18px;
  width: 170px;
  height: 170px;
  transform: translateY(-50%);
  border-radius: 50%;
  background: var(--primary-color, #065b89);
  z-index: 0;
}

/* 원이 없으면 글자가 세로선의 점에 바로 붙으므로 오른쪽 여백을 더 준다. */
.tl-row.is-milestone:not(.has-circle) .tl-gutter {
  padding-right: 24px;
}

/* 원이 없는 주요 연도는 파란 글씨로만 강조한다. */
.tl-big-year {
  position: relative;
  z-index: 1;
  display: block;
  font-size: 2.3rem;
  font-weight: 700;
  line-height: 1.1;
  color: var(--primary-color, #065b89);
  padding-top: 2px;
}

.tl-big-note {
  position: relative;
  z-index: 1;
  display: block;
  margin-top: 4px;
  font-size: 0.82rem;
  font-weight: 400;
  color: var(--text-secondary);
}

/* 파란 원을 두른 연도만 글씨를 흰색으로 뒤집는다. */
.tl-row.has-circle .tl-big-year {
  color: #ffffff;
}

.tl-row.has-circle .tl-big-note {
  color: rgba(255, 255, 255, 0.85);
}

/* ----- 세로선 오른쪽: 내용 ----- */
.tl-body {
  padding-top: 0;
}

.tl-year {
  display: block;
  font-size: 1.15rem;
  font-weight: 700;
  line-height: 1.2;
  color: var(--text-primary);
  margin-bottom: 7px;
}

.tl-row.is-milestone .tl-year {
  font-size: 1.3rem;
  color: var(--primary-color, #065b89);
}

.tl-title {
  font-size: 0.95rem;
  font-weight: 400;
  line-height: 1.6;
  color: var(--text-secondary);
}

.tl-desc {
  margin-top: 5px;
  font-size: 0.85rem;
  font-weight: 300;
  color: var(--text-secondary);
  opacity: 0.8;
}

/* ----- 오른쪽 여백에 자유롭게 떠 있는 사진들 ----- */
.tl-photo-layer {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.tl-free-photo {
  position: absolute;
  top: var(--top);
  right: var(--right);
  width: var(--size);
  height: var(--size);
  margin: 0;
  pointer-events: auto;
}

/* 사진을 둥글게 잘라내는 틀. 뒤에 깔리는 원이 잘리지 않도록 figure가 아니라 여기서 자른다. */
.tl-photo-circle {
  position: relative;
  z-index: 1;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
}

/* 사진 오른쪽 위로 비켜 깔리는 브랜드 색 원 */
.tl-photo-blob {
  position: absolute;
  z-index: 0;
  top: -30%;
  right: -58%;
  width: 136%;
  height: 136%;
  border-radius: 50%;
  background: var(--primary-color, #065b89);
}

.tl-free-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* 참고 디자인처럼 흑백으로 두고, 마우스를 올리면 원래 색으로 돌아온다. */
  filter: grayscale(100%);
  transition: filter var(--transition-normal);
}

.tl-free-photo:hover img {
  filter: grayscale(0);
}

/* ----- 오른쪽 아래 점 장식 ----- */
.tl-dots-deco {
  position: absolute;
  right: 10px;
  bottom: 70px;
  width: 47%;
  height: 340px;
  z-index: 0;
  /* --border-color(투명도 0.08)는 너무 옅어 화면에서 거의 안 보여서 직접 지정한다. */
  background-image: radial-gradient(rgba(6, 91, 137, 0.14) 2.4px, transparent 2.4px);
  background-size: 16px 16px;
  pointer-events: none;
}

@media (max-width: 768px) {
  /* 좌우 여백 50px를 그대로 두면 좁은 화면에서 글이 넘친다. */
  .history-timeline-wrapper {
    padding: 28px 18px;
  }

  .timeline-rail::before,
  .tl-progress {
    left: 7px;
  }

  .tl-row {
    grid-template-columns: 1fr;
    column-gap: 0;
    padding-left: 32px;
    padding-bottom: 34px;
  }

  .tl-dot,
  .tl-row.is-milestone .tl-dot {
    left: 8px;
    top: 6px;
  }

  /* 좁은 화면에서는 큰 원을 접고 오른쪽 내용만 남긴다. */
  .tl-gutter {
    display: none;
  }

  .tl-row.is-milestone .tl-year {
    font-size: 1.2rem;
  }

  /* 좁은 화면에서는 자유 배치를 풀고 연표 아래에 가로로 늘어놓는다. */
  .tl-photo-layer {
    position: static;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 14px;
    margin-top: 26px;
  }

  .tl-free-photo {
    position: static;
    width: 110px;
    height: 110px;
  }

  .tl-dots-deco {
    display: none;
  }
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
/* ===== 4. 함께하는 사람들 ===== */
.people-wrapper {
  padding: 50px;
}

.people-header {
  text-align: center;
  margin-bottom: 40px;
}

.people-subtitle {
  display: block;
  font-size: 0.82rem;
  letter-spacing: 2px;
  color: var(--primary-color);
  font-weight: 600;
  margin-bottom: 10px;
}

.people-title {
  font-size: 2rem;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.people-desc {
  font-size: 1rem;
  color: var(--text-secondary);
  font-weight: 300;
}

/* 자산현황 — 총액 강조 블록 */
.assets-total {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 40px 24px;
  margin-bottom: 28px;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  background: rgba(6, 91, 137, 0.04);
}

.assets-total-label {
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  color: var(--text-secondary);
}

.assets-total-value {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.1;
  color: var(--primary-color, #065b89);
}

.board-group-header {
  display: flex;
  align-items: baseline;
  gap: 10px;
  padding-bottom: 12px;
  margin-bottom: 20px;
  border-bottom: 1px solid var(--border-color);
}

.board-group-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-primary);
}

.board-group-note {
  font-size: 0.84rem;
  color: var(--text-secondary);
  font-weight: 300;
}

.board-tables {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 36px;
  align-items: start;
}

.board-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
}

.board-table th,
.board-table td {
  border: 1px solid var(--border-color);
  padding: 11px 14px;
  text-align: center;
}

.board-table th {
  background: rgba(6, 91, 137, 0.07);
  color: var(--primary-color);
  font-weight: 600;
  letter-spacing: 1px;
}

.board-table td {
  color: var(--text-secondary);
  font-weight: 300;
  background: rgba(255, 255, 255, 0.5);
}

.board-table tr.is-chair td {
  background: rgba(6, 91, 137, 0.04);
  color: var(--text-primary);
  font-weight: 500;
}

.board-table .cell-name {
  letter-spacing: 2px;
}


@media (max-width: 768px) {
  .people-wrapper {
    padding: 30px 20px;
  }

  .people-title {
    font-size: 1.6rem;
  }

  .board-tables {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}

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

  .assets-total {
    padding: 28px 16px;
  }

  .assets-total-value {
    font-size: 2.2rem;
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

/* 카드 하단 홈페이지 바로가기 (기존 "출연 기간" 자리) */
.donor-footer-meta {
  display: flex;
  justify-content: flex-end;
  padding-top: 12px;
  border-top: 1px dashed rgba(6, 91, 137, 0.15);
}

.donor-site-link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 6px 12px;
  border: 1px solid var(--border-color-hover);
  border-radius: 20px;
  font-size: 0.78rem;
  font-weight: 500;
  white-space: nowrap;
  color: var(--primary-color);
  background: rgba(255, 255, 255, 0.7);
  transition: background var(--transition-fast), color var(--transition-fast), border-color var(--transition-fast);
}

.donor-site-link:hover {
  background: var(--primary-color);
  border-color: var(--primary-color);
  color: var(--white);
}

.donor-avatar-box {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-color), #097ab7);
  color: #ffffff;
  font-weight: 700;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 4px 10px rgba(6, 91, 137, 0.2);
  overflow: hidden;
}

/* 로고 이미지는 자체 배경과 형태가 있으므로 파란 사각형을 걷어낸다. */
.donor-avatar-box.has-logo {
  background: none;
  box-shadow: none;
}

.donor-avatar-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
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
