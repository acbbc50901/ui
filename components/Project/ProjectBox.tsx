import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRouter } from 'next/navigation'

interface Props {
  image?: string,
  titel?: string,
  boxsize: string,
  link?: string,
}
const ProjectBox: React.FC<Props> = ({image, titel ,boxsize, link}) => {
  
  const boxRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { scrollYProgress } = useScroll({
    target: boxRef,
    offset: ['start end', 'end start']
  })

  const Y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -20],
  )
  const S = useSpring(0.9);
  const Sx = useTransform(
    S,
    [0, 1],
    [0, 1],
  )
  const iSx = useTransform(
    S,
    [0, 1],
    [0, 1.5],
  )
  

  return (
    <div className={`relative ${boxsize} p-4 sm:p-0  z-[2]`} onClick={ link ? () => router.push(`/profilo/${link}`): () => {console.log('123')}}>
        <motion.div ref={boxRef} style={{ transition: '0.5s'}} whileHover={{scale: Sx.get()}} className=' overflow-hidden bg-slate-300'>
          { image && ( 
              <motion.img src={image} alt={image} style={{translateY: Y, scale: 1.2, transition: '0.7s'}} whileHover={{scale: iSx.get()}} className=' !h-auto !relative '/>
          )}
        </motion.div>
        {
          titel && (
            <h1 className=' text-lg font-bold px-2'>{titel}</h1>
          )
        }
      </div>
  )
}

export default ProjectBox