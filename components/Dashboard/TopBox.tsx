import { TopDataType } from '@/Type'
import React from 'react'
import TopList from './TopList'
interface Props {
  topdata: TopDataType[],
}
const TopBox: React.FC<Props> = ({topdata}) => {
  return (
    <div className='topBox'>
      <h1 className='mb-5 text-2xl font-bold'>Top Deals</h1>
      <div className='flex flex-col gap-1'>
        {
          topdata.map((item,key) => <TopList item={item} key={key} />)
        }
      </div>
    </div>
  )
}

export default TopBox