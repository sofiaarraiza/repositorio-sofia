import { GET_CITIES } from '../actions/types';

const initialState = {
    cities: [],
};

export default function (state= initialState, action) {
    switch (action.type) {
        case GET_CITIES:
            console.log("GET_CITIES")
            return {
                ...state,
                cities: action.payload
            };
        default:
            return state;
    }
}

/*import { GET_CITIES, CITIES_LOADING } from '../actions/types';

const initialState = {
    cities: [],
    isLoading: false
};

export default function (state= initialState, action) {
    switch (action.type) {
        case CITIES_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case GET_CITIES:
            return {
                ...state,
                cities: action.payload,
                isLoading: false
            };
        default:
            return state;
    }
}*/