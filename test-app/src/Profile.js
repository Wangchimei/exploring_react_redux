import React from 'react';

// "users" (as params in functon) is to destructure the props
// both regular function and  arrow function are okay 
const Profile = ({ users, deleteUser }) => {
  // const userList = users.map(user => {
  //   if (user.age > 20) {
  //     return (
  //       <div className="profile" key={user.id}>
  //         <div>Name: {user.name}</div>
  //         <div>Age: {user.age}</div>
  //       </div>
  //     )
  //   } else {
  //     return null
  //   }
  // })
  const userList = users.map(user => {
    // condition ? (true) : (false)
    // if using "deleteUser(user.id)", then this function will be evoked automatically. To overcome this, surround it with an anonymous function "() => {deleteUser(user.id)}"
    return user.age > 20 ? (
      <div className="profile" key={user.id}>
        <div>Name: {user.name}</div>
        <div>Age: {user.age}</div>
        <button onClick={() => { deleteUser(user.id) }}>Delete</button>
      </div>
    ) : null
  })
  return (
    <div className="user-list">
      {userList}
    </div>
  )
}

export default Profile;
