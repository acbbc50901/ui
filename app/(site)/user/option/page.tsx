'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UserOption from '@/components/User/UserOption'
const Option = () => {
  const [user, setUser] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    if (!isLoading) {
      axios.get('/api/auth/signup')
        .then((res) => {
          setUser(res.data[0])
        })
    }
  }, [isLoading])

  return (
    <div className='flex gap-4 flex-col px-2'>
      <UserOption user={user} isLoading={isLoading} setIsLoading={setIsLoading}/>
      <div className=''>
        <p>更新密碼</p>
      </div>
      <div className=''>
        <p>留言板</p>
      </div>
    </div>
  )
}

export default Option