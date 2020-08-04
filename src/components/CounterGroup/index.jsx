import React from 'react'
import CounterContainer from '../../container/CounterContainer'


class CounterGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {count: 1}
    }

    numChange = (e) => {
        this.setState({ num: Number(e.target.value), total: 0})
        //发出了一个dispatch
        this.props.updateCount(Number(e.target.value))
    }

    render() {
        return (
            <div>
                number of conters: <input type="text" name="input_num" onChange={this.numChange} />
                <span>total: {this.props.total}</span>
                {new Array(this.state.num).fill(0).map((value, key) => <CounterContainer key={key}/>)}
            </div>
        )
    }
}

export default CounterGroup