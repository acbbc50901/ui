'use client'
import Model from './Modal'
import Input from '../Input'

import useLoginModal from '@/app/hooks/useLoginModal'
import useSingUpModal from '@/app/hooks/useSingUpModal'
import useForgetModal from '@/app/hooks/useForgetModal'
import { supabase } from '@/supabase/supabase'

import { useRouter } from 'next/navigation'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { useState } from 'react'

const ForgetModal = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const singupModal = useSingUpModal();
  const forgetModal = useForgetModal();
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState: {errors} } = useForm<FieldValues>({ defaultValues: {
    email: '',
  }})


  const onSubmit : SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    const { email } = data;
    await supabase.auth.resetPasswordForEmail(email)
      .then((res) => {
        alert('信箱查收')
        setIsLoading(false);
      }).catch((error) => {
        alert('錯誤')
        console.log(error);
      }).finally(() => {
        router.refresh();
      })
  }

  const toggleModal = () => {
    loginModal.onOpen();
    forgetModal.onClose();
  }
  const togglesingout = () => {
    singupModal.onOpen();
    forgetModal.onClose();
  }

  const body = (
      <form onSubmit={handleSubmit(onSubmit)} className=' flex flex-col gap-4'>
        <Input label='電子信箱' id='email' disabled={isLoading} register={register} errors={errors} required />
        <button type='submit'
          className=' w-full bg-slate-400 py-2 text-white rounded-sm hover:bg-neutral-800 transition'>Reset</button>
      </form>
    )
  const footer = (
    <div className=' flex flex-col items-end text-sm font-normal'>
      <p  className='cursor-pointer text-slate-600' onClick={toggleModal}>想起密碼?</p>
      <div>
        <span>還沒註冊過?</span>
        <span className=' cursor-pointer text-slate-600' onClick={togglesingout}>註冊</span>
      </div>
    </div>
  )
  return (
    <Model title='ForgetModal' description='open' isOpen={forgetModal.isOpen} body={body} onClose={forgetModal.onClose} footer={footer}/>
  )
}

export default ForgetModal