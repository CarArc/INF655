import { useState } from 'react';

/**
 * Task 3 & 5: Expand Task List with Dynamic Filtering, Sorting, and Deleting
 */
function TaskComponent({ tasks, onDelete, randomTask }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSorted, setIsSorted] = useState(false);

  // Filter tasks based on lowercase search term matching task name
  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort tasks alphabetically by name if isSorted is true
  const displayedTasks = isSorted
    ? [...filteredTasks].sort((a, b) => a.name.localeCompare(b.name))
    : filteredTasks;

  const handleDeleteClick = (task) => {
    // Task 5: Confirmation prompt before deleting
    if (window.confirm(`Are you sure you want to delete "${task.name}"?`)) {
      onDelete(task.id);
    }
  };

  return (
    <div>
      {/* Keeping randomTask display from previous assignment */}
      {randomTask && <h3 style={{ color: '#64748b', fontWeight: '500' }}>Random Task: {randomTask}</h3>}

      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search Tasks"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ flex: 1, margin: 0 }}
        />
        <button onClick={() => setIsSorted(!isSorted)} style={{ margin: 0, whiteSpace: 'nowrap' }}>
          {isSorted ? '✖️ Unsort' : '🔝 Sort by Name'}
        </button>
      </div>

      <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
        {displayedTasks.map((task) => (
          <li key={task.id} style={{
            padding: '16px',
            background: '#f8fafc',
            borderRadius: '8px',
            marginBottom: '12px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            border: '1px solid #e2e8f0',
            transition: 'background 0.2s ease'
          }}>
            <div>
              <strong style={{ display: 'block', color: '#0f172a', marginBottom: '4px', fontSize: '1.05rem' }}>{task.name}</strong>
              <span style={{ fontSize: '0.9rem', color: '#64748b' }}>{task.description}</span>
            </div>
            <button
              onClick={() => handleDeleteClick(task)}
              className="delete-btn"
            >
              Delete
            </button>
          </li>
        ))}
        {displayedTasks.length === 0 && (
          <li style={{ textAlign: 'center', padding: '30px', color: '#94a3b8', background: '#f8fafc', borderRadius: '8px', border: '1px dashed #cbd5e1' }}>
            No tasks found matching your search.
          </li>
        )}
      </ul>
    </div>
  );
}

export default TaskComponent;
