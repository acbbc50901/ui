import { TopDataType } from '@/Type'
import React from 'react'
import Image from 'next/image'
interface Props {
  item: TopDataType,
}

const TopList: React.FC<Props> = ({item}) => {
  return (
    <div className='flex items-center justify-between mb-4 gap-2'>
      <div className='flex gap-4'>
        <Image src={item.img as string} width={100} height={100} className=' w-[50px] h-[50px] object-cover rounded-full max-w-none' alt=''/>
        <div className='flex flex-col w-[180px] justify-center'>
          <p className='truncate text-sm'>{item.username}</p>
          <p className='truncate text-xs'>{item.email}</p>
        </div>
      </div>
      <span className='font-semibold'>${item.amount}</span>
    </div>
  )
}

export default TopList