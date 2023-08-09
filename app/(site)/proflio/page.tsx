'use client'

import axios from 'axios';
import React, {useEffect, useState} from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion"
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
      duration: 1,
      delay: 0.5,
    }
  }
}

const xShow = {
  initial: {
    opacity: 0,
    x: 50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    }
  }
}
const Poflio = () => {


  const [isLoading, setIsLoading] = useState(false);
  const [profiloList, setProfiloList] = useState<profiloList[]>([]);

  useEffect(() => {
    setIsLoading(true);
    axios.get('/api/dashboard/profile/')
      .then((res) => {
        setProfiloList(res.data);
        console.log(res);
        setIsLoading(false);
      })
  }, [])

  return (
    <div className='container mx-auto mt-[80px] h-full flex flex-col'>
      {
        isLoading ? (
          <div className=' flex justify-center items-center h-full'>
            loading
          </div>
        ) : (
          <motion.div>
            <motion.div variants={xShow} initial='initial' animate='animate'  className='flex gap-2 justify-end w-full'>
              <p>筆數: {profiloList.length}筆</p>
              <p> tag: </p>
              <input type="text" />
            </motion.div>
            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-2'>
              {
                profiloList.map((item, key) => {
                  return (
                    <Link href={`/proflio/${item.title}`} key={key} className='p-2 hover:-translate-y-2 transition'>
                      <motion.div variants={singelWord} initial='initial' animate='animate'  className=' p-4 rounded-md bg-neutral-100 border text-black'>
                        <Image src={item.img[0] || ''} alt={item.title} width={1000} height={1000} className=' w-full'/>
                        <div className='p-1 border-t'>
                          <h1 className=' truncate text-lg'>{item.title}</h1>
                          <div className='flex justify-start items-center gap-2 overflow-hidden'>
                            {
                              item.tag.map((tag2, key2) => <p key={key2} className=' text-sm text-neutral-400'>#{tag2}</p>)
                              
                            }
                          </div>
                          <p className=' text-right text-sm text-neutral-500'>觀看次數 {item.views}</p>
                        </div>
                      </motion.div>
                    </Link>
                  )
                })
              }
            </div>
          </motion.div>
        )
      }
      
    </div>
  )
}

export default Poflio