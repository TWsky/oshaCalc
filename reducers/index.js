import { combineReducers } from 'redux'
import paidType from './paidType'
import workingCycle from './workingCycle'
import dateInfo from './dateInfo'

const mainReducer = combineReducers({
  paidType,
  workingCycle,
  dateInfo
})

export default mainReducer
