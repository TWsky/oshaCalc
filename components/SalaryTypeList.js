import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import PayPeriod from './PayPeriod'

const SalaryTypeList = ({ salaryTypes, oncheckedType, ScheckClick}) => (
    <div>
      <span>
        {salaryTypes.map((salaryType, id) =>
          <PayPeriod
            key={id}
            text={salaryType}
            onChecked={salaryType === oncheckedType}
            onClick={() => ScheckClick(salaryType)}
          />
        )}
      </span>
      <h3>計薪方式：{oncheckedType}</h3>
    </div>
)

SalaryTypeList.propTypes = {
  salaryTypes: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  oncheckedType: PropTypes.string.isRequired,
  ScheckClick: PropTypes.func.isRequired
}


export default SalaryTypeList
