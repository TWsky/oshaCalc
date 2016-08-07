import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';


const PayPeriod = ({ onChecked, text, onClick }) => (
  <li onClick={onClick}>
    <input
      type="radio"
      name="salaryT"
      value={text}
      checked={onChecked}
    />{text}
  </li>
)

PayPeriod.propTypes = {
  onChecked: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.string.isRequired
}

export default PayPeriod
