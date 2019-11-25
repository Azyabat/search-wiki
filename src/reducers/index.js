import {combineReducers} from 'redux';

import searchResult from './result';
import chosen from './chosen';

export default combineReducers({
    searchResult,
    chosen
})