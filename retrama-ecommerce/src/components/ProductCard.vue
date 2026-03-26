<script setup lang="ts">
import type { Product } from '@/data/mockProducts'

defineProps<{
  product: Product
}>()
</script>

<template>
  <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group hover:shadow-md transition-shadow">
    <div class="relative h-48 bg-gray-200">
      <img :src="product.image" :alt="product.name" class="w-full h-full object-cover" />
      
      <div class="absolute top-3 left-3 bg-[#064e3b] text-white text-[10px] font-medium px-3 py-1 rounded-full">
        {{ product.category }}
      </div>
      
      <button class="absolute top-3 right-3 bg-white p-1.5 rounded-full shadow-sm text-gray-400 hover:text-red-500 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      </button>
    </div>

    <div class="p-4 flex flex-col flex-grow">
      <h3 class="font-bold text-gray-800 text-sm md:text-base">{{ product.name }}</h3>
      <p class="text-xs text-gray-500 mt-1">{{ product.availability }}m² disponível</p>
      
      <div class="mt-4 flex justify-between items-end">
        <div>
          <span class="text-[#064e3b] font-bold text-lg">R$ {{ product.price.toFixed(2).replace('.', ',') }}</span>
          <span class="text-xs text-gray-500 ml-1">por m²</span>
        </div>
        
        <button class="bg-[#f97316] text-white rounded-full p-2 hover:bg-[#ea580c] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>