  
import { GET_CITIES } from './types';
const API = 'http://localhost:5000/cities';

export function getCities() {
    return function (dispatch) {
     
      return fetch(API)
      .then(
         response => response.json(),
         error => console.log('An error occurred.', error),
     )
      .then((json) => {
         dispatch({
            type: GET_CITIES,
            payload: json
        });
      },
     );
    };
   }

   
/*import { GET_CITIES, CITIES_LOADING } from './types';
import axios from 'axios';

export const getCities = () => dispatch => {
  dispatch({ CITIES_LOADING });
  axios
    .get('http://localhost:5000/cities')
    .then(res => dispatch({
      type: GET_CITIES,
      payload: res.data
    }))
}*/