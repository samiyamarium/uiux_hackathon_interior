import React from 'react';
import Image from 'next/image';
import Form from 'next/form';
import v1 from './v1.png';
import v2 from './v2.png';
import v3 from './v3.png';

export default function Contact(){
    return(
        <div>
             <div className='pt-20 '>
          <div  className=" mx-20 w-screen  h-60  text-white bg-[url('/shop.png')] pt-20 bg-cover text-center font-sans text-6xl"><b className=' text-amber-950 opacity-40'>Contact</b><div ></div></div>
                  <br/></div>
                  
                  <div className='text-center font-sans  text-black tracking-wide'><b className='text-3xl'>Get In Touch With Us</b><br/><br/><p className='text-xl text-gray-600'>For More Information About Our Product & Services. Please Feel Free To Drop Us<br/> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p></div>
                  <div className='flex'>
                  <div className='m-20 ' >
                    <div > <div className='flex gap-4'><Image className='w-[20] h-[24] rotate-180' src={v1} alt='' /><b className='text-2xl font-sans tracking-wide text-black'>Address</b></div><br/><p className='font-sans tracking-wide text-black px-[40]'>236 5th SE Avenue, New York NY10000, United States</p></div><br/>
                    <div > <div className='flex gap-4'><Image className='w-[20] h-[24] ' src={v2} alt='' /><b className='text-2xl font-sans tracking-wide text-black'>Phone</b></div><br/><p className='font-sans tracking-wide text-black px-[40]'>Mobile: +(84) 546-6789<br/>
                    Hotline: +(84) 456-6789</p></div> <br/>                 
                    <div > <div className='flex gap-4'><Image className='w-[20] h-[24] ' src={v3} alt='' /><b className='text-2xl font-sans tracking-wide text-black'>Working Time</b></div><br/><p className='font-sans tracking-wide text-black px-[40]'>Monday-Friday: 9:00 - 22:00<br/>
                    Saturday-Sunday: 9:00 - 21:00</p></div></div>
                  <div className='text-black font-sans text-xl tracking-wide font-bold pt-20 px-20'>
                   <div> <label>Your Name</label><br/><br/><input  className='text-gray-600 font-semibold outline outline-4 outline-gray-400 rounded-md w-96 h-16 px-4' type='text' placeholder='Abc'/></div><br/><br/>
                   <div> <label>Email Address</label><br/><br/><input  className='text-gray-600 font-semibold outline outline-4 outline-gray-400 rounded-md w-96 h-16 px-4' type='email' placeholder='Abc@def.com'/></div><br/><br/>
                   <div> <label>Subject</label><br/><br/><input  className='text-gray-600 font-semibold outline outline-4 outline-gray-400 rounded-md w-96 h-16 px-4' type='text' placeholder='This is an optional'/></div><br/><br/>
                   <div> <label>Message</label><br/><br/><textarea  className='text-gray-600 font-semibold outline outline-4 outline-gray-400 rounded-md w-72 h-16 px-4'  placeholder='Hi..i&apos;d like to ask about'></textarea></div><br/><br/>

                   <div> <br/><button className='text-center font-sans text-xl font-semibold rounded-md w-40 h-16 bg-amber-950  text-white'><input  className='text-gray-600 font-semibold ' type='submit' /></button></div><br/><br/>
</div>
                  </div>
        </div>
    )
}
