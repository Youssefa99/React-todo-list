import {useState} from 'react'



const AddTask = ({onAdd}) => {

const [text, setText] = useState('')
const [day, setDay] = useState('')
const [reminder, setReminder] = useState(false)

const onSubmit = (e) => {
  e.preventDefault()

  if(!text){
    alert('add text')
    return
  }

  onAdd({ text, day, reminder})

  setText('')
  setDay('')
  setReminder(false)
}

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className="form-control">
          <label>Task</label>
          <input type='text'
           placeholder='Add task'
           value={text}
           onChange={(e) => setText(e.target.value)}></input>
        </div>
        <div className="form-control">
          <label>Date</label>
          <input type='text' placeholder='Add Date'
          value={day}
          onChange={(e) => setDay(e.target.value)}></input>
        </div>
        <div className="form-control">
          <label>Set Reminder</label>
          <input type='checkbox'
          value={reminder}
           onChange={(e) => setReminder(e.currentTarget.checked)}></input>
        </div>
        <input type='submit' value='save task'></input>
    </form>
  )
}

export default AddTask
