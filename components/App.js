import React from 'react'
import { salaryData, transData } from './staticDataSet'
import SelectSalaryType from '../containers/selectSalaryType'
import SelectTransType from '../containers/selectTransType'
import SelectCalendarRange from '../containers/selectCalendarRange'

const App = () => (
  <div>
    <SelectSalaryType data={salaryData}/>
    <SelectTransType data={transData}/>
    <SelectCalendarRange />
  </div>
)

export default App
