import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../actions";
class PostList extends Component {
  componentDidMount() {
    this.props.fetchPost();
  }

  renderedList() {
    return this.props.posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user"></i>
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return <div className="ui relaxed divided list">{this.renderedList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, { fetchPost })(PostList);
