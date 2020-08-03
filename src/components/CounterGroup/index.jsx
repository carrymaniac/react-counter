import React from 'react'
import Counter from '../Counter/index'

class CounterGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = { num: 1 }
    }

    numChange = (e) => {
        this.setState({ num: Number(e.target.value) })
    }

    render() {
        return (
            // <div>
            //     {list(this.props.num)}
            // </div>
            <div>
                number of conters: <input type="text" name="input_num" onChange= {this.numChange}/>
                {new Array(this.state.num).fill(0).map((value, key) => <Counter/>)}
            </div>
        )
    }
}

export default CounterGroup