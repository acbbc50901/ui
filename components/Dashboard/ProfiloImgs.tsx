import Image from "next/image"
import { BsXCircleFill } from 'react-icons/bs'

interface Props {
  img: string,
  onClick: () => void,
  dleonClick: () => void, 
}

const ProfiloImgs: React.FC<Props> = ({img, onClick, dleonClick}) => {
  // console.log(img);
  return (
    <div className=' w-full h-auto  bg-white cursor-pointer relative' >
      <BsXCircleFill className=" absolute -top-1 -right-1 text-rose-800 text-lg" onClick={dleonClick}/>
      <Image src={img} alt='' width={1000} height={1000} className='w-[100%] h-[100%] object-cover' onClick={onClick}/>
    </div>
  )
}

export default ProfiloImgs