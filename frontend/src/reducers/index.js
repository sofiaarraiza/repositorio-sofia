import { combineReducers } from 'redux';
import citiesReducer from './citiesReducer';
import itinerariesReducer from './itinerariesReducer'
import usersReducer from './usersReducer';
import loginReducer from './loginReducer';

export default combineReducers({
    cities: citiesReducer,
    itineraries: itinerariesReducer,
    users: usersReducer,
    login: loginReducer
})