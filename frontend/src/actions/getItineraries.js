import { GET_ITINERARIES } from './types';
//const API = `http://localhost:5000/itinerary/${id}`;
// const API = `http://localhost:5000/itinerary/123`;

export function getItineraries( id ) {
    return function (dispatch) {
     
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