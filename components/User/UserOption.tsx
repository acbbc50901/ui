'use client'

import React, { useEffect, useState, useRef, ChangeEvent } from 'react'
import { supabase }  from '@/supabase/supabase'
import Image from 'next/image'
import Button from '@/components/Button'
import Input from '@/components/Input'
import axios from 'axios'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'

interface Props {
  isLoading: boolean,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  user: any,
}

const UserOption: React.FC<Props> = ({isLoading, setIsLoading, user}) => {
  const router = useRouter();
  const inputRef = useRef<any>(null);
  const [file, setFile] = useState<File>();
  const [fileLink, setFileLink] = useState('');
  const { register, handleSubmit, setValue,
    formState: {errors}, reset} = useForm<FieldValues>({
    defaultValues: {
      image: '',
      name: '',
    }
  })
  useEffect(() => {
    if (user) {
      setValue('name', user.name)
      setValue('image', user.image)
      setFileLink(user.image)
    }
  }, [user])
  const onImageChange = (e:ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files)  {
      console.log('error');
      return null
    }
    const file = e.target.files[0];
    setFile(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      setFileLink(e.target?.result as string)
    }
    reader.readAsDataURL(file)
  }

  const onSubmit: SubmitHandler<FieldValues> = async (e) => {
    setIsLoading(true);
    if (file) {
      await supabase.storage.from('userimage')
        .upload(`user_${Date.now()}`, file as File)
        .then(({data}) => {
          const sendData = {...e, image:`https://xuguamvrhqpydrqyajyd.supabase.co/storage/v1/object/public/userimage/${data?.path}`, user: user.id}
          axios.put('/api/auth/signup', {...sendData})
            .then((res) => {
              console.log(res);
              router.refresh();
              setIsLoading(false);
            })
        })
    } else {
      const sendData = {...e, user: user.id}
      axios.put('/api/auth/signup', {...sendData})
        .then((res) => {
          router.refresh();
          setIsLoading(false);
        })
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex gap-4 flex-col px-2'>
        <div className='flex w-full justify-between items-center'>
          <Image src={fileLink ? fileLink : '/users.png'} alt='' width={1000} height={1000} className='w-[100px] h-[100px] object-cover rounded-full'/>
          <Button className='' onClick={() => inputRef.current ? inputRef.current.click() : ''}>更新照片</Button>
          <input type="file" className=' hidden' ref={inputRef} onChange={onImageChange}/>
        </div>
        <Input label='名稱' id='name' register={register} errors={errors} disabled={isLoading}/>
        <Button type='submit'>儲存</Button>
      </form>
  )
}

export default UserOption