//Task 3: Display a List with Keys (5 Points)
//In App.js, create an array of 5 tasks.
//Use the .map() function to display the tasks in an unordered list <ul>.
//Add a unique key for each task.
//Example Output:
//- Task 1  
//- Task 2  
//- Task 3  
//Create TaskForm.jsx in src/components as a functional component.
//**Use useState** to hold the current input value, e.g. const [taskName, setTaskName] = useState('');.

//Task 5: Create a Controlled Form (5 Points)
//Create a TaskForm component.
//Add an input field for entering a task name.
//Use useState to store the input value.
//Add a Submit button that logs the input to the console.


import { useState } from 'react';

function TaskForm() {
    const [taskName, setTaskName] = useState(''); // taskName is the current task name, setTaskName is a function to update the task name
    function handleSubmit(e) {
        e.preventDefault(); // prevent the default behavior of the form
        console.log(taskName); // log the current task name to the console
        setTaskName(''); // clear the input field
    }
    return (
        <div>
            <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
            <button onClick={handleSubmit}>Add Task</button>
        </div>
    );
}