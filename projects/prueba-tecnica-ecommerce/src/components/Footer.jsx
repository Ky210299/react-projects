import './Footer.css'
import { useCart } from '../customHooks/useCart';

export function Footer() {
  const { cart } = useCart();
  return (
    <footer className='footer'>
      <h4>Ecommerce example</h4>
      CART:
      {
        cart.map(e => {
          return JSON.stringify({ title: e.title, quantity: e.quantity }, null, 2);
        })
      }
    </footer>
  )
}
