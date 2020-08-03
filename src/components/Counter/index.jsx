import React from 'react'


class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            num: 0,
            fatherNum: this.props.flag
        }
    }
    clickIncrease = () => {
        this.setState((state, props) => {
            let myNum = state.num
            myNum++;
            props.calculate(1);
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
            props.calculate(-1);
            return {
                num: myNum
            }
        })
    }
    static getDerivedStateFromProps(props, state) {
        if (state.fatherNum != props.flag) {
            return {
                num: 0,
                fatherNum: props.flag
            }
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