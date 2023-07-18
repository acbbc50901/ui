import React from 'react'
import { IconType } from 'react-icons'
import Link from 'next/link'
interface Props {
  icon: IconType,
  link: string,
  title: string,
}

const NavList: React.FC<Props> = ({ icon: Icon,link, title}) => {
  return (
    <Link href={link} className='flex items-center gap-3 p-2 hover:bg-slate-200 transition'>
      <Icon size={24} color='#555'/>
      <p className=' hidden sm:block'>{title}</p>
    </Link>
  )
}

export default NavList