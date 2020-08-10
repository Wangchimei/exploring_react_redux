import React from 'react';
import Profile from "./Profile";

function App() {
  const users = [
    { name: "Kimmy", age: 18, id: 1 },
    { name: "Shane", age: 32, id: 2 },
    { name: "Sid", age: 30, id: 3 }
  ]

  return (
    <div className="App">
      <h1>Test React App</h1>
      <Profile users={users} />
    </div>
  );
}

export default App;
