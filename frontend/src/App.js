import React from 'react';
import './App.css';
import Nav from './components/nav.js';
import CitiesPage from './components/cities-page.js';
import LogIn from './components/logIn.js';
import CreateAccount from './components/createAccount';
import MYtinerary from './components/MYtinerary';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cities-page" component={CitiesPage} />
          <Route path="/log-in" component={LogIn} />
          <Route path="/mytinerary" component={MYtinerary} />
          <Route path="/create-account" component={CreateAccount} />          
        </Switch>
      </div>
    </Router>
  )}

const Home = () => (
  <div className="body home">
      <Nav />
      <div className="header">
        <h1 className="title">MYtinerary</h1>
        <p>Find your perfect trip,</p>
        <p>designed by insiders</p>
        <p>who know and love their cities.</p>
        <Link to='/cities-page'>
          <a href="#" className="button-cities">START BROWSING</a>
        </Link>
      </div>
      <footer>
        <p class="col copy">Copyright © 2019 - Desarrollado por Sofía Arraiza</p>
      </footer>
  </div>
)

export default App;

