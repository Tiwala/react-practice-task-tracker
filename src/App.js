import { useState } from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

//state gets passed down, actions get passed up

function App() {
  // pair of values: "state variable" in tasks, and a function that updates it in setTasks
  // Argument inside useState() is the initial state
  // Initial declared value of useState is the default state, we modify it with setTasks, and call it with tasks
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 5th at 2:30pm',
            reminder: true
        },
        {
            id: 2,
            text: 'Meeting at School',
            day: 'Feb 6th at 1:30pm',
            reminder: true
        },
        {
            id: 3,
            text: 'Food Shopping',
            day: 'Feb 5th at 2:30pm',
            reminder: false
        }
    ]
  )
  
  // on clicking the add button, toggles useState to show the form
  const [showAddTask, setShowAddTask] = useState(false)

  // functions get called within properties
  // properties are passed down in components
  // those properties are manipulated inside the components, then passed back up


  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
    console.log(newTask)
  }

  // Delete Task
  const deleteTask = (id) => {
    // setTasks is how we deal with our immutable state
    // filter goes through the tasks array, checks if each task has the same id, and returns an array without the task that matched the id
    setTasks(tasks.filter((task) =>
      task.id !== id
      )
    )
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    // if the task is of the specific id, sets the task.reminder to the opposite value
    setTasks(tasks.map((task) => 
      task.id === id ? 
      { ...task, reminder: !task.reminder } : task
      )
    )
  }

  return (
    <div className='container'>
      {/* when you click the button that triggers onAdd, makes it the opposite value */}
      {/* showAdd the prop returns the value of showAddTask */}
      <Header onAdd={() => setShowAddTask(!showAddTask)}
      showAdd={showAddTask}/>
      {/* shorter way of doing ternary if you don't need an else */}
      {/* how it works is if showAddTask is true, shows the AddTask form */}
      {showAddTask && <AddTask onAdd={addTask}/>}
      {/* If tasks.length is 0, say 'no tasks to show' */}
      {
      tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      ) : (
        'No Tasks To Show'
      )}
    </div>
  );
}

export default App;
