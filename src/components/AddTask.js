import {useState} from 'react'

const AddTask = ({onAdd}) => {
    const [text,setText] = useState('')
    const [date,setDate] = useState('')
    const [reminder,setReminder] = useState(false)
    const onSubmit = (e)=>{
        e.preventDefault();
        if(!text)
        {
            alert("Please do provide task title");
            return;
        }
        if(!date)
        {
            alert("Please do provide date");
            return;
        }
        onAdd({text,date,reminder})
        setText('')
        setDate('')
        setReminder(false)
    }
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Task Name?" value={text}
                onChange={(e)=>setText(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Date</label>
                <input type="text" placeholder="Date & Time" value={date}
                onChange={(e)=>setDate(e.target.value)}/>
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox" value={reminder}
                checked={reminder}
                onChange={(e)=>setReminder(e.currentTarget.checked)}/>
            </div>
            <input type = "submit" value="Add Task" className="btn btn-block"/> 
        </form>
    )
}

export default AddTask
