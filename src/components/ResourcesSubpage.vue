<template>
  <div class="subpage-wrapper">
    <!-- Hero Banner -->
    <div class="sub-banner">
      <div class="container banner-container">
        <span class="banner-subtitle">RESOURCES & GUIDELINES</span>
        <h1 class="banner-title title-serif">자료실</h1>
        <p class="banner-desc">신라문화장학재단 장학금 신청 안내, 소식 및 결산에 대한 자료들을 안내해 드립니다.</p>
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
        <!-- 1. 공지사항 Tab -->
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
                    <a :href="`#resources-sub/notice/${item.id}`" class="item-title" @click.prevent>{{ item.title }}</a>
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

        <!-- 2. 재단소식 Tab -->
        <div v-if="activeTab === 'news'" class="tab-pane reveal active">
          <!-- 목록 -->
          <div v-if="!selectedNews" class="news-grid">
            <div v-for="item in news" :key="item.id" class="news-card glass-card" @click="openNews(item.id)">
              <div class="news-img-placeholder">
                <div class="news-img-overlay">
                  <span v-if="item.category" class="news-badge">{{ item.category }}</span>
                </div>
                <img v-if="item.image" :src="item.image" :alt="item.title" class="news-photo" />
                <div v-else class="gradient-graphic" :style="{ background: item.gradient }"></div>
              </div>
              <div class="news-info">
                <span class="news-date">{{ item.date }}</span>
                <h4 class="news-title">
                  <a :href="`#resources-sub/news/${item.id}`" @click.prevent>{{ item.title }}</a>
                </h4>
                <p class="news-summary">{{ item.summary }}</p>
              </div>
            </div>
          </div>

          <!-- 상세 -->
          <div v-else class="news-detail glass-card">
            <div class="news-detail-header">
              <div class="news-detail-heading">
                <span class="news-detail-date">{{ selectedNews.date }}</span>
                <h2 class="news-detail-title">{{ selectedNews.title }}</h2>
              </div>
              <button class="btn btn-outline news-detail-back" @click="closeNews">목록으로</button>
            </div>

            <img v-if="selectedNews.image" :src="selectedNews.image" :alt="selectedNews.title"
              class="news-detail-img" />

            <div class="news-detail-body">
              <p v-for="(para, i) in newsBody" :key="i" class="news-detail-para">{{ para }}</p>

              <div v-if="selectedNews.images" class="news-detail-gallery">
                <img v-for="(src, i) in selectedNews.images" :key="i" :src="src"
                  :alt="`${selectedNews.title} 사진 ${i + 1}`" class="news-detail-img" />
              </div>

              <div v-if="selectedNews.contentAfter" class="news-detail-after">
                <p v-for="(para, i) in selectedNews.contentAfter" :key="i" class="news-detail-para">
                  {{ para }}
                </p>
              </div>
            </div>

            <div class="news-detail-nav">
              <button v-if="prevNews" class="news-nav-btn" @click="openNews(prevNews.id)">
                <span class="nav-label">이전 글</span>
                <span class="nav-title">{{ prevNews.title }}</span>
              </button>
              <button v-if="nextNews" class="news-nav-btn" @click="openNews(nextNews.id)">
                <span class="nav-label">다음 글</span>
                <span class="nav-title">{{ nextNews.title }}</span>
              </button>
            </div>

            <div class="news-detail-actions">
              <button class="btn btn-outline" @click="closeNews">목록으로</button>
            </div>
          </div>
        </div>

        <!-- 3. 공시정보 Tab -->
        <div v-if="activeTab === 'archive'" class="tab-pane reveal active">
          <p class="archive-notice">국세청 홈택스 홈페이지 내 [국세청 홈택스 &gt; 공익법인결산서류공시 &gt; 공익법인 결산서류등 공시]에서도 열람하실 수 있습니다.</p>
          <div class="resources-grid">
            <div v-for="item in resources" :key="item.id" class="resource-card">
              <div class="resource-info">
                <span class="file-format-badge" :class="item.format.toLowerCase()">{{ item.format }}</span>
                <div class="resource-text">
                  <div class="resource-meta">
                    <span v-if="item.category" class="resource-category">{{ item.category }}</span>
                    <span class="resource-date">{{ item.date }}</span>
                  </div>
                  <h4 class="resource-title">{{ item.title }}</h4>
                  <p class="resource-desc">{{ item.desc }}</p>
                </div>
              </div>
              <div class="resource-download">
                <span class="file-size">{{ item.size }}</span>
                <a
                  class="btn btn-outline download-btn"
                  :class="{ 'is-disabled': !item.file }"
                  :href="item.file"
                  :download="item.file ? (item.filename ?? '') : null"
                  :title="item.file ? '' : '준비 중인 자료입니다'"
                  @click="!item.file && $event.preventDefault()"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  <span>다운로드</span>
                </a>
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
import news46thCeremony from '../assets/news_46th_ceremony.jpg';
import news47thCeremony from '../assets/news_47th_ceremony.jpg';
import newsRuralScholarship from '../assets/news_rural_scholarship.jpg';
import newsRuralScholarship2026 from '../assets/news_rural_scholarship_2026.jpg';
import news46thPhoto1 from '../assets/news_46th_photo1.jpg';
import news46thPhoto2 from '../assets/news_46th_photo2.jpg';
import news46thPhoto3 from '../assets/news_46th_photo3.jpg';
import news46thPhoto4 from '../assets/news_46th_photo4.jpg';
import news47thPhoto1 from '../assets/news_47th_photo1.jpg';
import news47thPhoto2 from '../assets/news_47th_photo2.jpg';
import news47thPhoto3 from '../assets/news_47th_photo3.jpg';
import news47thPhoto4 from '../assets/news_47th_photo4.jpg';
import newsRuralPhoto1 from '../assets/news_rural_photo1.jpg';
import newsRural2026Photo1 from '../assets/news_rural2026_photo1.jpg';
import newsRural2026Photo2 from '../assets/news_rural2026_photo2.jpg';
import noticeLetter01 from '../assets/notice_letter01.jpeg';
import noticeLetter02 from '../assets/notice_letter02.jpeg';
import notice2021Recruit from '../assets/notice_2021_recruit.jpeg';
import notice2022Recruit from '../assets/notice_2022_recruit.jpeg';
import notice2023Recruit from '../assets/notice_2023_recruit.jpeg';
import notice2025Recruit from '../assets/notice_2025_recruit.jpeg';
import notice2026Recruit from '../assets/notice_2026_recruit.jpeg';

defineEmits(['back']);

const tabs = [
  { id: 'notice', name: '공지사항' },
  { id: 'news', name: '재단소식' },
  { id: 'archive', name: '공시정보' }
];

const getTabFromHash = (): string => {
  const hash = window.location.hash;
  if (hash.startsWith('#resources-sub')) {
    const parts = hash.split('/');
    if (parts.length > 1 && tabs.some(t => t.id === parts[1])) {
      return parts[1];
    }
  }
  return 'notice';
};

const activeTab = ref(getTabFromHash());

const updateTabFromHash = () => {
  activeTab.value = getTabFromHash();
  selectedNewsId.value = getNewsIdFromHash();
  selectedNoticeId.value = getNoticeIdFromHash();
};

const setActiveTab = (tabId: string) => {
  activeTab.value = tabId;
  window.location.hash = `#resources-sub/${tabId}`;
};

const searchQuery = ref('');

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
    id: 6,
    type: 'event',
    tagText: '안내',
    title: '2026 신라문화장학재단 장학생 공개선발',
    date: '2026.01.16',
    content: [
      '2026년 신라문화장학재단 장학생 공개선발',
      '선발 대상 학교 홈페이지에 지원서와 함께 공지되었습니다.',
      '각 학교 홈페이지에서 공고 및 지원서류를 확인하시고 많은 지원 부탁드립니다.'
    ],
    images: [notice2026Recruit],
    file: '/docs/2026-scholarship-recruitment.pdf',
    filename: '2026공개선발요강.pdf'
  },
  {
    id: 1,
    type: 'event',
    tagText: '안내',
    title: '2025 신라문화장학재단 장학생 공개선발',
    date: '2025.01.21',
    content: [
      '2025년 신라문화장학재단 장학생 공개선발',
      '선발 대상 학교 홈페이지에 지원서와 함께 공지되었습니다.',
      '각 학교 홈페이지에서 공고 및 지원서류를 확인하시고 많은 지원 부탁드립니다.'
    ],
    images: [notice2025Recruit],
    file: '/docs/2025-scholarship-recruitment.pdf',
    filename: '2025공개선발요강.pdf'
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

// 공지사항 상세 보기 — 주소는 #resources-sub/notice/<번호> 형태를 쓴다.
const getNoticeIdFromHash = (): number | null => {
  const parts = window.location.hash.split('/');
  if (parts[1] === 'notice' && parts[2]) {
    const id = Number(parts[2]);
    return Number.isFinite(id) ? id : null;
  }
  return null;
};

const selectedNoticeId = ref<number | null>(getNoticeIdFromHash());

const selectedNotice = computed(() => notices.find(n => n.id === selectedNoticeId.value) ?? null);

const noticeIndex = computed(() => notices.findIndex(n => n.id === selectedNoticeId.value));
// 목록이 최신순이라 배열 뒤로 갈수록 오래된 글이다.
// 따라서 이전 글 = 배열의 다음 항목(더 오래된 글), 다음 글 = 배열의 앞 항목(더 최근 글)이다.
const prevNotice = computed(() =>
  noticeIndex.value >= 0 && noticeIndex.value < notices.length - 1 ? notices[noticeIndex.value + 1] : null
);
const nextNotice = computed(() => (noticeIndex.value > 0 ? notices[noticeIndex.value - 1] : null));

const openNotice = (id: number) => {
  window.location.hash = `#resources-sub/notice/${id}`;
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const closeNotice = () => {
  window.location.hash = '#resources-sub/notice';
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// News & Resources Sample Data
// image: 실제 사진이 있을 때만 지정한다. 없으면 gradient 색상 배경만 표시된다.
interface NewsItem {
  id: number;
  category?: string;
  date: string;
  title: string;
  summary: string;
  gradient: string;
  image?: string;
  content?: string[]; // 본문이 따로 있을 때만 쓴다. 없으면 summary 를 보여준다.
  images?: string[]; // 상세 화면 본문 아래에 함께 보여줄 사진들
  contentAfter?: string[]; // 사진 아래에 이어지는 본문
}

const news: NewsItem[] = [
  {
    id: 1,
    date: '2026.06.23',
    title: '2026년 농촌지역 청소년 장학금 전달식 개최',
    summary: '2026년 6월 18일, 당진시농협, 고창농협, 광활농협 대회의실에서 2026년 농촌지역 청소년 장학금 전달식을 개최하였습니다.',
    gradient: 'linear-gradient(135deg, #4f3b32 0%, #8c6d4f 100%)',
    image: newsRuralScholarship2026,
    images: [newsRural2026Photo1, newsRural2026Photo2],
    contentAfter: [
      '2026년 6월 18일, 당진시농협, 고창농협, 광활농협 대회의실에서 2026년 농촌지역 청소년 장학금 전달식을 개최하였습니다.',
      '이번 장학금은 총 96,000,000원으로, 대한민국의 미래 농업을 이끌어 갈 지역 인재 양성에 작은 힘을 더하고자 하는 취지에서 전국 각 지역에서 선발된 중·고등학생들 117명에게 전달되었습니다.'
    ]
  },
  {
    id: 2,
    date: '2025.09.16',
    title: '2025년 농촌지역 청소년 장학금 전달식 개최',
    summary: '2025년 9월 8일, 전라북도 김제시에 위치한 광활농협 대회의실에서 2025년 농촌지역 청소년 장학금 전달식을 개최하였습니다.',
    gradient: 'linear-gradient(135deg, #4f3b32 0%, #8c6d4f 100%)',
    image: newsRuralScholarship,
    images: [newsRuralPhoto1],
    contentAfter: [
      '2025년 9월 8일, 전라북도 김제시에 위치한 광활농협 대회의실에서 2025년 농촌지역 청소년 장학금 전달식을 개최하였습니다.',
      '이번 장학금은 대한민국의 미래 농업을 이끌어 갈 지역 인재 양성에 작은 힘을 더하고자 하는 취지에서 전국 각 지역에서 선발된 중·고등학생들에게 전달되었습니다.'
    ]
  },
  {
    id: 3,
    date: '2025.09.11',
    title: '제47기 장학증서 수여식',
    summary: '2025년 8월 30일, 송파구 방이동에 위치한 서울올림픽파크텔에서 제47기 장학생 장학증서 수여식 및 오리엔테이션을 개최하였습니다.',
    gradient: 'linear-gradient(135deg, #065B89 0%, #1a82b8 100%)',
    image: news47thCeremony,
    images: [news47thPhoto1, news47thPhoto2, news47thPhoto3, news47thPhoto4],
    contentAfter: [
      '2025년 8월 30일, 송파구 방이동에 위치한 서울올림픽파크텔에서 제47기 장학생 장학증서 수여식 및 오리엔테이션을 개최하였습니다.',
      '이번 장학증서 수여식에는 신라그룹의 박성진 부회장님께서 참석하시어 축하해 주셨으며, 재단 관계자 및 신라문화장학재단 학생회 "청아회"의 운영진들이 함께하였습니다.',
      '행사는 1부 장학증서 수여식과 2부 오리엔테이션으로 나누어 진행되었으며, 오리엔테이션 후에는 재단에서 마련한 뷔페식을 함께 한 뒤 아쉬움 속에 마무리되었습니다.',
      '행사가 진행되는 과정에서 처음의 어색함을 덜어내고, 조금은 가까워진 얼굴로 서로를 대하는 모습을 볼 수 있었습니다.',
      '이번 만남이 제47기 장학생들과 신라문화장학재단, 그리고 장학생들 서로에게 더 큰 인연으로 나아갈 수 있는 계기가 되었기를 바랍니다.',
      '우리 장학생들이 캠퍼스와 일상에서 행복과 웃음을 만들어 가기를 기원합니다.'
    ]
  },
  {
    id: 4,
    date: '2025.09.09',
    title: '제46기 장학증서 수여식',
    summary: '2024년 8월 31일 ~ 9월 1일, 송파구 방이동에 위치한 서울올림픽파크텔에서 제46기 장학생 장학증서 수여식 및 오리엔테이션을 개최하였습니다.',
    gradient: 'linear-gradient(135deg, #065B89 0%, #1a82b8 100%)',
    image: news46thCeremony,
    images: [news46thPhoto1, news46thPhoto2, news46thPhoto3, news46thPhoto4],
    contentAfter: [
      '2024년 8월 31일 ~ 9월 1일, 송파구 방이동에 위치한 서울올림픽파크텔에서 제46기 장학생 장학증서 수여식 및 오리엔테이션을 개최하였습니다.',
      '장학증서 수여식에는 신라그룹의 박성진 부회장님, 그리고 본 재단의 장학생 출신인 동국대 이경철 일본학과 교수님께서 참석하시어 제46기 장학증서 수여식을 축하해주시고 장학생들에게 좋은 말씀과 격려를 해주셨습니다.',
      '행사는 1부 장학증서 수여식과 2부 오리엔테이션으로 진행이 되었으며, 준비된 프로그램을 함께 하며 장학생들 서로간에 가까워질 수 있는 시간을 가졌습니다.',
      '이번 행사가 신라문화장학재단 장학생이라는 좋은 인연을 만드는 기회가 되었기를 바라며, 오늘의 작은 출발이 제46기 장학생 여러분들에게 행복과 행운을 가져다 주는 불씨가 되기를 기원합니다.'
    ]
  }
];

// file: public/ 기준 절대 경로. 없으면 다운로드 버튼이 비활성 상태로 표시된다.
// filename: 저장될 이름을 서버 파일명과 다르게 하고 싶을 때만 지정한다. 생략하면 서버 파일명 그대로 저장된다.
interface ResourceItem {
  id: number;
  category?: string;
  title: string;
  desc: string;
  format: string;
  size: string;
  date: string;
  file?: string;
  filename?: string;
}

// 소식 상세 보기 — 주소는 #resources-sub/news/<번호> 형태를 쓴다.
const getNewsIdFromHash = (): number | null => {
  const parts = window.location.hash.split('/');
  if (parts[1] === 'news' && parts[2]) {
    const id = Number(parts[2]);
    return Number.isFinite(id) ? id : null;
  }
  return null;
};

const selectedNewsId = ref<number | null>(getNewsIdFromHash());
const selectedNews = computed(() => news.find(n => n.id === selectedNewsId.value) ?? null);

const newsBody = computed(() => {
  const item = selectedNews.value;
  if (!item) return [];
  if (item.content) return item.content;
  // 사진 아래에 본문이 따로 있으면 요약문을 위에 또 보여주지 않는다.
  if (item.contentAfter) return [];
  // 본문이 전혀 없을 때만 요약문 한 문단을 대신 쓴다.
  return [item.summary];
});

// 목록이 최신순이라 배열 뒤로 갈수록 오래된 글이다.
const newsIndex = computed(() => news.findIndex(n => n.id === selectedNewsId.value));
const prevNews = computed(() =>
  newsIndex.value >= 0 && newsIndex.value < news.length - 1 ? news[newsIndex.value + 1] : null
);
const nextNews = computed(() => (newsIndex.value > 0 ? news[newsIndex.value - 1] : null));

const openNews = (id: number) => {
  window.location.hash = `#resources-sub/news/${id}`;
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const closeNews = () => {
  window.location.hash = '#resources-sub/news';
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const resources: ResourceItem[] = [
  {
    id: 1,
    title: '2025사업연도 공익법인 결산서류 등의 공시',
    desc: '공익법인 결산 서류 및 기부금 모금·활용 실적에 관한 공시 보고서',
    format: 'PDF',
    size: '378 KB',
    date: '2026.04.28',
    file: '/docs/2025-settlement-disclosure.pdf',
    filename: '2025사업연도 공익법인 결산서류 등의 공시_신라문화장학재단.pdf'
  },
  {
    id: 2,
    title: '2024사업연도 공익법인 결산서류 등의 공시',
    desc: '공익법인 결산 서류 및 기부금 모금·활용 실적에 관한 공시 보고서',
    format: 'PDF',
    size: '375 KB',
    date: '2025.04.29',
    file: '/docs/2024-settlement-disclosure.pdf',
    filename: '2024사업연도 공익법인 결산서류 등의 공시_신라문화장학재단.pdf'
  },
  {
    id: 3,
    title: '2023사업연도 공익법인 결산서류 등의 공시',
    desc: '공익법인 결산 서류 및 기부금 모금·활용 실적에 관한 공시 보고서',
    format: 'PDF',
    size: '2.4 MB',
    date: '2024.04.25',
    file: '/docs/2023-settlement-disclosure.pdf',
    filename: '2023사업연도 공익법인 결산서류 등의 공시_신라문화장학재단.pdf'
  },
  {
    id: 4,
    title: '2022사업연도 공익법인 결산서류 등의 공시',
    desc: '공익법인 결산 서류 및 기부금 모금·활용 실적에 관한 공시 보고서',
    format: 'PDF',
    size: '3.2 MB',
    date: '2023.04.28',
    file: '/docs/2022-settlement-disclosure.pdf',
    filename: '2022사업연도 공익법인 결산서류 등의 공시_신라문화장학재단.pdf'
  },
  {
    id: 5,
    title: '2021사업연도 공익법인 결산서류 등의 공시',
    desc: '공익법인 결산 서류 및 기부금 모금·활용 실적에 관한 공시 보고서',
    format: 'PDF',
    size: '3.3 MB',
    date: '2022.04.27',
    file: '/docs/2021-settlement-disclosure.pdf',
    filename: '2021사업연도 공익법인 결산서류 등의 공시_신라문화장학재단.pdf'
  }
];

onMounted(() => {
  updateTabFromHash();
  window.addEventListener('hashchange', updateTabFromHash);
});

onUnmounted(() => {
  window.removeEventListener('hashchange', updateTabFromHash);
  document.body.style.overflow = '';
});
</script>

<style scoped>
.subpage-wrapper {
  padding-bottom: 80px;
}

.sub-banner {
  position: relative;
  background-image: url('../assets/resources_banner.jpg');
  background-size: cover;
  /* 책상과 책장이 사진 가운데에 있어 그 부분이 보이도록 맞춘다. */
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
  max-width: none;
  margin: 0 auto;
  font-weight: 300;
  white-space: nowrap;
}

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
  padding: 12px 28px;
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

/* ===== 소식 상세 ===== */
.news-card {
  cursor: pointer;
}

.news-detail {
  padding: 40px 44px;
  text-align: left;
}

.news-detail-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  padding-bottom: 22px;
  margin-bottom: 28px;
  border-bottom: 2px solid var(--border-color);
}

.news-detail-heading {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  min-width: 0;   /* 제목이 길어도 버튼을 밀어내지 않도록 */
}

.news-detail-back {
  flex-shrink: 0;
  padding: 8px 18px;
  font-size: 0.85rem;
  white-space: nowrap;
}

.news-detail-date {
  font-size: 0.88rem;
  color: var(--text-secondary);
  font-weight: 300;
}

.news-detail-title {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.4;
  margin: 0;
  word-break: keep-all;
}

.news-detail-img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 28px;
}

.news-detail-after {
  margin-top: 32px;
}

.news-detail-gallery {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 32px;
}

/* 본문 아래 사진들은 아래 여백이 필요 없다. */
.news-detail-gallery .news-detail-img {
  margin-bottom: 0;
}

.news-detail-body {
  min-height: 120px;
  margin-bottom: 36px;
}

.news-detail-para {
  font-size: 1rem;
  line-height: 1.9;
  color: var(--text-secondary);
  font-weight: 300;
  word-break: keep-all;
}

.news-detail-para + .news-detail-para {
  margin-top: 16px;
}

.news-detail-nav {
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--border-color);
}

.news-nav-btn {
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

.news-nav-btn:hover {
  background: rgba(6, 91, 137, 0.04);
}

.news-detail-nav .nav-label {
  flex-shrink: 0;
  width: 56px;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--primary-color);
}

.news-detail-nav .nav-title {
  font-size: 0.92rem;
  color: var(--text-secondary);
  font-weight: 300;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.news-detail-actions {
  display: flex;
  justify-content: center;
  margin-top: 32px;
}

@media (max-width: 768px) {
  .news-detail {
    padding: 28px 20px;
  }

  .news-detail-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .news-detail-title {
    font-size: 1.25rem;
  }
}

/* News Grid */
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
  border-radius: 12px;
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
}

.news-badge {
  background-color: rgba(11, 12, 16, 0.7);
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
}

.news-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
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

.news-summary {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.6;
  font-weight: 300;
}

/* Resources Grid */
.resources-grid {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.archive-notice {
  margin: 0 0 24px;
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
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
}

.file-format-badge.hwp { background: rgba(59, 130, 246, 0.12); color: #2563eb; }
.file-format-badge.pdf { background: rgba(220, 38, 38, 0.12); color: #dc2626; }

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

.resource-date { font-size: 0.8rem; color: var(--text-muted); }
.resource-title { font-size: 1.05rem; font-weight: 600; color: var(--text-primary); }
.resource-desc { font-size: 0.88rem; color: var(--text-secondary); font-weight: 300; }

.resource-download {
  display: flex;
  align-items: center;
  gap: 16px;
}

.file-size { font-size: 0.8rem; color: var(--text-muted); }

.download-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  font-size: 0.85rem;
  border-radius: 6px;
}

/* 파일이 아직 등록되지 않은 자료 */
.download-btn.is-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

@media (max-width: 1024px) {
  .news-grid { grid-template-columns: 1fr; }
}

@media (max-width: 768px) {
  .banner-desc { white-space: normal; }
}

/* ===== 공지사항 ===== */
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

.detail-nav .nav-label {
  flex-shrink: 0;
  width: 56px;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--primary-color);
}

.detail-nav .nav-title {
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
