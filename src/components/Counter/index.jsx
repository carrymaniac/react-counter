import React from 'react'
import {clickIncrease,clickDecrease} from '../../actions/counter-actions'


class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            num: 0,
            fatherNum: 1,
            store: this.props.store
        }
        this.props.store.subscribe(()=>{
            let state = this.props.store.getState()
            console.log(state)
            if(this.state.fatherNum != state.nums){
                console.log("重设了counter的值，原因是fatherNum="+this.state.fatherNum+" 而state.num="+state.nums)
                this.setState({num: 0,fatherNum:state.nums})
            }
        });
    }
    clickIncrease = () => {
        this.setState((state, props) => {
            let myNum = state.num
            myNum++;
            props.store.dispatch(clickIncrease());
            return {
                num: myNum
            }
        })
    }
    clickDecrease = () => {
        this.setState((state, props) => {
            let myNum = state.num
            if (state.num == 0) {
                return
            }
            myNum--;
            props.store.dispatch(clickDecrease());
            return {
                num: myNum
            }
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.clickIncrease}> + </button>
                <span>{this.state.num}</span>
                <button onClick={this.clickDecrease}> - </button>
            </div>
        )
    }
}


export default Counter 