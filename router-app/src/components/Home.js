// import React from 'react';
// const Home = () => {
//   return (
//     <div className="container">
//       <h4 className="center">Home</h4>
//       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora nobis, distinctio mollitia expedita ea perferendis laudantium eaque accusamus incidunt deserunt dolorum reprehenderit, officiis, accusantium commodi nulla nesciunt at illum pariatur.</p>
//     </div>
//   )
// }

// [Important] functional component cannot use lifecycle hooks
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import img from '../post-it-icon.png';

class Home extends Component {
  state = {
    posts: []
  }
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      this.setState({
        posts: res.data.slice(0, 10)
      })
    })
  }
  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src={img} alt="Post-it-img" />
            <div className="card-content">
              <Link to={"/" + post.id}>
                <span className="card-title">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
        <div className="center">No posts yet</div>
      )
    return (
      <div className="home container">
        <h4 className="center">Posts</h4>
        {postList}
      </div>
    )
  }
}

export default Home;