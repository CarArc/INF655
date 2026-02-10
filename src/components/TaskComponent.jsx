/**
 * Task 3: Dynamic Content - Child component that displays a random task.
 * Requirement: Display a random task inside a <h3> using JSX.
 */
function TaskComponent({ randomTask }) { // Destructure prop so we render whatever task App passed in
  return <h3>{randomTask}</h3>; // Single expression so we can omit parentheses
}

export default TaskComponent; // So App can import and render this component
