import {combineReducers} from 'redux';
import movies from './movie-reducer.js'
import users from './user-reducer.js';

const allReducers = combineReducers({
    movies: movies,
    users: users
});

export default allReducers
