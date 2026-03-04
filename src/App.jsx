/**
 * Task 4: Parent and Child Components Using JSX (5 Points)
 * Requirement: Import Greeting, UserInfo, and TaskComponent; render inside a single <div> (JSX rules).
 */
//**In App.jsx**:
//Define a function handleAlert() inside the App component (or just above it) that calls alert('Your custom message here');.
//Pass this function into UserInfo as a prop: <UserInfo handleClick={handleAlert} />.

import Greeting from './components/Greeting'; // Task 1: functional component with username prop
import Counter from './components/Counter'; // Task 2: useState counter
import UserInfo from './components/UserInfo'; // Task 4: accepts handleClick prop
import TaskComponent from './components/TaskComponent'; // Assignment 1: random task
import TaskForm from './components/TaskForm'; // Task 5: controlled form
import './App.css';

// Define a function handleAlert() inside the App component (or just above it) that calls alert('Your custom message here');.
function handleAlert() {
  alert('Your custom message here');
  // this alert is a string concatenation of the name, profession, and lucky number
  // the "this" keyword is used to access the state of the component, as in "this dude's name, profession, and lucky number". 
}

// Task 3: Create an array of tasks inside the App component
const tasks = [
  'Complete the React assignment',
  'Review JSX syntax',
  'Practice component composition',
  'Study React state and props',
  'Build a small React project',
];

// Task 3: Write a function getRandomTask() that returns a random task from the list
function getRandomTask() {
  const randomIndex = Math.floor(Math.random() * tasks.length); // Random index so each load shows a different task
  return tasks[randomIndex];
}

function App() {
  const randomTask = getRandomTask(); // Call once per render so we pass one task down to TaskComponent

  // Task 4: Render Greeting, UserInfo, and TaskComponent inside a single <div>
  return (
    <div className="app">
      {/* Task 1: Render Greeting twice with different usernames */}
      <Greeting username="Alice" />
      <Greeting username="Bob" />
      {/* Task 2: Counter with useState */}
      <Counter />
      <UserInfo handleClick={handleAlert} />
      {/* Task 3: List of tasks with keys */}
      <section>
        <h2>Tasks</h2>
        <ul>
          {tasks.map((task) => (
            <li key={task}>{task}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Random Task</h2>
        {/* Task 3: Display random task inside <h3> via TaskComponent */}
        <TaskComponent randomTask={randomTask} />
      </section>
      {/* Task 5: Controlled form */}
      <TaskForm />
    </div>
  );
}

export default App; // Default export so main.jsx can mount this as the root component
