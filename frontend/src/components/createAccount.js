import React from 'react';
import '../App.css';
import Nav from './nav.js';
import CreateAccountComp from './CreateAccountComp';

function createAccountPage() {
  return (
    <div className="body account">
      <Nav />
      <h2>Create an Account</h2>
      <CreateAccountComp />
    </div>
  )}

export default createAccountPage;