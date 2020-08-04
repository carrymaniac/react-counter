export const ADD_TOTAL = "ADD_TOTAL";
export const REDUCE_TOTAL = "REDUCE_TOTAL";
export const RESET_COUNTER = "RESET_COUNTER";

export function clickIncrease(){
    return {
      type:ADD_TOTAL,
      payload: 1
    }
}
export function clickDecrease(){
    return {
      type:REDUCE_TOTAL,
      payload: -1
    }
}
export function clickReset(num){
    return {
      type:RESET_COUNTER,
      payload: num
    }
}