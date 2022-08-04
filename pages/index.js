import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function LandingPage() {
  return ( 
    <div>
     <div><Navbar/></div>
      <div className="flex font-poppins  flex-col mt-16 p-3 font- items-center">
        <div className="flex flex-col justify-around md:flex-row">
          <div className="text-center px-5 py-10 w-full ">
            <p className="font-bold text-2xl">
              Buy Accessories <br/> 
              and Home Office Items
            </p>
            <p>Get them delivered to your doorstep </p>
            <button className="bg-red-200 rounded-md m-3 p-3 hover:bg-white hover:text-black">
              <Link href="/shop">
                <a>Shop Now</a>
              </Link>
            </button>
            
          </div>

          <div className=" h-full self-center border md:hidden">
            <img src="./bg.jpg" width="" className=" border w-full h-full md:w-1/2"/>
          </div>

        </div><br/>
        <h1 className="font-bold mt-4  text-xl">How It Works</h1>
        <div className="text-center p-3  flex flex-col items-center justify-center sm:flex-row sm:items-stretch sm:justify-evenly lg:mx-16" >

          

          <div className=" rounded-lg my-5 h-30 bg-red-200 w-1/2 px-10 py-5 flex flex-col items-center justify-start sm:mr-2 ">
            <span className="font-bold">1.</span><br/>
            <span>Find a Product you love then add it to cart</span>
          </div>

          <div className=" rounded-lg my-5 h-50 bg-red-200 w-1/2 px-10 py-5 flex flex-col items-center justify-start sm:mr-2 ">
            <span className="font-bold">2.</span><br/>
            <span>You can increase the quantity of products you want in the cart, then proceed to checkout</span>
          </div>

          <div className=" rounded-lg my-5 h-full bg-red-200 w-1/2 px-10 py-5 flex flex-col items-center justify-start ">
            <span className="font-bold">3.</span><br/>
            <span>Payments can be made with
              <ul className=" flex flex-col text-left font-semibold">
                <li>1. Paystack</li>
                <li>2. Stripe</li>
                <li>3. Ethereum using Metamask</li>
              </ul>
            </span>
          </div>

        </div>
      </div>
        
      <Footer />

      
    </div>
   );
};