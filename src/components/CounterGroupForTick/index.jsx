import React from 'react'
import Counter from '../Counter/index'

class CounterGroupForTick extends React.Component {
    constructor(props){
        super(props)
        this.state = { num:this.props.num}
    }
    componentDidMount(){
        setInterval(
            () => this.tick(),1000
        )
    }
    tick = ()=>{
        let num = this.state.num;
        this.setState({
            num: ++num
        })
    }

    render(){
        return(
            <div>
            {new Array(this.state.num).fill(0).map((value,key) => <Counter/>)}
            </div>
        )
    }
}

export default CounterGroupForTick