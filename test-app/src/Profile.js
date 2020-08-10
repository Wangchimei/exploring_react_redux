import React from 'react';

function Profile({ users }) {
  const userList = users.map(user => {
    return (
      <div className="profile" key={user.id}>
        <div>Name: {user.name}</div>
        <div>Age: {user.age}</div>
      </div>
    )
  })
  return (
    <div className="user-list">
      {userList}
    </div>
  )
}

export default Profile;
