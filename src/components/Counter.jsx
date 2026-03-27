//Create Counter.jsx in src/components as a functional component.
//Import useState from react and initialize local state, e.g. const [count, setCount] = useState(0);.
//  Render:
// A p or div showing Count: {count}.
// A button labeled "Click Me" that calls setCount(count + 1) on click.
// Import and render Counter in App.jsx (e.g., between the greetings and the user info section).

import { useState } from 'react';
// Create Counter.jsx in src/components as a functional component.

function Counter() {
    const [count, setCount] = useState(0); // useState is a hook that returns an array with the current state value and a function to update it
 
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
        </div>
    );
}

export default Counter;