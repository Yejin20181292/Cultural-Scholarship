<template>
  <section id="about" class="about-section">
    <div class="container">
      <div class="section-header reveal" ref="headerRef">
        <span class="section-subtitle">FOUNDATION VISION</span>
        <h2 class="section-title">문화와 미래를 꽃피우는 재단</h2>
        <p class="section-description">
          문화장학재단은 예술적 가치를 보존하고 창의적인 도전을 장려하며, 
          재능 있는 인재들이 세상을 밝히는 아티스트로 성장할 수 있는 디딤돌이 되고자 합니다.
        </p>
      </div>

      <div class="vision-grid">
        <!-- Vision Item 1 -->
        <div class="glass-card vision-card reveal" ref="card1Ref">
          <div class="card-icon-wrapper">
            <svg class="card-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <h3 class="card-title">가치 보존 (Heritage)</h3>
          <p class="card-desc">
            우리의 역사와 혼이 담긴 전통 예술 및 고유 문화를 보존하고, 이를 계승해 나가는 전승자들의 소중한 꿈을 지원합니다.
          </p>
        </div>

        <!-- Vision Item 2 -->
        <div class="glass-card vision-card reveal" ref="card2Ref">
          <div class="card-icon-wrapper">
            <svg class="card-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
          </div>
          <h3 class="card-title">창의성 촉진 (Creativity)</h3>
          <p class="card-desc">
            기존의 틀을 깨는 혁신적이고 독창적인 문화예술 프로젝트를 후원하며, 장학생들이 자유롭게 시도하고 질문할 기회를 제공합니다.
          </p>
        </div>

        <!-- Vision Item 3 -->
        <div class="glass-card vision-card reveal" ref="card3Ref">
          <div class="card-icon-wrapper">
            <svg class="card-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
          </div>
          <h3 class="card-title">세계화 (Global Growth)</h3>
          <p class="card-desc">
            대한민국의 문화예술이 글로벌 무대에서 빛날 수 있도록, 세계 유수 기관과의 연계 프로그램 및 국제 네트워킹 기회를 지원합니다.
          </p>
        </div>
      </div>

      <div class="about-summary glass-card reveal" ref="summaryRef">
        <div class="summary-content">
          <h3 class="summary-title title-serif">“예술을 꿈꾸는 모든 순간에 함께하겠습니다”</h3>
          <p class="summary-text">
            문화장학재단은 설립 이래 1,200여 명의 누적 장학생을 배출하며, 순수 미술, 음악, 전통 공예, 공연 예술 등 다방면에서 활약하는 창작자들을 지속해서 든든히 지탱해왔습니다. 우리는 단순한 재정적 원조를 넘어 창작 생태계의 활력을 불어넣는 지속 가능한 동반자가 되겠습니다.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

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
