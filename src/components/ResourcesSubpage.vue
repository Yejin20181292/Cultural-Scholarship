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
            <!-- Program 1 -->
            <div class="glass-card program-card">
              <div class="program-badge title-serif">01</div>
              <h3 class="program-title">장학생 자격 유지 조건</h3>
              <p class="program-target">대상: 국내 소재 대학교 재학생</p>
              <div class="program-divider"></div>
              <ul class="program-details">
                <li>직전 학기 평균 학점 4.5만점 기준 3.0 이상</li>
                <li>직전 학기 평균 학점 4.3 만점 기준 4.5 환산 3.0 이상</li>
                <li>매년 연말 재단 장학생 성과 전시/발표 기회</li>
              </ul>
              <button class="btn btn-outline card-btn" @click="openCheck('youth')">자세히 보기</button>
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
              <button class="btn btn-outline card-btn" @click="openCheck('heritage')">자세히 보기</button>
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
              <button class="btn btn-outline card-btn" @click="openCheck('global')">자세히 보기</button>
            </div>
          </div>

          <!-- Interactive Calculator / Checker -->
          <div class="calculator-wrapper glass-card">
            <h3 class="calc-title title-serif">나의 장학금 지원 자격 알아보기</h3>
            <p class="calc-desc">간단히 정보를 선택해 지원 가능한 장학 프로그램을 실시간으로 확인해보세요.</p>
            
            <div class="calc-form">
              <div class="form-group">
                <label>학력 상태</label>
                <select v-model="form.education">
                  <option value="">선택해주세요</option>
                  <option value="school">초·중·고교 재학생</option>
                  <option value="college">대학교 재학생</option>
                  <option value="graduate">대학원생 이상</option>
                </select>
              </div>
              
              <div class="form-group">
                <label>예술 분야</label>
                <select v-model="form.category">
                  <option value="">선택해주세요</option>
                  <option value="fine-arts">순수예술 (미술, 음악, 무용, 문학)</option>
                  <option value="traditional">전통문화 (국악, 전통공예, 무형문화재)</option>
                  <option value="modern">실용예술 및 미디어아트</option>
                </select>
              </div>
              
              <div class="form-group">
                <label>희망 활동</label>
                <select v-model="form.location">
                  <option value="">선택해주세요</option>
                  <option value="domestic">국내 창작 및 학업</option>
                  <option value="overseas">해외 유학 및 글로벌 공모/전시</option>
                </select>
              </div>
            </div>

            <div class="calc-result" v-if="resultText">
              <div class="result-box">
                <h4 class="result-badge">진단 결과</h4>
                <p class="result-title">{{ resultTitle }}</p>
                <p class="result-desc">{{ resultText }}</p>
                <a href="#" class="btn btn-primary result-btn">온라인 신청하기</a>
              </div>
            </div>
          </div>
        </div>

        <!-- 2. 소식 Tab -->
        <div v-if="activeTab === 'news'" class="tab-pane reveal active">
          <div class="news-grid">
            <div v-for="item in news" :key="item.id" class="news-card glass-card">
              <div class="news-img-placeholder">
                <div class="news-img-overlay">
                  <span class="news-badge">{{ item.category }}</span>
                </div>
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

        <!-- 3. 결산자료 Tab -->
        <div v-if="activeTab === 'archive'" class="tab-pane reveal active">
          <p class="archive-notice">국세청 홈택스 홈페이지 내 [국세청 홈택스 &gt; 공익법인결산서류공시 &gt; 공익법인 결산서류등 공시]에서도 열람하실 수 있습니다.</p>
          <div class="resources-grid">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch, onMounted, onUnmounted } from 'vue';

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
};

const setActiveTab = (tabId: string) => {
  activeTab.value = tabId;
  window.location.hash = `#resources-sub/${tabId}`;
};

// Form & Calculator State
const form = reactive({
  education: '',
  category: '',
  location: ''
});

const resultTitle = ref('');
const resultText = ref('');

const openCheck = (type: string) => {
  if (type === 'youth') {
    form.education = 'school';
    form.category = 'fine-arts';
    form.location = 'domestic';
  } else if (type === 'heritage') {
    form.education = 'college';
    form.category = 'traditional';
    form.location = 'domestic';
  } else if (type === 'global') {
    form.education = 'college';
    form.category = 'fine-arts';
    form.location = 'overseas';
  }
};

watch(
  () => ({ ...form }),
  (newVal) => {
    if (!newVal.education || !newVal.category || !newVal.location) {
      resultTitle.value = '';
      resultText.value = '';
      return;
    }

    if (newVal.location === 'overseas') {
      resultTitle.value = '★ 글로벌 아티스트 장학금 대상';
      resultText.value = '해외 예술대학(원) 재학/진학 예정자로서 세계 무대에 도전하기에 아주 적합합니다. 연간 최대 2,000만 원 및 콩쿠르 여비가 지원됩니다.';
    } else if (newVal.category === 'traditional') {
      resultTitle.value = '★ 전통문화 계승 장학금 대상';
      resultText.value = '전통문화 전수자 및 국악 전공 대학(원)생 조건에 적합합니다. 무형문화재 전수 교육비 및 매 학기 등록금 지원이 가능합니다.';
    } else if (newVal.education === 'school') {
      resultTitle.value = '★ 문화예술 꿈나무 장학금 대상';
      resultText.value = '초·중·고교 재학생 예능 인재 조건에 부합합니다. 매월 50만 원의 창작활동 보조비와 1:1 명사 멘토링이 연계됩니다.';
    } else {
      resultTitle.value = '★ 일반 창작 육성 및 멘토링 프로그램 지원 대상';
      resultText.value = '신라문화장학재단의 일반 공모 프로그램(전시 지원 및 멘토링 사업)에 적합합니다. 추후 공지사항을 참조해 포트폴리오를 제출해주세요.';
    }
  }
);

// News & Resources Sample Data
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
    title: '2021사업연도 공익법인 결산서류 등의 공시',
    desc: '재단 설립 정관 및 장학생 수혜 자격 유지, 의무사항에 관한 세부 규정',
    format: 'PDF',
    size: '880 KB',
    date: '2026.01.10'
  }
];

onMounted(() => {
  updateTabFromHash();
  window.addEventListener('hashchange', updateTabFromHash);
});

onUnmounted(() => {
  window.removeEventListener('hashchange', updateTabFromHash);
});
</script>

<style scoped>
.subpage-wrapper {
  padding-bottom: 80px;
}

.sub-banner {
  position: relative;
  background-image: url('../assets/history_founder.png');
  background-size: cover;
  background-position: center 30%;
  padding: 140px 0 100px;
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

.graphic-logo {
  font-size: 2.2rem;
  color: rgba(255, 255, 255, 0.15);
  font-weight: 800;
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

@media (max-width: 1024px) {
  .programs-grid, .news-grid { grid-template-columns: 1fr; }
  .calc-form { grid-template-columns: 1fr; }
}

@media (max-width: 768px) {
  .banner-desc { white-space: normal; }
}
</style>
