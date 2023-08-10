import React from 'react'
import Image from 'next/image'
import Wrapper from '@/hoc/SectionWrapper'
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'

const fadeIn = (direction: string, type: any, delay: number, duration: number) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

const Skill = [
  {
    type: 'Html',
    image: '/logo/html.png',
  },
  {
    type: 'css',
    image: '/logo/css.png',
  },
  {
    type: 'tailwind',
    image: '/logo/tailwind.png',
  },
  {
    type: 'figma',
    image: '/logo/figma.png',
  },
  {
    type: 'javascript',
    image: '/logo/javascript.png',
  },
  {
    type: 'typescript',
    image: '/logo/typescript.png',
  },
  {
    type: 'nodejs',
    image: '/logo/nodejs.png',
  },
  {
    type: 'reactjs',
    image: '/logo/reactjs.png',
  },
  {
    type: 'vue',
    image: '/logo/vue.png',
  },
  {
    type: 'mongodb',
    image: '/logo/mongodb.png',
  },
  {
    type: 'supabase',
    image: '/logo/supabase.png',
  },
]

const About = () => {
  return (
    <div className=' h-auto lg:h-[100vh] flex flex-col gap-2 lg:gap-0 lg:flex-row'>
      <div className=' w-full p-2 sm:w-[80%] lg:w-[60%]  h-full flex justify-center items-center m-auto lg:m-0'>
        <motion.div variants={fadeIn('left', 'spring', 2 *0.5 , 1)}
          className=' border w-full sm:w-[80%] max-w-xl flex flex-col p-3 sm:p-5 border-neutral-400 shadow-lg rounded-sm'>
          <div className=' py-2'>
            <h5 className=' text-xl sm:text-2xl font-bold m-0'>黃信誠</h5>
            <p className=' text-sm text-neutral-500'>Jarry</p>
          </div>
          <div className=''>
            <h5 className=' font-semibold text-md sm:text-xl'>自我介紹</h5>
            <div className=' p-1'>
              <p className=' tracking-wider text-sm sm:text-base'>哈囉，我是一位靠自學一步一步努路爬上來的工程師，目前接觸比較多前端相關，也有碰一些資料庫，之後希望能夠成為能以一己自立開發Web、APP都沒問題的全端工程師 !!</p>
            </div>
          </div>
          <div className=''>
            <h5 className=' font-semibold text-md sm:text-xl'>工作經歷</h5>
            <div className=' px-1'>
              <div className=' border-b py-2'>
                <h5 className='py-1 text-base sm:text-lg font-medium'>網頁工程師</h5>
                <p className='text-sm sm:text-base'>負責前端規劃....</p>
              </div>
              <div className=' border-b py-2'>
                <h5 className='py-1 text-base sm:text-lg font-medium'>網頁工程師</h5>
                <p className='text-sm sm:text-base'>負責前端規劃....</p>
              </div>
            </div>
          </div>
          <div className=''>
            <h5 className=' font-semibold text-md sm:text-xl'>擁有技能</h5>
            <div className=' p-1 flex flex-wrap gap-3'>
              {
                Skill.map((item, key) => <Tilt key={key}><Image  className='w-[65px] h-[65px] rounded-full p-1 object-cover hover:bg-slate-300 transition' width={200} height={200} src={item.image} alt={item.type}/></Tilt>)
              }
            </div>
          </div>
        </motion.div>
      </div>
      <div className=' w-full sm:w-[60%] lg:w-[40%] h-[600px] lg:h-full relative m-auto lg:m-0'>
        <motion.div variants={fadeIn('right', 'spring', 1 *0.5 , 1)} className=' w-full h-full'>
          <Image src='/cat.jpg' className='object-cover min-w-[100%] min-h-[100%]' alt='' fill></Image>
        </motion.div>
      </div>
    </div>
  )
}

export default Wrapper(About, 'About')