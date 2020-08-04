import {connect} from 'react-redux'
import Counter from '../components/Counter/index'
import {clickIncrease,clickDecrease} from '../actions/counter-actions'

const mapStateToProps = (state)=>{
    return {
        count: state.count
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        addTotal: ()=>{
            dispatch(clickIncrease())
        },
        reduceTotal: ()=>{
            dispatch(clickDecrease())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);