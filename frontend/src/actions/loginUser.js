import { LOG_USER } from './types';

export const loginUser = userData => dispatch => {
    fetch('http://localhost:5000/users/login', {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
            'content-type': 'application/json'
        }
      
    })
        .then(res => res.json())
        .then(user => {console.log(user);return dispatch({
            type: 'LOG_USER',
            payload: user
       })})
}
