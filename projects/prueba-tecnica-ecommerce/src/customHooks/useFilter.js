import { useContext, useState } from 'react'
import { products as initialProducts } from '../mocks/products.json';
import { FiltersContext } from '../context/filters';
import '../mocks/products.json'

export function useFilters() {
  const [products] = useState(initialProducts);
  const { filters, setFilters } = useContext(FiltersContext);

  const filterProducts = products => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        ) &&
        (
          filters.rating === 'all' ||
          product.rating < (filters.rating + 1) && product.rating >= (filters.rating)
        )
      )
    })
  };
  const filteredProducts = filterProducts(products);
  return { filteredProducts, setFilters, filters }
}
