import {ADD_TOTAL,REDUCE_TOTAL,RESET_COUNTER} from '../actions/counter-actions'
const initialStateTotal = 0;
export default function(state=initialStateTotal,action){
    switch(action.type){
      case ADD_TOTAL:{
        return state + action.payload;
      }
      case REDUCE_TOTAL:{
        return state + action.payload;
      }
      case RESET_COUNTER:{
        return 0;
      }
      default:
        return state
    }
  }