
import Navbar from "@/components/Dashboard/Navbar"
import Footer from "@/components/Dashboard/Footer"
import Menu from "@/components/Dashboard/Menu"

import { AiOutlineHome, AiOutlineShoppingCart, AiOutlineBook, AiFillAppstore,
  AiFillDatabase, AiOutlineSetting, AiOutlineBarChart } from 'react-icons/ai'
import { MdBackup } from 'react-icons/md'
import { BsFillPeopleFill, BsPencilSquare } from 'react-icons/bs'
import { BiNotepad } from 'react-icons/bi'
import { FaClipboardList } from 'react-icons/fa'

const NavbarData = [
  {
    titel: 'MAIN',
    Link: [
      {
        icon: AiOutlineHome,
        text: 'HomePage',
        link: '/dashboard/',
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
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full h-[100%] bg-slate-100">
      <Navbar/>
        <div className="flex w-full h-[80%] justify-center">
          <div className="menuContainer w-[15%] sm:w-[200px] px-2 py-2 border-r-2 border-blue-100">
            <Menu NavbarData={NavbarData}/>
          </div>
          <div className="contentContainer px-2 py-0 w-[85%] overflow-auto">
            {children}
          </div>
        </div>
      <Footer/>
    </div>
  )
}
