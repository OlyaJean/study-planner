import React, { useEffect, useRef, useState } from 'react'

const NotesShowcase = ({allValues,delNote}) => {
 
    return (
    <div className="bg-gray-300 rounded-2xl p-5 shadow-shadow flex  gap-2 flex-col mt-10 relative lg:ml-5">
    <h1 className='w-[100%] text-center'>My Studies</h1>
     {allValues.map((value,index) => (<div key={index} className='w-[100%] flex justify-center items-center'><p className=' bg-gray-200 p-2 w-[70%] h-16 shadow-btnShadow rounded-xl overflow-y-auto' >{value}</p><button className='shadow-btnShadow w-16  h-12 rounded-xl p-2 ml-5 active:shadow-none active:border-[0.5px] active:border-slate-400' onClick={()=>{delNote(index)}}>done</button> </div>))}


    </div>
  )
}

export default NotesShowcase
