<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import { categories } from '@/data/mockProducts'
import type { Product } from '@/data/mockProducts'
import { api } from '@/services/api'

// --- ESTADOS REATIVOS ---
const activeCategory = ref('Todos')
const searchQuery = ref('')
const sortBy = ref('Nome A-Z') // Controla a ordenação
const isLoading = ref(true)
const products = ref<Product[]>([])

// --- CICLO DE VIDA (Buscando dados na "API") ---
onMounted(async () => {
  isLoading.value = true
  try {
    // Simula a chamada assíncrona para o servidor com delay
    products.value = await api.getProducts()
  } catch (error) {
    console.error("Erro ao buscar produtos", error)
  } finally {
    isLoading.value = false
  }
})

// --- LÓGICA DE FILTROS E ORDENAÇÃO ---
const filteredProducts = computed(() => {
  // 1. Primeiro filtramos a lista
  let result = products.value.filter(product => {
    // Filtro por Categoria
    const matchCategory = activeCategory.value === 'Todos' || product.category === activeCategory.value
    // Filtro por Busca (ignorando maiúsculas e minúsculas)
    const matchSearch = product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    
    return matchCategory && matchSearch
  })

  // 2. Depois ordenamos o resultado com base no 'sortBy'
  result = result.sort((a, b) => {
    if (sortBy.value === 'Nome A-Z') {
      return a.name.localeCompare(b.name)
    } else if (sortBy.value === 'Menor Preço') {
      return a.price - b.price
    } else if (sortBy.value === 'Maior Preço') {
      return b.price - a.price
    }
    return 0
  })

  return result
})
</script>

<template>
  <div class="min-h-screen bg-[#fafafa] pb-20 w-full">
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      
      <h1 class="text-3xl font-bold text-gray-900 mb-6">Catálogo</h1>

      <div class="relative mb-6">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input 
          type="text" 
          v-model="searchQuery"
          class="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#044B3A] focus:border-[#044B3A] sm:text-sm transition-shadow" 
          placeholder="Buscar tecido..." 
        />
      </div>

      <div class="flex flex-wrap gap-3 mb-8">
        <button 
          v-for="cat in categories" 
          :key="cat"
          @click="activeCategory = cat"
          :class="[
            'px-5 py-2 rounded-full text-sm font-medium transition-colors',
            activeCategory === cat 
              ? 'bg-[#044B3A] text-white' 
              : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
          ]"
        >
          {{ cat }}
        </button>
      </div>

      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
        <span class="text-sm text-gray-500 font-medium">
          {{ isLoading ? 'Buscando...' : `${filteredProducts.length} produtos encontrados` }}
        </span>
        
        <select 
          v-model="sortBy"
          class="border border-gray-200 rounded-md py-2 px-3 text-sm text-gray-600 bg-white focus:outline-none focus:ring-[#044B3A] focus:border-[#044B3A] w-full sm:w-auto cursor-pointer"
        >
          <option value="Nome A-Z">Nome A-Z</option>
          <option value="Menor Preço">Menor Preço</option>
          <option value="Maior Preço">Maior Preço</option>
        </select>
      </div>

      <div v-if="isLoading" class="flex justify-center items-center py-20 w-full">
        <div class="animate-spin rounded-full h-12 w-12 border-b-4 border-[#044B3A] border-t-transparent"></div>
      </div>

      <div v-else>
        <div v-if="filteredProducts.length === 0" class="w-full text-center py-10 text-gray-500">
          Nenhum tecido encontrado para "{{ searchQuery }}" na categoria "{{ activeCategory }}".
        </div>

        <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductCard 
            v-for="product in filteredProducts" 
            :key="product.id" 
            :product="product" 
          />
        </div>
      </div>

    </main>
  </div>
</template>