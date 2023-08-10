'use client'
import React, {useState, useEffect} from 'react'
import { motion,AnimatePresence, useSpring } from 'framer-motion'
import useLoading from '@/app/hooks/useLoading'
import {usePathname} from 'next/navigation'
import Image from 'next/image'

const TransitionEffect = () => {
  const { isOpen, onOpen, onClose } = useLoading();
  const param = usePathname();
  const animationProps = useSpring(0);

  useEffect(() => {
    setTimeout(() => {
      onClose();
    }, 2000)
  }, [param]);

  return (
    <AnimatePresence mode='wait' initial={false}>
      {isOpen &&  (
        <motion.div
          initial={{ translateY: '100%' }}
          animate={{ translateY: '0%' }}
          exit={{ translateY: '-100%' }}
          className={` 
          fixed top-0 right-0 w-screen overflow-hidden transition h-screen z-[99] bg-slate-100 flex justify-center items-center`}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className='relative w-[80px] h-[80px]'
          >
            <motion.img
              src='/logo.png'
              alt='/'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TransitionEffect;