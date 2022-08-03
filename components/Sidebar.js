import Link from "next/Link";
import { useEffect } from "react";
import { useState } from "react";
import client from '../lib/commerce';

const SideBar = (props) => {
    const [items, setItems] = useState([])

    const categories = async () => {
        try {
            const categories = await client.categories.list()
            setItems(categories.data);
            
            
    
        } catch(error) {
            console.error(error)
        }
        
    }
    useEffect(()=> {
        categories();
    }, [])
    

    if(!props.show) {
        return null
    }
    return (
        <div onClick={props.onClose} className="fixed top-0 w-full h-full bg-black bg-opacity-40 ">
            <div className="bg-white w-2/3 h-full p-5 sm:w-1/3">
                <p>&nbsp;</p>
                <p className="mt-7 cursor-pointer  text-center p-2 border border-red-200 rounded-md hover:bg-red-200 hover:text-white" onClick={props.onClose}>Close</p>
                <p className="mt-3 p-3 bg-red-200 font-bold mb-3 text-center">Categories</p>
                {items && items.map((item) => (
                    <div key={item.id} className="bg-blue-300 p-3 mb-2 border  rounded-md mx-2 hover:bg-blue-400">
                        <Link href={`/categories/${item.slug}`} >
                            <a>
                                <p> {(item.name)}</p>
                            </a>
                        </Link>
                    </div>
                    
                    
                ))}
                <button className="bg-red-400 p-5 rounded-md mx-2 hover:bg-white hover:text-black hover:border border-red-300 ">
                    <Link href="/shop">
                        <a>Shop Now</a>
                    </Link>
                </button>
            </div>
            
        </div>
      );
}
 
export default SideBar;