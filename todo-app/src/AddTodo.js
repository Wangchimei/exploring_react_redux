import React, { Component } from 'react';

class AddTodo extends Component {
  state = {
    id: null,
    content: null
  }
  handleChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state)
    // this.setState({ content: "" })
    e.target.reset()
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add new todo:</label>
          <input onChange={this.handleChange} type="text" />
        </form>
      </div>
    );
  }
}

export default AddTodo;
