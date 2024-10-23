import React, { useEffect, useRef, useState } from 'react'
import NotesShowcase from './NotesShowcase'

const Notes = () => {
const noteInput = useRef()
const [value,setValue] = useState('')
const [allValues,setAllValues] = useState([])


const inputValue = () => {
  if(noteInput.current.value){setValue(noteInput.current.value)}
}
const saveNote = () => {
  if(value.trim() !== ''){
  const updatedValues = [...allValues, value]
  setAllValues(updatedValues)
  localStorage.setItem('notes',JSON.stringify(updatedValues))
  }
}
const saveNoteOnKeyDown = (e) => {
  if (e.key === "Enter"){
    saveNote(e)
  }
}
useEffect(()=>{
  const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
  setAllValues(savedNotes)
},[])


const delNote = (index) => {
  const updatedValues = allValues.filter((_, i) => i !== index);
  setAllValues(updatedValues)
  localStorage.setItem('notes', JSON.stringify(updatedValues))
}
  return (
<section className='md:w-2/3'>
    <div className="bg-gray-300  text-center rounded-2xl p-5 shadow-shadow  items-center flex flex-col gap-2   md:mb-5 md:h-[150px]">
      <h1>Is there anything you want to learn today?</h1>
     
      <form className='w-[100%]'>
      <input type="text" placeholder='Learning subject...' className='rounded-xl px-2 bg-gray-200 shadow-btnShadow h-10 outline-none w-[70%]'  ref={noteInput} onChange={inputValue}/>
      <button type='submit' className='shadow-btnShadow w-16 rounded-xl p-2  active:shadow-none active:border-[0.5px] active:border-slate-400 ml-5' onClick={()=>{saveNote()}}  onKeyDown={saveNoteOnKeyDown}>add</button>
      </form>
    </div>
    {allValues.length > 0 && (<NotesShowcase allValues = {allValues} delNote={delNote}/>)}
    
    </section>
  )
} 

export default Notes
