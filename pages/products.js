import client from '../lib/commerce';
import ProductList from '../components/ProductList';
import Navbar from '../components/Navbar';

export async function getStaticProps() {
    const { data: products } = await client.products.list();

    return {
        props: {
            products,
        },
    };
}

export default function ProductsPage({ products }) {
    
    return (
        <div className='mt-7'>
            <Navbar/>
            
            <ProductList products={products}/>
        </div>
    )
}


