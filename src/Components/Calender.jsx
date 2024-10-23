import React from 'react'

const Calender = () => {

  const time = new Date()
  const day = time.getDay()
  const date = time.getDate()
  const month = time.toLocaleString('default', { month: 'long' });
  const year = time.getFullYear()
  const weekDays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
  return (
    <div className="bg-gray-300 text-center rounded-2xl p-5 shadow-shadow md:h-[150px]">
      <h1>{weekDays[day-1]}</h1>
      <hr className='h-1 mx-auto my-4 bg-gray-600 border-0 rounded'/>
      <h1>{month}, {date} {year}</h1>

    </div>
  )
}

export default Calender
