'use client'
import Model from './Modal'
import Input from '../Input'

import useLoginModal from '@/app/hooks/useLoginModal'
import useSingUpModal from '@/app/hooks/useSingUpModal'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import axios from 'axios'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

const SingUpModal = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const singupModal = useSingUpModal();
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState: {errors} } = useForm<FieldValues>({ defaultValues: {
    email: '', password: '',
  }})

  const onSubmit : SubmitHandler<FieldValues> = async (data) => {
    const { email, password } = data;
    setIsLoading(true);
    axios.post(`/api/auth/signup`, {email, password})
      .then((res) => {
        console.log(res)
        setIsLoading(false);
      })
  }
  const toggleModal = () => {
    loginModal.onOpen();
    singupModal.onClose();
  }

  const body = (
      <form onSubmit={handleSubmit(onSubmit)} className=' flex flex-col gap-4'>
        <Input label='電子信箱' id='email' type='mail' disabled={isLoading} register={register} errors={errors} required/>
        <Input label='密碼' id='password' type='password' disabled={isLoading} register={register} errors={errors} required/>
        <button type='submit'
          className=' w-full bg-slate-400 py-2 text-white rounded-sm hover:bg-neutral-800 transition'>Sing Up</button>
      </form>
    )
  const footer = (
    <div className=' flex justify-end text-sm font-normal'>
      <span>已經有帳號了?</span>
      <span className='cursor-pointer text-slate-600' onClick={toggleModal}>登入</span>
    </div>
  )
  return (
    <Model title='SingUp' description='open' isOpen={singupModal.isOpen} body={body} onClose={singupModal.onClose} footer={footer}/>
  )
}

export default SingUpModal