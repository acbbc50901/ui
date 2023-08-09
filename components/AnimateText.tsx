import React from 'react'
import { motion } from 'framer-motion'

const quote = {
  animate: {
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    }
  }
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
    }
  }
}


interface Props {
  text: string,
  className?: string,
}

const AnimateText: React.FC<Props> = ({text, className}) => {
  return (
    <div className=' w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden'>
      <motion.h1 variants={quote} initial='initial' animate='animate' className={` inline-block w-full text-slate-300 font-semibold break-words capitalize text-6xl ${className}`}>
        {
          text.split(' ').map((item, key) => <motion.span key={key}
          variants={singelWord} className=' inline-block mx-2'>{item}</motion.span>)
        }
      </motion.h1>
    </div>
  )
}

export default AnimateText