import { GET_ITINERARIES } from './types';
const API = 'http://localhost:5000/cities';

export function getItineraries() {
    return function (dispatch) {
     
      return fetch(API)
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