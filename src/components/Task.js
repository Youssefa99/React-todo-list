import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      <h3 key={task.id}>{task.text}<FaTimes onClick={() => onDelete(task.id)}></FaTimes></h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task
