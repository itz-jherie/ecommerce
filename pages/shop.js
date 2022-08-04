import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import client from '../lib/commerce';
import Navbar from '../components/Navbar';


export async function getStaticProps() {
  const merchant = await client.merchants.about();
  const { data: categories } = await client.categories.list();
  const { data: products } = await client.products.list();

  return {
    props: {
      merchant,
      categories,
      products 
    }
  }
}

export default function IndexPage({merchant, categories, products}) {
    
  return (
  <div>
    <Navbar />
    <ProductList products={products}/>
    
    
  </div>
  )
}
