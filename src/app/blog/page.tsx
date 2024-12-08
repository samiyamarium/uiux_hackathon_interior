import React from 'react';
import blog from './blog.png';
import Image from 'next/image';
import g1 from './g1.png';
import g2 from './g2.png';
import g3 from './g3.png';


export default function Blog(){
    return(
        <div>
            <div><Image className="mx-20 w-screen h-60" src={blog} alt="" /></div>
            <div><div className='mx-20'>
                <div className='mx-20' ><Image className='w-full' src={g1} alt=''/><br/><h2 className='font-sans font-bold text-xl tracking-wide'>Going all-in with millenial design</h2><br/><p className='font-sans tracking-wide text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p><br/><u className='font-bold text-xl text-left'>Read more</u></div>
                <div className='mx-20'><Image className='w-full' src={g2} alt=''/><br/><h2 className='font-sans font-bold text-xl tracking-wide'>Exploring new ways of decorating</h2><br/><p className='font-sans tracking-wide text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p><br/><u className='font-bold text-xl text-left'>Read more</u></div>
                <div className='mx-20'><Image className='w-full' src={g3} alt=''/><br/><h2 className='font-sans font-bold text-xl tracking-wide'>Hand-made pieces that took time to make.</h2><br/><p className='font-sans tracking-wide text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p><br/><u className='font-bold text-xl text-left'>Read more</u></div>
                </div></div>
               
        </div>
    )
}