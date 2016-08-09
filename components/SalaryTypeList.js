import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import PayPeriod from './PayPeriod'

const SalaryTypeList = ({ salaryTypes, oncheckedType, ScheckClick}) => (
    <div>
      <ul>
        {salaryTypes.map(salaryType =>
          <PayPeriod
            key={salaryType.id}
            text={salaryType}
            onChecked={salaryType === oncheckedType}
            onClick={() => ScheckClick(salaryType)}
          />
        )}
      </ul>
      <h3>計薪方式：{oncheckedType}</h3>
    </div>
)

SalaryTypeList.propTypes = {
  salaryType: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  oncheckedType: PropTypes.string.isRequired,
  ScheckClick: PropTypes.func.isRequired
}


export default SalaryTypeList
