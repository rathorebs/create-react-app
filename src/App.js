import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import * as My from './grid/grid.js';

import './App.css';

const Home = () => (
  <My.Page h1="Home is where...">
    <p>Home is where your heart is</p>
  </My.Page>
)

const About = () => (
  <My.Page h1="About to hit...">
    <p>About to hit the floor</p>
  </My.Page>
)

const Footer = () => (
  <footer>
    Copyright 2017 &copy;
  </footer>
)

const App = () => (
  <Router>
    <div className="wrapper">
      <My.Row>
        <header>
          <img alt="Logo of..." src="http://www.esajuhana.com/img/logoalt.png" style={{'width': '2.5rem'}} />
        </header>
        <My.Nav>
          <My.Row>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </My.Row>
        </My.Nav>
        <My.Search />
      </My.Row>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
      <My.Row>
        <Footer />
      </My.Row>
    </div>
  </Router>
)

export default App