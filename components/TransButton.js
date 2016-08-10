import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

const TransButton = ({onChecked, text, onClick}) => (
  <div>
    <input
      type='button'
      name='transtimeT'
      value={text}
      defaultChecked={onChecked}
      onClick={onClick}
    />
</div>
)

TransButton.propTypes = {
  onChecked: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default TransButton
