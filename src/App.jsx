import { Route, Routes } from 'react-router-dom';
import { auth } from './firebase';
import FirebaseConfigMissing from './components/FirebaseConfigMissing';
import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import TaskDashboard from './pages/TaskDashboard';
import './App.css';

function App() {
  if (!auth) {
    return <FirebaseConfigMissing />;
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route
        path="/tasks"
        element={
          <ProtectedRoute>
            <TaskDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
