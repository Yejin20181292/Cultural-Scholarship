<template>
  <div class="subpage-wrapper">
    <!-- Hero Banner -->
    <div class="sub-banner">
      <div class="container banner-container">
        <span class="banner-subtitle">SCHOLARSHIP PROGRAMS</span>
        <h1 class="banner-title title-serif">재단사업</h1>
        <p class="banner-desc">신라문화장학재단이 지원하는 분야별 장학 프로그램과 사업실적을 안내해드립니다.</p>
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
        <!-- 1. 장학 프로그램 Tab -->
        <div v-if="activeTab === 'programs'" class="tab-pane reveal active">
          <div class="programs-grid">
            <!-- Program 1 -->
            <div class="glass-card program-card">
              <div class="program-badge title-serif">01</div>
              <h3 class="program-title">문화예술 꿈나무 장학금</h3>
              <p class="program-target">대상: 초·중·고교 재능 보유 학생</p>
              <div class="program-divider"></div>
              <ul class="program-details">
                <li>월 50만 원 학업/창작 장려금 지원</li>
                <li>분야별 예술계 거장과의 1:1 멘토링 매칭</li>
                <li>매년 연말 재단 장학생 성과 전시/발표 기회</li>
              </ul>
            </div>

            <!-- Program 2 -->
            <div class="glass-card program-card">
              <div class="program-badge title-serif">02</div>
              <h3 class="program-title">전통문화 계승 장학금</h3>
              <p class="program-target">대상: 국악·전통공예·무형문화재 전수자</p>
              <div class="program-divider"></div>
              <ul class="program-details">
                <li>학기당 등록금 최대 500만 원 지원</li>
                <li>무형문화재 전수 교육 및 이수 활동비 지원</li>
                <li>해외 전통예술 문화교류 쇼케이스 기회 제공</li>
              </ul>
            </div>

            <!-- Program 3 -->
            <div class="glass-card program-card">
              <div class="program-badge title-serif">03</div>
              <h3 class="program-title">글로벌 아티스트 장학금</h3>
              <p class="program-target">대상: 해외 예술대학(원) 진학/재학생</p>
              <div class="program-divider"></div>
              <ul class="program-details">
                <li>연간 최대 2,000만 원 체재비 및 학비 후원</li>
                <li>세계 최고 권위 콩쿠르/글로벌 전시 참가 경비 지원</li>
                <li>글로벌 갤러리 및 매니지먼트 소개 네트워킹</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 2. 사업실적 Tab -->
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

        <!-- 3. 선발인원 및 지급 현황 Tab -->
        <div v-if="activeTab === 'awards'" class="tab-pane reveal active">
          <div class="glass-card awards-card">
            <h2 class="awards-title">장학생선발인원 및 장학금지급현황 &lt;년도별&gt;</h2>
            <p class="awards-unit">(단위 : 명, 원)</p>

            <div class="awards-table-wrapper">
              <table class="awards-table">
                <thead>
                  <tr>
                    <th scope="col">년월일</th>
                    <th scope="col">선발인원</th>
                    <th scope="col">누계</th>
                    <th scope="col">지급금액</th>
                    <th scope="col">누계</th>
                    <th scope="col">비고</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(row, i) in awardRows" :key="i">
                    <td class="cell-date">{{ row.date }}</td>
                    <td class="cell-count">{{ row.count }}</td>
                    <td class="cell-count">{{ row.countTotal }}</td>
                    <td class="cell-money">{{ row.amount }}</td>
                    <td class="cell-money">{{ row.amountTotal }}</td>
                    <td class="cell-note">{{ row.note }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- 4. 장학생 준수사항 Tab -->
        <div v-if="activeTab === 'rules'" class="tab-pane reveal active">
          <div class="programs-grid">
            <div v-for="program in detailPrograms" :key="program.key" class="glass-card program-card">
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
import historyPhoto1 from '../assets/history_photo1.jpg';
import historyPhoto2 from '../assets/history_photo2.jpg';

defineEmits(['back']);

const tabs = [
  { id: 'programs', name: '장학 프로그램' },
  { id: 'performance', name: '사업실적' },
  { id: 'awards', name: '선발인원 및 지급 현황' },
  { id: 'rules', name: '장학생 준수사항' }
];

// 대괄호가 붙은 선발인원([39] 등)은 기존 장학생에게 이어서 지급한 인원이라 누계에 더하지 않는다.
const awardRows = [
  { date: '2014. 02. 26 <제1기>', count: '39', countTotal: '39', amount: '117,000,000', amountTotal: '117,000,000', note: '고등학생' },
  { date: '2014. 02. 26 <제1기>', count: '40', countTotal: '79', amount: '160,000,000', amountTotal: '277,000,000', note: '대학생' },
  { date: '2014. 08. 26 <제1기>', count: '[39]', countTotal: '79', amount: '156,000,000', amountTotal: '433,000,000', note: '대학생' },
  { date: '2015. 02. 25 <제2기>', count: '69', countTotal: '148', amount: '276,000,000', amountTotal: '709,000,000', note: '대학생' },
  { date: '2015. 08. 26 <제2기>', count: '[68]', countTotal: '148', amount: '272,000,000', amountTotal: '981,000,000', note: '대학생' },
  { date: '2016. 02. 25 <제3기>', count: '60', countTotal: '208', amount: '240,000,000', amountTotal: '1,221,000,000', note: '대학생' },
  { date: '2016. 08. 24 <제3기>', count: '[55]', countTotal: '208', amount: '220,000,000', amountTotal: '1,441,000,000', note: '대학생' },
  { date: '2017. 02. 23 <제4기>', count: '50', countTotal: '258', amount: '200,000,000', amountTotal: '1,641,000,000', note: '대학생' },
  { date: '2017. 08. 23 <제4기>', count: '[49]', countTotal: '258', amount: '196,000,000', amountTotal: '1,837,000,000', note: '대학생' }
];

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
const detailPrograms = computed(() =>
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
  if (e.key !== 'Escape') return;
  if (previewImage.value) {
    closeImageModal();
  } else if (detailKey.value) {
    closeDetail();
  }
};

const getTabFromHash = (): string => {
  const hash = window.location.hash;
  if (hash.startsWith('#scholarship-sub')) {
    const parts = hash.split('/');
    if (parts.length > 1 && tabs.some(t => t.id === parts[1])) {
      return parts[1];
    }
  }
  return 'programs';
};

const activeTab = ref(getTabFromHash());

const updateTabFromHash = () => {
  activeTab.value = getTabFromHash();
};

const setActiveTab = (tabId: string) => {
  activeTab.value = tabId;
  window.location.hash = `#scholarship-sub/${tabId}`;
};

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
  background-image: url('../assets/about_banner_ceremony.jpg');
  background-size: cover;
  /* 인물들이 사진 중앙 아래쪽에 모여 있어 그 부분이 보이도록 맞춘다. */
  background-position: center 35%;
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
  margin-bottom: 40px;
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

/* Calculator Style */
.calculator-wrapper {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px;
  border-radius: 16px;
  text-align: center;
}

.calc-title {
  font-size: 1.6rem;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.calc-desc {
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin-bottom: 40px;
  font-weight: 300;
}

.calc-form {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 30px;
  text-align: left;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--primary-color);
}

.form-group select {
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  padding: 12px;
  border-radius: 6px;
  font-size: 0.95rem;
  outline: none;
}

.result-box {
  background: rgba(6, 91, 137, 0.04);
  border: 1px solid rgba(6, 91, 137, 0.15);
  border-radius: 8px;
  padding: 30px;
  text-align: center;
}

.result-badge {
  display: inline-block;
  background-color: var(--primary-color);
  color: #ffffff;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 20px;
  margin-bottom: 16px;
}

.result-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--secondary-color);
  margin-bottom: 12px;
}

.result-desc {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 24px;
}

/* Performance (사업실적) */
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
  cursor: pointer;
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
  position: relative;
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

.photo-zoom-badge {
  position: absolute;
  bottom: 12px;
  right: 12px;
  background: rgba(15, 23, 42, 0.75);
  color: #ffffff;
  padding: 6px 12px;
  display: flex;
  align-items: center;
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

/* ===== 선발인원 및 지급 현황 ===== */
/* 표가 6열이라 perf-main-card(800px)로는 좁다. 가로 스크롤이 생기지 않도록 넓게 잡고 가운데 둔다. */
.awards-card {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 45px 40px;
}

/* 제목 위의 짧은 선은 원본 표 서식을 따르되 색만 브랜드 색으로 맞춘다. */
.awards-title {
  position: relative;
  padding-top: 14px;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
}

.awards-title::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 46px;
  height: 3px;
  background: var(--primary-color, #065b89);
}

.awards-unit {
  margin-top: 10px;
  margin-bottom: 8px;
  text-align: right;
  font-size: 0.85rem;
  font-weight: 300;
  color: var(--text-secondary);
}

.awards-table-wrapper {
  width: 100%;
  overflow-x: auto;
}

.awards-table {
  width: 100%;
  border-collapse: collapse;
}

.awards-table thead th {
  padding: 14px 10px;
  border-top: 2px solid var(--primary-color, #065b89);
  border-bottom: 1px solid var(--primary-color, #065b89);
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary);
  text-align: center;
  white-space: nowrap;
}

.awards-table td {
  padding: 14px 10px;
  font-size: 0.95rem;
  font-weight: 400;
  color: var(--text-primary);
  text-align: center;
  white-space: nowrap;
}

.awards-table tbody tr:last-child td {
  border-bottom: 1px solid var(--border-color);
}

.awards-table .cell-date,
.awards-table .cell-note {
  font-weight: 500;
}

.awards-table .cell-count,
.awards-table .cell-money {
  font-family: 'Inter', -apple-system, sans-serif;
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

.row-total .cell-type,
.row-total .cell-amount {
  font-weight: 700;
  color: var(--text-primary);
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

/* Guide Wrapper */
.guide-wrapper {
  max-width: 960px;
  margin: 0 auto;
  padding: 40px;
  border-radius: 16px;
  text-align: center;
}

.guide-title {
  font-size: 1.6rem;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.guide-desc {
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin-bottom: 40px;
  font-weight: 300;
}

.process-steps {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 40px;
}

.step-card {
  flex: 1;
  background: rgba(6, 91, 137, 0.03);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 24px 16px;
  text-align: center;
}

.step-num {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--primary-color);
  margin-bottom: 10px;
}

.step-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.step-text {
  font-size: 0.85rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

.step-arrow {
  font-size: 1.4rem;
  color: var(--primary-color);
  font-weight: 700;
}

.guide-notice-box {
  background: rgba(6, 91, 137, 0.05);
  border-left: 4px solid var(--primary-color);
  padding: 20px 24px;
  border-radius: 0 12px 12px 0;
  text-align: left;
}

.guide-notice-box h4 {
  font-size: 1rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 8px;
}

.guide-notice-box ul {
  padding-left: 20px;
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .awards-card { padding: 28px 18px; }
  .programs-grid { grid-template-columns: 1fr; }
  .calc-form { grid-template-columns: 1fr; }
  .process-steps { flex-direction: column; }
  .step-arrow { transform: rotate(90deg); margin: 8px 0; }
  .perf-main-card { padding: 28px 18px; }
  .perf-photos-grid { grid-template-columns: 1fr; gap: 18px; }
  .photo-img-wrapper { height: 200px; }
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
</style>
