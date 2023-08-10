'use client'

import axios from 'axios';
import React, {useEffect, useState, useRef} from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion"
import Button from '../Button';
interface profiloList {
  created_at: string,
  description: string,
  id: string,
  img: string[],
  tag: string[],
  title: string,
  views: number,
}

const Project = () => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [profiloList, setProfiloList] = useState<profiloList[]>([]);
  const srbox = useRef<any>(null);
  const box = useRef<any>(null);
  // useEffect(() => {
  //   setIsLoading(true);
  //   axios.get('/api/dashboard/profile/')
  //     .then((res) => {
  //       setProfiloList(res.data);
  //       console.log(res);
  //       setIsLoading(false);
  //     })
  // }, [])
  const MoveBox = (text: string) => {
    if (srbox.current && box.current) {
      if (text === '左') {
        srbox.current.scrollLeft -= box.current.offsetWidth + 2;
      } else {
        srbox.current.scrollLeft += box.current.offsetWidth + 2;
      }
    }
  }
  return (
    <div className='flex flex-col flex-wrap lg:h-[100vh] gap-2 justify-center items-start'>
      <h1 className='text-lg lg:text-2xl font-bold'>歷年作品</h1>
      <p className=' text-sm lg:text-base'>經年累月所累積的作品，裡面雖說也有沒那麼好的作品，但也是一步一步走過來的痕跡</p>
      <Button>More</Button>
      <div className=' w-full relative'>
        <div className=' absolute w-full h-full cursor-pointer flex z-10'>
          <div className=' w-[50%] h-full cursor-pointer ' onClick={() => MoveBox('左')}/>
          <div className=' w-[50%] h-full cursor-pointer ' onClick={() => MoveBox('右')}/>
        </div>
        <div ref={srbox} className=' w-full overflow-y-auto scroll-smooth transition flex justify-start gap-1 relative'>
          <div ref={box} className='p-4 border rounded-sm bg-neutral-200'>
            <div className='w-[320px] h-[180px] bg-slate-300'/>
            <p>8888</p>
          </div>
          <div className='p-4 border rounded-sm bg-neutral-200'>
            <div className='w-[320px] h-[180px] bg-slate-300'/>
            <p>8888</p>
          </div>
          <div className='p-4 border rounded-sm bg-neutral-200'>
            <div className='w-[320px] h-[180px] bg-slate-300'/>
            <p>8888</p>
          </div>
          <div className='p-4 border rounded-sm bg-neutral-200'>
            <div className='w-[320px] h-[180px] bg-slate-300'/>
            <p>8888</p>
          </div>
          <div className='p-4 border rounded-sm bg-neutral-200'>
            <div className='w-[320px] h-[180px] bg-slate-300'/>
            <p>8888</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project