<template>
  <header class="header" :class="{ 'scrolled': isScrolled }">
    <div class="container header-container">
      <a href="#" class="logo">
        <img src="../assets/logo.png" alt="재단법인 신라문화장학재단" class="logo-img" />
      </a>

      <!-- Desktop Navigation -->
      <nav class="nav-desktop">
        <ul class="nav-links">
          <li><a href="#about" :class="{ 'active': activeSection === 'about' }">재단 소개</a></li>
          <li><a href="#programs" :class="{ 'active': activeSection === 'programs' }">장학 사업</a></li>
          <li><a href="#notices" :class="{ 'active': activeSection === 'notices' }">재단 소식</a></li>
        </ul>
      </nav>

      <div class="header-actions">
        <a href="#programs" class="btn btn-outline apply-btn">장학금 신청</a>
        
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
          <li><a href="#about" @click="closeMobileMenu">재단 소개</a></li>
          <li><a href="#programs" @click="closeMobileMenu">장학 사업</a></li>
          <li><a href="#notices" @click="closeMobileMenu">재단 소식</a></li>
          <li>
            <a href="#programs" class="btn btn-primary" @click="closeMobileMenu" style="margin-top: 20px; color: var(--bg-color);">장학금 신청</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);
const activeSection = ref('');

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
  
  // Highlight active menu item based on scroll position
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
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
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
  background: rgba(11, 12, 16, 0.85);
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
  font-weight: 400;
  letter-spacing: 0.02em;
  color: var(--text-secondary);
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
  gap: 16px;
}

.apply-btn {
  padding: 10px 20px;
  font-size: 0.85rem;
  border-radius: 4px;
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
  width: 280px;
  height: 100vh;
  background: rgba(11, 12, 16, 0.98);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-left: 1px solid var(--border-color);
  z-index: 999;
  display: flex;
  align-items: center;
  padding: 80px 40px 40px;
  transition: right var(--transition-slow);
}

.mobile-menu.open {
  right: 0;
}

.mobile-nav ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.mobile-nav a {
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--text-secondary);
  display: block;
}

.mobile-nav a:hover {
  color: var(--primary-color);
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
}
</style>
