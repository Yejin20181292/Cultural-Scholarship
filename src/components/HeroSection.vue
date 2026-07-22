<template>
  <section class="hero-section">
    <div class="hero-bg-wrapper">
      <img src="../assets/hero_bg.png" alt="Cultural Art Background" class="hero-bg-img" />
      <div class="hero-overlay"></div>
    </div>
    
    <div class="container hero-container">
      <div class="hero-content">
        <span class="hero-subtitle title-serif floating">SILLA CULTURAL SCHOLARSHIP FOUNDATION</span>
        <h1 class="hero-title title-serif">
          문화와 예술,<br />
          <span class="highlight">그리고 꿈을 잇다</span>
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

    <!-- Scroll indicator -->
    <a href="#about" class="scroll-indicator" aria-label="아래로 스크롤">
      <span class="scroll-mouse">
        <span class="scroll-wheel"></span>
      </span>
      <span class="scroll-text title-serif">SCROLL</span>
    </a>
  </section>
</template>

<script setup lang="ts">
defineEmits(['navigate']);
</script>

<style scoped>
.hero-section {
  height: 100vh;
  min-height: 700px;
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

.hero-bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.05);
  animation: slow-zoom 20s ease-out infinite alternate;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(248, 250, 252, 0.15) 0%,
    rgba(248, 250, 252, 0.75) 60%,
    var(--bg-color) 100%
  );
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
  color: var(--primary-color);
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.3em;
  margin-bottom: 24px;
  display: inline-block;
}

.hero-title {
  font-size: 4rem;
  font-weight: 400;
  line-height: 1.25;
  color: var(--text-primary);
  margin-bottom: 24px;
  letter-spacing: -0.02em;
}

.hero-title .highlight {
  color: var(--secondary-color);
  font-weight: 700;
  background: linear-gradient(90deg, var(--secondary-color), var(--primary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-description {
  font-size: 1.15rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 40px;
  font-weight: 300;
  word-break: keep-all;
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

/* Scroll indicator link */
.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: var(--text-secondary);
  opacity: 0.7;
  transition: opacity var(--transition-fast);
}

.scroll-indicator:hover {
  opacity: 1;
}

.scroll-mouse {
  width: 24px;
  height: 38px;
  border: 2px solid var(--border-color-hover);
  border-radius: 12px;
  position: relative;
  display: block;
}

.scroll-wheel {
  width: 4px;
  height: 8px;
  background-color: var(--primary-color);
  border-radius: 2px;
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
  animation: scroll-anim 2s cubic-bezier(0.15, 0.41, 0.69, 0.94) infinite;
}

.scroll-text {
  font-size: 0.7rem;
  letter-spacing: 0.25em;
  font-weight: 700;
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

@keyframes scroll-anim {
  0% { opacity: 0; top: 6px; }
  30% { opacity: 1; }
  100% { opacity: 0; top: 18px; }
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
