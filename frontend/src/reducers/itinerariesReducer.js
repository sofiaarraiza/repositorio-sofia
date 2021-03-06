import { GET_ITINERARIES } from '../actions/types';

const initialState = {
    itineraries: [],
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


/*import { GET_ITINERARIES, ITINERARIES_LOADING } from '../actions/types';

const initialState = {
    itineraries: [],
    isLoading: false
};

export default function (state= initialState, action) {
    switch (action.type) {
        case ITINERARIES_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case GET_ITINERARIES:
            return {
                ...state,
                itineraries: action.payload,
                isLoading: false
            };
        default:
            return state;
    }
}*/