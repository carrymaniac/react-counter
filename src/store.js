import {createStore} from 'redux'
import rootReducer from './reducers'

let store = createStore(rootReducer,{nums:1,total:0})

export default store;