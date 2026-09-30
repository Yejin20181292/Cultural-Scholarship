<template>
  <section class="hero-section">
    <!-- TODO 임시 미리보기: 워터마크 있는 구매 전 이미지 2장. 구매 후 hero_bg.png 한 장으로 되돌릴 것 -->
    <div class="hero-bg-wrapper">
      <div class="hero-slider-track" :class="{ 'no-transition': !isAnimating }"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }" @transitionend="onTransitionEnd">
        <div v-for="(src, i) in trackSlides" :key="i" class="hero-slide">
          <img :src="src" alt="Cultural Art Background" class="hero-bg-img" />
        </div>
      </div>
      <div class="hero-overlay"></div>
    </div>

    <button class="hero-nav prev" type="button" aria-label="이전 배경" @click="prevSlide">
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
    </button>
    <button class="hero-nav next" type="button" aria-label="다음 배경" @click="nextSlide">
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
    </button>
    <div class="hero-dots">
      <button v-for="(src, i) in slides" :key="i" type="button" class="hero-dot"
        :class="{ active: i === activeDot }" :aria-label="`${i + 1}번째 배경`" @click="goSlide(i)"></button>
    </div>
    
    <div class="container hero-container">
      <div class="hero-content">
        <span class="hero-subtitle title-serif floating">SILLA CULTURAL SCHOLARSHIP FOUNDATION</span>
        <h1 class="hero-title title-serif">
          신라문화장학재단이<br />
          <span class="highlight">함께하겠습니다.</span>
        </h1>
        <p class="hero-description">
          신라문화장학재단은 재능 있는 예술 인재들이 경제적 어려움 없이 창의성과 잠재력을 발휘하여 
          글로벌 문화 리더로 성장할 수 있도록 든든한 날개가 되어 줍니다.
        </p>
        <div class="hero-actions">
          <a href="#programs" class="btn btn-primary">
            장학금 지원 안내
            <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
          <a href="#" class="btn btn-outline" @click.prevent="$emit('navigate', 'about-sub')">재단 소개</a>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
// TODO 임시: 워터마크 있는 구매 전 이미지. 구매 후 이 import와 슬라이더를 정리할 것
import heroPreview1 from '../assets/hero_bg_preview1.jpg';
import heroPreview2 from '../assets/hero_bg_preview2.jpg';
import heroPreview3 from '../assets/hero_bg_preview3.jpg';

defineEmits(['navigate']);

const slides = [heroPreview1, heroPreview2, heroPreview3];

// 마지막 장 다음에도 오른쪽으로 계속 넘어가도록, 첫 장을 뒤에 한 번 더 붙인다.
// 복제본까지 넘어간 뒤 전환 효과를 끄고 첫 장으로 되돌려 놓으면 끊김 없이 순환한다.
const trackSlides = [...slides, slides[0]];

const currentSlide = ref(0);
const isAnimating = ref(true);
const activeDot = computed(() => currentSlide.value % slides.length);
const AUTO_MS = 6000;

let timer: ReturnType<typeof setInterval> | null = null;

// 전환 효과를 끈 채 위치만 옮긴 뒤, 두 프레임 뒤에 효과를 되살린다.
const jumpTo = (index: number, then?: () => void) => {
  isAnimating.value = false;
  currentSlide.value = index;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      isAnimating.value = true;
      if (then) then();
    });
  });
};

const onTransitionEnd = () => {
  // 복제본에 도착했으면 티 나지 않게 진짜 첫 장으로 옮겨 둔다.
  if (currentSlide.value === slides.length) {
    jumpTo(0);
  }
};

const advance = () => {
  currentSlide.value += 1;
};

const startTimer = () => {
  timer = setInterval(advance, AUTO_MS);
};

// 직접 넘긴 직후에는 타이머를 다시 시작해, 곧바로 또 넘어가지 않게 한다.
const resetTimer = () => {
  if (timer) clearInterval(timer);
  startTimer();
};

const nextSlide = () => {
  advance();
  resetTimer();
};

const prevSlide = () => {
  if (currentSlide.value === 0) {
    // 첫 장에서 뒤로 갈 때도 왼쪽으로 이어지도록, 끝의 복제본으로 옮긴 뒤 한 칸 되돌린다.
    jumpTo(slides.length, () => {
      currentSlide.value = slides.length - 1;
    });
  } else {
    currentSlide.value -= 1;
  }
  resetTimer();
};

const goSlide = (i: number) => {
  currentSlide.value = i;
  resetTimer();
};

onMounted(startTimer);
onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>

<style scoped>
.hero-section {
  /* 고정 메뉴바가 배경 사진 윗부분을 가리지 않도록 그 높이만큼 내려서 시작한다. */
  margin-top: var(--header-height);
  height: calc(100vh - var(--header-height));
  min-height: 620px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 0;
}

.hero-bg-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

/* 임시 배경 슬라이더 */
.hero-slide {
  flex: 0 0 100%;
  height: 100%;
  overflow: hidden;
}

.hero-slider-track.no-transition {
  transition: none;
}

.hero-slider-track {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.hero-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background: none;
  color: #ffffff;
  cursor: pointer;
  transition: color var(--transition-fast), transform var(--transition-fast);
}

.hero-nav:hover {
  color: rgba(255, 255, 255, 0.7);
}

.hero-nav.prev:hover {
  transform: translateY(-50%) translateX(-3px);
}

.hero-nav.next:hover {
  transform: translateY(-50%) translateX(3px);
}

.hero-nav.prev {
  left: 24px;
}

.hero-nav.next {
  right: 24px;
}

.hero-dots {
  position: absolute;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  gap: 10px;
}

.hero-dot {
  width: 10px;
  height: 10px;
  padding: 0;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.7);
  background: transparent;
  cursor: pointer;
  transition: background var(--transition-fast), transform var(--transition-fast);
}

.hero-dot.active {
  background: #ffffff;
  transform: scale(1.2);
}

@media (max-width: 768px) {
  .hero-nav {
    width: 38px;
    height: 38px;
  }

  .hero-nav.prev {
    left: 10px;
  }

  .hero-nav.next {
    right: 10px;
  }
}

.hero-bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
  transform: scale(1.05);
  filter: brightness(0.95) contrast(1.02);
  animation: slow-zoom 25s ease-out infinite alternate;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.15) 0%,
    rgba(0, 0, 0, 0.45) 65%,
    rgba(0, 0, 0, 0.7) 100%
  );
  pointer-events: none;
}

.hero-container {
  position: relative;
  z-index: 2;
  margin-top: 40px;
}

.hero-content {
  max-width: 750px;
  opacity: 0;
  transform: translateY(30px);
  animation: fade-in-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.hero-subtitle {
  /* 어두운 배경 위에 올라가므로 밝은 색으로 둔다. */
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.3em;
  margin-bottom: 24px;
  display: inline-block;
}

.hero-title {
  font-size: 3.8rem;
  font-weight: 400;
  line-height: 1.25;
  color: #ffffff;
  margin-bottom: 24px;
  letter-spacing: -0.02em;
}

.hero-title .highlight {
  color: #7dd3fc;
  font-weight: 700;
  background: linear-gradient(90deg, #7dd3fc, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-description {
  font-size: 1.15rem;
  line-height: 1.8;
  /* 어두운 배경 위에 올라가는 문단이라 밝은 색으로 둔다. */
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 40px;
  font-weight: 300;
  word-break: keep-all;
}

/* 어두운 배경 위에서만 밝게 보이도록 히어로 안으로 한정한다. */
.hero-actions .btn-outline {
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.7);
}

.hero-actions .btn-outline:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: #ffffff;
  color: #ffffff;
}

.hero-actions {
  display: flex;
  gap: 20px;
}

.btn-icon {
  margin-left: 8px;
  transition: transform var(--transition-fast);
}

.btn-primary:hover .btn-icon {
  transform: translateX(4px);
}

/* Animations */
@keyframes slow-zoom {
  0% { transform: scale(1.03); }
  100% { transform: scale(1.08); }
}

@keyframes fade-in-up {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.8rem;
  }
  
  .hero-description {
    font-size: 1rem;
  }
  
  .hero-actions {
    flex-direction: column;
    gap: 12px;
    width: 100%;
  }
  
  .hero-actions .btn {
    width: 100%;
  }
}
</style>
