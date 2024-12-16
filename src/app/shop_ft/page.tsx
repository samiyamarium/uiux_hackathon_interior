import React from 'react';
import Image from 'next/image';
import i1 from './i1.png';
import i2 from './i2.png';
import i3 from './i3.png';
import i4 from './i4.png';




export default function Shopft(){
    return(
        <div >
            <div className='  flex gap-20 px-[550]'><div className='bg-orange-300 opacity-30 text-amber-950 flex-1 w-12 h-12 text-center font-sans rounded-md text-2xl flex-wrap sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'><button>1</button></div><div className='bg-orange-300 opacity-30 text-amber-950  rounded-md flex-1 w-12 h-12 text-center font-sans text-2xl'><button>2</button></div><div className='bg-orange-300 opacity-30 flex-1 w-12 h-12 text-center text-amber-950 rounded-md text-2xl font-sans'><button>3</button></div><div className='bg-orange-300 font-sans opacity-30 text-amber-950 flex-1 w-16 h-12 text-center text-2xl'><button>Next</button></div>
            </div><br/>
            <div className=' pt-4 pb-4 px-40 bg-orange-400 opacity-40 gap-20  flex     '>
           <div className=' flex-wrap sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'> <Image className='w-16 h-16' src={i1} alt=''/><div className='font-sans gap-48 text-xl text-blace tracking-wide'><b>High Quality</b><br/><p className='text-amber-950 opacity-40 font-semibold' >crafted from top materials </p></div>
          </div> <div className=' flex-wrap sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'> <Image className='w-16 h-16' src={i2} alt=''/><div className='font-sans gap-48 text-xl text-blace tracking-wide'><b>Warranty Protection </b><br/><p className='text-amber-950 opacity-40 font-semibold' >Over 2 years </p></div>
           </div><div className=' flex-wrap sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'><Image className='w-16 h-16' src={i3} alt=''/><div className='font-sans gap-48 text-xl text-blace tracking-wide'><b>Free Shipping</b><br/><p className='text-amber-950 opacity-40 font-semibold' >Order over $ 150 </p></div>
           </div><div className=' flex-wrap sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3' > <Image className='w-16 h-16' src={i4} alt=''/><div className='font-sans gap-48 text-xl text-blace tracking-wide'><b>24&#8725;7 Support</b><br/><p className='text-amber-950 opacity-40 font-semibold' >Dedicated support </p></div>
        </div></div>
            </div>
    )
}
