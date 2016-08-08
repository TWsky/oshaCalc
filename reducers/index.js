import { combineReducers } from 'redux'
import paidType from './paidTypeReducer'
// import { workingCycle } form './workingCycleReducer'

const mainReducer = combineReducers({
  paidType
})

export default mainReducer
