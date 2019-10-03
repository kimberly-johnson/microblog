import React, { Component } from "react";
import TitleCard from "./TitleCard";

class TitleList extends Component {
  componentDidMount() {
    this.props.getPostsFromAPI();
  }

  renderPost() {
    if (this.props.posts.length) {
      return this.props.posts.map(post => (
        <TitleCard key={post.id} postInfo={post} />
      ));
    } else {
      return <p>loading...</p>;
    }
  }

  render() {
    return (
      <div className="container mx-0">
        <div className="row">
          {this.renderPost()}
        </div>
      </div>
    );
  }
}

export default TitleList;
