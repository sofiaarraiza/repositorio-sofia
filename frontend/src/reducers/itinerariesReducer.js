import { GET_ITINERARIES } from '../actions/types';

const initialState = {
    cities: [],
};

export default function (state= initialState, action) {
    switch (action.type) {
        case GET_ITINERARIES:
            console.log("GET_ITINERARIES")
            return {
                ...state,
                itineraries: action.payload
            };
        default:
            return state;
    }
}