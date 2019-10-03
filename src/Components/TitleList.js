import React, { Component } from "react";
import TitleCard from "./TitleCard";

class TitleList extends Component {
  componentDidMount(){
    this.props.getPostsFromAPI();
  }
  
  render() {
    return (
      <div>
        <ul>
          {this.props.posts.map(post => <TitleCard key={post.id} postInfo={post} />)}
        </ul>
      </div>
    );
  }
}


export default TitleList;