import React from 'react'
import Link from 'next/link'
import { title } from 'process'
interface propstype{
title: string;
subtitle: string;
}
const Common: React.FC<propstype> = ({title, subtitle} : propstype)=>{


  return (
    <div className='md:max-w-[1920px] h-[410px]' style={{backgroundImage: "url('/others/bg-image.png')"}}>
        <div className='w-full h-[104px] top-{198} left-{850}'>
            <h1 className=' w-full pt-[10%] font-bold text-[48px] text-white  h-[56px] text-center'>{title}</h1>
            <div className='flex text-white gap-2 pl-[45%] w-full pt-[5%] '>
            <Link href="/"><span className='text-white'>Home</span></Link>&gt;<span className='text-[#FF9F0D]'> {subtitle}</span>
            </div>

        </div>
      
    </div>
  )
}

export default Common
