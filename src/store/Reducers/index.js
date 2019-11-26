import {combineReducers} from 'redux';

import searchResult from './Result';
import chosen from './Chosen';

export default combineReducers({
    searchResult,
    chosen
})