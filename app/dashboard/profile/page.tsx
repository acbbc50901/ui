'use client'

import { useEffect, useState } from 'react'
import Button from "@/components/Button";
import ProfileList from "@/components/User/ProfileList";
import { useRouter } from "next/navigation";
import axios from 'axios';

interface Props {
  id: string,
  img: string[],
  title: string,
  description: string,
  created_at: Date,
  tag?: string[],
  views: number,
  onClick?: () => void,
}
const Profile = () => {
  const [list, setList] = useState<Props[]>();
  const router = useRouter();

  useEffect(() => {
    const fechData = async () => {
      axios.get('/api/dashboard/profile')
        .then((res) => {
          console.log(res);
          setList(res.data);
        })
    }
    fechData();
  }, [])

  return (
    <div  className='w-full h-full'>
      <div className=' flex justify-end'>
        <Button onClick={() => router.push('/dashboard/profile/create')}>新增</Button>
      </div>
      <div className='p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 '>
        {
          list ? (
            list.map((item,key) => <ProfileList {...item} key={key} onClick={() => router.push(`/dashboard/profile/${item.id}`)}/>)
          ) : ''
        }
      </div>
    </div>
  )
}

export default Profile