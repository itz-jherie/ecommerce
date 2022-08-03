import commerce from '../../lib/commerce';
import { useCartDispatch } from '../../context/cart';
import { stripHtml } from 'string-strip-html';
import Navbar from '../../components/Navbar';

export async function getStaticProps({params}) {
    const { permalink } = params

    const product = await commerce.products.retrieve(permalink, {
        type: "permalink",
    });

    return {
        props: {
            product,
        },
    };
}



export async function getStaticPaths() {
    const { data: products } = await  commerce.products.list();

    return {
        paths: products.map((product) => ({
            params: {
                permalink: product.permalink
            },
        })),
        fallback: false,
    };
}

export default function ProductPage({ product }) {
    
    const {setCart} = useCartDispatch();  
    // console.log(product)
    const addToCart = () => commerce.cart.add(product.id).then(({ cart }) => setCart(cart))
    const x = product.description
    const res = stripHtml(x)
    
    return (
        <>
            <Navbar/>
        
            <div className='p-5 flex flex-col  md:m-16'>
                
                <img src={product.image.url} className='mt-13 self-center w-3/4 sm:border sm:w-1/4'/>
                <h1 className='mt-8 font-semibold'>{product.name}</h1>
                <p className='text-lg font-bold'>{product.price.formatted_with_symbol}</p>
                <p className='mt-5'> {res.result} Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Debitis quisquam vel error, voluptatem, enim impedit amet facere veniam totam, 
                    a id esse eligendi voluptates! Dignissimos excepturi quia officia illum temporibus 
                    saepe esse nesciunt reprehenderit optio! Delectus laborum at doloribus sint!
                </p>
                <button onClick={addToCart}className="bg-blue-400 p-3 mt-7 text-white hover:bg-blue-200" >Add to cart</button>
            </div>
        </>
    )
}

