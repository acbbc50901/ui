'use client'

import ModalProvider from '@/components/Modal/ModalProvider'
import Navbar from '@/components/Navbar'
import TransiotionEffect from '@/components/TransiotionEffect'



export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ModalProvider></ModalProvider>
      <div className='bg-[#F5F5F5]'>
        <Navbar/>
        {children}
      </div>
    </>
  )
}
