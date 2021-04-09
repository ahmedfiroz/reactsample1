import React from "react";
import { Redirect, Route, Switch } from "react-router";


import Home from "./Components/Common/Home"
import Contact from "./Components/Common/Contact"
import About from "./Components/Common/About"
import SignIn from "./Components/SignIn/SignIn"
import Navbar from "./Components/Navbar/Navbar";


const App = () => {
  return (
    <>
    <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/About" component={About} />
        <Route exact path="/SignIn" component={SignIn} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
