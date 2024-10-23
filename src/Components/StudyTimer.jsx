import React, { useEffect, useState } from 'react'

const StudyTimer = () => {

   const [studyTime,setStudyTime] = useState(25)
   const [breakTime,setBreakTime] = useState(5)
   const [mins,setMins] = useState(studyTime)
   const [secs,setSecs] = useState(0)

   const studyUp = () => {
    setStudyTime(studyTime + 1)
   }
   const studyDown = () => {
    setStudyTime(studyTime - 1)
     studyTime <= 0 ? setStudyTime(0) : ''
   }
   const breakUp = () => {
    setBreakTime(breakTime + 1)
   }
   const breakDown = () => {
    setBreakTime(breakTime - 1);
    breakTime <=0 ? setBreakTime(0) :''
   }
   useEffect(()=>{
    setMins(studyTime)
   },[studyTime])
   
   const zerosSec = secs < 10 ? `0${secs}` : secs;
   const zeroMin = mins < 10 ? `0${mins}` : mins 
   const clock = `${zeroMin}:${zerosSec}`;


   const startTimer = () => {
    
   }
 
  return (
    <div className='bg-gray-300  text-center rounded-2xl p-5 shadow-shadow'>
        <h1>Pomodoro Clock</h1>
      <span>{clock}</span>
      <br />
      <div className='flex justify-between'>
        <section>
        <p>study time</p>
      <section className='flex items-center justify-center gap-5 border-[1px] p-3 rounded-xl px-2 bg-gray-200 shadow-btnShadow '>
      <span>{studyTime}</span>
         <section className='flex flex-col'>
         <button className='active:text-gray-500' onClick={()=>{studyUp()}}> &#8679;</button>
         <hr className='h-[2px]  bg-gray-600 border-0 rounded'/>
         <button className='active:text-gray-500' onClick={()=>{studyDown()}}> &#8681;</button>
      </section>
      </section>
      </section>

      <section>
        <p>break time</p>
      <section className='flex items-center justify-center gap-5 border-[1px] p-3 rounded-xl px-2 bg-gray-200 shadow-btnShadow '>
      <span>{breakTime}</span>
         <section className='flex flex-col'>
         <button className='active:text-gray-500' onClick={()=>{breakUp()}}>&#8679;</button >
         <hr className='h-[2px]  bg-gray-600 border-0 rounded'/>
         <button className='active:text-gray-500' onClick={()=>{breakDown()}}> &#8681;</button>
      </section>
      </section>
      </section>
      </div>
      <button className='shadow-btnShadow w-16 rounded-xl p-2 active:shadow-none active:border-[0.5px] active:border-slate-400' onClick={()=>{startTimer()}}>start</button>
    </div>
  )
}

export default StudyTimer
