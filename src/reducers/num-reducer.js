import {RESET_NUM} from '../actions/counter-actions'
export default function(state=1,action){
    switch(action.type){
        case RESET_NUM:{
            return action.payload;
        }
        default:
            return state
    }
}