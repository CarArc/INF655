import { useMemo } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useAuth } from '../context/useAuth';
import { useUserTasks } from '../hooks/useUserTasks';
import TaskForm from '../components/TaskForm';
import TaskComponent from '../components/TaskComponent';

function pickFeaturedTaskName(taskList) {
  if (taskList.length === 0) return '';
  let sum = 0;
  for (const t of taskList) {
    for (let i = 0; i < t.id.length; i += 1) {
      sum += t.id.charCodeAt(i);
    }
  }
  return taskList[sum % taskList.length].name;
}

export default function TaskDashboard() {
  const { user } = useAuth();
  const { tasks, loading, error, addTask, deleteTask } = useUserTasks(user?.uid);

  const randomTaskName = useMemo(() => pickFeaturedTaskName(tasks), [tasks]);

  const handleAddTask = ({ name, description }) => {
    addTask(name.trim(), description.trim());
  };

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
  };

  async function handleLogout() {
    await signOut(auth);
  }

  return (
    <div className="app">
      <header className="dashboard-header">
        <div className="dashboard-welcome">
          <h1>Dashboard</h1>
          <p className="dashboard-subtitle">
            Welcome back{user?.email ? `, ${user.email}` : ''}. Your tasks sync in real time.
          </p>
        </div>
        <button type="button" className="logout-btn" onClick={handleLogout}>
          Log out
        </button>
      </header>

      {error && (
        <p className="auth-error dashboard-error" role="alert">
          {error.message || 'Could not load tasks. Check Firestore rules and your connection.'}
        </p>
      )}

      {loading && !error && (
        <p className="auth-status" role="status">
          Loading your tasks…
        </p>
      )}

      <section>
        <h2>➕ Add a Task</h2>
        <TaskForm onAdd={handleAddTask} />
      </section>

      <section>
        <h2>Task List (Filter & Sort)</h2>
        <TaskComponent
          tasks={tasks}
          onDelete={handleDeleteTask}
          randomTask={randomTaskName}
        />
      </section>
    </div>
  );
}
