import React from 'react';
import Image from 'next/image';
import sofa from './sofa.png';
import s1 from './s1.png';
import s2 from './s2.png';
import s3 from './s3.png';
import s4 from './s4.png';
import f from './f.png';
import t from './t.png';
import i from './i.png';
import Card from '../card/page';
import h1 from '../card/h1.png';
import h2 from '../card/h2.png';
import h3 from '../card/h3.png';
import h4 from '../card/h4.png';
import d1 from './d1.png';
import d2 from './d2.png';

export default function Singlep(){
    return(
        <div>
             <div className='pt-20 '>
          <div  className=" mx-20 w-screen  h-60  text-white bg-[url('/shop.png')] pt-20 bg-cover text-center font-sans text-6xl"><b className=' text-amber-950 opacity-40'>Single Product</b><div ></div></div>
                  <br/></div>
                  <div className='bg-orange-500 bg-opacity-20 text-xl gap-8 w-screen  text-gray-500 outline flex px-8 py-4 pr-12 mx-32 '>Home  &#9205;  Shop   &#9205;   &#8739; <p className='text-black text-xl font-sans'>Asgard Sofa</p></div> <br/>
                  <div className=''>
                    <div className='mx-32 gap-8 flex'>
                        <div className='space-y-8 pt-8'><Image className="w-20 h-20   bg-orange-500 bg-opacity-10 rounded-md" src={s1} alt=''/><Image className="w-20 h-20  bg-orange-500 bg-opacity-10 rounded-md" src={s2} alt=''/><Image className="w-20 h-20  bg-orange-500 bg-opacity-10 rounded-md" src={s3} alt=''/><Image className="w-20 h-20 bg-orange-500 bg-opacity-10 rounded-md" src={s4} alt=''/></div>
                        <div className='w-screen h-[490] rounded-md  flex-1 bg-orange-500 bg-opacity-20 '><Image className='w-screen h-[520]' src={sofa} alt=''/></div>
                        <div><b className='text-black font-sans text-2xl tracking-wide'>Asgard Sofa</b><br/><br/><p className='text-gray-500 text-xs font-sans'>Rs. 250,000.00</p><br/><p className='font-sans text-xs text-black'>&#x2B50;&#x2B50;&#x2B50;&#x2B50;&#x2B50;&nbsp;&nbsp;   &#8739; &nbsp;&nbsp;    5 Customer Review</p><br/><p className='font-sans text-xs tracking-wide text-black'>Setting the bar as one of the loudest speakers in its class, the Kilburn<br/> is a compact, stout-hearted hero with a well-balanced audio which <br/>boasts a clear midrange and extended highs for a sound.</p>
                        <br/><p className='fonr-sans text-xs text-gray-500'>Size</p><br/><div className='flex gap-8'><div className='flex-1 w-8 h-8 bg-[#B88E2F] rounded-md text-black  font-sans text-center'>L</div><div className='flex-1 w-8 h-8 bg-orange-500 bg-opacity-20 rounded-md text-black  font-sans text-center'>XL</div><div className='flex-1 w-8 h-8 bg-orange-500 bg-opacity-20 rounded-md text-black  font-sans text-center'>XS</div></div><br/><p className='text-xs font-sans text-gray tracking-wide'>Color</p>
                        <br/><div className='flex gap-4 '><p className='fonr-sans text-xs text-gray-500 '><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><br/><div className='w-8 bg-violet-600 rounded-full'></div><div className='  w-8  bg-black rounded-full'></div><div className='  w-8  bg-[#B88E2F] rounded-full'></div></div>
                        <br/><div className='flex gap-4'><button className='rounded-md text-center text-xl outline outline-2 outline-gray-300 text-black w-40 h-16'>- 1 +</button><button className='rounded-md w-40 h-16 text-center text-xl outline outline-2 outline-gray-300 text-black'>Add to cart</button><button className='rounded-md w-40 h-16 text-center text-xl outline outline-2 outline-gray-300 text-black'>+ Compare</button></div><br/><hr/><br/>
                        <div className='test-xs font-sans text-gray-800 tracking-wide '><p className='test-xs font-sans text-gray-500 tracking-wide '>SKU&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;SS001</p><br/><p className='test-xs font-sans text-gray-500 tracking-wide '>Category&nbsp;:&nbsp;Sofas</p><br/><p className='test-xs font-sans text-gray-500 tracking-wide '>Tags&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;Sofa,Chair,Home,Shop</p><br/><div className='test-xs font-sans text-gray-500 tracking-wide '><div className='flex text-xl font-sans font-bold'>Share&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;<div className='flex gap-8'><button><Image className='w-8 h-8   ' src={f} alt=''/></button><button><Image className='w-8 h-8   ' src={t} alt=''/></button><button><Image className='w-8 h-8   ' src={i} alt=''/></button></div></div></div></div>
                        </div></div><br/><hr/>
                        
                  </div><br/>
                  <div> 
                    <div className='text-2xl text-center mx-48 flex justify-around font-sans font-semibold text-black gap-16'><p>Description</p><p className='text-gray-500'>Additional Information</p><p className='text-gray-500'>Reviews&#x5B;5&#x5D;</p>  </div>
                  <br/>
                   <div className='mx-32 text-gray-500 font-sans tracking-wide'>Embodying the raw, wayward spirit of rock &apos;n&apos; roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
                  <br/><br/> Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</div>
                  <br/>
                  <div className='flex gap-16 mx-32'><Image className='w-screen h-60' src={d1} alt=''/><Image className='w-screen h-60' src={d2} alt=''/></div><br/><br/><hr/></div>

     <br/><br/>
     <div className='text-center text-3xl text-black font-sans font-bold'>Related Products</div><br/><br/>
     <div className='flex mx-28 gap-16 flex-wrap'>
     <div className="    grid-cols-1 md:grid-cols-2 lg:grid-cols-3  flex-wrap"><Card bgcolor='bg-red-700' v='-30%' i={<Image className="w-screen h-48" src={h1} alt=""/>} l1='Slytherine' l2='Stylish cafe chair' l3='Rp 2.500.000 ' l4='Rp 3.500.000'/></div>
         <div className="    grid-cols-1 md:grid-cols-2 lg:grid-cols-3  flex-wrap " ><Card bgcolor='bg-red-700' v='-30%' i={<Image className="w-screen h-48" src={h2} alt=""/>} l1='Leviosa' l2='Stylish cafe chair' l3='Rp 2.500.000 ' l4='Rp 3.500.000'/></div>
         <div className="    grid-cols-1 md:grid-cols-2 lg:grid-cols-3  flex-wrap"><Card bgcolor='bg-red-700' v='-50%' i={<Image  className="w-screen h-48" src={h3} alt=""/>} l1='Lolito' l2='Luxury Big Sofa' l3='Rp 7.000.000 ' l4='Rp 14.000.000'/></div>
         <div className="    grid-cols-1 md:grid-cols-2 lg:grid-cols-3  flex-wrap"><Card bgcolor='bg-emerald-400' v='NEW' i={<Image className="w-screen h-48" src={h4} alt=""/>} l1='Respira' l2='outdoor bar table and stool' l3='Rp 5.00.000 ' l4='&nbsp;'/></div>
         </div><br/><br/>
     </div>
        
    )
}
