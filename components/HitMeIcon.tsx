import React from 'react'
import Image from 'next/image'

interface Props {
  className: string,
}

const HitMeIcon: React.FC<Props> = ({className}) => {
  return (
    <div className={`flex justify-center items-center cursor-pointer relative flex-none w-[150px] h-[150px] ${className}`}>
      <Image src='/Web_Design_For_Jarry-transformed.png' alt='' width={150} height={150} className='w-[150px] h-[150px] animate-spin-slow'/>
    </div>
  )
}

export default HitMeIcon