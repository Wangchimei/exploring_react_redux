// [Important] functional component cannot use lifecycle hooks
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import img from '../post-it-icon.png';
// "connect" is a function returning higher order component
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    console.log(this.props)
    const { posts } = this.props;
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

const mapStartToProps = (state) => {
  return {
    posts: state.posts
  }
}

// get state from store and pass as props
export default connect(mapStartToProps)(Home);