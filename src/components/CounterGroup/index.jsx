import React from 'react'
import Counter from '../Counter/index'

class CounterGroup extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            // <div>
            //     {list(this.props.num)}
            // </div>
            <div>
            {new Array(this.props.num).fill(0).map((value,key) => <Counter/>)}
            </div>
        )
    }
}

export default CounterGroup