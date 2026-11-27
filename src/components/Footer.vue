<template>
  <footer class="footer">
    <div class="container footer-container">
      <div class="footer-top">
        <div class="footer-brand">
          <a href="#" class="logo" @click.prevent="handleNavClick('home')">
            <img src="../assets/logo.png" alt="재단법인 신라문화장학재단" class="logo-img" />
          </a>
          <p class="brand-credo">
            신라문화장학재단은 꿈과 열정을 가진 인재들이 경제적 어려움 없이 무한한 잠재력을 발휘하여
            미래를 이끄는 리더로 성장할 수 있도록 든든한 날개가 되어 줍니다.
          </p>
        </div>

        <div class="footer-links-group">
          <div class="footer-links-col">
            <h4 class="col-title title-serif">재단소개</h4>
            <ul>
              <li><a href="#" @click.prevent="handleNavClick('about-sub', 'greetings')">이사장 인사말</a></li>
              <li><a href="#" @click.prevent="handleNavClick('about-sub', 'founding')">설립취지</a></li>
              <li><a href="#" @click.prevent="handleNavClick('about-sub', 'history')">연혁</a></li>
              <li><a href="#" @click.prevent="handleNavClick('about-sub', 'assets')">자산현황</a></li>
              <li><a href="#" @click.prevent="handleNavClick('about-sub', 'donors')">출연사</a></li>
              <li><a href="#" @click.prevent="handleNavClick('about-sub', 'people')">함께하는 사람들</a></li>
              <li><a href="#" @click.prevent="handleNavClick('about-sub', 'contact')">오시는 길</a></li>
            </ul>
          </div>
          
          <div class="footer-links-col">
            <h4 class="col-title title-serif">재단사업</h4>
            <ul>
              <li><a href="#" @click.prevent="handleNavClick('scholarship-sub', 'performance')">사업실적</a></li>
              <li><a href="#" @click.prevent="handleNavClick('scholarship-sub', 'awards')">선발인원 및 지급 현황</a></li>
              <li><a href="#" @click.prevent="handleNavClick('scholarship-sub', 'rules')">장학생 준수사항</a></li>
            </ul>
          </div>

          <div class="footer-links-col" v-if="isCommunityEnabled">
            <h4 class="col-title title-serif">커뮤니티</h4>
            <ul>
              <li><a href="#" @click.prevent="handleNavClick('community-sub', 'board')">게시판</a></li>
              <li><a href="#" @click.prevent="handleNavClick('community-sub', 'alumni')">동문찾기</a></li>
            </ul>
          </div>

          <div class="footer-links-col">
            <h4 class="col-title title-serif">자료실</h4>
            <ul>
              <li><a href="#" @click.prevent="handleNavClick('resources-sub', 'notice')">공지사항</a></li>
              <li><a href="#" @click.prevent="handleNavClick('resources-sub', 'news')">재단소식</a></li>
              <li><a href="#" @click.prevent="handleNavClick('resources-sub', 'archive')">공시정보</a></li>
            </ul>
          </div>

          <div class="footer-links-col">
            <h4 class="col-title title-serif">관련 사이트</h4>
            <!-- 네이티브 select 를 쓰지 않는다.
                 select 는 change 이벤트에만 기댈 수 있는데 그 경로가 브라우저마다 불안정하고,
                 거기서 부르는 window.open 은 팝업 차단에 걸리기도 한다.
                 목록을 진짜 <a> 로 두면 새 탭 열기·링크 복사·가운데 클릭이 모두 그대로 동작한다. -->
            <div class="related-select-wrap" ref="relatedWrapRef">
              <button
                type="button"
                class="related-select"
                aria-haspopup="true"
                :aria-expanded="isRelatedOpen"
                @click="isRelatedOpen = !isRelatedOpen"
              >
                <span>관련 사이트</span>
                <span class="related-caret" aria-hidden="true">▾</span>
              </button>
              <ul class="related-list" v-show="isRelatedOpen">
                <li v-for="site in relatedSites" :key="site.url">
                  <a
                    :href="site.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    @click="isRelatedOpen = false"
                  >{{ site.name }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-divider"></div>

      <div class="footer-bottom">
        <div class="footer-info">
          <p>재단법인 신라문화장학재단 | 이사장 : 박준형</p>
          <p>주소 : (우)05685 서울특별시 송파구 백제고분로 362, 8층 (석촌동, 신라빌딩) | 대표전화 : 02-413-0795 | 이메일 : silla_yujin@naver.com</p>
          <p class="copyright">© 2026 Silla Cultural Scholarship Foundation. All Rights Reserved.</p>
        </div>

        <div class="footer-socials-privacy">
          <div class="footer-privacy">
            <a href="#" class="privacy-link bold-gold">개인정보처리방침</a>
            <span class="privacy-divider">|</span>
            <a href="#">이용약관</a>
            <span class="privacy-divider">|</span>
            <a href="#">이메일무단수집거부</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import type { ViewType } from '../App.vue';
import { isCommunityEnabled } from '../composables/useFeatureFlags';

const emit = defineEmits<{
  (e: 'navigate', view: ViewType, subTab?: string): void;
}>();

const handleNavClick = (view: ViewType, subTab?: string) => {
  emit('navigate', view, subTab);
};

// 관련 사이트 목록. 항목을 늘리거나 줄일 때는 여기만 고치면 된다.
const relatedSites = [
  { name: '서울시교육청', url: 'https://www.sen.go.kr/sen/index.do' },
  { name: '국세청', url: 'https://www.nts.go.kr/' },
];

const isRelatedOpen = ref(false);
const relatedWrapRef = ref<HTMLElement | null>(null);

// 바깥을 누르거나 Esc 를 누르면 닫는다.
const closeOnOutside = (e: MouseEvent) => {
  if (!isRelatedOpen.value) return;
  if (relatedWrapRef.value?.contains(e.target as Node)) return;
  isRelatedOpen.value = false;
};
const closeOnEsc = (e: KeyboardEvent) => {
  if (e.key === 'Escape') isRelatedOpen.value = false;
};

onMounted(() => {
  document.addEventListener('click', closeOnOutside);
  document.addEventListener('keydown', closeOnEsc);
});

onUnmounted(() => {
  document.removeEventListener('click', closeOnOutside);
  document.removeEventListener('keydown', closeOnEsc);
});
</script>

<style scoped>
.footer {
  background-color: #0c1524;
  color: rgba(255, 255, 255, 0.6);
  padding: 80px 0 50px;
  border-top: 1px solid var(--border-color);
  font-size: 0.9rem;
}

.footer-container {
  display: flex;
  flex-direction: column;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  gap: 60px;
  margin-bottom: 40px;
}

.footer-brand {
  max-width: 450px;
}

.logo {
  display: flex;
  align-items: center;
  transition: transform var(--transition-fast);
  margin-bottom: 20px;
  max-width: fit-content;
}

.logo:hover {
  transform: scale(1.02);
}

.logo-img {
  height: 40px;
  width: auto;
  display: block;
}

.brand-credo {
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 300;
  word-break: keep-all;
}

.footer-links-group {
  display: flex;
  gap: 48px;
  flex-wrap: wrap;
}

.footer-links-col h4 {
  color: var(--primary-color);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  margin-bottom: 20px;
}

.footer-links-col ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-links-col a {
  color: rgba(255, 255, 255, 0.75);
  transition: color var(--transition-fast);
  font-weight: 300;
}

.footer-links-col a:hover {
  color: var(--primary-color);
}

/* 관련 사이트 드롭다운 */
.related-select-wrap {
  position: relative;
  max-width: 200px;
}

.related-select {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px 14px;
  font-family: inherit;
  font-size: 0.9rem;
  font-weight: 300;
  text-align: left;
  color: rgba(255, 255, 255, 0.75);
  background-color: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 4px;
  cursor: pointer;
  transition: color var(--transition-fast), border-color var(--transition-fast);
}

.related-select:hover {
  color: var(--primary-color);
  border-color: var(--primary-color);
}

.related-select:focus-visible {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}

.related-caret {
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.6);
}

/* 펼쳐지는 목록. 푸터가 어두우므로 밝은 카드로 띄운다. */
.related-list {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  right: 0;
  list-style: none;
  margin: 0;
  padding: 4px;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
  z-index: 20;
}

.related-list a {
  display: block;
  padding: 9px 12px;
  border-radius: 3px;
  font-size: 0.9rem;
  font-weight: 400;
  color: #222222;
  transition: background-color var(--transition-fast), color var(--transition-fast);
}

.related-list a:hover,
.related-list a:focus-visible {
  background-color: rgba(6, 91, 137, 0.08);
  color: var(--primary-color);
}

.footer-divider {
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.08);
  margin-bottom: 40px;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
}

.footer-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 700px;
  text-align: left;
}

.footer-info p {
  color: rgba(255, 255, 255, 0.45);
  line-height: 1.5;
  font-weight: 300;
  word-break: keep-all;
}

.footer-info .copyright {
  margin-top: 10px;
  font-size: 0.85rem;
}

.footer-socials-privacy {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
}

.footer-privacy {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.85rem;
}

.footer-privacy a {
  color: rgba(255, 255, 255, 0.45);
  transition: color var(--transition-fast);
}

.footer-privacy a:hover {
  color: #ffffff;
}

.bold-gold {
  color: var(--primary-color) !important;
  font-weight: 500;
}

.privacy-divider {
  color: rgba(255, 255, 255, 0.1);
}

@media (max-width: 1024px) {
  .footer-top {
    flex-direction: column;
    gap: 40px;
  }
  
  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
  }
  
  .footer-socials-privacy {
    align-items: flex-start;
    width: 100%;
  }
}
</style>
