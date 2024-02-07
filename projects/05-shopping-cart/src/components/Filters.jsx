import './Filters.css'
import { useState } from 'react'

export function Filters({ onChange }) {
  const [minPrice, setMinPrice] = useState(0)
  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value)
    onChange((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }))
  }

  const handleChangeCategory = (event) => {
    onChange((prevState) => ({
      ...prevState,
      category: event.target.value,
    }))
  }
  return (
    <section className="filters">
      <div>
        <label htmlFor="price">Min. Price</label>
        <input
          type="range"
          id="price"
          name="price"
          min="0"
          max="2000"
          onChange={handleChangeMinPrice}
        />
        <span>{minPrice}</span>
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          onChange={handleChangeCategory}
        >
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Phones</option>
        </select>
      </div>
    </section>
  )
}
