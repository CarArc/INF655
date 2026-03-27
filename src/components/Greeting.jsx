import { useState } from 'react';

/**
 * Task 1: Create a React Component Using JSX (5 Points)
 * Functional component Greeting that uses JSX.
 */
function Greeting({username}) {
  const [greetingText, setGreetingText] = useState("Hello");

  const handleChangeGreeting = () => {
    setGreetingText(prev => prev === "Hello" ? "Welcome" : "Hello");
  };

  return (
    <div>
      <h1>{greetingText}, {username}!</h1>
      <p style={{ color: '#2d5a87', fontSize: '1.1rem', fontStyle: 'italic' }}>
        Today's date: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
      </p>
      <button onClick={handleChangeGreeting}>Change Greeting</button>
    </div>
  );
}

export default Greeting; // So App can import and render this component
