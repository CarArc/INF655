import { Component } from 'react'; // Base class so we can use state and lifecycle in a class component

/**
 * Task 2: Create a Class Component and Use JSX (5 Points)
 * Class-based component that uses JSX and state.
 */
class UserInfo extends Component {
  constructor(props) {
    super(props); // Must call super(props) before using this in a class component
    // Requirement: Define state inside the component to hold user details
    this.state = {
      name: 'Jane Doe',
      profession: 'Software Developer',
      luckyNumber: Math.floor(Math.random() * 100) + 1, // 1–100 so we always show a positive integer
    };
  }

  render() {
    const { name, profession, luckyNumber } = this.state; // Destructure so we can use values directly in JSX
    // Requirement: Use JSX to return a <div> containing user's name and profession
    return (
      <div>
        <h2>User Information</h2>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Profession:</strong> {profession}</p>
        {/* Requirement: Display a random number (e.g., "Your lucky number is 7") */}
        <p>Your lucky number is {luckyNumber}.</p>
      </div>
    );
  }
}

export default UserInfo; // So App can import and render this component
