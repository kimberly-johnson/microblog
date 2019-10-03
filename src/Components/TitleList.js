import React, { Component } from "react";
import TitleCard from "./TitleCard";

class TitleList extends Component {
  componentDidMount(){
    this.props.getPostsFromAPI();
  }
  
  renderPost() {
    console.log("this.props", this.props);
    if (this.props.posts.length) {
      return(
      this.props.posts.map(post => <TitleCard key={post.id} postInfo={post} />))
    } else {
      return <p>loading...</p>
    }
  }


  render() {
    return (
      <div>
        <ul>
          {this.renderPost()}
        </ul>
      </div>
    );
  }
}


export default TitleList;