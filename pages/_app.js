import '../styles/globals.css'
import NextNProgress from 'nextjs-progressbar'
import { CartProvider } from '../context/cart'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  
  return (
    <>
    <Head>
      <title>E-commerce Page</title>
      <meta name="title" content="E-commerce Page"/>
      <meta name="description" content="E-commerce Page by jherie using NextJs for rendering and CommerceJs SDK as backend."/>
      <meta name="keywords" content="NextJs, CommerceJs,  JAMSTACK"/>
      <meta name="robots" content="index, follow"/>
      <meta name="language" content="English"/>
      <meta name="author" content="Elegba Jeremiah"/>
    </Head>
    <CartProvider>
      <NextNProgress />
        <Component {...pageProps} />
    </CartProvider>
       
    </>
  )
}

export default MyApp
