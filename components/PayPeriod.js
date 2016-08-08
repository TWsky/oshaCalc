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
  onChecked: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default PayPeriod
