import Greeting from './components/Greeting';
import UserInfo from './components/UserInfo';
import TaskComponent from './components/TaskComponent';
import './App.css';

const tasks = [
  'Complete the React assignment',
  'Review JSX syntax',
  'Practice component composition',
  'Study React state and props',
  'Build a small React project',
];

function getRandomTask() {
  const randomIndex = Math.floor(Math.random() * tasks.length);
  return tasks[randomIndex];
}

function App() {
  const randomTask = getRandomTask();

  return (
    <div className="app">
      <Greeting />
      <UserInfo />
      <section>
        <h2>Random Task</h2>
        <TaskComponent randomTask={randomTask} />
      </section>
    </div>
  );
}

export default App;
