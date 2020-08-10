import React from 'react';

const Todos = ({ todos, deleteTodo }) => {
  console.log(todos)
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span>{todo.content}</span>
          <button className="btn btn-small right" onClick={() => { deleteTodo(todo.id) }}>Delete</button>
        </div>
      )
    })
  ) : (
      <p className="center">You completed all your todos.</p>
    )
  return (
    <div className="todos collection">
      {todoList}
    </div>
  )
}

export default Todos;
