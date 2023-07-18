import Image from "next/image"
import { AiOutlineSearch, AiFillAppstore, AiOutlineExpand, AiOutlineSetting } from 'react-icons/ai'
import { IoIosNotificationsOutline } from 'react-icons/io'
const DashboardNav = () => {
  return (
    <div className=' w-full flex justify-between p-5'>
      <div className="flex items-center">
        <Image src='/logo.svg' alt="logo" width={50} height={50}/>
        <span>DashBorad</span>
      </div>
      <div className=" flex items-center gap-2">
        <AiOutlineSearch className="cursor-pointer hidden sm:block" size={25}/>
        <AiFillAppstore className="cursor-pointer hidden sm:block" size={25}/>
        <AiOutlineExpand className="cursor-pointer hidden sm:block" size={20}/>
        <div className="relative cursor-pointer">
          <IoIosNotificationsOutline size={25}/>
          <div className="rounded-full bg-red-600 absolute -top-2 -right-2 w-5 h-5 
            flex justify-center items-center text-white text-sm">1</div>
        </div>
        <div className="flex justify-center items-end p-3">
            <Image src='/users.png' alt="/users.png" className=" rounded-full" width={25} height={25}/>
            <span className=" font-semibold text-sm"> 123 </span>
        </div>
        <AiOutlineSetting className="cursor-pointer" size={25}/>
      </div>  
    </div>
  )
}

export default DashboardNav