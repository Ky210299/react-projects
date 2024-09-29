import { useState, useId } from 'react';
import './Filters.css';
import { useFilters } from '../customHooks/useFilter';

const MAX_PRICE_ON_DB = false;

export function Filters() {
  const { setFilters, filters } = useFilters();
  const minPriceFilterId = useId()
  const categoryFilterId = useId();
  const ratingFilterId = useId();

  const handleChangePrice = event => {
    const newMinPrice = event.target.value;
    setFilters((prevState) => ({
      ...prevState,
      minPrice: newMinPrice
    }));
  }
  const handleChangeCategory = event => {
    const newCategory = event.target.value;
    setFilters(prevState => ({
      ...prevState,
      category: newCategory
    }))
  }

  const handleChangeRating = event => {
    const newRating = event.target.value;
    setFilters(prevState => ({
      ...prevState,
      rating: newRating
    }))
  }

  return (
    <section className='filters'>
      <div >
        <label htmlFor={minPriceFilterId}>Price</label>
        <input
          type="range"
          id={minPriceFilterId}
          name="price"
          min='0'
          max={MAX_PRICE_ON_DB || '1999'}
          onChange={handleChangePrice}
          value={filters.minPrice}
        />
        ${filters.minPrice}
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select id={categoryFilterId} name='category' onChange={handleChangeCategory}>
          <option value="all">All</option>
          <option value="groceries">Groceries</option>
          <option value="beauty">Breaty</option>
          <option value="fragrances">Fragrances</option>
        </select>
      </div>
      <div>
        <label htmlFor={ratingFilterId}>Rating</label>
        <select id={ratingFilterId} name='rating' onChange={handleChangeRating}>
          <option value="all">All</option>
          <option value={5.1}>⭐⭐⭐⭐⭐</option>
          <option value={4}>⭐⭐⭐⭐</option>
          <option value={3}>⭐⭐⭐</option>
          <option value={2}>⭐⭐</option>
          <option value={1}>⭐</option >
        </select >
      </div >
    </section >
  )
}
/*
"rating"
"availabilityStatus"
 */
