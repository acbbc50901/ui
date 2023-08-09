import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className=' w-full gap-4 py-20 h-auto sm:p-0 sm:h-[100vh] flex justify-center items-center flex-col lg:flex-row'>
      <div className=' w-full lg:w-[50%] h-auto lg:h-full flex justify-center items-center'>
        <div className=''>
          <h1 className=' font-medium md:text-4xl  lg:text-4xl text-2xl'>JARRY PROTFOLIO</h1>
          <p className=' text-neutral-500 text-sm text-right px-2'>黃信誠--作品集</p>
        </div>
      </div>
      <div className=' w-full lg:w-[50%] h-auto lg:h-full flex justify-center items-center'>
        <div className=' w-[280px] h-[180px] sm:w-[600px] sm:h-[360px] lg:w-[440px] lg:h-[270px] xl:w-[600px] xl:h-[360px] 2xl:w-[760px] 2xl:h-[450px] relative'>
          <Image src='/testimg.jpg' alt='' fill className=' max-w-none'/>
        </div>
      </div>
    </div>
  )
}

export default Hero