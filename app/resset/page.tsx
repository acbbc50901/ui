'use client'

import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const page = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/?data="reset"')
  },[])
  return (
    <div>跳轉中</div>
  )
}

export default page