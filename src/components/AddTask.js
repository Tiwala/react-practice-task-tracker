import { useState } from 'react'

// We don't directly work with onAdd
const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    // Gives an alert if task.text is not present
    if(!text) {
      alert('Please add a task')
      return;
    }
    // calls onAdd prop
    // Requires all three entries
    onAdd({ text, day, reminder })
    setText('')
    setDay('')
    setReminder(false);
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        {/* value is whatever the text is, onChange is a react event handler that detects change from input */}
        {/* onChange here uses setText to change the text to the value of the input */}
        <input type='text' placeholder='Add Task'
        value={text} onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Day and Time</label>
        <input type='text' placeholder='Add Day and Time' 
        value={day} onChange={(e) => setDay(e.target.value)}/>
      </div>
      {/* .currentTarget refers to the element that the event listener is attached to */}
      {/* as opposed to .target which is the element that triggered th event */}
      {/* .checked only applies to checkbox input, returns the checked state of a checkbox */}
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input type='checkbox'
        checked={reminder} 
        value={reminder}
        onChange={(e) => setReminder(e.currentTarget.checked)}/>
      </div>

      <input type='submit' value='Save Task' className='btn btn-block'/>
    </form>
  )
}

export default AddTask;
