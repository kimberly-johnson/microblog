import React, { Component } from "react";
import TitleCard from "./TitleCard";

class TitleList extends Component {
  componentDidMount() {
    this.props.getPostsFromAPI();
  }

  renderPost() {
    if (this.props.posts.length) {
      let sorted = this.props.posts.sort((a, b)=> (a.votes < b.votes)? 1 : -1)
      return sorted.map(post => (
        <TitleCard key={post.id} postInfo={post} />
      ));
    } else {
      return <p>loading...</p>;
    }
  }

  render() {
    if (this.props.error) {
      return <h1>Something bad happened. Try again later...</h1>;
    }
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
