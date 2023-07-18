import React from 'react'
import { BarChart, ResponsiveContainer, Bar, Tooltip } from 'recharts'

interface Props {
  data: object[],
  color: string,
  dataKey: string,
  title: string,
}

const BarCharBox = (props : Props) => {
  return (
    <div className=' h-full'>
      <h1 className=' text-xl font-semibold'>{props.title}</h1>
      <div className=' h-full'>
        <ResponsiveContainer width="90%" height="80%">
          <BarChart data={props.data}>
            <Tooltip contentStyle={{background: '#2a3447', borderRadius: '5px'}}
              labelStyle={{display: 'none'}}  cursor={{fill: 'none'}}/>
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default BarCharBox