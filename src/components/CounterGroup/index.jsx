import React from 'react'
import Counter from '../Counter/index'

class CounterGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = { num: 1, total: 0}
    }

    numChange = (e) => {
        this.setState({ num: Number(e.target.value), total: 0})
    }

    setNum(num) {
        let newTotal = this.state.total + num;
        this.setState({ total: newTotal })
    }



    render() {
        return (
            // <div>
            //     {list(this.props.num)}
            // </div>
            <div>
                number of conters: <input type="text" name="input_num" onChange={this.numChange} />
                <span>total: {this.state.total}</span>
                {new Array(this.state.num).fill(0).map((value, key) => <Counter key= {key} calculate={this.setNum.bind(this)} flag={this.state.num} />)}
            </div>
        )
    }
}

export default CounterGroup