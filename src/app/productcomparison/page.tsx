import React from "react";
import Image from 'next/image';
import sofa from '../singlep/sofa.png';
import s1 from '../singlep/s1.png'
export default function Comparison(){
    return(
        <div>
             <div className='pt-20 '>
          <div  className=" mx-20 w-screen  h-60  text-white bg-[url('/shop.png')] pt-20 bg-cover text-center font-sans text-6xl"><b className=' text-amber-950 opacity-40'>Product Comparison</b><div ></div></div>
                  <br/></div><hr/>
                  <br/>
                  <div className="flex">
                  <div className="flex mx-28">
                    <div ><b className="font-sans text-2xl text-black tracking-wide">Go to Product page<br/> for more Products</b><br/><p className="font-sans text-gray-600 font-semibold underline tracking-wide">View more</p></div>
                  </div>
                  <div className="flex mx-12 gap-28"><p className="font-sans text-semibold "> <Image className="w-24 h-24 rounded-md bg-orange-400 bg-opacity-20" src={sofa} alt=""/><br/><b>Asgard Sofa</b><br/>Rs.250,0000.000<br/>4.7 &#x2B50;&#x2B50;&#x2B50;&#x2B50;&#x2B50;&nbsp;&nbsp;   &#8739; &nbsp;&nbsp; <b className="font-sans text-xs text-gray-500">204 Reviews</b></p>
                  <p className="font-sans text-semibold "> <Image className="w-24 h-24" src={s1} alt=""/><br/><b>Outdoor Sofa Set</b><br/>Rs.224,0000.000<br/>4.2 &#x2B50;&#x2B50;&#x2B50;&#x2B50;&#x2B50;&nbsp;&nbsp;   &#8739; &nbsp;&nbsp; <b className="font-sans text-xs text-gray-500">145 Reviews</b></p></div>
                 <div className="pt-20 mx-8 "><button className=" rounded-md  bg-[#B88E2F] text-xs px-4 py-4 text-white tacking-wide ">Choose a Product&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x2B9f; </button></div><br/>
                 </div> 

                 <br/><hr/><br/>
                  <div >
                    <div className="flex mx-20">
                   <div className="space-y-8 mx-20">
                    <b  className="font-sans text-2xl text-black ">General</b><br/><ul className="list-none tracking-wide space-y-4 font-semibold font-sans text-gray-700"><li>Sales Package</li>
                   <li>Model Number</li>
                   <li>Secondary Material </li>
                   <li>Configuration</li>
                   <li>Upholstery Material</li>
                   <li>Upholstery Color</li>
                   </ul><br/><br/>
                   <b  className="font-sans text-2xl text-black ">Product</b><br/><br/><ul className="list-none tracking-wide space-y-4 font-semibold font-sans text-gray-700">
                    <li>Filling Material</li>
                   <li>Finish Type</li>
                   <li>Adjustable Headset</li>
                   <li>Maximum Load Capacity </li>
                   <li>Origin of Manufacture</li>
                </ul><br/>
                   
                   <br/>
                   <b  className="font-sans text-2xl tetx-black ">Dimensions</b><br/><ul className="list-none tracking-wide space-y-4 font-semibold font-sans text-gray-700">
                    <li>Width</li>
                   <li>Height</li>
                   <li> Depth</li>
                   <li>Weight</li>
                   <li>Seat Height</li>
                   <li>Leg Height</li>
                   </ul><br/>
                   <br/><br/>
                   <b  className="font-sans text-2xl space-y-8  text-black ">Warranty</b><br/><ul className="list-none tracking-wide space-y-4 font-semibold font-sans text-gray-700">
                    <li>Warrant Summary</li><br/>
                   <li >Warranty Service Type</li><br/><br/><br/>
                   <li >Covered in Warranty </li><br/>
                   <li>Not Covered in Warranty</li><br/><br/><br/><br/><br/>
                   <li className="py-[107]">Domestic Warranty</li>
                   
                   </ul></div><hr/>
                   <br/>
                   <div className="space-y-8 mx-20"><b  className="font-sans text-2xl text-black ">&nbsp;</b><br/><ul className="list-none tracking-wide space-y-4 font-semibold font-sans text-gray-700">
                    <li>1 Sectional Sofa</li>
                   <li>TFCSLIGRBL6SHRS</li>
                   <li>Solid Wood </li>
                   <li>L-Shaped</li>
                   <li>Fabric+cotton</li>
                   <li>Bright grey & Lion</li>
                   </ul>
                   <br/>
                   <br/><br/>
                   <b  className="font-sans text-2xl tetx-black ">&nbsp;</b><br/><ul className="list-none tracking-wide space-y-4 font-semibold font-sans text-gray-700">
                    <li>Foam</li>
                   <li>Bright Grey & Lion</li>
                   <li>No </li>
                   <li>280 Kg</li>
                   <li>India</li>
            
                   </ul><br/><br/>
                   <b  className="font-sans text-2xl tetx-black ">&nbsp;</b><br/><ul className="list-none tracking-wide space-y-4 font-semibold font-sans text-gray-700">
                    <li>265.32 cm</li>
                   <li>76 cm</li>
                   <li>167.76 cm </li>
                   <li>45 kg</li>
                   <li>41.52 cm</li>
                   <li>5.46 cm</li>
                   </ul><br/>
                   <b  className="font-sans text-2xl tetx-black ">&nbsp;</b><br/><br/><br/><ul className="list-none tracking-wide space-y-4 font-semibold font-sans text-gray-700">
                    <li>1 Year Manufacturing <br/>Warranty</li>
                   <li>For Warranty Claims Or Any<br/> Product Related Issues Please<br/> Email At Operations <br/>@trevifurniture.com</li>
                   <li>Warranty Against Manufacturing<br/> Defect</li>
                   <li>The Warranty Does Not Cover<br/> Damages Due To Usage Of<br/> The Product Beyond Its<br/> Intended Use And Wear<br/> & Tear In The Natural<br/> Course Of Product Usage </li>
                   <li>1 Year</li>
                   <li><button className="bg-[#B88E2F] p-4 text-white font-sans text-center text-xl ">Add To Cart</button></li>
                   </ul><br/></div>
                   <div className="space-y-8 mx-20"> 
                   <b  className="font-sans text-2xl text-black ">&nbsp;</b><br/><ul className="list-none tracking-wide space-y-4 font-semibold font-sans text-gray-700">
                    <li>1 Three Seater,2 Single Seater </li>
                   <li>DTUBLIGRBL568</li>
                   <li>Solid Wood </li>
                   <li>L-Shaped</li>
                   <li>Fabric+cotton</li>
                   <li>Bright grey & Lion</li>
                   </ul><br/>
                   <br/>
                   <br/>
                   <b  className="font-sans text-2xl tetx-black ">&nbsp;</b><br/><ul className="list-none tracking-wide space-y-4 font-semibold font-sans text-gray-700">
                    <li>Matte</li>
                   <li>Bright Grey & Lion</li>
                   <li>Yes </li>
                   <li>300 Kg</li>
                   <li>India</li>
            
                   </ul><br/><br/>
                   <b  className="font-sans text-2xl tetx-black ">&nbsp;</b><br/><ul className="list-none tracking-wide space-y-4 font-semibold font-sans text-gray-700">
                    <li>265.32 cm</li>
                   <li>76 cm</li>
                   <li>167.76 cm </li>
                   <li>65 kg</li>
                   <li>41.52 cm</li>
                   <li>5.46 cm</li>
                   </ul><br/>
                   <b  className="font-sans text-2xl tetx-black ">&nbsp;</b><br/><br/><br/><ul className="list-none tracking-wide space-y-4 font-semibold font-sans text-gray-700">
                    <li>1.2 Year Manufacturing <br/>Warranty</li>
                   <li>For Warranty Claims Or Any<br/> Product Related Issues Please<br/> Email At Support @xyz.com</li><br/>
                   <li>Warranty Of The Product is<br/> limited to Manufacturing Defect</li>
                   <li>The Warranty Does Not Cover<br/> Damages Due To Usage Of<br/> The Product Beyond Its<br/> Intended Use And Wear<br/> & Tear In The Natural<br/> Course Of Product Usage </li>
                   <li>3 Months</li>
                   <li><button className="bg-[#B88E2F] p-4 text-white font-sans text-center text-xl ">Add To Cart</button></li>
                   </ul><br/></div>
                    
                   </div>  </div>        </div>

    )
} 
