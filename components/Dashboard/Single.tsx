'use client'

import React from 'react'
import Image from 'next/image'
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts'
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
interface Props {
  id: number,
  img?: string,
  title: string,
  info: object,
  chart?: {
    dataKeys: {
      name: string,
      color: string
    }[],
    data: object[],
  },
  activities?: {time: string, text: string}[],
}
const Single: React.FC<Props> = ({id, info,img,title,chart,activities}) => {
  return (
    <div className=' flex flex-col xl:flex-row'>
      <div className='view flex-1 p-2'>
        <div className='info'>
          <div className='flex items-center gap-4 flex-col sm:flex-row'>
            <Image src={img || '/users.png'} className='w-[84px] h-[84px] rounded-md' width={70} height={70} alt=''/>
            <h1 className=' text-2xl font-semibold'>{title}</h1>
            <button className=' rounded-md bg-rose-700 text-white px-3 py-1'>Updata</button>
          </div>
          <div className=''>
            {
              Object.entries(info).map((item,key) => {
                return (
                  <div className='my-5 flex gpa-4' key={key}>
                    <span className='capitalize'>{item[0]}: </span>
                    <span className=''>{item[1]}</span>
                  </div>
                )
              })
            }
          </div>
        </div>
        <hr className=' my-6 border border-b-slate-700'/>
        <div className='chart w-full h-[200px] sm:h-[400px]'>
          {
            chart && (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  width={500}
                  height={300}
                  data={chart?.data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  {
                    chart.dataKeys.map((item, key) => <Line key={key} type="monotone" dataKey={item.name} stroke={item.color} />)
                  }
                </LineChart>
              </ResponsiveContainer>
            )
          }
        </div>
      </div>
      <div className='activities flex-1 p-4 w-full'>
        <h2 className=' mb-4 text-xl font-semibold'>Latest Activities</h2>
          {
            activities && (
              <ul>
                {
                  activities.map((item, key) => {
                    return(
                      <li key={key} className=" relative w-[2px] rounded pt-10 bg-slate-400
                        after:content-[''] after:absolute after:w-[10px] after:h-[10px] after:rounded-full after:bg-slate-600 after:left-[50%] after:bottom-0
                        after:translate-x-[-50%]
                      ">
                      <div className='min-w-[280px] sm:min-w-[480px] p-4 bg-slate-400'>
                        <p className=' text-white'>{item.text}</p>
                        <time className=' text-sm text-white'>{item.time}</time>
                      </div>
                    </li>
                    )
                  })
                }
              </ul>
            )
          }
      </div>
    </div>
  )
}

export default Single