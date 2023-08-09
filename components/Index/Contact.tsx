import React, { useState } from 'react'
import Input from '../Input'
import Button from '../Button'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, setValue,
    formState: {errors}, reset} = useForm<FieldValues>({
    defaultValues: {
      mail: '',
      name: '',
      text: '',
    }
  })
  return (
    <div className=' flex flex-col gap-4 py-4 lg:p-0 lg:gap-0 lg:h-[100vh] lg:flex-row'>
      <div className='w-[100%] lg:w-[50%] flex justify-center items-center'>
        <div className='w-[95%] lg:w-[80%] flex justify-center flex-col gap-3'>
          <h1 className=' font-bold text-4xl'>Contact me</h1>
          <p>感謝你的觀看，如果有需求請聯絡我</p>
          <Input label='名稱' id='name' register={register} errors={errors} disabled={isLoading}/>
          <Input label='信箱' id='mail' register={register} errors={errors} disabled={isLoading}/>
          <Input label='訊息' id='text' register={register} errors={errors} disabled={isLoading}/>
          <Button>送出</Button>
          <div className=' flex gap-2'>
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
        </div>
      </div>
      <div className='w-[100%] lg:w-[50%] flex justify-center items-center'>
        <div className='w-[320px] h-[180px] md:w-[780px] md:h-[360px] lg:w-[520px] lg:h-[270px] bg-slate-300'></div>
      </div>
    </div>
  )
}

export default Contact