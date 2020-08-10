// import React from 'react';
import React, { Component } from 'react';
import Profile from "./Profile";
import AddUser from "./AddUser";

// container components with state made by classes
// UI components without state made by functions

// function App() {
//   const users = [
//     { name: "Kimmy", age: 18, id: 1 },
//     { name: "Shane", age: 32, id: 2 },
//     { name: "Sid", age: 30, id: 3 }
//   ]

//   return (
//     <div className="App">
//       <h1>Test React App</h1>
//       <Profile users={users} />
//     </div>
//   );
// }

class App extends Component {
  state = {
    users: [
      { name: "Kimmy", age: 18, id: 1 },
      { name: "Shane", age: 32, id: 2 },
      { name: "Sid", age: 30, id: 3 }
    ]
  }
  addUser = (newUser) => {
    // console.log(newUser)
    newUser.id = Math.random();
    let users = [...this.state.users, newUser];
    this.setState({
      users: users
    })
  }
  deleteUser = (id) => {
    // console.log(id)
    let users = this.state.users.filter(user => {
      return user.id !== id
    })
    this.setState({
      users: users
    })
  }
  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <Profile deleteUser={this.deleteUser} users={this.state.users} />
        <AddUser addUser={this.addUser} />
      </div>
    );
  }
}

export default App;