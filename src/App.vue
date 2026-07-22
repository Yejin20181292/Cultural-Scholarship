<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import HeroSection from './components/HeroSection.vue';
import AboutSection from './components/AboutSection.vue';
import ScholarshipPrograms from './components/ScholarshipPrograms.vue';
import NoticeSection from './components/NoticeSection.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="app-wrapper">
    <Navbar />
    <main>
      <HeroSection />
      <AboutSection />
      <ScholarshipPrograms />
      <NoticeSection />
    </main>
    <Footer />
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
