import '../styles/globals.css'
import NextNProgress from 'nextjs-progressbar'
import { CartProvider } from '../context/cart'


function MyApp({ Component, pageProps }) {
  return (
    <>
    <CartProvider>
      <NextNProgress />
        <Component {...pageProps} />
    </CartProvider>
       
    </>
  )
}

export default MyApp
