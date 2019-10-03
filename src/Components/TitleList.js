import React, { Component } from "react";
import TitleCard from "./TitleCard";

class TitleList extends Component {

  componentDidMount(){
    this.props.getPostsFromAPI();
  }
  
  
  render() {
    console.log("posts is in titlelist", this.props.posts);
    return (
      <div>
        <ul>
          {this.props.posts.map(post => <TitleCard postInfo={post} />)}
        </ul>
      </div>
    );
  }
}


export default TitleList;