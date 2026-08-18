<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import Navbar from './components/Navbar.vue';
import HeroSection from './components/HeroSection.vue';
import AboutSection from './components/AboutSection.vue';
import AboutSubpage from './components/AboutSubpage.vue';
import CommunitySubpage from './components/CommunitySubpage.vue';
import ResourcesSubpage from './components/ResourcesSubpage.vue';
import NoticeSubpage from './components/NoticeSubpage.vue';
import ScholarshipPrograms from './components/ScholarshipPrograms.vue';
import NoticeSection from './components/NoticeSection.vue';
import Footer from './components/Footer.vue';
import AuthModal from './components/AuthModal.vue';
import MyPageModal from './components/MyPageModal.vue';

export type ViewType = 'home' | 'about-sub' | 'community-sub' | 'resources-sub' | 'notice-sub';

const getViewFromHash = (): ViewType => {
  const hash = window.location.hash;
  if (hash.startsWith('#about-sub')) return 'about-sub';
  if (hash.startsWith('#community-sub')) return 'community-sub';
  if (hash.startsWith('#resources-sub')) return 'resources-sub';
  if (hash.startsWith('#notice-sub')) return 'notice-sub';
  return 'home';
};

const currentView = ref<ViewType>(getViewFromHash());

const updateViewFromHash = () => {
  currentView.value = getViewFromHash();
};

const navigateTo = (view: ViewType, subTab?: string) => {
  currentView.value = view;
  if (view === 'about-sub') {
    window.location.hash = subTab ? `#about-sub/${subTab}` : '#about-sub/greetings';
  } else if (view === 'community-sub') {
    window.location.hash = subTab ? `#community-sub/${subTab}` : '#community-sub/board';
  } else if (view === 'resources-sub') {
    window.location.hash = subTab ? `#resources-sub/${subTab}` : '#resources-sub/apply';
  } else if (view === 'notice-sub') {
    window.location.hash = subTab ? `#notice-sub/${subTab}` : '#notice-sub/notice';
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
      <template v-else-if="currentView === 'community-sub'">
        <CommunitySubpage @back="navigateTo('home')" />
      </template>
      <template v-else-if="currentView === 'resources-sub'">
        <ResourcesSubpage @back="navigateTo('home')" />
      </template>
      <template v-else-if="currentView === 'notice-sub'">
        <NoticeSubpage @back="navigateTo('home')" />
      </template>
    </main>
    <Footer @navigate="navigateTo" />

    <!-- Auth & MyPage Modals -->
    <AuthModal />
    <MyPageModal />
  </div>
</template>

<style>
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1;
}
</style>
