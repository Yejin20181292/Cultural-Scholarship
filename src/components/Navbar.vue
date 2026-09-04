<template>
  <header class="header" :class="{ 'scrolled': isScrolled }">
    <div class="container header-container">
      <a href="#" class="logo" @click.prevent="handleNavClick('home')">
        <img src="../assets/logo.png" alt="재단법인 신라문화장학재단" class="logo-img" />
      </a>

      <!-- Desktop Navigation -->
      <nav class="nav-desktop">
        <ul class="nav-links">
          <!-- 1. 재단소개 -->
          <li>
            <a href="#" :class="{ 'active': currentView === 'about-sub' }" @click.prevent="handleNavClick('about-sub', 'greetings')" class="nav-main-link">
              <span>재단소개</span>
              <svg class="nav-chevron-icon" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </a>
          </li>

          <!-- 2. 장학사업 -->
          <li>
            <a href="#" :class="{ 'active': currentView === 'scholarship-sub' }" @click.prevent="handleNavClick('scholarship-sub', 'programs')" class="nav-main-link">
              <span>장학사업</span>
              <svg class="nav-chevron-icon" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </a>
          </li>

          <!-- 3. 커뮤니티 -->
          <li>
            <a href="#" :class="{ 'active': currentView === 'community-sub' }" @click.prevent="handleNavClick('community-sub', 'board')" class="nav-main-link">
              <span>커뮤니티</span>
              <svg class="nav-chevron-icon" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </a>
          </li>

          <!-- 4. 공지사항 -->
          <li>
            <a href="#" :class="{ 'active': currentView === 'notice-sub' }" @click.prevent="handleNavClick('notice-sub', 'notice')" class="nav-main-link">
              <span>공지사항</span>
              <svg class="nav-chevron-icon" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </a>
          </li>

          <!-- 5. 자료실 -->
          <li>
            <a href="#" :class="{ 'active': currentView === 'resources-sub' }" @click.prevent="handleNavClick('resources-sub', 'archive')" class="nav-main-link">
              <span>자료실</span>
              <svg class="nav-chevron-icon" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </a>
          </li>
        </ul>

        <!-- Desktop Full-Width Mega Menu Dropdown Panel -->
        <div class="mega-menu-panel">
          <div class="container mega-menu-container">
            <!-- Col 1: 재단소개 -->
            <div class="mega-menu-col">
              <h4 class="mega-col-title" @click="handleNavClick('about-sub', 'greetings')">재단소개</h4>
              <ul class="mega-sub-list">
                <li><a href="#" @click.prevent="handleNavClick('about-sub', 'greetings')">· 설립취지 & 인사말</a></li>
                <li><a href="#" @click.prevent="handleNavClick('about-sub', 'history')">· 회사연혁</a></li>
                <li><a href="#" @click.prevent="handleNavClick('about-sub', 'donors')">· 출연사</a></li>
                <li><a href="#" @click.prevent="handleNavClick('about-sub', 'contact')">· 찾아오시는 길</a></li>
              </ul>
            </div>

            <!-- Col 2: 장학사업 -->
            <div class="mega-menu-col">
              <h4 class="mega-col-title" @click="handleNavClick('scholarship-sub', 'programs')">장학사업</h4>
              <ul class="mega-sub-list">
                <li><a href="#" @click.prevent="handleNavClick('scholarship-sub', 'programs')">· 장학 프로그램</a></li>
                <li><a href="#" @click.prevent="handleNavClick('scholarship-sub', 'performance')">· 사업실적</a></li>
              </ul>
            </div>

            <!-- Col 3: 커뮤니티 -->
            <div class="mega-menu-col">
              <h4 class="mega-col-title" @click="handleNavClick('community-sub', 'board')">커뮤니티</h4>
              <ul class="mega-sub-list">
                <li><a href="#" @click.prevent="handleNavClick('community-sub', 'board')">· 게시판</a></li>
                <li><a href="#" @click.prevent="handleNavClick('community-sub', 'alumni')">· 동문찾기</a></li>
              </ul>
            </div>

            <!-- Col 4: 공지사항 -->
            <div class="mega-menu-col">
              <h4 class="mega-col-title" @click="handleNavClick('notice-sub', 'notice')">공지사항</h4>
              <ul class="mega-sub-list">
                <li><a href="#" @click.prevent="handleNavClick('notice-sub', 'notice')">· 공지사항</a></li>
              </ul>
            </div>

            <!-- Col 5: 자료실 -->
            <div class="mega-menu-col">
              <h4 class="mega-col-title" @click="handleNavClick('resources-sub', 'archive')">자료실</h4>
              <ul class="mega-sub-list">
                <li><a href="#" @click.prevent="handleNavClick('resources-sub', 'archive')">· 서식자료실</a></li>
                <li><a href="#" @click.prevent="handleNavClick('resources-sub', 'news')">· 소식</a></li>
                <li><a href="#" @click.prevent="handleNavClick('resources-sub', 'archive')">· 결산자료</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div class="header-actions">
        <!-- Scholarship Application Button -->
        <a href="#" class="btn btn-outline apply-btn" @click.prevent="handleNavClick('scholarship-sub', 'programs')">장학금 신청</a>
        
        <!-- Login / Register Button or User Profile (Right side of 장학금 신청) -->
        <template v-if="!user">
          <button class="btn btn-primary auth-btn" @click="openAuthModal('login')">
            <svg class="auth-icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
              <polyline points="10 17 15 12 10 7"></polyline>
              <line x1="15" y1="12" x2="3" y2="12"></line>
            </svg>
            <span>로그인 / 회원가입</span>
          </button>
        </template>
        
        <template v-else>
          <div class="user-profile-dropdown" ref="dropdownRef">
            <button class="user-profile-btn" @click="toggleDropdown">
              <div class="user-avatar">{{ user.name.charAt(0) }}</div>
              <span class="user-name">{{ user.name }} 님</span>
              <svg class="chevron-icon" :class="{ 'rotate': isDropdownOpen }" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            
            <div class="dropdown-menu" v-if="isDropdownOpen">
              <div class="dropdown-header">
                <p class="dropdown-user-name">{{ user.name }} 님</p>
                <p class="dropdown-user-email">{{ user.email }}</p>
                <span class="badge-role" :class="user.type">
                  {{ user.type === 'student' ? '🎓 장학생' : '🤝 후원자' }}
                </span>
              </div>
              <div class="dropdown-divider"></div>
              <button class="dropdown-item" @click="handleMyPage">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                마이페이지 / 신청현황
              </button>
              <div class="dropdown-divider"></div>
              <button class="dropdown-item text-danger" @click="handleLogout">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                로그아웃
              </button>
            </div>
          </div>
        </template>
        
        <!-- Mobile menu toggle -->
        <button class="mobile-toggle" @click="toggleMobileMenu" aria-label="메뉴 열기">
          <span class="hamburger-bar" :class="{ 'open': isMobileMenuOpen }"></span>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Overlay -->
    <div class="mobile-menu" :class="{ 'open': isMobileMenuOpen }">
      <nav class="mobile-nav">
        <ul>
          <!-- Mobile 1. 재단소개 -->
          <li class="mobile-dropdown-group">
            <div class="mobile-nav-row">
              <a href="#" :class="{ 'active': currentView === 'about-sub' }" @click.prevent="handleNavClick('about-sub', 'greetings')" class="mobile-main-link">
                재단소개
              </a>
              <button class="mobile-sub-toggle" @click.stop="isMobileAboutSubOpen = !isMobileAboutSubOpen" aria-label="서브메뉴 토글">
                <svg class="chevron-icon" :class="{ 'rotate': isMobileAboutSubOpen }" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>
            <ul class="mobile-sub-menu" v-show="isMobileAboutSubOpen">
              <li>
                <a href="#" @click.prevent="handleNavClick('about-sub', 'greetings')">
                  · 설립취지 & 인사말
                </a>
              </li>
              <li>
                <a href="#" @click.prevent="handleNavClick('about-sub', 'history')">
                  · 회사연혁
                </a>
              </li>
              <li>
                <a href="#" @click.prevent="handleNavClick('about-sub', 'donors')">
                  · 출연사
                </a>
              </li>
              <li>
                <a href="#" @click.prevent="handleNavClick('about-sub', 'contact')">
                  · 찾아오시는 길
                </a>
              </li>
            </ul>
          </li>

          <!-- Mobile 2. 장학사업 -->
          <li class="mobile-dropdown-group">
            <div class="mobile-nav-row">
              <a href="#" :class="{ 'active': currentView === 'scholarship-sub' }" @click.prevent="handleNavClick('scholarship-sub', 'programs')" class="mobile-main-link">
                장학사업
              </a>
              <button class="mobile-sub-toggle" @click.stop="isMobileScholarshipSubOpen = !isMobileScholarshipSubOpen" aria-label="서브메뉴 토글">
                <svg class="chevron-icon" :class="{ 'rotate': isMobileScholarshipSubOpen }" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>
            <ul class="mobile-sub-menu" v-show="isMobileScholarshipSubOpen">
              <li>
                <a href="#" @click.prevent="handleNavClick('scholarship-sub', 'programs')">
                  · 장학 프로그램
                </a>
              </li>
              <li>
                <a href="#" @click.prevent="handleNavClick('scholarship-sub', 'performance')">
                  · 사업실적
                </a>
              </li>
            </ul>
          </li>

          <!-- Mobile 3. 커뮤니티 -->
          <li class="mobile-dropdown-group">
            <div class="mobile-nav-row">
              <a href="#" :class="{ 'active': currentView === 'community-sub' }" @click.prevent="handleNavClick('community-sub', 'board')" class="mobile-main-link">
                커뮤니티
              </a>
              <button class="mobile-sub-toggle" @click.stop="isMobileCommunitySubOpen = !isMobileCommunitySubOpen" aria-label="서브메뉴 토글">
                <svg class="chevron-icon" :class="{ 'rotate': isMobileCommunitySubOpen }" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>
            <ul class="mobile-sub-menu" v-show="isMobileCommunitySubOpen">
              <li>
                <a href="#" @click.prevent="handleNavClick('community-sub', 'board')">
                  · 게시판
                </a>
              </li>
              <li>
                <a href="#" @click.prevent="handleNavClick('community-sub', 'alumni')">
                  · 동문찾기
                </a>
              </li>
            </ul>
          </li>

          <!-- Mobile 4. 공지사항 -->
          <li class="mobile-dropdown-group">
            <div class="mobile-nav-row">
              <a href="#" :class="{ 'active': currentView === 'notice-sub' }" @click.prevent="handleNavClick('notice-sub', 'notice')" class="mobile-main-link">
                공지사항
              </a>
              <button class="mobile-sub-toggle" @click.stop="isMobileNoticeSubOpen = !isMobileNoticeSubOpen" aria-label="서브메뉴 토글">
                <svg class="chevron-icon" :class="{ 'rotate': isMobileNoticeSubOpen }" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>
            <ul class="mobile-sub-menu" v-show="isMobileNoticeSubOpen">
              <li>
                <a href="#" @click.prevent="handleNavClick('notice-sub', 'notice')">
                  · 공지사항
                </a>
              </li>
            </ul>
          </li>

          <!-- Mobile 5. 자료실 -->
          <li class="mobile-dropdown-group">
            <div class="mobile-nav-row">
              <a href="#" :class="{ 'active': currentView === 'resources-sub' }" @click.prevent="handleNavClick('resources-sub', 'archive')" class="mobile-main-link">
                자료실
              </a>
              <button class="mobile-sub-toggle" @click.stop="isMobileResourceSubOpen = !isMobileResourceSubOpen" aria-label="서브메뉴 토글">
                <svg class="chevron-icon" :class="{ 'rotate': isMobileResourceSubOpen }" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>
            <ul class="mobile-sub-menu" v-show="isMobileResourceSubOpen">
              <li>
                <a href="#" @click.prevent="handleNavClick('resources-sub', 'archive')">
                  · 서식자료실
                </a>
              </li>
              <li>
                <a href="#" @click.prevent="handleNavClick('resources-sub', 'news')">
                  · 소식
                </a>
              </li>
              <li>
                <a href="#" @click.prevent="handleNavClick('resources-sub', 'archive')">
                  · 결산자료
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#" class="btn btn-outline mobile-apply-btn" @click.prevent="handleNavClick('scholarship-sub', 'programs')">장학금 신청</a>
          </li>
        </ul>

        <!-- Mobile User State (Below menu items) -->
        <div class="mobile-user-box" v-if="user">
          <div class="mobile-user-info">
            <div class="user-avatar-mobile">{{ user.name.charAt(0) }}</div>
            <div class="mobile-user-text">
              <div class="mobile-user-name">{{ user.name }} 님</div>
              <div class="mobile-user-email">{{ user.email }}</div>
            </div>
          </div>
          <div class="mobile-user-actions">
            <button class="mobile-action-btn" @click="handleMyPageMobile">마이페이지</button>
            <button class="mobile-action-btn danger" @click="handleLogoutMobile">로그아웃</button>
          </div>
        </div>
        <div class="mobile-user-box" v-else>
          <button class="btn btn-primary w-full mobile-auth-btn" @click="openAuthModalMobile('login')">
            <svg class="auth-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
              <polyline points="10 17 15 12 10 7"></polyline>
              <line x1="15" y1="12" x2="3" y2="12"></line>
            </svg>
            <span>로그인 / 회원가입</span>
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useAuth } from '../composables/useAuth';
import type { ViewType } from '../App.vue';

const props = defineProps<{
  currentView: ViewType;
}>();

const emit = defineEmits<{
  (e: 'navigate', view: ViewType, subTab?: string): void;
}>();

const { user, openAuthModal, openMyPageModal, logout } = useAuth();

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);
const isDropdownOpen = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

const isMobileAboutSubOpen = ref(true);
const isMobileScholarshipSubOpen = ref(false);
const isMobileCommunitySubOpen = ref(false);
const isMobileNoticeSubOpen = ref(false);
const isMobileResourceSubOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const handleMyPage = () => {
  isDropdownOpen.value = false;
  openMyPageModal();
};

const handleLogout = () => {
  isDropdownOpen.value = false;
  logout();
};

const openAuthModalMobile = (mode: 'login' | 'signup') => {
  closeMobileMenu();
  openAuthModal(mode);
};

const handleMyPageMobile = () => {
  closeMobileMenu();
  openMyPageModal();
};

const handleLogoutMobile = () => {
  closeMobileMenu();
  logout();
};

const handleClickOutside = (e: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target as Node)) {
    isDropdownOpen.value = false;
  }
};

const handleNavClick = (view: ViewType, subTab?: string) => {
  closeMobileMenu();
  emit('navigate', view, subTab);
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  document.addEventListener('click', handleClickOutside);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: transparent;
  border-bottom: 1px solid transparent;
  transition: all var(--transition-normal);
}

.header.scrolled,
.header:hover {
  background: rgba(248, 250, 252, 0.96);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-color);
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--header-height);
  transition: height var(--transition-normal);
}

.header.scrolled .header-container {
  height: 70px;
}

.logo {
  display: flex;
  align-items: center;
  transition: transform var(--transition-fast);
}

.logo:hover {
  transform: scale(1.02);
}

.logo-img {
  height: 40px;
  width: auto;
  display: block;
}

.nav-desktop {
  display: block;
  position: static;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 32px;
}

.nav-links a {
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: var(--text-primary);
  position: relative;
  padding: 24px 0;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: 16px;
  left: 0;
  width: 0;
  height: 1px;
  background-color: var(--primary-color);
  transition: width var(--transition-normal);
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--primary-color);
}

.nav-links a:hover::after,
.nav-links a.active::after {
  width: 100%;
}

/* Nav Chevron Icon */
.nav-main-link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
}

.nav-chevron-icon {
  transition: transform var(--transition-fast), color var(--transition-fast);
  color: var(--text-secondary);
}

/* Full-Width Mega Menu Dropdown Panel */
.mega-menu-panel {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: #ffffff;
  border-top: 1px solid rgba(6, 91, 137, 0.1);
  border-bottom: 1px solid rgba(6, 91, 137, 0.15);
  box-shadow: 0 20px 40px -10px rgba(6, 91, 137, 0.14), 0 6px 16px -4px rgba(0, 0, 0, 0.04);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-6px);
  transition: opacity 0.25s ease, transform 0.25s ease, visibility 0.25s ease;
  z-index: 1010;
  overflow: hidden;
}

/* Trigger Mega Menu when hovering nav-desktop or mega-menu-panel */
.nav-desktop:hover .mega-menu-panel {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.nav-desktop:hover .nav-chevron-icon {
  transform: rotate(180deg);
  color: var(--primary-color);
}

/* Mega Menu Container & 5 Columns with Equal Height */
.mega-menu-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 32px 16px 36px;
  gap: 0;
  align-items: stretch;
}

.mega-menu-col {
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  border-right: 1px solid rgba(6, 91, 137, 0.1);
}

.mega-menu-col:first-child {
  padding-left: 10px;
}

.mega-menu-col:last-child {
  border-right: none;
  padding-right: 10px;
}

.mega-col-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 2px solid rgba(6, 91, 137, 0.2);
  cursor: pointer;
  transition: color var(--transition-fast);
  align-self: flex-start;
}

.mega-col-title:hover {
  color: var(--secondary-color);
}

.mega-sub-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-grow: 1;
}

.mega-sub-list a {
  font-size: 0.92rem;
  font-weight: 400;
  color: var(--text-secondary);
  transition: all var(--transition-fast);
  display: inline-block;
  padding: 2px 0;
}

.mega-sub-list a:hover {
  color: var(--primary-color);
  font-weight: 600;
  transform: translateX(4px);
}

/* Mobile Sub-menu Styling */
.mobile-dropdown-group {
  display: flex;
  flex-direction: column;
}

.mobile-nav-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.mobile-main-link {
  flex: 1;
}

.mobile-sub-toggle {
  background: none;
  border: none;
  padding: 6px;
  cursor: pointer;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-sub-menu {
  list-style: none;
  padding-left: 12px;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-left: 2px solid rgba(6, 91, 137, 0.18);
}

.mobile-sub-menu a {
  font-size: 0.95rem;
  font-weight: 400;
  color: var(--text-secondary);
  transition: color var(--transition-fast);
}

.mobile-sub-menu a:hover,
.mobile-sub-menu a.sub-active {
  color: var(--primary-color);
  font-weight: 600;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.apply-btn {
  padding: 10px 18px;
  font-size: 0.85rem;
  border-radius: 6px;
}

.auth-btn {
  padding: 10px 18px;
  font-size: 0.85rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 6px;
  box-shadow: 0 4px 12px rgba(6, 91, 137, 0.15);
}

.auth-icon {
  display: inline-block;
}

/* User profile dropdown styling */
.user-profile-dropdown {
  position: relative;
}

.user-profile-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px 6px 6px;
  background: rgba(6, 91, 137, 0.06);
  border: 1px solid rgba(6, 91, 137, 0.15);
  border-radius: 20px;
  transition: all var(--transition-fast);
  cursor: pointer;
}

.user-profile-btn:hover {
  background: rgba(6, 91, 137, 0.12);
  border-color: var(--primary-color);
}

.user-avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--primary-color);
  color: #ffffff;
  font-size: 0.8rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-name {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-primary);
}

.chevron-icon {
  color: var(--text-secondary);
  transition: transform var(--transition-fast);
}

.chevron-icon.rotate {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  width: 220px;
  background: #ffffff;
  border: 1px solid rgba(6, 91, 137, 0.15);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  padding: 12px 0;
  z-index: 1010;
  animation: fadeInDown 0.2s ease-out;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.dropdown-header {
  padding: 8px 16px;
}

.dropdown-user-name {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--text-primary);
}

.dropdown-user-email {
  font-size: 0.78rem;
  color: var(--text-muted);
  margin-top: 2px;
}

.badge-role {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 4px;
  margin-top: 6px;
}

.badge-role.student {
  background: #e0f2fe;
  color: #0369a1;
}

.badge-role.sponsor {
  background: #fef3c7;
  color: #b45309;
}

.dropdown-divider {
  height: 1px;
  background: #f1f5f9;
  margin: 8px 0;
}

.dropdown-item {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  font-size: 0.85rem;
  color: var(--text-secondary);
  transition: background var(--transition-fast), color var(--transition-fast);
  text-align: left;
}

.dropdown-item:hover {
  background: #f8fafc;
  color: var(--primary-color);
}

.dropdown-item.text-danger {
  color: #dc2626;
}

.dropdown-item.text-danger:hover {
  background: #fef2f2;
}

/* Mobile Toggle Hamburger */
.mobile-toggle {
  display: none;
  width: 40px;
  height: 40px;
  position: relative;
  justify-content: center;
  align-items: center;
  z-index: 1001;
}

.hamburger-bar {
  width: 22px;
  height: 1.5px;
  background-color: var(--text-primary);
  display: block;
  position: relative;
  transition: background-color var(--transition-fast);
}

.hamburger-bar::before,
.hamburger-bar::after {
  content: '';
  width: 22px;
  height: 1.5px;
  background-color: var(--text-primary);
  position: absolute;
  left: 0;
  transition: transform var(--transition-normal), top var(--transition-normal);
}

.hamburger-bar::before {
  top: -6px;
}

.hamburger-bar::after {
  top: 6px;
}

.hamburger-bar.open {
  background-color: transparent;
}

.hamburger-bar.open::before {
  top: 0;
  transform: rotate(45deg);
}

.hamburger-bar.open::after {
  top: 0;
  transform: rotate(-45deg);
}

/* Mobile Menu */
.mobile-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 300px;
  height: 100vh;
  background: rgba(248, 250, 252, 0.98);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-left: 1px solid var(--border-color);
  z-index: 999;
  display: flex;
  flex-direction: column;
  padding: 80px 24px 40px;
  transition: right var(--transition-slow);
}

.mobile-menu.open {
  right: 0;
}

.mobile-user-box {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 16px;
  margin-top: 28px;
}

.mobile-auth-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 18px;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: 8px;
  box-shadow: 0 4px 14px rgba(6, 91, 137, 0.18);
}

.mobile-user-info {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.user-avatar-mobile {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--primary-color);
  color: #ffffff;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-user-name {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-primary);
}

.mobile-user-email {
  font-size: 0.78rem;
  color: var(--text-muted);
}

.mobile-user-actions {
  display: flex;
  gap: 8px;
}

.mobile-action-btn {
  flex: 1;
  padding: 8px;
  font-size: 0.82rem;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  color: var(--text-secondary);
  font-weight: 600;
}

.mobile-action-btn.danger {
  color: #dc2626;
  border-color: #fecaca;
  background: #fef2f2;
}

.w-full {
  width: 100%;
}

.mobile-nav ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.mobile-nav a {
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--text-secondary);
  display: block;
}

.mobile-nav a:hover {
  color: var(--primary-color);
}

.mobile-apply-btn {
  margin-top: 10px;
  text-align: center;
}

@media (max-width: 768px) {
  .nav-desktop {
    display: none;
  }
  
  .mobile-toggle {
    display: flex;
  }
  
  .apply-btn {
    display: none;
  }

  .auth-btn,
  .user-profile-dropdown {
    display: none;
  }
}
</style>
