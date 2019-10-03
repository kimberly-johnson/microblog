import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import TitleListContainer from "./Containers/TitleListContainer";
import FormContainer from "./Containers/FormContainer";
import PostDetailContainer from "./Containers/PostDetailContainer";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() =>  <TitleListContainer />} />
        <Route exact path="/new" render={(rtProps) => <FormContainer {...rtProps} /> } />
        <Route exact path="/:id" render={(rtProps) =>  <PostDetailContainer {...rtProps} />} />
      </Switch>
    );
  }
}

export default Routes;