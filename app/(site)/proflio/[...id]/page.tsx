'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import { useParams  } from 'next/navigation'
import parse from 'html-react-parser';
import dayjs from 'dayjs'
import Button from '@/components/Button'
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai'
import { motion } from 'framer-motion'


interface profiloList {
  created_at: string,
  description: string,
  id: string,
  img: string[],
  tag: string[],
  title: string,
  views: number,
}
const singelWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    }
  }
}
const ProfiloId = () => {
  const {id} = useParams();
  const [data, setData] = useState<profiloList>();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios.get(`/api/dashboard/profileId/${id}`)
      .then(({data}) => {
        setData(data[0]);
        setIsLoading(false);
      })
  }, [id])

  
  return (
    <div className='container mx-auto mt-[80px] relative flex flex-col-reverse lg:flex-row px-1 sm:px-4'>
      {
        isLoading ? (
          <div>g16</div>
        ) : (
          <motion.div variants={singelWord} initial='initial' animate='animate' className='flex flex-col-reverse lg:flex-row px-4'>
            <div className='w-[100%] lg:w-[60%] 2xl:w-[70%] p-1 h-full'>
              {
                data?.img.map((item, key) => <Image key={key} src={item as string} alt='' fill className=' !relative max-h-full max-w-full !h-auto '/>)
              }
            </div>
            <div className='w-[100%] lg:w-[40%] 2xl:w-[30%] sm:px-8 relative'>
              <div className='sticky top-[60px] flex flex-col gap-2 sm:gap-8 '>
                <div className=''>
                  <h1 className=' relative font-bold text-2xl'> 
                    {data?.title}
                    <span className=' h-[2px] absolute bottom-0 -left-2 w-[40%] bg-white'></span> 
                  </h1>
                  <p className=' text-right'> 觀看次數: {data?.views} </p>
                </div>
                <div>
                  <p className=' font-semibold text-lg text-slate-300'>介紹</p>
                  <div className='p-2'>
                    { parse(data?.description as string || '') }
                  </div>
                </div>
                <div>
                  <p className=' font-semibold text-lg text-slate-300' >TAG</p>
                  <div className=' flex justify-start flex-wrap gap-2 p-2'>
                    {
                      data?.tag.map((item,key) => <p key={key}>#{item}</p>)
                    }
                  </div>
                </div>
                <p className=' text-right'>上傳時間: {
                  dayjs(data?.created_at).format("YYYY-MM-DD") 
                }</p>
                <div className='flex justify-end gap-2'>
                  <Button>
                    <AiFillGithub/>
                  </Button>
                  <Button>
                    <AiOutlineLink/>
                  </Button>
                </div>
                </div>
            </div>
          </motion.div>
        )
      }
      
    </div>
  )
}

export default ProfiloId