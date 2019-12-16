import React from 'react';
import '../App.css';
import Nav from './nav.js';
import LogInComp from './LogInComp';

function LogIn() {
  return (
    <div className="body">
      <Nav />
      <h1>Log In MYtinerary</h1>
      <LogInComp />
    </div>
  )}

export default LogIn;