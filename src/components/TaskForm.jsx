import { useState } from 'react';

/**
 * Task 4: Create a Task Management Form with State and Validation
 */
function TaskForm({ onAdd }) {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        
        // Task 4: Form validation to ensure task name and description are not empty
        if (!taskName.trim() || !description.trim()) {
            setError('Please enter both a task name and a description.');
            return;
        }

        setError(''); // Clear error
        onAdd({ name: taskName, description }); // Add task to the parent list
        setTaskName(''); // Clear form inputs
        setDescription('');
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px' }}>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <input 
                type="text" 
                placeholder="Enter Task Name"
                value={taskName} 
                onChange={(e) => setTaskName(e.target.value)} 
                style={{ marginBottom: '10px' }}
            />
            <textarea 
                placeholder="Enter Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{ marginBottom: '10px' }}
            />
            <button type="submit">Add Task</button>
        </form>
    );
}

export default TaskForm;