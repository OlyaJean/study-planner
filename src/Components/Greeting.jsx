import React, { useEffect } from 'react'
import { useState } from 'react'

const Greeting = () => {
    const [timeOfTheDay,setTimeOfTheDay] = useState();
   let time = new Date();
   let hours = time.getHours()
    console.log(hours);
    useEffect(()=>{
        if(hours >= 6 && hours < 12){return setTimeOfTheDay("Good morning")}else if(hours >=12 && hours < 18){return setTimeOfTheDay("Good afternoon")}else{return setTimeOfTheDay("Good evening")}

    })
   
   return (
    <div className="bg-gray-300 w-[200px] text-center rounded-2xl p-5 shadow-shadow md:h-[150px]">
      <h1 className='text-lg'>{timeOfTheDay}!</h1>
      <p>I hope you have a productive day!</p>
    </div>
  )
}

export default Greeting
