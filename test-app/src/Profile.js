import React from 'react';

// "users" (as params in functon) is to destructure the props
// both regular function and  arrow function are okay 
const Profile = ({ users }) => {
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
    return user.age > 20 ? (
      <div className="profile" key={user.id}>
        <div>Name: {user.name}</div>
        <div>Age: {user.age}</div>
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
