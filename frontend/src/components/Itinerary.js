import React, { Component } from 'react';
import Activities from './Activities';

class Itinerary extends Component {
  render() {
    const itinerary = this.props.itinerary
    const hashtagsList = itinerary.hashtags.map(hashtag => (
      <p>#{hashtag}</p>
    ))
    return (
      <div key={itinerary._id} className="itinerary-container">
        <h3>{itinerary.title}</h3>
        <img src={itinerary.profile} alt="hello" className="itinerary-profile"/>
        <p><b>{itinerary.rating}</b> Likes</p>
        <p><b>{itinerary.hours}</b> Hours</p>
        <p>$$ <b>{itinerary.price}</b></p>
        <div>Hashtags: {hashtagsList}</div>
        <Activities activities={itinerary.activities}/>
       </div>
    );
  }
}

export default Itinerary;
