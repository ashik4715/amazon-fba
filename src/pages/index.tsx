import { useState, useEffect } from 'react'
import ProductList from '@/components/ProductList'

export default function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch('/api/products')
      const data = await response.json()
      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-8">Amazon Products</h1>
      <ProductList products={products} />
    </div>
  )
}