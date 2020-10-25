import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Post from "./components/Post";

class App extends Component {
  render() {
    // Router will add props to the links by default, but not Navbar, unless using "withRouter"
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          {/* switch tag will only match the first one */}
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/:id" component={Post}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
