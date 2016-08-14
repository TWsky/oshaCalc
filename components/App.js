import React from 'react'
import { salaryData, transData } from './staticDataSet'
import SelectSalaryType from '../containers/selectSalaryType'
import SelectTransType from '../containers/selectTransType'
import ResultCalendar from './Calendar'

const App = () => (
  <div>
    <SelectSalaryType data={salaryData}/>
    <SelectTransType data={transData}/>
    <ResultCalendar />
  </div>
)

export default App
