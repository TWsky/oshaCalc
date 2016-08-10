import { combineReducers } from 'redux'
import paidType from './paidType'
import workingCycle from './workingCycle'

const mainReducer = combineReducers({
  paidType,
  workingCycle
})

export default mainReducer
