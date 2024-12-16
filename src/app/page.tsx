import Image from "next/image";
import s1 from '../app/card/s1.png';
import s2 from '../app/card/s2.png';
import s3 from '../app/card/s3.png';
import d1 from  '../app/card/d1.png';
import d2 from  '../app/card/d2.png';
import d3 from  '../app/card/d3.png';
import d4 from  '../app/card/d4.png';
import d5 from  '../app/card/d5.png';
import d6 from  '../app/card/d6.png';
import d7 from  '../app/card/d7.png';
import d8 from  '../app/card/d8.png';
import d9 from  '../app/card/d9.png';


import Blog from '../app/blog/page';
import lo from '../app/cover/logo.png';
import i1 from '../app/cover/i1.png';
import i2 from '../app/cover/i2.png';
import i3 from '../app/cover/i3.png';
import i4 from '../app/cover/i4.png';
import l1 from '../app/cover/l1.png';
import Card from '../app/card/page';
import h1 from '../app/card/h1.png';

import h3 from '../app/card/h3.png';
import h4 from '../app/card/h4.png';
import h5 from '../app/card/h5.png';
import h6 from '../app/card/h6.png';
import h7 from '../app/card/h7.png';
import h8 from '../app/card/h8.png';
import r1 from '../app/card/r1.png';
import r2 from '../app/card/r3.png';
import r3 from '../app/card/r2.png';
import back from '../../public/back.png';
import Card1 from '../app/card1/page';



export default function Home() {
  return (
    <div>
      <div className="flex justify-between m-8  bg-white ">
        <div className="flex "><Image className="w-20" src={lo} alt="logo" /><div className="pt-2 font-sans font-bold tracking-wide text-5xl text-black">Furniro.</div>  </div>
        <div ><ul className="flex justify-between gap-20 tracking-wider font-sans font-semibold text-2xl pt-6">
          <li><a href="#2">Home</a> </li>
        <li><a href="#3">Shop</a></li>
        <li><a href="#1">Blog</a></li>
        <li><a href="#4">Contact</a></li></ul></div>
        <div className="pt-6"><div className="flex justify-between gap-12 w-8 h-8  "><Image className="w-28" src={i1} alt=""/><Image className="w-28" src={i2} alt="" /><Image className="w-28" src={i3} alt=""/><Image className="w-28" src={i4} alt=""/></div>
        </div></div>
        <br/>
      <div  className=" mx-20 w-screen  h-screen  text-white bg-[url('/back.png')]  bg-cover"><div ><Card1/></div></div>
        <br/>

        <div id="3" className="py-4 text-center text-4xl text-black tracking-wide font-bold font-sans"> Browse The Range</div>
        <div className=" text-center text-xl text-gray-400 tracking-wide font-semibold font-sans">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div><br/>
      <br/><div className="flex  ml-28   text-xl font-sans tracking-wide  font-semibold text-black w-96 gap-8 "><Image src={r1} alt=""/><Image src={r2} alt=""/><Image src={r3} alt=""/></div>
        <div className="flex   justify-between gap-60"><ul className=" ml-48 flex  gap-72 text-xl font-sans tracking-wide font-semibold text-black    ">
          <li className="pl-20">Dining</li>
          <li className="pl-12">Living</li>
          <li className="pl-14">Bedroom</li>
          </ul> </div>
        <div  className="m-20 text-center text-4xl text-black tracking-wide font-bold font-sans"><b>Our Products</b></div>
        <div className="flex flex-wrap   gap-20 m-20">
        <div className=" grid-cols-1 md:grid-cols-2 lg:grid-cols-3  flex-wrap"><Card bgcolor='bg-red-700' v='-30%' i={<Image className="w-screen h-48" src={h1} alt=""/>} l1='Slytherine' l2='Stylish cafe chair' l3='Rp 2.500.000 ' l4='Rp 3.500.000'/></div>
        
         <div className=" grid-cols-1 md:grid-cols-2 lg:grid-cols-3  flex-wrap"><Card bgcolor='bg-red-700' v='-50%' i={<Image className="w-screen h-48" src={h3} alt=""/>} l1='Lolito' l2='Luxury Big Sofa' l3='Rp 7.000.000 ' l4='Rp 14.000.000'/></div>
         <div className=" grid-cols-1 md:grid-cols-2 lg:grid-cols-3  flex-wrap"><Card bgcolor='bg-emerald-400' v='NEW' i={<Image className="w-screen h-48" src={h4} alt=""/>} l1='Respira' l2='outdoor bar table and stool' l3='Rp 5.00.000 ' l4='&nbsp;'/></div>
         </div>
        <br/><br/>
        <div className="flex flex-wrap  gap-20 m-20">
        <div className=" grid-cols-1 md:grid-cols-2 lg:grid-cols-3  flex-wrap"><Card bgcolor='&nbsp;' v='&nbsp;' i={<Image className="w-screen h-48" src={h5} alt=""/>} l1='Grifo' l2='Night lamp' l3='Rp 1.500.000 ' l4='&nbsp;'/></div><br/><br/>
        <div className=" grid-cols-1 md:grid-cols-2 lg:grid-cols-3  flex-wrap"><Card bgcolor='bg-emerald-400' v='NEW' i={<Image className="w-screen h-48" src={h6} alt=""/>} l1='Muggo' l2='Small mug' l3='Rp 1.50.000 ' l4='&nbsp;'/></div>
         <div className=" grid-cols-1 md:grid-cols-2 lg:grid-cols-3  flex-wrap"><Card bgcolor='bg-red-700' v='-50%' i={<Image className="w-screen h-48" src={h7} alt=""/>} l1='PingKy' l2='Cute sed set' l3='Rp 7.000.000 ' l4='&nbsp;'/></div>
         <div className="text-center mx-96 py-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  flex-wrap "><Card bgcolor='bg-emerald-500' v='NEW' i={<Image className="w-screen h-48" src={h8} alt=""/>} l1='Potty' l2='Minimalist flower pot' l3='Rp 500.000 ' l4='&nbsp;'/>
         <div className="flex flex-wrap"></div><button className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3  flex-wrap outline outline-2 outline-[#B88E2F] text-[#B88E2F] mx-96 px-16 py-2 text-center ">Show More</button></div></div>
         <br/>

        
        <div id="2"className="flex  m-20 bg-white" >
          <div ><div className="text-3xl font-sans font-bold text-black py-4 pt-40 "><b>50+ Beautiful rooms 
inspiration</b></div><div className="font-sans font-semibold text-xl  text-black">Our designer already made a lot of beautiful prototipe of rooms that inspire you</div><br/><br/><div><button className="bg-[#B88E2F] text-white text-semibold px-8 py-4 text-center">Explore More</button></div></div>
<div className="flex "> <Image className="w-96" src={s1} alt=""/><Image className="w-96" src={s2} alt=""/><Image className="w-96" src={s3} alt=""/></div>
</div>
      <br/>
      <div className=" m-20   bg-black gap-4"><div className="flex"><Image className="mx-10 w-16 h-52" src={d8} alt=""/><Image className="mx-10 w-80 h-40 pt-4" src={d7} alt=""/><Image className="mx-10 w-60 h-96 pt-16 pb-16" src={d4} alt=""/><Image className="mx-10 w-60 h-96 pt-8 pb-24" src={d3} alt=""/><Image className="mx-10 w-28 h-60  pb-24" src={d9} alt=""/></div><br/><div className="flex"><Image className="w-40 mx-10 h-96 pb-28 " src={d5} alt=""/><Image className="mx-10 w-60  pb-24" src={d6} alt=""/> <Image className="mx-40 w-60  pb-2" src={d1} alt=""/><Image className=" w-30  pb-12" src={d2} alt=""/> </div>
      </div>
<br/><div id="1"><Blog/></div><br/>  <br/><hr/>    
        <div id="4" className="flex m-20  bg-white gap-24 justify-between">
         <div className="space-y-16"> <div className="font-sans font-bold text-2xl tracking-wider ">Funiro.</div><div className="text-xl font-sans text-gray-400 tracking-wide ">400 University Drive Suite Lord <br/>Gabes,<br/>FL 33134 USA</div> </div>
       <div className="pt-2"> <div className=" text-gray-400 tracking-wider font-sans font-semibold text-2xl">Links</div><ul className="text-black py-8 space-y-12 tracking-wider font-sans font-semibold text-xl">
          <li >Home</li>
      <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
          </ul></div>
          <div className="pt-2"> <div className=" text-gray-400 tracking-wider font-sans font-semibold text-2xl">Help</div><ul className="text-black py-8 space-y-12 tracking-wider font-sans font-semibold text-xl">
          <li >Payment Options</li>
      <li>Returns</li>
          <li>Privacy Policies</li>
          </ul></div>
          <div className="pt-2"> <div className=" text-gray-400 tracking-wider font-sans font-semibold text-2xl">Newsletter</div><div className="flex"><div className="text-gray-400 py-8 space-y-12 tracking-wider font-sans font-semibold text-xl underline">Enter Your Email Address</div><div className="text-black pt-8 pl-4 tracking-wider font-sans font-semibold text-xl underline">SUBSCRIBE</div></div></div>   
        </div>
        <div className="m-20 font-sans font-semibold tracking-wider text-black text-left">2023 funiro All rights reserved</div>
    </div>
  );
}
