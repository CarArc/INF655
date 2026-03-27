import { useState } from 'react';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import UserInfo from './components/UserInfo';
import TaskComponent from './components/TaskComponent';
import TaskForm from './components/TaskForm';
import './App.css';

function handleAlert() {
  alert('Your custom message here');
}

const initialTasks = [
  { id: 1, name: 'Complete the React assignment', description: 'Finish midterm' },
  { id: 2, name: 'Review JSX syntax', description: 'Read the docs' },
  { id: 3, name: 'Practice component composition', description: 'Build components' },
  { id: 4, name: 'Study React state and props', description: 'Review state' },
  { id: 5, name: 'Build a small React project', description: 'Like this midterm' },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const randomTask = tasks.length > 0 ? tasks[Math.floor(Math.random() * tasks.length)] : null;

  const handleAddTask = (newTask) => {
    setTasks([...tasks, { id: Date.now(), ...newTask }]);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="app">
      <Greeting username="Alice" />
      <Greeting username="Bob" />
      <Counter />
      <UserInfo handleClick={handleAlert} />
      
      <section>
        <h2>Task List (Filter & Sort)</h2>
        <TaskComponent 
          tasks={tasks} 
          onDelete={handleDeleteTask} 
          randomTask={randomTask ? randomTask.name : ''} 
        />
      </section>
      
      <section>
        <h2>Add a Task</h2>
        <TaskForm onAdd={handleAddTask} />
      </section>
    </div>
  );
}

export default App;
