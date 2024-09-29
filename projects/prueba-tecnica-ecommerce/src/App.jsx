import { Products } from './components/Products';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';
import { CartProvider } from './context/cart';

export function App() {
  return (
    <CartProvider>
      <h1>Shopping Cart</h1>
      <Header />
      <Cart />
      <Products />
      <Footer />
    </CartProvider>
  )
}
