'use client'
import Model from './Modal'
import Input from '../Input'

import useResetModal from '@/app/hooks/useResetModal'
import { supabase } from '@/supabase/supabase'

import {  useState, useEffect } from 'react'
import { useRouter, useSearchParams, useParams } from 'next/navigation'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

const ResetModal = () => {
  const router = useRouter();
  const params = useSearchParams();
  const resetModal = useResetModal();
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: {errors} } = useForm<FieldValues>({ defaultValues: {
    email: '', password: '',
  }})
  useEffect(() => {
    // console.log(params.get('data'), params2);
    if (params.get('data')) {
      resetModal.onOpen();
    }
  }, [resetModal, params])

  const onSubmit : SubmitHandler<FieldValues> = async (data) => {
    const { email, password } = data;
    setIsLoading(true);

    await supabase.auth.updateUser({
      email,
      password,
    }).then((res) => {
      console.log(res);
      alert('更改成功，請重新登入!')
      resetModal.onClose();
    }).catch((error) => {
      console.log(error);
      alert('失敗')
    }).finally(() => {
      router.refresh();
    })
  }
  const body = (
      <form onSubmit={handleSubmit(onSubmit)} className=' flex flex-col gap-4'>
        <Input label='電子信箱' id='email' type='mail' disabled={isLoading} register={register} errors={errors} required />
        <Input label='密碼' id='password' type='password' disabled={isLoading} register={register} errors={errors} required/>
        <button type='submit'
          className=' w-full bg-slate-400 py-2 text-white rounded-sm hover:bg-neutral-800 transition'>重新設定</button>
      </form>
    )
  return (
    <Model title='Reset' description='open' isOpen={resetModal.isOpen} body={body} onClose={resetModal.onClose}/>
  )
}

export default ResetModal