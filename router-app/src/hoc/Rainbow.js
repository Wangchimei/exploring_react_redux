import React from 'react';

const Rainbow = (WrappedComponent) => {
  console.log(WrappedComponent)
  const colors = ['red', 'orange', 'pink', 'green', 'blue', 'yellow'];
  const randomColor = colors[Math.floor(Math.random() * 5)];
  const className = randomColor + "-text";

  return (props) => {
    console.log(props)
    return (
      <div className={className}>
        {/* passing props to the pointed route */}
        <WrappedComponent {...props} />
      </div>
    )
  }
}

export default Rainbow;