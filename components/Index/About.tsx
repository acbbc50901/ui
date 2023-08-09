import React from 'react'
import Image from 'next/image'

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
        <div className=' border w-full sm:w-[80%] max-w-xl flex flex-col p-3 sm:p-5 border-neutral-400 shadow-lg rounded-sm'>
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
                Skill.map((item, key) => <Image key={key} className='w-[50px] h-[50px] rounded-full p-1 object-cover hover:bg-slate-300 transition' width={200} height={200} src={item.image} alt={item.type}/>)
              }
            </div>
          </div>
        </div>
      </div>
      <div className=' w-full sm:w-[60%] lg:w-[40%] h-[600px] lg:h-full relative m-auto lg:m-0'>
        <Image src='/cat.jpg' className='object-cover min-w-[100%] min-h-[100%]' alt='' fill></Image>
      </div>
    </div>
  )
}

export default About