import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            num: 0,
            count: 1,
        }
    }
    clickIncrease = () => {
        this.setState((state, props) => {
            let n = state.num
            n++;
            return {
                num: n
            }
        })
        this.props.addTotal();
    }
    clickDecrease = () => {
        this.setState((state, props) => {
            let n = state.num
            if (state.num === 0) {
                return
            }
            n--;
            return {
                num: n
            }
        })
        this.props.reduceTotal(); 
    }
    static getDerivedStateFromProps(props,state){
        if(props.count !== state.count){
            return{count:props.count,num:0}
        }
        return null
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