import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import PayPeriod from './PayPeriod'

const SalaryTypeList = ({ salaryType, oncheckedType, ScheckClick}) => (
  <div>
    <ul>
      {salaryType.map(st =>
        <PayPeriod
          key={st.id}
          text={st}
          onChecked={st === oncheckedType}
          onClick={() => ScheckClick(st)}
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
