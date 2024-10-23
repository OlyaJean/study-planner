import React, { useEffect, useState } from 'react'

const StudyTimer = () => {

   const [studyTime,setStudyTime] = useState(25)
   const [breakTime,setBreakTime] = useState(5)
   const [mins,setMins] = useState(studyTime)
   const [secs,setSecs] = useState(0)
   const [message,setMessage] = useState(false)
   const [running,setRunning] = useState(false)
   const [pause,setPause] = useState(false)
 

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
  setPause(false);
  setRunning(true)

  let interval = setInterval(()=>{
    clearInterval(interval)

    if(secs === 0){
      if(mins !== 0){
        
        setSecs(59);
        setMins(mins - 1);
      }else{
        //breakpoint
        let mins = message ? studyTime - 1 : breakTime - 1;
        let secs = 59;
        setMins(mins);
        setSecs(secs);
        setMessage(!message);
      }
    }else{
      setSecs(secs - 1)
    }
  

  },1000)
}

const pauseTimer = () => {
setRunning(false)
setPause(true)
}
const stopTimer = () => {
  setPause(false);
  setRunning(false);
  message ? setMessage(!message) : setMessage(message)
  setMins(studyTime);
  setSecs(0)
}
  
    useEffect(()=>{
      if(running && !pause){
        startTimer()}else if(!running && pause){
          pauseTimer()
        }else{stopTimer()}
      
    })
   
  
 
  return (
    <div className='bg-gray-300  text-center rounded-2xl p-5 shadow-shadow md:absolute md:top-[230px] md:w-[337px] lg:w-[350px] '>
       
     
      {message? <h1 className='mb-5 text-lg'>Break time! <br />New session starts in</h1> :  <h1 className='mb-5 text-lg'>Pomodoro Clock</h1>}
      <span className='font-mono text-slate-700 text-3xl'>{clock}</span>
      <br />
      <div className='flex justify-between my-5'>
        <section>
        <p>study time</p>
      <section className='flex items-center justify-center gap-5 border-[1px] p-3 rounded-xl px-2 bg-gray-200 shadow-btnShadow'>
      <span className='font-mono'>{studyTime}</span>
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
      <span className='font-mono'>{breakTime}</span>
         <section className='flex flex-col'>
         <button className='active:text-gray-500' onClick={()=>{breakUp()}}>&#8679;</button >
         <hr className='h-[2px]  bg-gray-600 border-0 rounded'/>
         <button className='active:text-gray-500' onClick={()=>{breakDown()}}> &#8681;</button>
      </section>
      </section>
      </section>
      </div>
      <button className='shadow-btnShadow w-16 rounded-xl p-2 active:shadow-none active:border-[0.5px] active:border-slate-400 text-emerald-800' onClick={()=>{startTimer()}}>start</button>
      <button className='shadow-btnShadow w-16 rounded-xl p-2 active:shadow-none active:border-[0.5px] active:border-slate-400 mx-5 text-yellow-600' onClick={()=>{pauseTimer()}}>pause</button>
      <button className='shadow-btnShadow w-16 rounded-xl p-2 active:shadow-none active:border-[0.5px] active:border-slate-400 text-red-900' onClick={()=>{stopTimer()}}>stop</button>
    </div>
  )
}

export default StudyTimer
