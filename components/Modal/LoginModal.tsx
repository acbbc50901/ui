'use client'
import Model from './Modal'
import Input from '../Input'

import useLoginModal from '@/app/hooks/useLoginModal'
import useSingUpModal from '@/app/hooks/useSingUpModal'
import useForgetModal from '@/app/hooks/useForgetModal'
import { supabase } from '@/supabase/supabase'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

const LoginModal = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const singupModal = useSingUpModal();
  const forgetModal = useForgetModal();

  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState: {errors} } = useForm<FieldValues>({ defaultValues: {
    email: '', password: '',
  }})

  const onSubmit : SubmitHandler<FieldValues> = async (data) => {
    const { email, password } = data;
    setIsLoading(true);
    await supabase.auth.signInWithPassword({
      email,
      password,
    }).then((res) => {
      if (res.error) {
        alert('錯誤')
        return;
      }
      loginModal.onClose();
    }).catch((res) => {
      alert('錯誤')
    }).finally(() => {
      router.refresh();
      setIsLoading(false);
    })
  }
  const toggleModal = () => {
    loginModal.onClose();
    singupModal.onOpen();
  }
  const toggleforget = () => {
    loginModal.onClose();
    forgetModal.onOpen();
  }

  const body = (
      <form onSubmit={handleSubmit(onSubmit)} className=' flex flex-col gap-4'>
        <Input id='email' label='Email' disabled={isLoading} register={register} errors={errors} required/>
        <Input id='password' label='Password' type='password' disabled={isLoading} register={register} errors={errors} required/>
        <button type='submit'
          className=' w-full bg-slate-400 py-2 text-white rounded-sm hover:bg-neutral-800 transition'>Login in</button>
      </form>
    )
  const footer = (
    <div className=' flex flex-col items-end text-sm font-normal'>
      <p  className='cursor-pointer text-slate-600' onClick={toggleforget}>遺失密碼?</p>
      <div>
        <span>還沒註冊過?</span>
        <span className=' cursor-pointer text-slate-600' onClick={toggleModal}>註冊</span>
      </div>
    </div>
  )
  return (
    <Model title='Login' description='open' isOpen={loginModal.isOpen} body={body} onClose={loginModal.onClose} footer={footer}/>
  )
}

export default LoginModal