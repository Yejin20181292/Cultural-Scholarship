<template>
  <section id="programs" class="programs-section">
    <div class="container">
      <div class="section-header reveal" ref="headerRef">
        <span class="section-subtitle">SCHOLARSHIP PROGRAMS</span>
        <h2 class="section-title">꿈을 이루는 장학 사업</h2>
        <p class="section-description">
          자신의 분야에서 최고를 향해 나아가는 예술인들이 경제적인 부담 없이 창작 활동에 
          전념할 수 있도록 세분화된 맞춤형 장학 혜택을 제공합니다.
        </p>
      </div>

      <div class="programs-grid">
        <!-- Program 1 -->
        <div class="glass-card program-card reveal" ref="card1Ref">
          <div class="program-badge title-serif">01</div>
          <h3 class="program-title">문화예술 꿈나무 장학금</h3>
          <p class="program-target">대상: 초·중·고교 재능 보유 학생</p>
          <div class="program-divider"></div>
          <ul class="program-details">
            <li>월 50만 원 학업/창작 장려금 지원</li>
            <li>분야별 예술계 거장과의 1:1 멘토링 매칭</li>
            <li>매년 연말 재단 장학생 성과 전시/발표 기회</li>
          </ul>
          <button class="btn btn-outline card-btn" @click="openCheck('youth')">자세히 보기</button>
        </div>

        <!-- Program 2 -->
        <div class="glass-card program-card reveal" ref="card2Ref">
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
        <div class="glass-card program-card reveal" ref="card3Ref">
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
      <div class="calculator-wrapper glass-card reveal" ref="calcRef">
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
  </section>
</template>

<script setup lang="ts">
import { ref, reactive, watch, onMounted } from 'vue';

const headerRef = ref<HTMLElement | null>(null);
const card1Ref = ref<HTMLElement | null>(null);
const card2Ref = ref<HTMLElement | null>(null);
const card3Ref = ref<HTMLElement | null>(null);
const calcRef = ref<HTMLElement | null>(null);

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
      resultText.value = '재단의 일반 공모 프로그램(전시 지원 및 멘토링 사업)에 적합합니다. 추후 공지사항을 참조해 포트폴리오를 제출해주세요.';
    }
  }
);

onMounted(() => {
  const elements = [headerRef.value, card1Ref.value, card2Ref.value, card3Ref.value, calcRef.value];
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  elements.forEach(el => {
    if (el) observer.observe(el);
  });
});
</script>

<style scoped>
.programs-section {
  background-color: #0d0f14;
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
}

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
}

.program-badge {
  font-size: 3rem;
  font-weight: 800;
  color: rgba(197, 168, 128, 0.08);
  position: absolute;
  top: 20px;
  right: 30px;
  transition: all var(--transition-normal);
}

.program-card:hover .program-badge {
  color: rgba(197, 168, 128, 0.2);
  transform: translateY(-5px);
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
  border: 1px solid var(--border-color-hover);
  background: linear-gradient(135deg, rgba(20, 21, 28, 0.9) 0%, rgba(13, 15, 20, 0.9) 100%);
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
  background-color: rgba(11, 12, 16, 0.8);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  padding: 12px;
  border-radius: 4px;
  font-size: 0.95rem;
  font-family: inherit;
  outline: none;
  transition: all var(--transition-fast);
}

.form-group select:focus {
  border-color: var(--primary-color);
  box-shadow: 0 0 8px rgba(197, 168, 128, 0.15);
}

.calc-result {
  margin-top: 40px;
  animation: fade-in-up 0.5s ease forwards;
}

.result-box {
  background: rgba(197, 168, 128, 0.05);
  border: 1px solid rgba(197, 168, 128, 0.2);
  border-radius: 6px;
  padding: 30px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.result-badge {
  display: inline-block;
  background-color: var(--primary-color);
  color: var(--bg-color);
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
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  word-break: keep-all;
}

.result-btn {
  padding: 10px 30px;
  font-size: 0.9rem;
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 1024px) {
  .programs-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .calc-form {
    grid-template-columns: 1fr;
    gap: 15px;
  }
}
</style>
