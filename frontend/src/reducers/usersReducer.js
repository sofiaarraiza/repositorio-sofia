import { CREATE_USER } from '../actions/types';

const initialState = {
    users: [],
};

export default function (state= initialState, action) {
    switch (action.type) {
        case CREATE_USER:
            console.log("CREATE_USER")
            return {
                ...state,
                users: action.payload
            };
        default:
            return state;
    }
}