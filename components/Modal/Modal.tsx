import React, { ReactNode } from 'react'
import Input from '../Input'
import { BsXLg } from 'react-icons/bs'

interface Props {
  title?: string,
  description?: string,
  body? : React.ReactElement,
  footer? : React.ReactElement,
  isOpen: boolean,
  onClose: () => void,
}

const Model: React.FC<Props> = ({title='test', description='132456', body, footer, isOpen, onClose}) => {
  return (
    <div className={`w-full h-full items-center justify-center
      fixed left-0 top-0 bg-neutral-600/40 ${isOpen ? 'flex' : 'hidden'}`}>
      <div className=' shadow-sm  shadow-neutral-200 bg-white rounded-xl px-16 py-4 flex flex-col gap-4
          relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto'>
        <div className=''>
          <h1 className=' text-2xl font-semibold uppercase text-center'>{title}</h1>
          <p className='px-2 text-neutral-500 text-sm text-center'>{description}</p>
          <BsXLg className=' absolute top-4 right-4 cursor-pointer' size={24} onClick={onClose}/>
        </div>
        <div>
          { body }
        </div>
        <div>
          { footer }
        </div>
      </div>
  </div>
  )
}

export default Model