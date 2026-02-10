/**
 * Task 1: Create a React Component Using JSX (5 Points)
 * Functional component Greeting that uses JSX.
 */
function Greeting() {
  return (
    <div> {/* Wrapper div so we return a single JSX element */}
      {/* Requirement: Use JSX to return an <h1> with a greeting message */}
      <h1>Hello, Welcome to React!</h1>
      {/* Requirement: Include a <p> with inline style applied using JSX */}
      <p style={{ color: '#2d5a87', fontSize: '1.1rem', fontStyle: 'italic' }}> {/* Inline styles in React are an object; keys are camelCase */}
        {/* Requirement: Use JavaScript expression inside JSX (e.g., current date) */}
        Today&apos;s date is {new Date().toLocaleDateString()}. {/* Curly braces run JS; toLocaleDateString() gives readable date for current locale */}
      </p>
    </div>
  );
}

export default Greeting; // So App can import and render this component
