import Link from 'next/link'

import Product from './Product'

export default function ProductList({products}) {
    if(!products) return null;
    return (
        <ul className='flex flex-row flex-wrap  justify-center gap-4 px-2 '>
            {products.map((product) => (
                <li key={product.id} className=" border flex  flex-col hover:bg-blue-100">
                    <Link href={`/products/${product.permalink}`}>
                        <a>
                         <img src={product.image.url} alt={product.image.filename} width="150px"/>
                    
                    
                        
                            <Product {...product} />
                        </a>
                    </Link>

                </li>
            ))}
        </ul> 
    )
}



