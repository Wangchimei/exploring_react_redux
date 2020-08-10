import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "Buy Milk" },
      { id: 2, content: "Learn React" }
    ]
  }
  addTodo = (todo) => {
    // console.log(todo)
    todo.id = Math.random()
    const todos = [...this.state.todos, todo]
    this.setState({ todos })
  }
  deleteTodo = (id) => {
    // console.log(id)
    const todos = this.state.todos.filter(todo => todo.id !== id)
    this.setState({ todos })
  }
  render() {
    return (
      <div className="App container">
        <h1 className="center blue-text">Todos</h1>
        <Todos deleteTodo={this.deleteTodo} todos={this.state.todos} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
