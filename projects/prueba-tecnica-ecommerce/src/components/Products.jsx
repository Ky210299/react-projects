import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import { useFilters } from '../customHooks/useFilter.js'
import { useCart } from '../customHooks/useCart.js';

export function Products() {
  const { filteredProducts: products } = useFilters();
  const { addToCart, removeFromCart, cart } = useCart();

  const checkProductInCart = (product) => {
    return cart.some(item => item.id === product.id);
  }


  return (
    <main className='products'>
      <ul >
        {
          products.map(product => {
            const isInCart = checkProductInCart(product);
            return (
              <li key={product.id} >
                <img
                  src={product.thumbnail}
                  alt={product.title} />
                <div>
                  <strong>{product.title}</strong> <span><i>${product.price}</i></span> <span> Rating: {product.rating}</span>
                </div>
                <div >
                  <button className={isInCart ? 'bg-red' : 'bg-blue'} onClick={() => {
                    isInCart ? removeFromCart(product) : addToCart(product)
                  }}>
                    {
                      isInCart
                        ?
                        <RemoveFromCartIcon />
                        :
                        <AddToCartIcon />
                    }
                  </button>
                </div>
              </li>
            )
          })
        }
      </ul>
    </main >
  )
}

