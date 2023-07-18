import { GridColDef } from '@mui/x-data-grid'
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
interface Props {
  slug: string,
  columns: GridColDef[],
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

const AddView: React.FC<Props> = ({isOpen, setIsOpen, slug, columns}) => {
  
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // add new users
    console.log(e);
  }
  return (
    <div className={` fixed w-full h-full top-0 left-0 bg-neutral-900/40 flex justify-center items-center
      ${isOpen ? 'fixed' : 'hidden'}`}>
      <div className=' w-[50%] h-[50%] bg-white rounded-xl px-4 py-8'>
        <div className=' flex justify-between'>
          <h1 className='text-xl font-bold mt-4'>{slug}</h1>
          <AiOutlineClose className=' cursor-pointer' size={20} onClick={() => setIsOpen(false)}/>
        </div>
        <form onSubmit={handleSubmit} className=' flex flex-wrap w-full h-full gap-4 overflow-auto p-4'>
          {
            columns.filter(item => item.field !== 'id' && item.field !=='avatar')
              .map((column, key) => {
              return (
                <div className=' flex flex-col w-[30%] gap-2' key={key}>
                  <label htmlFor={column.headerName} className=' text-sm'>{column.headerName}</label>
                  <input id={column.headerName} placeholder={column.field} className=' border p-2 rounded-md outline-none'
                    type={ column.type === 'boolean' ? 'checkbox' : column.type} />
                </div>
              )
            })
          }
          <button className='w-full bg-slate-700 text-white rounded-md m-4
            hover:bg-slate-400 hover:text-black transition'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default AddView