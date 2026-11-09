<template>
  <section id="about" class="about-section">
    <div class="container">
      <div class="section-header reveal" ref="headerRef">
        <span class="section-subtitle">FOUNDATION VISION</span>
        <h2 class="section-title">함께 미래를 꽃피우는 재단</h2>
        <p class="section-description">
          신라문화장학재단은 학생들의 미래와 비전을 위해 배움의 길을 열어주고,
          어려움 없이 도전할 수 있도록 응원하며 마음껏 성장할 수 있는 디딤돌이 되고자 합니다.
        </p>
      </div>

      <div class="vision-grid">
        <!-- Vision Item 1 -->
        <div
          class="glass-card vision-card reveal"
          ref="card1Ref"
          role="button"
          tabindex="0"
          aria-label="설립취지 페이지로 이동"
          @click="goTab('founding')"
          @keydown.enter.prevent="goTab('founding')"
          @keydown.space.prevent="goTab('founding')"
        >
          <div class="card-icon-wrapper">
            <svg class="card-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
            </svg>
          </div>
          <h3 class="card-title">설립취지 (Mission)</h3>
          <p class="card-desc">
            경제적 어려움으로 배움의 기회를 놓치는 재능 있는 학생들에게 장학금을 지급하여, 교육받을 권리를 보장하고 그 재능이 국가와 사회에 쓰이도록 돕고자 설립되었습니다.
          </p>
        </div>

        <!-- Vision Item 2 -->
        <div
          class="glass-card vision-card reveal"
          ref="card2Ref"
          role="button"
          tabindex="0"
          aria-label="연혁 페이지로 이동"
          @click="goTab('history')"
          @keydown.enter.prevent="goTab('history')"
          @keydown.space.prevent="goTab('history')"
        >
          <div class="card-icon-wrapper">
            <svg class="card-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
          </div>
          <h3 class="card-title">연혁 (History)</h3>
          <p class="card-desc">
            1978년 3월 11일 설립 이후 오늘에 이르기까지, 재단이 걸어온 발자취와 주요 성과를 연도별로 기록하고 있습니다.
          </p>
        </div>

        <!-- Vision Item 3 -->
        <div
          class="glass-card vision-card reveal"
          ref="card3Ref"
          role="button"
          tabindex="0"
          aria-label="자산현황 페이지로 이동"
          @click="goTab('assets')"
          @keydown.enter.prevent="goTab('assets')"
          @keydown.space.prevent="goTab('assets')"
        >
          <div class="card-icon-wrapper">
            <svg class="card-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="20" x2="18" y2="10"/>
              <line x1="12" y1="20" x2="12" y2="4"/>
              <line x1="6" y1="20" x2="6" y2="14"/>
            </svg>
          </div>
          <h3 class="card-title">자산현황 (Assets)</h3>
          <p class="card-desc">
            총 자산 500억원을 예금·부동산·유가증권으로 나누어 운용하며, 장학사업이 흔들림 없이 이어지도록 기반을 지켜가고 있습니다.
          </p>
        </div>
      </div>

      <div class="about-summary glass-card reveal" ref="summaryRef">
        <div class="summary-content">
          <h3 class="summary-title title-serif">“꿈을 꾸는 학생들의 모든 순간에 함께하겠습니다”</h3>
          <p class="summary-text">
            신라문화장학재단은 설립 이래 다방면에서 성장 가능성이 무궁무진한 학생들을 지속해서 든든히 지탱해왔습니다. 우리는 단순한 재정적 원조를 넘어 사회에 활력을 불어넣는 지속 가능한 동반자가 되겠습니다.
          </p>
          <div class="summary-actions">
            <button class="btn btn-outline" @click="$emit('read-more')">재단소개 자세히 보기 <span class="arrow">→</span></button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const emit = defineEmits(['read-more', 'navigate']);

// 비전 카드를 누르면 재단소개의 해당 탭으로 이동한다.
const goTab = (tab: string) => emit('navigate', 'about-sub', tab);

const headerRef = ref<HTMLElement | null>(null);
const card1Ref = ref<HTMLElement | null>(null);
const card2Ref = ref<HTMLElement | null>(null);
const card3Ref = ref<HTMLElement | null>(null);
const summaryRef = ref<HTMLElement | null>(null);

onMounted(() => {
  const elements = [headerRef.value, card1Ref.value, card2Ref.value, card3Ref.value, summaryRef.value];
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  elements.forEach(el => {
    if (el) observer.observe(el);
  });
});
</script>

<style scoped>
.about-section {
  background-color: var(--bg-color);
}

.vision-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 60px;
}

.vision-card {
  text-align: left;
  cursor: pointer;
}

/* .glass-card:hover 의 살짝 떠오르는 효과는 전역의 .reveal.active 가 덮어쓴다.
   (둘 다 우선순위가 같고 .reveal.active 가 뒤에 선언되어 있다)
   카드가 눌리는 요소가 되었으므로 scoped 규칙으로 되살린다. */
.vision-card:hover {
  transform: translateY(-5px);
}

/* 키보드로 이동할 때만 테두리를 보여준다. */
.vision-card:focus-visible {
  outline: 2px solid var(--primary-color);
  outline-offset: 3px;
}

.card-icon-wrapper {
  width: 50px;
  height: 50px;
  border-radius: 4px;
  background-color: rgba(197, 168, 128, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  border: 1px solid var(--border-color);
  color: var(--primary-color);
  transition: all var(--transition-normal);
}

.vision-card:hover .card-icon-wrapper {
  background-color: var(--primary-color);
  color: var(--bg-color);
  transform: rotate(5deg) scale(1.05);
}

.card-icon {
  width: 26px;
  height: 26px;
}

.card-title {
  font-size: 1.3rem;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.card-desc {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.7;
  word-break: keep-all;
  font-weight: 300;
}

.about-summary {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px;
  border: 1px dashed var(--border-color-hover);
  background: radial-gradient(circle at center, rgba(197, 168, 128, 0.04) 0%, transparent 100%), var(--bg-card);
}

.summary-content {
  max-width: 800px;
  text-align: center;
}

.summary-title {
  color: var(--secondary-color);
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 20px;
}

.summary-text {
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.8;
  word-break: keep-all;
  font-weight: 300;
}

.summary-actions {
  margin-top: 30px;
  text-align: center;
}

.summary-actions .btn {
  font-size: 0.9rem;
  padding: 10px 24px;
}

.summary-actions .btn .arrow {
  margin-left: 6px;
  transition: transform var(--transition-fast);
  display: inline-block;
}

.summary-actions .btn:hover .arrow {
  transform: translateX(4px);
}

@media (max-width: 1024px) {
  .vision-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .vision-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .about-summary {
    padding: 30px;
  }
  
  .summary-title {
    font-size: 1.25rem;
  }
}
</style>
