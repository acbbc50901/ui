'use client'
import Image from "next/image"

interface Props {
  id: string,
  img: string[],
  title: string,
  created_at: Date,
  tag?: string[],
  views: number,
  onClick?: () => void,
}

const ProfileList: React.FC<Props> = ({id, img,
  title, tag, views, onClick}) => {
  const OpenModal = () => {
    
    if(onClick) {
      onClick();
    }
    console.log(id);
  }
  return (
    <div className=' p-4 cursor-pointer hover:bg-slate-200 transition rounded-lg relative aspect-[16/9]'
      onClick={() => OpenModal()}>
      <Image src={img[0] || '/users.png'} alt={title} width={500} height={500} className="w-[100%] h-[100%] object-cover"/>
      <h1 className=' text-lg font-semibold truncate'>{title}</h1>
      <div className='flex flex-wrap gap-2'>
        {
          tag?.map((item, key) =><p key={key} className=' text-sm text-slate-500'>#{item}</p> )
        }
      </div>
      <div className="text-sm text-neutral-500 truncate text-right">
        觀看次數: {views}
      </div>
    </div>
  )
}

export default ProfileList