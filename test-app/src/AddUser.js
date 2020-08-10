import React, { Component } from 'react';

class AddUser extends Component {
  state = {
    name: null,
    age: null
  }
  handleChange = (e) => {
    this.setState({
      // idea similar to users['name']
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state)
    this.props.addUser(this.state);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" onChange={this.handleChange} />
          <label htmlFor="age">Age</label>
          <input type="text" id="age" onChange={this.handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default AddUser;
