'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import {supabase} from '@/supabase/supabase'
import axios from 'axios'
import useLoginModal from '@/app/hooks/useLoginModal'
import Image from 'next/image'
import Link from 'next/link'

const Nav = [
  {
    title: '案例展示',
    link: '/proflio',
  },
  {
    title: '聯絡方式',
    link: '/contant',
  },
  {
    title: '個人設定',
    link: '/user',
  },
]

const Navbar = () => {
  const [user, setUser] = useState<any>();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const {onOpen} = useLoginModal();
  useEffect(() => {
    axios.get('/api/auth/signup')
      .then((res) => {
        if (res.data) {
          setUser(res.data[0])
        }
      })
  }, [])

  const Logout = async () => {
    await supabase.auth.signOut()
      .catch((error) => {
        alert('error');
        console.log(error);
      }).finally(() => {
        router.refresh();
      })
  }

  return (
    <nav className='w-[100vw] flex py-2 justify-center items-center fixed z-50'>
      <div className=' container flex justify-between items-center p-2'>
      <div onClick={() => router.push('/')} className=' cursor-pointer w-[50px] h-[50px] relative'>
        <Image src='/logo.png' alt='' fill/>
      </div>
      <div className='flex justify-center items-center gap-4 cursor-pointer'>
        <div className=' flex gap-2'>
          {
            user ? (
              <>
                <div className='flex flex-col relative'>
                  <Image src={user.image || '/users.png'} width={400} height={400} alt='' onClick={() => setIsOpen(!isOpen)} className=' w-[50px] h-[50px] object-cover
                    rounded-full cursor-pointer hover:scale-125 transition ease'/>
                  <div className={` absolute top-[50px] right-2 bg-white rounded-md shadow-md flex flex-col z-50 py-4 px-4 w-[150px] ${isOpen ? 'flex' : 'hidden'}`}>
                    {
                      Nav.map((item, key) =><Link href={item.link} key={key} className='text-slate-600 hover:bg-neutral-200 py-2 px-4 transition border-b block'>{item.title}</Link> )
                    }
                    <p className=' text-slate-600 hover:bg-neutral-200 py-2 px-4 transition border-b' onClick={() => router.push('/dashboard')}>後台</p>
                    <p className=' text-slate-600 hover:bg-neutral-200 py-2 px-4 transition border-b' onClick={Logout}>登出</p>
                  </div>
                </div>
              </>
            ) : (
              <button className=' bg-slate-400 text-white py-2 px-3 rounded-md'
                onClick={onOpen}>登入</button>
            )
          }
        </div>
      </div>
      </div>
    </nav>
  )
}

export default Navbar