import Calender from "./Components/Calender"
import Greeting from "./Components/Greeting"
import Notes from "./Components/Notes"
import NotesShowcase from "./Components/NotesShowcase"
import StudyTimer from "./Components/StudyTimer"



function App() {

  return (
    <div className="flex flex-col gap-10 md:flex-row md:gap-5">
      <div className="flex justify-between gap-5 md:justify-start md:w-[337px] lg:w-[350px]">
      <Greeting/>
      <Calender/>
      </div>
      <Notes/>
      <StudyTimer/>
  
    </div>
  )
}

export default App
