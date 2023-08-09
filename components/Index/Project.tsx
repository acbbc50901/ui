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

  // useEffect(() => {
  //   setIsLoading(true);
  //   axios.get('/api/dashboard/profile/')
  //     .then((res) => {
  //       setProfiloList(res.data);
  //       console.log(res);
  //       setIsLoading(false);
  //     })
  // }, [])

  return (
    <div className='flex flex-col lg:flex-row flex-wrap lg:h-[80vh] gap-2 sm:gap-0 justify-center items-center'>
      <div className=' w-full lg:w-[28%] flex flex-col items-center h-full lg:h-auto justify-center p-2 lg:gap-2 text-center'>
        <h1 className='text-lg lg:text-2xl font-bold'>歷年作品</h1>
        <p className=' text-sm lg:text-base'>經年累月所累積的作品<br/>裡面雖說也有沒那麼好的作品<br/>但也是一步一步走過來的痕跡</p>
        <Button>More</Button>
      </div>
      <div  className=' w-full lg:w-[72%] overflow-y-auto flex justify-start gap-1'>
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
        <div className='p-4 border rounded-sm bg-neutral-200'>
          <div className='w-[320px] h-[180px] bg-slate-300'/>
          <p>8888</p>
        </div>
      </div>
    </div>
  )
}

export default Project