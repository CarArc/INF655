import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../context/useAuth';

export default function HomePage() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="auth-status" role="status">
        Loading…
      </div>
    );
  }

  if (user) {
    return <Navigate to="/tasks" replace />;
  }

  return (
    <div className="home-page">
      <h1>Task Manager</h1>
      <p className="home-lead">Sign in to manage your tasks with Firebase.</p>
      <nav className="home-nav">
        <Link to="/login" className="home-link">
          Log in
        </Link>
        <Link to="/signup" className="home-link home-link-secondary">
          Sign up
        </Link>
      </nav>
    </div>
  );
}
