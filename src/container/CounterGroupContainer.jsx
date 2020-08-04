import {connect} from 'react-redux'
import CounterGroup from '../components/CounterGroup'
import {clickReset} from '../actions/counter-actions'


const mapStateToProps = (state)=>{
    return {
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        updateCount: (count)=>{
            dispatch(clickReset(count))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterGroup);