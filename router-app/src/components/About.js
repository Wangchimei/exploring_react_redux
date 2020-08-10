import React from 'react';
import Rainbow from '../hoc/Rainbow'

const About = (props) => {
  console.log(props)
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora nobis, distinctio mollitia expedita ea perferendis laudantium eaque accusamus incidunt deserunt dolorum reprehenderit, officiis, accusantium commodi nulla nesciunt at illum pariatur.</p>
    </div>
  )
}

export default Rainbow(About);