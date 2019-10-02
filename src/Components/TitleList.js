import React, { Component } from "react";
import TitleCard from "./TitleCard";

class TitleList extends Component {
  render() {
    const posts = [
      { title: "dogs", description: "all about dogs", body: "we all love dogs" },
      { title: "coffee", description: "coffee every day", body: "we all need coffee" }];

    return (
      <div>
        <ul>
          {posts.map(post => <TitleCard postInfo={post} />)}
        </ul>
      </div>
    );
  }
}

export default TitleList;