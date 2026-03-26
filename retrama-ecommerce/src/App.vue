<script setup lang="ts">
import TopBanner from '@/components/TopBanner.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import CatalogView from '@/views/CatalogView.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen bg-[#FAFAFA] font-sans">
    <TopBanner />
    <NavBar />
    
    <main class="flex-grow">
      <CatalogView />
    </main>

    <Footer />
  </div>
</template>