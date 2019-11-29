import { combineReducers } from 'redux';
import citiesReducer from './citiesReducer';
import itinerariesReducer from './itinerariesReducer'
import usersReducer from './usersReducer';
export default combineReducers({
    cities: citiesReducer,
    itineraries: itinerariesReducer,
    users: usersReducer
})