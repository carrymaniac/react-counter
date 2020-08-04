import React from 'react'
import Counter from '../Counter/index'
import {clickReset} from '../../actions/counter-actions'


class CounterGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = { num: 1, total: 0}
    }

    componentDidMount(){
        this.props.store.subscribe(()=>{
            let state = this.props.store.getState()
            console.log("现在的总值为："+state.total)
            this.setState({total:state.total})
        });
    }

    numChange = (e) => {
        this.setState({ num: Number(e.target.value), total: 0})
        this.props.store.dispatch(clickReset(Number(e.target.value)))
    }

    render() {
        return (
            <div>
                number of conters: <input type="text" name="input_num" onChange={this.numChange} />
                <span>total: {this.state.total}</span>
                {new Array(this.state.num).fill(0).map((value, key) => <Counter key= {key} store={this.props.store} />)}
            </div>
        )
    }
}

export default CounterGroup