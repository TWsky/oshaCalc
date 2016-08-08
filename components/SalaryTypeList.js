import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import PayPeriod from './PayPeriod'

const SalaryTypeList = ({ salaryTypes, oncheckedType, ScheckClick}) => (
    <div>
      <ul>
        {salaryTypes.map(salaryType =>
          <PayPeriod
            key={salaryType.id}
            {...salaryType}
            onChecked={salaryType.text === oncheckedType}
            onClick={() => ScheckClick(salaryType.id)}
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

SalaryTypeList.defaultProps = {
  salaryTypes: [{
    text: 'MONTH_PAID'
  },{
    text: 'DAY_PAID'
  },{
    text: 'HOUR_PAID'
  }],
  oncheckedType: 'MONTH_PAID'
}



export default SalaryTypeList
