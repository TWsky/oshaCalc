import React from 'react'
import { salaryData, transData } from './staticDataSet'
import SelectSalaryType from '../containers/selectSalaryType'
import SelectTransType from '../containers/selectTransType'

const App = () => (
  <div>
    <SelectSalaryType data={salaryData}/>
    <SelectTransType data={transData}/>
  </div>
)

export default App
