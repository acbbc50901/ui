
import React from 'react'
import { AiOutlineHome, AiOutlineShoppingCart, AiOutlineBook, AiFillAppstore,
    AiFillDatabase, AiOutlineSetting, AiOutlineBarChart } from 'react-icons/ai'
import { MdBackup } from 'react-icons/md'
import { BsFillPeopleFill, BsPencilSquare } from 'react-icons/bs'
import { BiNotepad } from 'react-icons/bi'
import { FaClipboardList } from 'react-icons/fa'
import NavList from './NavList'
import { IconType } from 'react-icons'

interface Type {
  titel: string,
  Link: {
    icon: IconType,
    link: string,
    text: string,
  }[],
}

interface Props {
  NavbarData: Type[],
}

const Menu: React.FC<Props> = ({NavbarData}) => {
  return (
    <div className='menu'>
      <div className='item'>
        {
          NavbarData.map((item, key) => {
            return (
              <>
                <span className=' hidden sm:block uppercase text-neutral-400 text-xs' key={key}> {item.titel} </span>
                {
                  item.Link.map((list, key2) => <NavList title={list.text}
                    link={list.link} icon={list.icon} key={key2}/>)
                }
              </>
            )
          })
        }
        
      </div>
    </div>
  )
}

export default Menu