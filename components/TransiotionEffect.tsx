'use client'
import React, {useState, useEffect} from 'react'
import { motion,AnimatePresence } from 'framer-motion'
import useLoading from '@/app/hooks/useLoading'
import {usePathname} from 'next/navigation'

const TransiotionEffect = () => {
  const { isOpen } = useLoading()
  // const [open, setOpen] = useState(true);

  useEffect(() => {
  }, [])
  return (
    <>
      <AnimatePresence mode='wait'>
        <motion.div className=' fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-purple-600'
          initial= {{x: "100%", width: '100%'}}
          animate={ isOpen ? {x: "100%", width: '100%'} : {x: '0%', width: '0%'}  }
          transition={{duration: 0.8, ease: 'easeInOut'}}
        />
        {/* <motion.div className=' fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-purple-900'
          initial= {{x: "100%", width: '100%'}}
          animate={{x: '0%', width: '0%'}}
          exit={{x: ['0%', "100%"], width: ['0%', "100%"]}}
          transition={{delay: 0.2 ,duration: 0.8, ease: 'easeInOut'}}
        />
        <motion.div className=' fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-purple-100'
          initial= {{x: "100%", width: '100%'}}
          animate={{x: '0%', width: '0%'}}
          exit={{x: ['0%', "100%"], width: ['0%', "100%"]}}
          transition={{delay: 0.4 , duration: 0.8, ease: 'easeInOut'}}
        /> */}
      </AnimatePresence>
    </>
  )
}

export default TransiotionEffect