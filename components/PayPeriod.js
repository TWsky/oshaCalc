import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

const PayPeriod = ({ onChecked, text, onClick }) => (
  <div>
    <input
      type="button"
      name="salaryT"
      value={text}
      defaultChecked={onChecked}
      onClick={onClick}
    />
  </div>
)

PayPeriod.propTypes = {
  onChecked: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default PayPeriod
