import { GET_ITINERARIES, ITINERARIES_LOADING } from './types';

export function getItineraries( id ) {
    return function (dispatch) {
      dispatch({ type: ITINERARIES_LOADING }); 
      return fetch(`http://localhost:5000/cities/${id}`)
      .then(
         response => response.json(),
         error => console.log('An error occurred.', error),
     )
      .then((json) => {
         dispatch({
            type: GET_ITINERARIES,
            payload: json
        });
      },
     );
    };
   }

  /*import { GET_ITINERARIES, ITINERARIES_LOADING, ADD_ITINERARY, DELETE_ITINERARY } from './types';
import axios from 'axios';

export const getItineraries = id = dispatch => {
  dispatch({ ITINERARIES_LOADING });
  axios
    .get(`http://localhost:5000/cities/${id}`)
    .then(res => dispatch({
      type: GET_ITINERARIES,
      payload: res.data
    }))
}*/
