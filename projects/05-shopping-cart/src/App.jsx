import { Header } from './components/Header'
import { Products } from './components/Products'
import { products as initialProducts } from './mocks/products'
import { useState } from 'react'

function App() {
  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category: 'laptops',
    minPrice: 100,
  })

  const filterProducts = (products) => {
    const filteredProducts = products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
      )
    })
    return filteredProducts
  }
  return (
    <>
      <Header />
      <Products products={filterProducts(products)} />
    </>
  )
}

export default App
