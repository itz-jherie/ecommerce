import Commerce from "@chec/commerce.js";
import { useCartState, useCartDispatch } from "../context/cart";
import commerce from '../lib/commerce'
import Navbar from "../components/Navbar";
import Link from "next/Link";
import CartEmpty from "../components/CartEmpty";


function CartItem({id, name, quantity, line_total, image, permalink}) {
    const {setCart} = useCartDispatch()

    const handleUpdateCart= ({ cart }) => setCart(cart)
   

    const removeItem = () => commerce.cart.remove(id).then(handleUpdateCart)
    const decrementQuantity = () => {
        quantity > 1 
        ? commerce.cart.update(id, { quantity: quantity - 1 }).then(handleUpdateCart)
        : removeItem();
    };

    const incrementQuantity = () => commerce.cart.update(id, { quantity: quantity + 1}).then(handleUpdateCart)

    return (
        <div>
            <div className="flex flex-col mt-5 p-5  border bg-blue-200 ">
                <Link href={`/products/${permalink}`}  >
                <div className="flex mb-3 border bg-red-200 rounded-md">
                    <img src={image.url} width="70px" alt={permalink}/>
                        <div className="self-center px-5">
                            <p className="font-semibold">{name}</p>
                            <p>Qty: {quantity}</p>
                            <p className="font-bold">{line_total.formatted_with_symbol}</p>
                        </div>

                    </div>
                </Link>
                
                <div className="flex justify-between">
                    <button onClick={removeItem} className="bg-red-500 px-5 rounded-md text-white">Remove Item</button>
                    <div>
                        <button onClick={decrementQuantity} className="bg-blue-400 text-2xl font-200 px-6 py-3 text-white mx-2 rounded-md ">-</button>
                        <button onClick={incrementQuantity} className="bg-blue-400 text-2xl font-200 px-6 py-3 text-white rounded-md ">+</button>

                    </div>
                    
                </div>
                

            </div>
            
        </div>
    )
}
export default function CartPage() {


    const {line_items, subtotal, hosted_checkout_url} = useCartState()
    const x = useCartState();
    console.log(x)

    const isEmpty = line_items.length === 0;

    if(isEmpty) return <CartEmpty/>;
    console.log(line_items)

    return (
        <>
            <Navbar/>
            <div className="mt-16 md:mx-16">

                {line_items.map((item) => (
                    <CartItem key={item.id} {...item}/>
                ))}

                    <hr/>
                <p className="bg-blue-300 mt-5 m-2 p-3 rounded-md ">Subtotal:<strong>{subtotal.formatted_with_symbol}</strong></p>
                <button className="bg-green-300 m-2 mt-5 p-3 rounded-md  ">
                    <Link href={hosted_checkout_url}>
                        <a>Proceed To Checkout</a>
                    </Link>
                </button>

            </div>

        </>
        
        
    )
}
//item.image.url
//item.permalink