/*import axios from 'axios';
import { returnErrors } from './errorActions';
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './types';

//Check token & load user
export const loadUser = () => (dispatch, getState) => {
    //User Loading
    dispatch({ type: USER_LOADING });

    axios.get('http://localhost:5000/users', tokenConfig(getState))
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({ type: AUTH_ERROR })
        })
}

//Setup config /headers
export const tokenConfig = getState => {
    //Fetch the user and get the token
    const token = getState().auth.token;

    //Change Headers
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    //If there is a token, add it to headers
    if (token) {
        config.headers['x-auth-token'] = token;
    }

    return config;
}*/
