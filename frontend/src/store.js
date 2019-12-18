import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import env from './env';


const initialState = {};

const middleware = [thunk];

let  store ;
if ( env.useDevTools){
    
    store =  createStore(
        rootReducer,
        initialState,
        compose(
        applyMiddleware(...middleware),
                window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
}
else {        
    store =  createStore(
        rootReducer,
        initialState,
        compose(
        applyMiddleware(...middleware)
        )
    );
}

export default store;