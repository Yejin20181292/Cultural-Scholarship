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
        <!-- 1. 신고 및 신청 Tab -->
        <div v-if="activeTab === 'apply'" class="tab-pane reveal active">
          <div class="programs-grid">
            <div v-for="program in programs" :key="program.key" class="glass-card program-card">
              <div class="program-badge title-serif">{{ program.badge }}</div>
              <h3 class="program-title">{{ program.title }}</h3>
              <p class="program-target">{{ program.target }}</p>
              <div class="program-divider"></div>
              <ul class="program-details">
                <li v-for="(point, i) in program.points" :key="i">{{ point }}</li>
              </ul>
              <button class="btn btn-outline card-btn" @click="openDetail(program.key)">자세히 보기</button>
            </div>
          </div>

        </div>

        <!-- 2. 소식 Tab -->
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

        <!-- 3. 결산자료 Tab -->
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

    <!-- Detail Modal -->
    <Transition name="modal-fade">
      <div v-if="activeDetail" class="detail-modal-overlay" @click.self="closeDetail">
        <div class="detail-modal-content" role="dialog" aria-modal="true" aria-labelledby="detail-modal-title">
          <button class="detail-modal-close" @click="closeDetail" aria-label="닫기">&times;</button>

          <div class="detail-modal-header">
            <span class="detail-modal-badge title-serif">{{ activeDetail.badge }}</span>
            <h3 id="detail-modal-title" class="detail-modal-title">{{ activeDetail.title }}</h3>
            <p class="detail-modal-target">{{ activeDetail.target }}</p>
          </div>

          <div class="detail-modal-body">
            <section v-for="section in activeDetail.sections" :key="section.heading" class="detail-section">
              <h4 class="detail-section-heading">{{ section.heading }}</h4>

              <ol v-if="section.items.length" class="detail-section-list"
                :class="{ numbered: section.numbered ?? section.items.some(it => it.sub) }">
                <li v-for="(item, i) in section.items" :key="i" class="detail-item">
                  <span class="detail-item-text">{{ item.text }}</span>

                  <ul v-if="item.sub" class="detail-sub-list">
                    <li v-for="(s, j) in item.sub" :key="j">
                      <span class="detail-sub-marker">{{ circled(j) }}</span>
                      <span>{{ s }}</span>
                    </li>
                  </ul>

                  <p v-if="item.caption" class="detail-item-caption">({{ item.caption }})</p>
                </li>
              </ol>

              <div v-if="section.table" class="detail-table-wrap">
                <table class="detail-table">
                  <thead>
                    <tr>
                      <th v-for="(h, i) in section.table.headers" :key="i" scope="col">{{ h }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(row, i) in section.table.rows" :key="i">
                      <th scope="row">{{ row.label }}</th>
                      <td v-for="(cell, j) in row.cells" :key="j"
                        :colspan="row.cells.length === 1 ? section.table.headers.length - 1 : 1">
                        <span v-for="(line, k) in cell" :key="k" class="detail-table-line">{{ line }}</span>
                        <a v-if="row.email" class="detail-table-line" :href="`mailto:${row.email}`">{{ row.email }}</a>
                        <span v-if="row.note" class="detail-table-note">※ {{ row.note }}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div v-if="section.downloads" class="detail-form-links">
                <a v-for="(doc, i) in section.downloads" :key="i" class="btn btn-outline detail-form-link"
                  :href="doc.file" :download="doc.filename">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  <span>{{ doc.label }}</span>
                </a>
              </div>

              <div v-if="section.note" class="detail-note">
                <p v-for="(line, i) in section.note.lines" :key="i" class="detail-note-line">
                  <span class="detail-note-mark">※</span>{{ line }}
                </p>
                <p v-if="section.note.email" class="detail-note-line detail-note-email">
                  {{ section.note.emailLabel }} :
                  <a :href="`mailto:${section.note.email}`">{{ section.note.email }}</a>
                </p>
              </div>
            </section>

            <a v-if="activeDetail.download" class="btn btn-primary detail-download-btn"
              :href="activeDetail.download.file" :download="activeDetail.download.filename">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>{{ activeDetail.download.label }}</span>
            </a>
          </div>

          <div class="detail-modal-footer">
            <button class="btn btn-outline" @click="closeDetail">닫기</button>
          </div>
        </div>
      </div>
    </Transition>
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

defineEmits(['back']);

const tabs = [
  { id: 'apply', name: '신고 및 신청' },
  { id: 'news', name: '소식' },
  { id: 'archive', name: '결산자료' }
];

const getTabFromHash = (): string => {
  const hash = window.location.hash;
  if (hash.startsWith('#resources-sub')) {
    const parts = hash.split('/');
    if (parts.length > 1 && tabs.some(t => t.id === parts[1])) {
      return parts[1];
    }
  }
  return 'apply';
};

const activeTab = ref(getTabFromHash());

const updateTabFromHash = () => {
  activeTab.value = getTabFromHash();
  selectedNewsId.value = getNewsIdFromHash();
};

const setActiveTab = (tabId: string) => {
  activeTab.value = tabId;
  window.location.hash = `#resources-sub/${tabId}`;
};

// Detail Modal
// 카드 3개의 "자세히 보기" 상세 내용. 재단 확정 문구가 나오면 sections 안의 items만 교체하면 된다.
interface DetailItem {
  text: string;
  sub?: string[];
  caption?: string;
}

interface DetailNote {
  lines: string[];
  emailLabel?: string;
  email?: string;
}

// 두 가지 경우를 나란히 비교하는 내용은 표로 보여준다.
interface DetailTableRow {
  label: string;      // 맨 왼쪽 구분 칸
  cells: string[][];  // 칸마다 여러 줄. 칸이 하나면 가로로 병합된다.
  note?: string;      // 칸 아래 ※ 안내
  email?: string;     // 메일 주소가 들어가는 칸
}

interface DetailTable {
  headers: string[];  // 머리글. 첫 칸은 구분 열이다.
  rows: DetailTableRow[];
}

interface DetailSection {
  heading: string;
  items: DetailItem[];
  note?: DetailNote;
  numbered?: boolean; // 1) 2) 3) 번호를 붙일지. 지정하지 않으면 하위 항목 유무로 판단한다.
  table?: DetailTable; // 항목 대신 표로 보여줄 때 쓴다.
  downloads?: {        // 표 바로 아래에 붙는 서식 파일들
    file: string;      // public/ 기준 경로
    filename: string;  // 내려받을 때 저장될 이름
    label: string;     // 버튼에 보이는 글자
  }[];
}

interface DetailContent {
  badge: string;
  title: string;
  target: string;
  points: string[];        // 카드에 보이는 요약 항목
  sections: DetailSection[]; // "자세히 보기" 모달에 보이는 상세 내용
  download?: {             // 모달 아래에 붙는 서식 파일. 없으면 표시되지 않는다.
    file: string;          // public/ 기준 경로
    filename: string;      // 내려받을 때 저장될 이름
    label: string;         // 버튼에 보이는 글자
  };
}

// ① ② ③ ... 하위 항목 기호. 9개를 넘으면 숫자로 대체된다.
const CIRCLED = ['①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧', '⑨'];
const circled = (i: number) => CIRCLED[i] ?? `${i + 1}.`;

const details: Record<string, DetailContent> = {
  youth: {
    badge: '01',
    title: '장학생 자격 유지 조건',
    target: '대상: 국내 소재 대학교 재학생',
    points: [
      '직전 학기 평균 학점 4.5만점 기준 3.0 이상',
      '직전 학기 평균 학점 4.3 만점 기준 4.5 환산 3.0 이상',
      '교환 학생 및 P/F 수업은 PASS 학점을 자격 유지 성적으로 인정'
    ],
    sections: [
      {
        heading: '자격 유지 성적 기준',
        items: [
          {
            text: '직전 학기 평균 학점이 아래의 기준을 충족해야 함',
            sub: ['4.5 만점 기준 : 3.0 이상', '4.3 만점 기준 : 4.5 환산 3.0 이상'],
            caption: '각 대학교에 따라서 차이가 있을 수 있으며, 소속 대학교별 환산 점수에 따름'
          },
          {
            text: '교환 학생 및 P/F 수업 이수 학생',
            sub: ['PASS 학점을 자격 유지 성적으로 인정']
          }
        ],
        note: {
          lines: [
            '성적 기준 미달의 경우 성적 증명서와 성적 미달 사유서(자유 양식)를 재단 장학담당자 메일로 제출',
            '성적 기준 미달 발생시 1회에 한해서 자격 유지 심사'
          ],
          emailLabel: '장학담당자 메일',
          email: 'silla_yujin@naver.com'
        }
      }
    ]
  },
  heritage: {
    badge: '02',
    title: '장학금 지급 및 등록',
    target: '대상: 장학생으로 선발된 대학교 재학생',
    points: [
      '1학기 장학금 지급',
      '2학기 장학금 지급',
      '등록금 납부 방식에 따른 진행 과정'
    ],
    sections: [
      {
        heading: '1학기 장학금 지급',
        numbered: true,
        items: [{ text: '3월 초에 소속 대학교 계좌로 송금' }]
      },
      {
        heading: '2학기 장학금 지급',
        numbered: true,
        items: [{ text: '9월 초에 소속 대학교 계좌로 송금' }]
      },
      {
        heading: '등록금 납부 방식에 따른 진행 과정',
        items: [
          {
            text: '장학생이 등록금을 (선)납부하는 경우',
            sub: [
              '본등록기간에 등록하는 경우에 해당',
              '재단에서 각 학교로 장학금 송금 → 소속 대학교에서 수령 후 → 장학생에게 재송금 처리 (각 대학별 송금 일자 다름)'
            ]
          },
          {
            text: '장학생이 등록금을 (선)납부하지 않는 경우',
            sub: [
              '학기별 장학금 지급 기간에 재단에서 각 학교로 장학금 송금',
              '추가등록 기간내에 재단 장학금으로 등록 처리됨'
            ]
          },
          {
            text: '등록금 고지서 선감면 (등록금 고지서에 등록금을 0원으로 기재)',
            sub: [
              '선감면 고지서를 발급받은 후, 금융기관에서 영수인을 날인 받으면 학교에서 등록으로 처리'
            ]
          }
        ],
        note: {
          lines: [
            '각 소속 대학교 추가 등록 기간 및 장학금 지급 일자 확인 요망',
            '각 소속 대학교에 등록 방식의 확인 요망',
            '선감면 제도의 실행 여부 확인 요망'
          ]
        }
      }
    ]
  },
  global: {
    badge: '03',
    title: '장학금 계속 지급 신청',
    target: '대상: 다음 학기 등록 예정인 재학생 및 복학 예정자',
    points: [
      '다음 학기 등록을 위한 계속 지급 신청',
      '계속 지급 신청서 및 성적증명서 제출',
      '1학기 2월 초~중순 / 2학기 8월 초~중순 접수'
    ],
    sections: [
      {
        heading: '장학금 계속 지급 신청이란?',
        numbered: true,
        items: [
          { text: '신라문화장학재단의 장학생 자격 조건을 유지하며, 다음 학기에도 학교에 등록을 하기 위하여 장학금의 지급을 신청하는 것' }
        ]
      },
      {
        heading: '신청 대상자',
        numbered: true,
        items: [{ text: '다음 학기 등록 예정인 재학생 및 복학 예정자' }]
      },
      {
        heading: '필요 서류',
        numbered: true,
        items: [
          { text: '계속 지급 신청서 (재단 양식)' },
          { text: '성적증명서 (소속 대학의 직인이 날인된 직전학기까지 나온 성적증명서)' }
        ]
      },
      {
        heading: '제출처',
        numbered: true,
        items: [{ text: '각 소속 대학교 장학과 담당 직원' }]
      },
      {
        heading: '제출 시기',
        numbered: true,
        items: [
          { text: '1학기 : 2월 초 ~ 중순' },
          { text: '2학기 : 8월 초 ~ 중순' }
        ],
        note: {
          lines: ['학교측 연락을 받으면, 학교 안내에 따라 필요 서류를 제출하면 됩니다.']
        }
      }
    ],
    download: {
      file: '/docs/scholarship-continuation-form.hwp',
      filename: '장학금계속지급신청서.hwp',
      label: '장학금계속지급신청서.hwp'
    }
  },
  program04: {
    badge: '04',
    title: '휴학 및 복학 신청',
    target: '대상: 휴학 또는 복학을 신청하는 장학생',
    points: [
      '일반 휴학·복학과 군 휴학·복학',
      '휴학·복학 신청서 등 필요 서류 제출',
      '1학기 1월 15일 / 2학기 7월 15일까지 접수'
    ],
    sections: [
      {
        heading: '휴학 및 복학 신청 안내',
        items: [],
        table: {
          headers: ['구분', '일반 휴학 / 복학', '군 휴학 / 복학'],
          rows: [
            {
              label: '기간',
              cells: [['최대 1년까지 가능'], ['군 복무 기간']]
            },
            {
              label: '필요 서류',
              cells: [
                ['휴학 신청서', '복학 신청서'],
                ['휴학 신청서, 입영통지서', '복학 신청서, 전역증 사본']
              ]
            },
            {
              label: '제출 기한',
              cells: [['1학기 - 1월 15일까지', '2학기 - 7월 15일까지']],
              note: '기한 내에 제출이 어려울 경우, 재단으로 꼭 연락 주시기 바랍니다'
            },
            {
              label: '제출처',
              cells: [['장학담당자 메일']],
              email: 'silla_yujin@naver.com'
            }
          ]
        },
        downloads: [
          {
            file: '/docs/leave-of-absence-form.hwp',
            filename: '휴학신청서.hwp',
            label: '휴학신청서.hwp'
          },
          {
            file: '/docs/return-to-school-form.hwp',
            filename: '복학신청서.hwp',
            label: '복학신청서.hwp'
          }
        ],
        note: {
          lines: [
            '소속 대학교에 하는 휴학 및 복학 신청과는 별도의, 재단에 대한 휴·복학 신청입니다.',
            '제출 기한까지 서류가 미제출될 경우에 장학금 수혜에 피해가 발생할 수 있으므로, 정해진 기한을 엄수하여 필요서류를 제출하시기 바랍니다.'
          ]
        }
      }
    ]
  },
  program05: {
    badge: '05',
    title: '편입학 및 전과 신고',
    target: '대상: 편입학 또는 전과를 한 장학생',
    points: [
      '편입학과 전과',
      '편입 신청서·합격증 또는 전과 신고서 제출',
      '1학기 1월 15일 / 2학기 7월 15일까지 접수'
    ],
    sections: [
      {
        heading: '편입학 및 전과 신고 안내',
        items: [],
        table: {
          headers: ['구분', '편입학', '전과'],
          rows: [
            {
              label: '장학금 지급',
              cells: [['장학금 수혜 기간(6학기) 중 잔여 학기에 대하여 장학금 지급']]
            },
            {
              label: '필요 서류',
              cells: [['편입 신청서, 편입 합격증'], ['전과 신고서']]
            },
            {
              label: '제출 기한',
              cells: [['1학기 - 1월 15일까지', '2학기 - 7월 15일까지']],
              note: '기한 내에 제출이 어려울 경우, 재단으로 꼭 연락 주시기 바랍니다'
            },
            {
              label: '제출처',
              cells: [['장학담당자 이메일']],
              email: 'silla_yujin@naver.com'
            }
          ]
        },
        downloads: [
          {
            file: '/docs/transfer-admission-form.hwp',
            filename: '편입신고서.hwp',
            label: '편입신고서.hwp'
          },
          {
            file: '/docs/major-change-form.hwp',
            filename: '전과신고서.hwp',
            label: '전과신고서.hwp'
          }
        ]
      }
    ]
  },
  program06: {
    badge: '06',
    title: '교환학생 신고',
    target: '대상: 교환학생으로 파견되는 장학생',
    points: [
      '교환학생 파견 신청서 제출',
      '국내 대학 등록금액을 한도로 장학금 지급',
      '1학기 1월 15일 / 2학기 7월 15일까지 접수'
    ],
    sections: [
      {
        heading: '교환학생 신고 안내',
        items: [],
        table: {
          headers: ['구분', '내용'],
          rows: [
            {
              label: '필요 서류',
              cells: [['교환학생 파견 신청서']]
            },
            {
              label: '제출 기한',
              cells: [['1학기 - 1월 15일까지', '2학기 - 7월 15일까지']],
              note: '기한 내에 제출이 어려울 경우, 재단으로 꼭 연락 주시기 바랍니다'
            },
            {
              label: '제출처',
              cells: [['장학담당자 메일']],
              email: 'silla_yujin@naver.com'
            },
            {
              label: '장학금 지급 방식',
              cells: [[
                '지급액 : 국내 대학의 등록금액을 한도액으로 지급',
                '지급 방식 : 국내 대학에 재학중일 때와 동일한 방식으로 지급'
              ]]
            },
            {
              label: '성적 기준',
              cells: [[
                'PASS 학점을 장학생 자격 유지 성적으로 인정',
                '소속 대학에서 파견학교 성적 처리가 늦어지는 경우, 반드시 파견학교 성적증명서를 재단 장학담당자에게 제출해야 함'
              ]]
            }
          ]
        },
        downloads: [
          {
            file: '/docs/exchange-student-form.hwp',
            filename: '교환학생 파견신고서.hwp',
            label: '교환학생 파견신고서.hwp'
          }
        ]
      }
    ]
  },
  program07: {
    badge: '07',
    title: '장학금 이중 수혜',
    target: '대상: 타 장학금을 함께 받는 장학생',
    points: [
      '등록금 전액 지원 장학금',
      '등록금성 장학금은 이중 수혜 불가',
      '생활비(지원성) 장학금은 수령 가능'
    ],
    sections: [
      {
        heading: '신라문화장학재단의 장학금은?',
        numbered: true,
        items: [{ text: '등록금 전액 지원 장학금' }]
      },
      {
        heading: '이중 수혜 금지',
        items: [
          {
            text: '신라문화장학재단 장학생은 다음의 장학금들을 이중으로 수령할 수 없음',
            sub: [
              '타 재단이나 기관의 등록금성 장학금',
              '소속 대학교의 등록금 전액 성적 장학금',
              '기타 등록금 성격의 장학금'
            ]
          }
        ],
        note: {
          lines: [
            '등록금성 장학금으로 등록금 전액이 아닌 일부를 받는 경우, 그 차액을 재단 장학금으로 받을 수 있음'
          ]
        }
      },
      {
        heading: '이중 수혜 가능 장학금',
        numbered: true,
        items: [{ text: '타 생활비(지원성) 장학금은 수령할 수 있음' }]
      }
    ]
  }
};

// 카드 목록은 details를 그대로 따라간다. 순서는 details에 적은 순서.
const programs = computed(() =>
  Object.entries(details).map(([key, d]) => ({ key, ...d }))
);

const detailKey = ref<string | null>(null);
const activeDetail = computed(() => (detailKey.value ? details[detailKey.value] : null));

const openDetail = (type: string) => {
  if (!details[type]) return;
  detailKey.value = type;
  document.body.style.overflow = 'hidden';
};

const closeDetail = () => {
  detailKey.value = null;
  document.body.style.overflow = '';
};

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && detailKey.value) closeDetail();
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
    title: '2026년도 하반기 장학금 지원 신청서 및 지도교수 추천서 양식',
    desc: '신라문화장학재단 장학금 신청을 위한 공통 제출 서식 팩 (신청서, 자기소개서, 추천서 합본)',
    format: 'PDF',
    size: '1.2 MB',
    date: '2026.07.20'
  },
  {
    id: 2,
    title: '개인정보 수집·이용 및 제3자 제공 동의서 (장학생용)',
    desc: '장학생 선발 심사 및 장학금 지급 처리를 위한 필수 제출 동의서 양식',
    format: 'PDF',
    size: '450 KB',
    date: '2026.07.15'
  },
  {
    id: 3,
    title: '2023사업연도 공익법인 결산서류 등의 공시',
    desc: '공익법인 결산 서류 및 기부금 모금·활용 실적에 관한 공시 보고서',
    format: 'PDF',
    size: '2.8 MB',
    date: '2024.04.25'
  },
  {
    id: 4,
    title: '2022사업연도 공익법인 결산서류 등의 공시',
    desc: '공익법인 결산 서류 및 기부금 모금·활용 실적에 관한 공시 보고서',
    format: 'PDF',
    size: '12.7 MB',
    date: '2023.04.28',
    file: '/docs/2022-settlement-disclosure.pdf',
    filename: '2022사업연도 공익법인 결산서류 등의 공시_신라문화장학재단.pdf'
  },
  {
    id: 5,
    title: '2021사업연도 공익법인 결산서류 등의 공시',
    desc: '공익법인 결산 서류 및 기부금 모금·활용 실적에 관한 공시 보고서',
    format: 'PDF',
    size: '6.9 MB',
    date: '2022.04.27',
    file: '/docs/2021-settlement-disclosure.pdf'
  }
];

onMounted(() => {
  updateTabFromHash();
  window.addEventListener('hashchange', updateTabFromHash);
  window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener('hashchange', updateTabFromHash);
  window.removeEventListener('keydown', handleKeyDown);
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

/* Programs Grid */
.programs-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 80px;
}

.program-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding: 30px;
  border-radius: 16px;
}

.program-badge {
  font-size: 3rem;
  font-weight: 800;
  color: rgba(6, 91, 137, 0.08);
  position: absolute;
  top: 20px;
  right: 30px;
}

.program-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 8px;
  margin-top: 10px;
}

.program-target {
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-weight: 500;
  margin-bottom: 20px;
}

.program-divider {
  width: 100%;
  height: 1px;
  background-color: var(--border-color);
  margin-bottom: 24px;
}

.program-details {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 35px;
  flex-grow: 1;
}

.program-details li {
  font-size: 0.95rem;
  color: var(--text-secondary);
  position: relative;
  padding-left: 18px;
  line-height: 1.5;
  font-weight: 300;
}

.program-details li::before {
  content: '•';
  color: var(--primary-color);
  font-size: 1.2rem;
  position: absolute;
  left: 0;
  top: -2px;
}

.card-btn {
  width: 100%;
  padding: 10px 0;
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
  .programs-grid, .news-grid { grid-template-columns: 1fr; }
}

@media (max-width: 768px) {
  .banner-desc { white-space: normal; }
}

/* Detail Modal */
.detail-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(12, 21, 36, 0.7);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 2000;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  /* 모달 안쪽에는 스크롤을 두지 않는다. 화면보다 커질 때만 여기서 전체가 움직인다. */
  overflow-y: auto;
}

.detail-modal-content {
  position: relative;
  width: 100%;
  max-width: 620px;
  /* flex-start + margin auto: 세로 가운데 정렬하면서, 넘칠 때 위쪽이 잘리지 않게 한다. */
  margin: auto;
  display: flex;
  flex-direction: column;
  background: var(--white);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.35);
  overflow: hidden;
}

.detail-modal-close {
  position: absolute;
  top: 14px;
  right: 14px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  color: var(--text-secondary);
  font-size: 1.7rem;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background var(--transition-fast), color var(--transition-fast), transform var(--transition-fast);
  z-index: 2010;
}

.detail-modal-close:hover {
  background: var(--primary-color);
  color: var(--white);
  transform: scale(1.08);
}

.detail-modal-header {
  padding: 32px 32px 10px;
  background: linear-gradient(135deg, rgba(6, 91, 137, 0.06) 0%, rgba(6, 91, 137, 0) 100%);
  border-bottom: 1px solid var(--border-color);
}

.detail-modal-badge {
  display: inline-block;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  opacity: 0.5;
  margin-bottom: 6px;
}

.detail-modal-title {
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.detail-modal-target {
  font-size: 0.95rem;
  color: var(--text-muted);
}

.detail-modal-body {
  padding: 4px 32px 12px;
}

/* style.css의 전역 `section { padding: 100px 0 }`가 모달 안까지 적용되므로 여기서 덮어쓴다. */
.detail-section {
  padding: 16px 0;
}

.detail-section + .detail-section {
  margin-top: 10px;
}

.detail-section-heading {
  font-size: 1.05rem;
  color: var(--primary-color);
  margin-bottom: 12px;
  padding-left: 12px;
  border-left: 3px solid var(--primary-color);
}

.detail-section-list {
  list-style: none;
  counter-reset: detail-item;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.detail-section-list > li {
  position: relative;
  padding-left: 20px;
  font-size: 0.98rem;
  line-height: 1.65;
  color: var(--text-secondary);
}

/* 하위 항목이 없는 단순 목록: 점 불릿 */
.detail-section-list > li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.62em;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--primary-color);
  opacity: 0.45;
}

/* 하위 항목이 있는 목록: 1) 2) 번호 */
.detail-section-list.numbered > li {
  padding-left: 26px;
}

.detail-section-list.numbered > li::before {
  counter-increment: detail-item;
  content: counter(detail-item) ')';
  top: 0;
  width: auto;
  height: auto;
  border-radius: 0;
  background: none;
  opacity: 1;
  color: var(--primary-color);
  font-weight: 600;
}

.detail-item-text {
  color: var(--text-primary);
  font-weight: 500;
}

.detail-sub-list {
  list-style: none;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.detail-sub-list li {
  display: flex;
  gap: 8px;
  font-size: 0.94rem;
  line-height: 1.6;
  color: var(--text-secondary);
}

.detail-sub-marker {
  flex-shrink: 0;
  color: var(--primary-color);
  opacity: 0.75;
}

.detail-item-caption {
  margin-top: 6px;
  padding-left: 22px;
  font-size: 0.87rem;
  line-height: 1.55;
  color: var(--text-muted);
}

.detail-note {
  margin-top: 20px;
  padding: 16px 18px;
  border-left: 3px solid var(--primary-color);
  border-radius: 0 8px 8px 0;
  background: rgba(6, 91, 137, 0.05);
}

.detail-note-line {
  position: relative;
  padding-left: 20px;
  font-size: 0.9rem;
  line-height: 1.65;
  color: var(--text-secondary);
}

.detail-note-line + .detail-note-line {
  margin-top: 6px;
}

.detail-note-mark {
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-weight: 600;
}

.detail-note-line + .detail-note-email {
  margin-top: 10px;
  font-weight: 500;
  color: var(--text-primary);
}

.detail-note-email a {
  color: var(--primary-color);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.detail-note-email a:hover {
  color: var(--secondary-color);
}

/* 전역 .btn(14px 28px, 0.95rem)보다 작게 */
.detail-modal-footer .btn {
  padding: 9px 20px;
  font-size: 0.875rem;
}

.detail-table-wrap {
  overflow-x: auto;   /* 좁은 화면에서 표가 삐져나오지 않도록 */
}

.detail-table {
  width: 100%;
  min-width: 440px;
  border-collapse: collapse;
  font-size: 0.93rem;
}

.detail-table th,
.detail-table td {
  border: 1px solid var(--border-color);
  padding: 12px 14px;
  text-align: center;
  vertical-align: middle;
}

.detail-table thead th {
  background: var(--primary-color);
  color: var(--white);
  font-weight: 600;
  letter-spacing: 0.04em;
}

.detail-table tbody th {
  width: 110px;
  background: rgba(6, 91, 137, 0.07);
  color: var(--primary-color);
  font-weight: 600;
  letter-spacing: 0.08em;
}

.detail-table td {
  color: var(--text-secondary);
  font-weight: 300;
  line-height: 1.7;
}

.detail-table-line {
  display: block;
}

.detail-table-note {
  display: block;
  margin-top: 8px;
  font-size: 0.86rem;
  color: var(--primary-color);
  font-weight: 500;
}

.detail-form-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 18px;
}

.detail-form-link {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 9px 16px;
  font-size: 0.85rem;
  font-weight: 500;
  text-decoration: none;
  white-space: nowrap;
}

.detail-download-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: fit-content;
  margin: 24px auto 4px;
  padding: 11px 20px;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  background-color: var(--primary-color);
  color: var(--white);
}

.detail-modal-footer {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  padding: 14px 32px;
  border-top: 1px solid var(--border-color);
  background: rgba(248, 250, 252, 0.7);
}

@media (max-width: 600px) {
  .detail-modal-header,
  .detail-modal-body,
  .detail-modal-footer {
    padding-left: 20px;
    padding-right: 20px;
  }

  .detail-modal-footer {
    flex-direction: column-reverse;
  }

  .detail-modal-footer .btn {
    width: 100%;
  }
}

/* Modal Fade Animation */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.25s ease;
}

.modal-fade-enter-active .detail-modal-content,
.modal-fade-leave-active .detail-modal-content {
  transition: transform 0.25s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-from .detail-modal-content,
.modal-fade-leave-to .detail-modal-content {
  transform: scale(0.96);
}
</style>
