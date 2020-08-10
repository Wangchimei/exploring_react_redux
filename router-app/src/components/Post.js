import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
  state = {
    post: null
  }
  // find out what id
  componentDidMount() {
    // console.log(this.props)
    let id = this.props.match.params.id
    this.setState({ id })
    axios.get('https://jsonplaceholder.typicode.com/posts/' + id).then(res => {
      this.setState({ post: res.data })
    })
  }
  render() {
    const post = this.state.post ? (
      <div className="post">
        <h4 className="center blue-text">{this.state.post.title}</h4>
        <p className="flow-text">{this.state.post.body}</p>
      </div>
    ) : (
        <div className="center">
          Loading ...
        </div>
      )
    return (
      <div className="container">
        {post}
      </div>
    )
  }
}

export default Post;