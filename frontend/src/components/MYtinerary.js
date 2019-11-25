import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getItineraries } from '../actions/getItineraries';
import Itinerary from './Itinerary';
import '../App.css';
import Nav from './nav.js';

const mapStateToProps = (state) => {
  return ({
  itineraries: state.itineraries.itineraries
})
}

const mapDispatchToProps = (dispatch, getState) => {
  console.log("getState.itineraries")
  console.log(getState)
  console.log(getState.match.params.id)
  return {
   getItineraries: () => dispatch(getItineraries(getState.match.params.id))
  };
};

class MYtinerary extends Component {
  componentDidMount(){
    this.props.getItineraries();
  }
  render() {
    const itineraries = Array.from(this.props.itineraries || []);
    const itineraryList = itineraries.map(itinerary => (
      <li key={itinerary._id}>
        <Itinerary itinerary={itinerary}/>
      </li>
    ))
     return (
      <div className="body">
        <Nav />
        <ul className="itinerariesPage-ul">
            {itineraryList}
        </ul>
      </div>
    )
  }
}

MYtinerary.propTypes = {
  getItineraries: PropTypes.func.isRequired,
  itineraries: PropTypes.array.isRequired
}
 
export default connect(mapStateToProps, mapDispatchToProps)(MYtinerary);