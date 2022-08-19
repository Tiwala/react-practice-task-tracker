import Task from './Task'

// We don't want the tasks to be separate from the component
// We want them to be part of our state
// ({tasks}) is the deconstructed form of props.tasks
const Tasks = ({ tasks, onDelete, onToggle }) => {
    // tasks variable is used in the return function
    // instead of being outside of our component, it's now part of our state
    // If we want to change any part of our state, we use setTasks

    // We're not gonna wanna have our tasks in the Tasks component, bc we're gonna wanna access these from other components
    // We want to put it in our App.js to make it our global state, then pass it down as props

    return (
        // You can't do something like tasks.push() bc state is immutable
        // It's not something you can directly change, you recreate it and send it down, i.e. one way data
        // if you wanna change it...
        // setTasks([...tasks, {}])
        <>
            {/* everything in tasks array gets made into 'task', we can now call it in Task.js as a prop */}
            {tasks.map((task) => (
            // replaced h3 with Task component
                <Task key={task.id} 
                task={task} 
                onDelete={onDelete} 
                onToggle={onToggle}
                />
            ))}
        </>
    )
}

export default Tasks;