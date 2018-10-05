///Imports all the JS files and creates a store object => <ConfigureStore> that contains all variables and properties
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';



//Export the ConfigureStore object out to use the js files
export const ConfigureStore = () => {
    const store = createStore(
combineReducers({
        dishes: Dishes,
        comments: Comments,
        promotions: Promotions,
        leaders: Leaders
    }),
    applyMiddleware(thunk, logger),
    );

    return store;
};
