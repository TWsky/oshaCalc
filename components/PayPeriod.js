import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';


const PayPeriod = ({ onChecked, text, onClick }) => (
  <div>
    <input
      type="radio"
      name="salaryT"
      value={text}
      defaultChecked={onChecked}
      onClick={onClick}
    />{text}
  </div>
)

PayPeriod.propTypes = {
  onChecked: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default PayPeriod
