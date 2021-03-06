import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/nav.js';
import CitiesPage from './components/cities-page.js';
import LogIn from './components/logIn.js';
import CreateAccount from './components/createAccount';
import MYtinerary from './components/MYtinerary';

import { Provider } from 'react-redux';
import store from './store';
/*import { loadUser } from './actions/authActions';*/

class App extends Component {
  /*componentDidMount() {
    store.dispatch({loadUser});
  }*/
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/cities-page" component={CitiesPage} />
              <Route path="/log-in" component={LogIn} />
              <Route path="/mytinerary/:id" component={MYtinerary} />
              <Route path="/create-account" component={CreateAccount} />
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}

const Home = () => (
  <div className="body home">
    <Nav />
    <div className="header">
      <h1 className="title">MYtinerary</h1>
      <p>Find your perfect trip,</p>
      <p>designed by insiders</p>
      <p>who know and love their cities.</p>
      <Link to='/cities-page'>
        <a href="#" className="button button-cities">START BROWSING</a>
      </Link>
    </div>
  </div>
)

export default App;

