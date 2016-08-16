import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import SingleListButton from './SingleListButton'

const RadioQueryForm = ({ title, buttonlist, oncheckedType, btnClick, resultVal }) => (
    <div>
      <h2>
        {title}
      </h2>
      <span>
        {buttonlist.map((btnItem, id) =>
          <SingleListButton
            key={id}
            text={btnItem}
            onChecked={btnItem === oncheckedType}
            onClick={() => btnClick(btnItem)}
          />
        )}
      </span>
      <h3>
        {resultVal + oncheckedType}
      </h3>
    </div>
)

RadioQueryForm.propTypes = {
  buttonlist: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  oncheckedType: PropTypes.string.isRequired,
  btnClick: PropTypes.func.isRequired
}


export default RadioQueryForm
