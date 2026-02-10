import { Component } from 'react';

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Jane Doe',
      profession: 'Software Developer',
      luckyNumber: Math.floor(Math.random() * 100) + 1,
    };
  }

  render() {
    const { name, profession, luckyNumber } = this.state;
    return (
      <div>
        <h2>User Information</h2>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Profession:</strong> {profession}</p>
        <p>Your lucky number is {luckyNumber}.</p>
      </div>
    );
  }
}

export default UserInfo;
