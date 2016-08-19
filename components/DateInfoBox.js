import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';


class DateInfoBox extends React.Component {
  constructor(props) {
    super(props)
    this.boxColor = this.boxColor.bind(this)
  }

  boxColor(type) {
    let styleObj = {
      margin: '2px',
      padding: '2px',
      backgroundColor: 'white',
      width: '12%',
      textAlign: 'center',
      fontSize: '14px'
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

  render() {
    return (
      <div className="col-xs-1" onClick={this.props.onClick} style={this.boxColor(this.props.data.workdayType)}>
          <h4>{this.props.data.date.slice(5, 7) + '/' + this.props.data.date.slice(8, 10)}</h4>
          <p>{this.props.data.workingHour}</p>
      </div>
    )
  }
}


export default DateInfoBox
