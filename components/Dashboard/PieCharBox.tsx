import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
const data = [
  { name: 'Group A', value: 1000, color: '#64363C' },
  { name: 'Group B', value: 300, color: '#707C74' },
  { name: 'Group C', value: 300, color: '#261E47' },
  { name: 'Group D', value: 200, color: '#877F6C' },
];
const PieCharBox = () => {
  return (
    <div className='h-full'>
      <h1 className=' font-semibold text-xl'>Leads</h1>
      <div className='h-auto'>
        <ResponsiveContainer width='99%' height={400}>
          <PieChart>
            <Tooltip contentStyle={{background: 'white', borderRadius: '5px'}}
              labelStyle={{display: 'none'}}  cursor={{fill: 'none'}}/>
            <Pie
              data={data}
              cx={'50%'}
              cy={'50%'}
              innerRadius={'70%'}
              outerRadius={'90%'}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item, index) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className='flex justify-between gap-2'>
        {
          data.map((item, key) => {
            return (
              <div className='flex justify-center items-center flex-col' key={key}>
                <div className='flex flex-col gap-2 '>
                  <div className='w-4 h-4' style={{backgroundColor: item.color}}/>
                  <span className='text-sm'>{item.name}</span>
                  <span className='text-sm'>{item.value}</span>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default PieCharBox