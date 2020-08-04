import {RESET_COUNTER} from '../actions/counter-actions'
export default function(state=1,action){
    switch(action.type){
        case RESET_COUNTER:{
            return action.payload;
        }
        default:
            return state
    }
}