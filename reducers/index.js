import { combineReducers } from 'redux'
import paidType from './paidType'
import workingCycle from './workingCycle'
import dateInfo from './dateInfo'
import wageSum from './wageSum'

const mainReducer = combineReducers({
  paidType,
  workingCycle,
  dateInfo,
  wageSum
})

export default mainReducer
