
import React from 'react'
import { AiOutlineHome, AiOutlineShoppingCart, AiOutlineBook, AiFillAppstore,
    AiFillDatabase, AiOutlineSetting, AiOutlineBarChart } from 'react-icons/ai'
import { MdBackup } from 'react-icons/md'
import { BsFillPeopleFill, BsPencilSquare } from 'react-icons/bs'
import { BiNotepad } from 'react-icons/bi'
import { FaClipboardList } from 'react-icons/fa'
import NavList from './NavList'

const Navbar = [
  {
    titel: 'MAIN',
    Link: [
      {
        icon: AiOutlineHome,
        text: 'HomePage',
        link: '/dashboard/home',
      },
      {
        icon: BsFillPeopleFill,
        link: '/dashboard/profile',
        text: 'Profile',
      },
    ],
  },
  {
    titel: 'LISTS',
    Link: [
      {
        icon: BsFillPeopleFill,
        link: '/dashboard/users',
        text: 'Users',
      },
      {
        icon: AiOutlineShoppingCart,
        link: '/dashboard/products',
        text: 'Products',
      },
      {
        icon: FaClipboardList,
        link: '/dashboard/orders',
        text: 'Orders',
      },
      {
        icon: AiOutlineBook,
        link: '/dashboard/posts',
        text: 'Posts',
      },
    ],
  },
  {
    titel: 'GENERAL',
    Link: [
      {
        icon: AiFillAppstore,
        link: '/dashboard/elemnts',
        text: 'Elemnts',
      },
      {
        icon: BsPencilSquare,
        link: '/dashboard/notes',
        text: 'Notes',
      },
      {
        icon: AiFillDatabase,
        link: '/dashboard/forms',
        text: 'Forms',
      },
      {
        icon: BiNotepad,
        link: '/dashboard/calendar',
        text: 'Calendar',
      },
    ],
  },
  {
    titel: 'MAINTENANCE',
    Link: [
      {
        icon: AiOutlineSetting,
        link: '/dashboard/settings',
        text: 'Settings',
      },
      {
        icon: MdBackup,
        link: '/dashboard/backups',
        text: 'Backups',
      },
    ],
  },
  {
    titel: 'ANALYTICS',
    Link: [
      {
        icon: AiOutlineBarChart,
        link: '/dashboard/charts',
        text: 'Charts',
      },
      {
        icon: FaClipboardList,
        link: '/dashboard/logs',
        text: 'Logs',
      },
    ],
  },
];
const Menu = () => {
  return (
    <div className='menu'>
      <div className='item'>
        {
          Navbar.map((item, key) => {
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