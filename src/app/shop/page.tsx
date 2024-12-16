import react from 'react';
import shop from './shop.png';
import Image from 'next/image';
import s1 from './s1.png';
import s2 from './s2.png';
import s3 from './s3.png';
import s4 from './s4.png';
import s5 from './s5.png';
import s6 from './s6.png';
import s7 from './s7.png';
import s8 from './s8.png';
import s9 from './s9.png';
import s10 from './s10.png';
import s11 from './s11.png';
import s12 from './s12.png';
import Card from '../card/page';



export default function Shop(){
    return(
        <div className='pt-20 '>
          <div  className=" mx-20 w-screen  h-60  text-white bg-[url('/shop.png')] pt-20 bg-cover text-center font-sans text-6xl"><b className=' text-amber-950 opacity-40'>Shop</b><div ></div></div>
                  <br/>
                  <div className="flex flex-wrap w-screen  gap-28 m-32">
        <div className="    grid-cols-1 md:grid-cols-2 lg:grid-cols-3  flex-wrap"><Card bgcolor='bg-red-700' v='-30%' i={<Image className='w-screen h-48' src={s1} alt=""/>} l1='Gallery-1' l2='Stylish faint gallery' l3='Rp 25.500.000 ' l4='&nbsp;'/></div>
        
        <div className="    grid-cols-1 md:grid-cols-2 lg:grid-cols-3  flex-wrap"><Card bgcolor='' v='&nbsp;' i={<Image className='w-screen h-48' src={s2} alt=""/>} l1='Gallery-2' l2='Classy approach' l3='Rp 75.500.000 ' l4='&nbsp;'/></div>
        <div className="    grid-cols-1 md:grid-cols-2 lg:grid-cols-3  flex-wrap"><Card bgcolor='bg-emerald-400' v='NEW' i={<Image className='w-screen h-48' src={s3} alt=""/>} l1='Gallery-3' l2='Green tea' l3='Rp 35.500.000 ' l4='&nbsp;'/></div>
        <div className="    grid-cols-1 md:grid-cols-2 lg:grid-cols-3  flex-wrap"><Card bgcolor='bg-red-700' v='-50%' i={<Image className='w-screen h-48' src={s4} alt=""/>} l1='Gallery-4' l2='All you desire' l3='Rp 2.500.000 ' l4='&nbsp;'/></div>
        </div>
        <br/>
                  <div className="flex flex-wrap w-screen  gap-28 m-32 ">
        <div className="    grid-cols-1 md:grid-cols-2 lg:grid-cols-3  flex-wrap"><Card bgcolor='bg-red-700' v='-30%' i={<Image className='w-screen h-48' src={s5} alt=""/>} l1='Porch-1' l2='Stylish faint gallery' l3='Rp 25.500.000 ' l4='&nbsp;'/></div>
        
        <div className="    grid-cols-1 md:grid-cols-2 lg:grid-cols-3  flex-wrap"><Card bgcolor='' v='&nbsp;' i={<Image className='w-screen h-48' src={s6} alt=""/>} l1='Porch2-2' l2='Classy approach' l3='Rp 75.500.000 ' l4='&nbsp;'/></div>
        <div className="    grid-cols-1 md:grid-cols-2 lg:grid-cols-3  flex-wrap"><Card bgcolor='bg-emerald-400' v='NEW' i={<Image className='w-screen h-48' src={s7} alt=""/>} l1='Porch-3' l2='Green tea' l3='Rp 35.500.000 ' l4='&nbsp;'/></div>
        <div className="    grid-cols-1 md:grid-cols-2 lg:grid-cols-3  flex-wrap"><Card bgcolor='bg-red-700' v='-50%' i={<Image className='w-screen h-48' src={s8} alt=""/>} l1='Porch-4' l2='All you desire' l3='Rp 2.500.000 ' l4='&nbsp;'/></div>
        </div>
        <br/>
                  <div className="flex flex-wrap w-screen  gap-28 m-32">
        <div className="    grid-cols-1 md:grid-cols-2 lg:grid-cols-3  flex-wrap"><Card bgcolor='bg-red-700' v='-30%' i={<Image className='w-screen h-48' src={s9} alt=""/>} l1='Livingroom-1' l2='Stylish dim ' l3='Rp 25.500.000 ' l4='&nbsp;'/></div>
        
        <div className="    grid-cols-1 md:grid-cols-2 lg:grid-cols-3  flex-wrap"><Card bgcolor='' v='&nbsp;' i={<Image className='w-screen h-48' src={s10} alt=""/>} l1='Livingroom2-2' l2='Classy approach' l3='Rp 75.500.000 ' l4='&nbsp;'/></div>
        <div className="    grid-cols-1 md:grid-cols-2 lg:grid-cols-3  flex-wrap"><Card bgcolor='bg-emerald-400' v='NEW' i={<Image className='w-screen h-48' src={s11} alt=""/>} l1='Livingroom-3' l2='Life' l3='Rp 35.500.000 ' l4='&nbsp;'/></div>
        <div className="    grid-cols-1 md:grid-cols-2 lg:grid-cols-3  flex-wrap"><Card bgcolor='bg-red-700' v='-50%' i={<Image className='w-screen h-48' src={s12} alt=""/>} l1='Livingroom-4' l2='All you desire' l3='Rp 2.500.000 ' l4='&nbsp;'/></div>
        </div>
        
        
        </div>
    )
}
