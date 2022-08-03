const Footer = () => {
    return ( 
        <div className="flex flex-col p-5 text-white bg-black bg-opacity-80 md:flex-row">
            <div className="w-full md:w-1/2">
                <h2 className="font-bold">ABOUT THE SHOP: </h2>
                <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Laborum aspernatur esse libero labore qui nulla voluptatem. 
                    Perferendis, fugiat quibusdam? Ab, perspiciatis exercitationem! 
                    Saepe voluptate ipsum facere odio iusto omnis ab?
                </span>
            

                <div className="flex" >
                    <div className="flex border  bg-white">
                        <img src="./stripe-3.svg"  width="40px" className="m-3"/> 
                        <img src="./paystack-2.svg" width="40px" className="m-3"/>
                        <img src="./metamask.svg" width="40px" className="m-3"/>
                    </div>

                </div>
            </div>

            <div className="w-full md:w-1/2">
                <h2 className="font-bold">NEWSLETTER</h2>
                <p>Subscribe to get notified about product updates, launches, news and offers</p>
                <form className="flex flex-col">
                    <input type="text" placeholder="Enter e-mail..." className="w-2/3 rounded-sm my-1"></input>
                    <button className="font-bold bg-red-200 p-2 rounded-md w-1/3 my-2" onClick= {(e)=> {e.preventDefault()}}>Subscribe</button>    
                </form>
            </div>
            
        </div>
     );
}
 
export default Footer;