import React from 'react';
import CitiesList from './CitiesList';
import Nav from './nav.js';
import '../App.css';

function CitiesPage() {
  return (
    <div className="body cities">
      <Nav />
      <h2>Search Itineraries by City</h2>
      {/* header */}
      <CitiesList />
      {/* footer */}

    </div>
)}

export default CitiesPage;
