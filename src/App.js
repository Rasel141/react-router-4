import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Test from "./components/Test";

import Login from './components/Login'
import Logout from './components/Logout'

import Nav from './components/Nav'

import PrivateRoute from './PrivateRoute'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="container">
            <Nav />
            <Switch>
              <Route
                path="/"
                render={() => {
                  return <Home name="Home" />;
                }}
                exact
              />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <PrivateRoute path="/posts/:postId" component={Test} />
              <Route path='/login' component={Login} />
              <Route path='/logout' component={Logout} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
