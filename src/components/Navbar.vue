<template>
  <header class="header" :class="{ 'scrolled': isScrolled }">
    <div class="container header-container">
      <a href="#" class="logo" @click.prevent="handleNavClick('home')">
        <img src="../assets/logo.png" alt="재단법인 신라문화장학재단" class="logo-img" />
      </a>

      <!-- Desktop Navigation -->
      <nav class="nav-desktop">
        <ul class="nav-links">
          <li><a href="#" :class="{ 'active': currentView === 'about-sub' }" @click.prevent="handleNavClick('about-sub')">재단 소개</a></li>
          <li><a href="#" :class="{ 'active': currentView === 'home' && activeSection === 'programs' }" @click.prevent="handleNavClick('home', 'programs')">재단 커뮤니티</a></li>
          <li><a href="#" :class="{ 'active': currentView === 'home' && activeSection === 'notices' }" @click.prevent="handleNavClick('home', 'notices')">재단 소식</a></li>
        </ul>
      </nav>

      <div class="header-actions">
        <!-- Scholarship Application Button -->
        <a href="#" class="btn btn-outline apply-btn" @click.prevent="handleNavClick('home', 'programs')">장학금 신청</a>
        
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
        <!-- Mobile User State -->
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
          <button class="btn btn-primary w-full" @click="openAuthModalMobile('login')">
            로그인 / 회원가입
          </button>
        </div>

        <ul>
          <li><a href="#" :class="{ 'active': currentView === 'about-sub' }" @click.prevent="handleNavClick('about-sub')">재단 소개</a></li>
          <li><a href="#" :class="{ 'active': currentView === 'home' && activeSection === 'programs' }" @click.prevent="handleNavClick('home', 'programs')">재단 커뮤니티</a></li>
          <li><a href="#" :class="{ 'active': currentView === 'home' && activeSection === 'notices' }" @click.prevent="handleNavClick('home', 'notices')">재단 소식</a></li>
          <li>
            <a href="#" class="btn btn-outline mobile-apply-btn" @click.prevent="handleNavClick('home', 'programs')">장학금 신청</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useAuth } from '../composables/useAuth';

const props = defineProps<{
  currentView: 'home' | 'about-sub';
}>();

const emit = defineEmits<{
  (e: 'navigate', view: 'home' | 'about-sub'): void;
}>();

const { user, openAuthModal, openMyPageModal, logout } = useAuth();

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);
const activeSection = ref('');
const isDropdownOpen = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

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

const handleNavClick = (view: 'home' | 'about-sub', anchor?: string) => {
  closeMobileMenu();
  emit('navigate', view);
  
  if (view === 'home' && anchor) {
    setTimeout(() => {
      const el = document.getElementById(anchor);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
  
  if (props.currentView !== 'home') {
    activeSection.value = '';
    return;
  }
  
  const sections = ['about', 'programs', 'notices'];
  const scrollPosition = window.scrollY + 100;
  
  for (const section of sections) {
    const el = document.getElementById(section);
    if (el) {
      const top = el.offsetTop;
      const height = el.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        activeSection.value = section;
        return;
      }
    }
  }
  activeSection.value = '';
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
  height: var(--header-height);
  z-index: 1000;
  display: flex;
  align-items: center;
  transition: all var(--transition-normal);
  border-bottom: 1px solid transparent;
}

.header.scrolled {
  background: rgba(248, 250, 252, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  height: 70px;
  border-bottom: 1px solid var(--border-color);
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
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
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 40px;
}

.nav-links a {
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: var(--text-primary);
  position: relative;
  padding: 8px 0;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
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
  margin-bottom: 24px;
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
  padding: 6px;
  font-size: 0.78rem;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  color: var(--text-secondary);
  font-weight: 500;
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

  .auth-btn {
    padding: 8px 12px;
    font-size: 0.8rem;
  }

  .auth-btn span {
    display: inline;
  }
}
</style>
