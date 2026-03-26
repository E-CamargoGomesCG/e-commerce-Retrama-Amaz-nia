// src/services/api.ts
import { mockProducts } from '@/data/mockProducts'
import type { Product } from '@/data/mockProducts'

export const api = {
 
  async getProducts(): Promise<Product[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockProducts)
      }, 800) 
    })
  }
}