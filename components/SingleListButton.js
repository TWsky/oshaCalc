import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

const SingleListButton = ({btnName, onChecked, text, onClick}) => (
  <div>
    <input
      type='button'
      className="btn btn-lg btn-default"
      name={btnName}
      value={text}
      defaultChecked={onChecked}
      onClick={onClick}
    />
</div>
)

SingleListButton.propTypes = {
  onChecked: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default SingleListButton
