// import React from 'react';
import React, { Component } from 'react';
import Profile from "./Profile";

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
  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <Profile users={this.state.users} />
      </div>
    );
  }
}

export default App;