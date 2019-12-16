import { CREATE_USER } from './types';
// import axios from 'axios';
// import setAuthToken from 'c:/Users/me/Documents/Lucas/mytinerary-project-back/client/src/components/setAuthToken';

export const createUser = newUser => dispatch => {
    fetch('http://localhost:5000/users', {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
            'content-type': 'application/json'
        }
      
    })
        .then(res => res.json())
        .then(user => dispatch({
            type: CREATE_USER,
            payload: user
        }))
}




    // axios.post('http://localhost:5000/users', userData)
    // .then(res => {
    //     const {token} = res.data;
    //     setAuthToken(token);
    //     const decoded = jwt_decode(token);
    //     dispatch(setCurrentUser(decoded.userName));
    // })
    // .catch(err => {
    //     dispatch({
    //         ty
    //     })
    // })    