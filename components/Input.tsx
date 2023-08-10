import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

interface Props {
  label: string,
  id: string,
  disabled?: boolean,
  type? : string,
  required? : boolean,
  register: UseFormRegister<FieldValues>,
  errors: FieldErrors,
}

const Input: React.FC<Props> = ({label, id, type = 'text',  disabled,register, errors, required}) => {
  return (
    <div className='relative'>
      <input className={twMerge(`border rounded-md p-2 w-full text-md
        appearance-none focus:outline-none focus:ring-0 peer`, errors[id] && 'border-rose-600 text-rose-600')}
        placeholder=' ' type={type} id={id} disabled={disabled} {...register(id, {required})}/>
        { 
          errors[id] && (
            <p className='text-rose-600'>{label} 是必填!!</p>
          )
        }
      <label  className={twMerge(`absolute text-sm pr-3 text-zinc-400 duration-150 
          transform top-2 -translate-y-5 z-10 origin-[0] 
          left-2 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5
      `, errors[id] && ' text-rose-600')} htmlFor={id}>{label}</label>
    </div>
  )
}

export default Input