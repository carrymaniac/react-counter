import React from 'react'


class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            num: 0
        }
    }
    clickFun = () => {
        // let num = this.state.num;
        // num++;
        // this.setState({num: num})
        this.setState({num:++this.state.num});
    }
    render() {
        return (
            <div>
                <button onClick={this.clickFun}> + </button>
                <marker>{this.state.num}</marker>
                <button> - </button>
            </div>
        )
    }
}


export default Counter 