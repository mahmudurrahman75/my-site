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
        <Route path="/myResume">
          <MyResume></MyResume>
        </Route>
        <Route path="/contactMe">
          <ContactMe></ContactMe>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
