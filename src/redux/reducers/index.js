// 汇总reducers
import countReducer from './count'
import perReducer from './person'
import { combineReducers } from 'redux'

const allReducer = combineReducers({
    count: countReducer,
    persons: perReducer
})
export default allReducer;