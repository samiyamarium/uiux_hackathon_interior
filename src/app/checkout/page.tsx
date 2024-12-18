import React from "react";
export default function Checkout(){
    return(
        <div>
             <div className='pt-20 '>
          <div  className=" mx-20 w-screen  h-60  text-white bg-[url('/shop.png')] pt-20 bg-cover text-center font-sans text-6xl"><b className=' text-amber-950 opacity-40'>CheckOut</b><div ></div></div>
                  <br/><br/>
        </div>
        <div className="mx-20 gap-44 flex">
            <div>
                
                <label className="text-xl font-sans font-semibold text-black tracking-wide pr-28">First name</label><label className="text-xl font-sans font-semibold rounded-md text-black tracking-wide">Last name</label><br/><br/>
                <div className="flex gap-8"><input className="outline outline-2 rounded-md outline-gray-400 w-44 h-12" type="text" placeholder=""/><input className="outline rounded-md outline-2 outline-gray-400 w-44 h-12" type="text" placeholder=""/></div><br/><br/>
                <label className="text-xl font-sans font-semibold text-black tracking-wide">Company name&#40;Optional&#41;</label><br/><br/><input className="outline outline-2 rounded-md outline-gray-400 w-96 h-12" type="text" placeholder=""/><br/><br/>
                <label className="text-xl font-sans font-semibold text-black tracking-wide">Country&#47;Region</label><br/><br/><input className="outline outline-2 outline-gray-400 w-96 h-12 rounded-md" type="select" placeholder="Sri Lanka                                                               &#x2B9F;    "/><br/><br/><br/>
                <label className="text-xl font-sans font-semibold text-black tracking-wide">Street address</label><br/><br/><input className="outline outline-2 outline-gray-400 w-96 rounded-md h-12" type="text" placeholder=""/><br/><br/><br/>
                <label className="text-xl font-sans font-semibold text-black tracking-wide">Town&#47;City</label><br/><br/><input className="outline outline-2 outline-gray-400 w-96 h-12 rounded-md" type="text" placeholder=""/><br/><br/><br/>
                <label className="text-xl font-sans font-semibold text-black tracking-wide">Province</label><br/><br/><input className="outline outline-2 outline-gray-400 w-96 h-12 rounded-md" type="select" placeholder="Western Province                                                   &#x2B9F;"/><br/><br/><br/>
                <label className="text-xl font-sans font-semibold text-black tracking-wide">ZIP Code</label><br/><br/><input className="outline outline-2 outline-gray-400 w-96 h-12 rounded-md" type="number" placeholder=""/><br/><br/><br/>
                <label className="text-xl font-sans font-semibold text-black tracking-wide">Phone Number</label><br/><br/><input className="outline outline-2 outline-gray-400 w-96 h-12 rounded-md" type="number" placeholder=""/><br/><br/><br/>
                <label className="text-xl font-sans font-semibold text-black tracking-wide">Email Address</label><br/><br/><input className="outline outline-2 outline-gray-400 w-96 h-12 rounded-md " type="email" placeholder=""/><br/><br/><br/>
                
                <textarea className="outline outline-2 outline-gray-400 w-96 h-12 rounded-md text-center"  placeholder="Additional Information"></textarea><br/><br/><br/>
            </div>
            <div className=" flex">
                <div className=""><b className="text-2xl font-sans text-black ">Product </b><br/><br/><p className="font-sans text-gray-400">Asgaard sofa x 1 </p><br/>Sub-total<br/><br/>Total<br/><br/><hr/>
                <div className="tracking-wider">&#8226;&nbsp;<b className="text-black text-xs font-sans">Direct Bank Transfer</b><br/><br/><p className="text-gray-400 text-xs font-sans">Make your payment directly into our bank account.Please use your order ID as the payment refernce.Your order will not be shipped until the funds have cleared in out account.</p><br/> <br/><p className="text-xs text-gray-400 font-sans">&#x25E6;&nbsp; Direct Bank Transfer</p><br/><p className="text-xs text-gray-400 font-sans">&#x25E6;&nbsp;Cash on Delivery</p><br/><br/><div className="text-xs font-sans text-black tracking-wide">Your personal data will be used to support your experience throughout this websie, to manage access to your account and for other purposes described in out <b>privacy policy</b><br/><br/><p className="text-center"><button className="outline outline-2 outline-gray-500 rounded-md w-28 h-16">Place order</button></p></div></div></div>
                <div><b className="text-2xl font-sans text-black ">Sub-Total </b><br/><br/>Rs.250,000.000<br/><br/>Rs.250,000.000<br/><br/><b className="text-[#B88E2F] ">Rs.250,000.000</b><br/><br/><hr/>
                </div>

            </div> </div>
            
       
        </div> 
    )
} 