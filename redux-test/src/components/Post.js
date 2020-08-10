import React, { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component {
  render() {
    const post = this.props.post ? (
      <div className="post">
        <h4 className="center blue-text">{this.props.post.title}</h4>
        <p className="flow-text">{this.props.post.body}</p>
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

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id;
  return {
    post: state.posts.find(post => post.id === id)
  }
}
export default connect(mapStateToProps)(Post);