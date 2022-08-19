// rafc shortcut for react arrow function component
// We don't have to import react into components because it gets imported in App.js
// FaTimes is the X icon
import { FaTimes } from 'react-icons/fa'

// used props.task gotten from Tasks.js, which is referencing tasks from App.js
const Task = ({ task, onDelete, onToggle }) => {
  return (
    // className can be toggled with template literal ternary expression
    // if task.reminder is true, adds the className 'reminder', makes it green
    // it seems we can console.log on component side, in the event listener
    <div className={`task ${task.reminder ?
    'reminder' : ''}`} onDoubleClick={() => 
    onToggle(task.id)}
    >
      <h3>
          {task.text} 
          <FaTimes 
          style={{ color: 'red', 
          cursor: 'pointer' }}
          onClick={() => {
            console.log(task)
            onDelete(task.id)
            }
          } 
          />
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task;

//"We're gonna have to get a delete icon" then we npm i react-icons