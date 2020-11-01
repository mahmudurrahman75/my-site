import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import MyProject from './components/MyProject/MyProject';
import Blog from './components/Blog/Blog';
import MyResume from './components/MyResume/MyResume';
import ContactMe from './components/ContactMe/ContactMe';
import Test from './components/Test/Test';
import Skill from './components/Skill/Skill';
import Icons from './components/Icons/Icons';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/myProject">
          <MyProject></MyProject>
        </Route>
        <Route path="/blog">
          <Blog></Blog>
        </Route>
        <Route path="/contactMe">
          <ContactMe></ContactMe>
        </Route>
        <Route path="/test">
          <Test></Test>
        </Route>
        <Route path="/icons">
          <Icons></Icons>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
