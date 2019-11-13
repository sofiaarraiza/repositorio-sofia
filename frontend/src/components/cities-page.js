import React from 'react';
import CitiesList from './CitiesList';
import Nav from './nav.js';
import '../App.css';

function citiesPage() {
  return (
    <div className="body">
      <Nav />
      {/* header */}
      <CitiesList />
      {/* footer */}

    </div>
)}

export default citiesPage;

