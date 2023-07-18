import Image from "next/image"
import Link from "next/link"
import { ResponsiveContainer, LineChart, Line, Tooltip } from "recharts"

interface Props {
  title: string,
  icon: string,
  number: number | string,
  dataKey: string,
  color: string,
  percentage: number,
  data: object[],
}
const CharBox: React.FC<Props>= ({title, color, data,
    dataKey, number, icon, percentage}) => {
  return (
    <div className='flex h-full flex-col sm:flex-row'>
      <div className='flex flex-col justify-between'  style={{flex : 3}}>
        <div className=' flex items-center gap-3'>
          <Image src={icon} alt="" width={15} height={15}/>
          <span>{title}</span>
        </div>
        <h1 className=" text-xl font-bold">{number}</h1>
        <Link href='/dashboard/home' style={{color: color}}>View all</Link>
      </div>
      <div className='flex flex-col justify-between' style={{flex : 2}}>
        <div className="sm:h-full w-full h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <Tooltip contentStyle={{background: 'transparent', border: 'none'}}
                labelStyle={{display: 'none'}} position={{x:10, y:80 }}/>
              <Line type="monotone" dataKey={dataKey} stroke={color} strokeWidth={1} dot={false}/>
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-col text-right">
          <span className= {`font-bold text-xl text-left sm:text-right ${percentage >= 0 ? ' text-green-600' : ' text-rose-700'}`}>{percentage}%</span>
          <span className="duration text-left sm:text-right"> this month</span>
        </div>
      </div>
    </div>
  )
}

export default CharBox