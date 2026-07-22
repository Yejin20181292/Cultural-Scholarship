<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import Navbar from './components/Navbar.vue';
import HeroSection from './components/HeroSection.vue';
import AboutSection from './components/AboutSection.vue';
import AboutSubpage from './components/AboutSubpage.vue';
import ScholarshipPrograms from './components/ScholarshipPrograms.vue';
import NoticeSection from './components/NoticeSection.vue';
import Footer from './components/Footer.vue';

const currentView = ref<'home' | 'about-sub'>('home');

const updateViewFromHash = () => {
  const hash = window.location.hash;
  if (hash === '#about-sub') {
    currentView.value = 'about-sub';
  } else {
    currentView.value = 'home';
  }
};

const navigateTo = (view: 'home' | 'about-sub') => {
  currentView.value = view;
  if (view === 'about-sub') {
    window.location.hash = 'about-sub';
  } else {
    window.history.pushState("", document.title, window.location.pathname + window.location.search);
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  updateViewFromHash();
  window.addEventListener('hashchange', updateViewFromHash);
});

onUnmounted(() => {
  window.removeEventListener('hashchange', updateViewFromHash);
});
</script>

<template>
  <div class="app-wrapper">
    <Navbar :current-view="currentView" @navigate="navigateTo" />
    <main>
      <template v-if="currentView === 'home'">
        <HeroSection @navigate="navigateTo" />
        <AboutSection @read-more="navigateTo('about-sub')" />
        <ScholarshipPrograms />
        <NoticeSection />
      </template>
      <template v-else-if="currentView === 'about-sub'">
        <AboutSubpage @back="navigateTo('home')" />
      </template>
    </main>
    <Footer @navigate="navigateTo" />
  </div>
</template>

<style>
/* Layout tweaks if needed for global App container */
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1;
}
</style>
