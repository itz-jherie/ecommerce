import Link from "next/link";
import { useState } from "react";
import SideBar from "./Sidebar";
import { AiFillShopping, AiOutlineMenu } from "react-icons/ai"
import { useCartState } from "../context/cart";

const Navbar = () => {
    const [show, setShow] = useState(false);
    const {total_unique_items} = useCartState();

    

    
   
    return (
        <>
        <nav className="bg-red-200 flex fixed top-0 w-full justify-between">
            <span onClick={()=> setShow(!show)} className="p-3  cursor-pointer"><AiOutlineMenu  fill='#fff'/></span>
            <span className="p-3 font-dancing text-white text-xl font-extrabold">logo</span>
            <span  className="p-3">
                <Link href="/cart">
                    <a className=""> 
                        <div className="">
                            <span className="w-1"><AiFillShopping fill='#fff' /></span> 
                        </div> 
                        {total_unique_items ? <span className="fixed top-1 right-2  text-sm px-1 text-white rounded-full bg-red-700">{total_unique_items}</span> : ""}
                    </a>
                </Link>
            </span>
            
        </nav>
        <SideBar show={show} onClose={()=>setShow(false)}/>
        </>
        
      );
}
 
export default Navbar;
// -top-4 left-2