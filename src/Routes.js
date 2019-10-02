import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import TitleList from "./Components/TitleList";
import PostForm from "./Components/PostForm";
import PostDetail from "./Components/PostDetail";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() =>  <TitleList />} />
        <Route exact path="/new" render={(rtProps) => <PostForm {...rtProps} /> } />
        <Route exact path="/detail" render={(rtProps) =>  <PostDetail {...rtProps} />} />
      </Switch>
    );
  }
}

export default Routes;