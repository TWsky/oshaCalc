import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import PayPeriod from './PayPeriod'

const SalaryTypeList = ({ salaryTypes, oncheckedType, ScheckClick}) => (
    <div>
      <h1>
        計薪方式
      </h1>
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
      <h3>
        {oncheckedType}
      </h3>
    </div>
)

SalaryTypeList.propTypes = {
  salaryTypes: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  oncheckedType: PropTypes.string.isRequired,
  ScheckClick: PropTypes.func.isRequired
}

SalaryTypeList.defaultProps = {
  salaryTypes: ['月薪制','日薪制','時薪制']
}


export default SalaryTypeList
