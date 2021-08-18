import {useState} from 'react'
import Tasks from './components/Tasks.js'
import Header from './components/Header.js'
import AddTask from './components/AddTask.js'
function App() {
  const [tasks,setTask] = useState([
    {
        id:1,
        text:"Wanna do something",
        reminder:true,
        date:"18th August"
    },
    {
        id:2,
        text:"Wanna go out",
        reminder:false,
        date:"19th August"
    },
    {
      id:3,
      text:"Should read ",
      reminder:true,
      date:"18th August"
    },
    {
      id:4,
      text:"Watch a movie",
      reminder:false,
      date:"19th August"
    }
])

const addTask = (task)=>{
  const id = Math.floor(Math.random()*10000)+1
  const newTask = {id,...task}
  setTask([...tasks,newTask])
}

const deleteTask = (id)=>{
  setTask(tasks.filter((task)=>task.id!==id))
}

const toggleReminder = (id)=>{
  setTask(tasks.map((task)=>task.id===id
  ?{...task,reminder:!task.reminder}
  :task))
}
  return (
    <div className="container">
      <Header title = "Task Tracker" />
      <AddTask onAdd={addTask}/>
      {tasks.length>0
      ?<Tasks 
            tasks={tasks} 
            onDelete={deleteTask}
            onToggle={toggleReminder}
        />
      :'Everything is done good going !!!'}
    </div>
  );
}

export default App;
