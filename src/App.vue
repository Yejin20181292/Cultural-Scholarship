<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import Navbar from './components/Navbar.vue';
import HeroSection from './components/HeroSection.vue';
import AboutSection from './components/AboutSection.vue';
import AboutSubpage from './components/AboutSubpage.vue';
import ScholarshipSubpage from './components/ScholarshipSubpage.vue';
import CommunitySubpage from './components/CommunitySubpage.vue';
import ResourcesSubpage from './components/ResourcesSubpage.vue';
import ScholarshipPrograms from './components/ScholarshipPrograms.vue';
import NoticeSection from './components/NoticeSection.vue';
import Footer from './components/Footer.vue';
import AuthModal from './components/AuthModal.vue';
import MyPageModal from './components/MyPageModal.vue';
import HomePopup from './components/HomePopup.vue';

export type ViewType = 'home' | 'about-sub' | 'scholarship-sub' | 'community-sub' | 'resources-sub';

// 공지사항이 자료실 아래로 들어가기 전에 쓰던 주소를 새 주소로 바꿔준다.
// #notice-sub/notice → #resources-sub/notice, #notice-sub/detail/3 → #resources-sub/notice/3
const normalizeLegacyHash = () => {
  const hash = window.location.hash;
  if (!hash.startsWith('#notice-sub')) return;
  const detailId = hash.split('/')[2];
  window.location.replace(
    `${window.location.pathname}${window.location.search}#resources-sub/notice${detailId ? `/${detailId}` : ''}`
  );
};

const getViewFromHash = (): ViewType => {
  const hash = window.location.hash;
  if (hash.startsWith('#about-sub')) return 'about-sub';
  if (hash.startsWith('#scholarship-sub')) return 'scholarship-sub';
  if (hash.startsWith('#community-sub')) return 'community-sub';
  if (hash.startsWith('#resources-sub') || hash.startsWith('#notice-sub')) return 'resources-sub';
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
  } else if (view === 'scholarship-sub') {
    window.location.hash = subTab ? `#scholarship-sub/${subTab}` : '#scholarship-sub/performance';
  } else if (view === 'community-sub') {
    window.location.hash = subTab ? `#community-sub/${subTab}` : '#community-sub/board';
  } else if (view === 'resources-sub') {
    window.location.hash = subTab ? `#resources-sub/${subTab}` : '#resources-sub/notice';
  } else {
    window.history.pushState("", document.title, window.location.pathname + window.location.search);
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  normalizeLegacyHash();
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
        <HomePopup @navigate="navigateTo" />
        <HeroSection @navigate="navigateTo" />
        <AboutSection @read-more="navigateTo('about-sub')" />
        <ScholarshipPrograms />
        <NoticeSection @navigate="navigateTo" />
      </template>
      <template v-else-if="currentView === 'about-sub'">
        <AboutSubpage @back="navigateTo('home')" />
      </template>
      <template v-else-if="currentView === 'scholarship-sub'">
        <ScholarshipSubpage @back="navigateTo('home')" />
      </template>
      <template v-else-if="currentView === 'community-sub'">
        <CommunitySubpage @back="navigateTo('home')" />
      </template>
      <template v-else-if="currentView === 'resources-sub'">
        <ResourcesSubpage @back="navigateTo('home')" />
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
