/**
 * Task 4: Parent and Child Components Using JSX (5 Points)
 * Requirement: Import Greeting, UserInfo, and TaskComponent; render inside a single <div> (JSX rules).
 */
import Greeting from './components/Greeting'; // Task 1: functional component with h1, styled p, and date expression
import UserInfo from './components/UserInfo'; // Task 2: class component with state (name, profession, lucky number)
import TaskComponent from './components/TaskComponent'; // Task 3: displays the random task in an h3
import './App.css'; // Layout and spacing for the app container and sections

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
    <div className="app"> {/* Single root element—JSX requires one parent */}
      <Greeting />
      <UserInfo />
      <section>
        <h2>Random Task</h2>
        {/* Task 3: Display random task inside <h3> via TaskComponent */}
        <TaskComponent randomTask={randomTask} /> {/* Pass the chosen task as a prop so child can display it */}
      </section>
    </div>
  );
}

export default App; // Default export so main.jsx can mount this as the root component
