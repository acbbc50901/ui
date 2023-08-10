import React from 'react'
import { useRouter } from 'next/navigation'
import ProjectBox from '../Project/ProjectBox'
import Button from '../Button'

const Project2 = () => {
  const router = useRouter();
  return (
    <>
      <span className=" invisible" id='Project'/>
      <div className='flex flex-col sm:grid grid-cols-6 p-2 lg:p-[40px] lg:gap-[40px] relative'>
        <div className=' absolute w-full h-full top-0 left-0 lg:p-[40px] z-[0]'>
          <div className=' flex justify-between w-full h-full'>
            <span className=' w-[1px] h-full bg-slate-400/50'/>
            <span className=' w-[1px] h-full bg-slate-400/50 hidden sm:block'/>
            <span className=' w-[1px] h-full bg-slate-400/50'/>
            <span className=' w-[1px] h-full bg-slate-400/50 hidden sm:block'/>
            <span className=' w-[1px] h-full bg-slate-400/50'/>
            <span className=' w-[1px] h-full bg-slate-400/50 '/>
          </div>
        </div>
        <ProjectBox image='/testimg.jpg' boxsize=' col-span-3 lg:col-span-3' titel='測試' />
        <ProjectBox boxsize=' hidden lg:block lg:col-span-1'/>
        <ProjectBox image='/testimg2.jpg' boxsize='col-span-3 lg:col-span-2 lg:mt-[20vw]' titel='測試'/>
        <ProjectBox image='/testimg2.jpg' boxsize='col-span-3 lg:col-span-2' titel='測試'/>
        <ProjectBox boxsize=' hidden lg:block lg:col-span-1'/>
        <ProjectBox image='/testimg.jpg' boxsize='col-span-3 lg:col-span-3 lg:mt-[15vw]' titel='測試'/>
        <ProjectBox boxsize='hidden sm:block col-span-1'/>
        <div className=' col-span-4 relative'>
        <ProjectBox image='/testimg2.jpg' boxsize='lg:col-span-4' titel='測試'/>
        </div>
        <ProjectBox boxsize='hidden sm:block col-span-1'/>
        <ProjectBox boxsize='hidden sm:block sm:col-span-2'/>
        <div className=' col-span-2 z-[2]'>
          <Button className=' w-full' onClick={() => router.push('/proflio')}>觀看更多</Button>
        </div>
        <ProjectBox boxsize='hidden sm:block sm:col-span-2'/>
      </div>
    </>
  )
}

export default Project2