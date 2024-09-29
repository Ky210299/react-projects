import './Cart.css';
import { useId } from 'react';
import { ClearCartIcon, CartIcon } from './Icons';
import { useCart } from '../customHooks/useCart';

export function Cart() {
  const cartCheckboxId = useId();
  const { cart, clearCart, addToCart } = useCart()

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" name="cart" value="" hidden />
      <aside className='cart'>
        <ul>
          {
            cart.map(product => {
              return (
                <li key={product.id}>
                  <img src={product.thumbnail} alt={product.title} />
                  <div>
                    <strong>{product.title}</strong> - ${product.price}                 </div>
                  <footer>
                    Quantity: {product.quantity}
                    <button onClick={() => addToCart(product)}>+</button>
                  </footer>
                </li>
              )
            })
          }
        </ul>
        <button onClick={() => clearCart()}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
