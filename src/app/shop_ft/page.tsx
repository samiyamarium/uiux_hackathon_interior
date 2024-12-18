import React from 'react';
import Image from 'next/image';
import i1 from './i1.png';
import i2 from './i2.png';
import i3 from './i3.png';
import i4 from './i4.png';




export default function Shopft(){
    return(
        <div >
            <br/>
            <div className=' pt-4 pb-4 px-40 bg-orange-400 opacity-40 gap-20  flex     '>
           <div className=' flex-wrap sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'> <Image className='w-16 h-16' src={i1} alt=''/><div className='font-sans gap-48 text-xl text-blace tracking-wide'><b>High Quality</b><br/><p className='text-amber-950 opacity-40 font-semibold' >crafted from top materials </p></div>
          </div> <div className=' flex-wrap sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'> <Image className='w-16 h-16' src={i2} alt=''/><div className='font-sans gap-48 text-xl text-blace tracking-wide'><b>Warranty Protection </b><br/><p className='text-amber-950 opacity-40 font-semibold' >Over 2 years </p></div>
           </div><div className=' flex-wrap sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'><Image className='w-16 h-16' src={i3} alt=''/><div className='font-sans gap-48 text-xl text-blace tracking-wide'><b>Free Shipping</b><br/><p className='text-amber-950 opacity-40 font-semibold' >Order over $ 150 </p></div>
           </div><div className=' flex-wrap sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3' > <Image className='w-16 h-16' src={i4} alt=''/><div className='font-sans gap-48 text-xl text-blace tracking-wide'><b>24&#8725;7 Support</b><br/><p className='text-amber-950 opacity-40 font-semibold' >Dedicated support </p></div>
        </div></div>
            </div>
    )
}
