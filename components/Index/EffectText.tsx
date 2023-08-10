import React, {useEffect, useRef, useState} from 'react'
import {
  motion, useScroll, useTransform, 
} from 'framer-motion'
import { wrap } from "@motionone/utils";


interface Props {
  baseVelocity: number,
}

const EffectText: React.FC<Props> = ({baseVelocity = -400}) => {
  const textRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ['start end', 'end start'],
  })

  const xTransform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, baseVelocity],
  );
  // const move = useSpring(xTransform, {stiffness: 1000, damping: 1,})

  return (
    <motion.div className=' w-full flex justify-center gap-4 flex-nowrap'
      ref={textRef} style={{translateX: xTransform}}>
      <p className='text-center uppercase text-8xl font-bold select-none flex-none text-main '>jarry PORTFILIO</p>
      <p className='text-center uppercase text-8xl font-bold select-none flex-none text-bg drop-shadow-text shadow-[#7AADDB]'>jarry PORTFILIO</p>
      <p className='text-center uppercase text-8xl font-bold select-none flex-none text-main'>jarry PORTFILIO</p>
      <p className='text-center uppercase text-8xl font-bold select-none flex-none text-bg drop-shadow-text shadow-[#7AADDB]'>jarry PORTFILIO</p>
    </motion.div>
  );
}

export default EffectText