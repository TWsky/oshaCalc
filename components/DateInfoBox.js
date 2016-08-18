import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

const boxColor = (type) => {
  let styleObj = {
    'backgroundColor': 'white'
  }
  if(type == 'RB') {
    return Object.assign({}, styleObj, {
      'backgroundColor': 'red'
    })
  } else if (type == 'VB') {
    return Object.assign({}, styleObj, {
      'backgroundColor': 'blue'
    })
  } else if (type == 'SB') {
    return Object.assign({}, styleObj, {
      'backgroundColor': 'yellow'
    })
  } else {
    return styleObj
  }
}

const DateInfoBox = (diObj) => (
  <div className="col-xs-1" style={boxColor(diObj.diObj.workdayType)}>
    <h5>{diObj.diObj.date}</h5>
    <p>
      {diObj.diObj.workingHour}
    </p>
  </div>
)

export default DateInfoBox
