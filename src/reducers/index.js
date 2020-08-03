import {combineReducers} from 'redux';
import totalReducer from './total-reducer';
import numsReducer from './num-reducer';

const allReducer = {
    // 目前counters数量
    nums: numsReducer,
    // 目前总和
    total: totalReducer
}

const rootReducer = combineReducers(allReducer);

export default rootReducer