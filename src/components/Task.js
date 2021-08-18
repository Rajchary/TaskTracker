import React from 'react'
import {FaTimes,FaBell,FaBellSlash} from 'react-icons/fa'
const Task = ({task,onDelete,onToggle}) => {
    const isReminder = task.reminder
    return (
        <div className = {`task ${task.reminder?'reminder':''}`} onDoubleClick={()=>onToggle(task.id)}>
            <h3>{task.text} <FaTimes style={{color:'red',cursor:'pointer'}} onClick = {()=>onDelete(task.id)}/></h3>
            <p>{isReminder?<FaBell style={{color:'steelblue'}}/>:
            <FaBellSlash style={{color:'grey'}}/>} {task.date}</p>
        </div>
    )
}

export default Task
