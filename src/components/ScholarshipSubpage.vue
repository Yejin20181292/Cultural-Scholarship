<template>
  <div class="subpage-wrapper">
    <!-- Hero Banner -->
    <div class="sub-banner">
      <div class="container banner-container">
        <span class="banner-subtitle">SCHOLARSHIP PROGRAMS</span>
        <h1 class="banner-title title-serif">장학사업</h1>
        <p class="banner-desc">신라문화장학재단이 지원하는 분야별 장학 프로그램 및 지원자격 진단을 안내해드립니다.</p>
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
              <button class="btn btn-outline card-btn" @click="openCheck('youth')">자격 진단하기</button>
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
              <button class="btn btn-outline card-btn" @click="openCheck('heritage')">자격 진단하기</button>
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
              <button class="btn btn-outline card-btn" @click="openCheck('global')">자격 진단하기</button>
            </div>
          </div>
        </div>

        <!-- 2. 지원자격 진단 Tab -->
        <div v-if="activeTab === 'calc'" class="tab-pane reveal active">
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
                <a href="#" class="btn btn-primary result-btn" @click.prevent="goToApply">온라인 신청하기</a>
              </div>
            </div>
          </div>
        </div>

        <!-- 3. 신청 안내 Tab -->
        <div v-if="activeTab === 'guide'" class="tab-pane reveal active">
          <div class="guide-wrapper glass-card">
            <h3 class="guide-title title-serif">장학금 선발 절차 및 신청 안내</h3>
            <p class="guide-desc">신라문화장학재단은 매년 공정한 심사를 통해 미래의 문화 인재를 선발합니다.</p>
            
            <div class="process-steps">
              <div class="step-card">
                <div class="step-num">01</div>
                <h4 class="step-title">공모 및 접수</h4>
                <p class="step-text">온라인 신청서 및 필수 제출 서류(추천서, 학업계획서 등) 작성 후 접수</p>
              </div>
              <div class="step-arrow">→</div>
              <div class="step-card">
                <div class="step-num">02</div>
                <h4 class="step-title">서류 심사</h4>
                <p class="step-text">재단 심사위원회의 서류 검토 및 적격성/창작 역량 평가</p>
              </div>
              <div class="step-arrow">→</div>
              <div class="step-card">
                <div class="step-num">03</div>
                <h4 class="step-title">면접/실기 전형</h4>
                <p class="step-text">분야별 전문가 심사위원단의 1:1 심층 면접 및 포트폴리오 심사</p>
              </div>
              <div class="step-arrow">→</div>
              <div class="step-card">
                <div class="step-num">04</div>
                <h4 class="step-title">최종 발표 및 증서 수여</h4>
                <p class="step-text">최종 합격자 공지 및 수여식을 통한 장학금 지급 시작</p>
              </div>
            </div>

            <div class="guide-notice-box">
              <h4>💡 꼭 확인하세요!</h4>
              <ul>
                <li>장학금 지급 관련 상세 양식은 <strong>[자료실]</strong>에서 다운로드 가능합니다.</li>
                <li>모든 제출 서류는 공고 마감일 18:00까지 접수된 건에 한하여 유효합니다.</li>
              </ul>
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
  { id: 'programs', name: '장학 프로그램' },
  { id: 'calc', name: '지원자격 진단' },
  { id: 'guide', name: '신청 안내' }
];

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

const form = reactive({
  education: '',
  category: '',
  location: ''
});

const resultTitle = ref('');
const resultText = ref('');

const openCheck = (type: string) => {
  setActiveTab('calc');
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

const goToApply = () => {
  alert('장학금 온라인 신청 양식 작성 페이지로 이동합니다.');
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
  .programs-grid { grid-template-columns: 1fr; }
  .calc-form { grid-template-columns: 1fr; }
  .process-steps { flex-direction: column; }
  .step-arrow { transform: rotate(90deg); margin: 8px 0; }
}
</style>
