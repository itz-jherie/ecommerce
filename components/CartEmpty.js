import Navbar from "./Navbar";
const CartEmpty = () => {
    return ( 
        <>
            <Navbar/>
            <div className="flex h-1/2  align-center  justify-center">
                <p className="h-full mt-40 border p-7 bg-red-200">Your cart is Empty </p>     
            </div>
        </>
     );
}
 
export default CartEmpty;