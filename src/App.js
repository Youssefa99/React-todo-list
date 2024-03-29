import Header from './components/Header'
import './index.css';
import Tasks from './components/Tasks'
import { useState, useEffect } from 'react'
import AddTask from './components/AddTask'

function App() {
const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async() => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    
    getTasks()
  }, [])

  const fetchTasks = async() => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    console.log(data)

    return data
  } 

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`,
    {
      method: `DELETE`
    })

    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    


      setTasks(tasks.map((task) => task.id === id ?
      {...task, reminder: !task.reminder} : task  ))
  }

  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks',
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()

    setTasks([...tasks, data])
  
  }

  return (
    <div className="container">
    <Header onAdd={() => setShowAddTask(!showAddTask)}></Header>
    { showAddTask?<AddTask onAdd={addTask}></AddTask>
    : <></>}
    <Tasks tasks={tasks} onDelete={deleteTask}
    onToggle={toggleReminder}></Tasks>
    </div>
  );
}

export default App;
