import React from 'react';
import './App.css';
import ArrowIcon from './media/circled-right.png';
import HomeIcon from './media/home-icon.png';
import Nav from './components/nav.js';
import CitiesPage from './components/cities-page.js';
import LogIn from './components/logIn.js';
import CreateAccount from './components/createAccount';
import MYtinerary from './components/MYtinerary';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

/*import Button from './components/Button.js';
import Account from './components/Account.js';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';*/

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
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
  <div className="body">
      <h3>Find your perfect trip, designed by insiders
        who know and love their cities.
      </h3>
      <div>
        <h2 className="texto-naranja">Start browsing</h2>
        <Link to='/cities-page'>
        <a href="#"><img src={ArrowIcon} alt="Arrow Icon" className="icono-flecha"/></a></Link>
      </div>
      <div>
        <h3>Want to build your own MYtinerary?</h3>
        <Link to='/log-in'>
          <a href="#" className="link-naranja link-izquierda">Log in</a>
        </Link>
        <Link to='/create-account'>
          <a href="#" className="link-naranja link-derecha">Create Account</a>
        </Link>
        <div className="footer">
        <Link to='/'>
          <a href="#"><img src={HomeIcon} alt="Home Icon" className="icono-home"/></a>
          </Link>
        </div>
      </div>
  </div>
)

export default App;
