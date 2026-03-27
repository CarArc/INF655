import { Component } from 'react'; // Base class so we can use state and lifecycle in a class component

/**
 * Task 2: Create a Class Component and Use JSX (5 Points)
 * Class-based component that uses JSX and state.
 * **In UserInfo.jsx**:
//Update the class component to expect a handleClick prop (via this.props.handleClick).
//Add a button below the user details, e.g. <button onClick={this.props.handleClick}>Show Alert</button>.
//Optionally update default state values to match the example (e.g., John Doe, Developer), while keeping the overall structure.
 */





class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'John Doe',
      profession: 'Developer',
      luckyNumber: Math.floor(Math.random() * 100) + 1,
    };
  }

  generateLuckyNumber = () => {
    this.setState({ luckyNumber: Math.floor(Math.random() * 100) + 1 });
  }

  render() {
    const { name, profession, luckyNumber } = this.state;
    return (
      <div>
        <h2>User Information</h2>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Profession:</strong> {profession}</p>
        <p>Your lucky number is: {luckyNumber}</p>
        <button onClick={this.generateLuckyNumber}>Generate New Lucky Number</button>
        <br /><br />
        <button onClick={this.props.handleClick}>Show Alert</button>
      </div>
    );
  }
}

export default UserInfo; // So App can import and render this component
