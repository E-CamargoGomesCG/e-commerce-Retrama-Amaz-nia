<script setup lang="ts">
import { ref } from 'vue'

// Criamos uma variável para controlar se a faixa aparece ou não
const isVisible = ref(true)
</script>

<template>
  <div v-if="isVisible" class="bg-[#FF8A00] text-white text-[11px] sm:text-sm py-2 px-8 sm:px-4 flex justify-center items-center text-center relative w-full">
    
    <span class="flex items-center justify-center gap-1 sm:gap-2 font-medium">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>
      <span>Frete Grátis para todo o Brasil em compras acima de R$ 300!</span>
    </span>
    
    <button @click="isVisible = false" class="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 hover:text-gray-200 p-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
    </button>

  </div>
</template>