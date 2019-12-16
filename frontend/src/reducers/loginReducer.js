import { LOG_USER } from '../actions/types';

const initialState = {
    users: [],
};

export default function (state = initialState, action) {

    switch (action.type) {

        case LOG_USER:
            return {token:action.payload.token};
        default:
            return state;
    }
}