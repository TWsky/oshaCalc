import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'react-bootstrap'

class ShownDateInfoForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={{'textAlign': 'center'}}>
        <h2>{this.props.data.date.slice(5, 7) + '/' + this.props.data.date.slice(8, 10)}</h2>
        <br/>
        <div>
          <h4 style={{display: 'inline'}}>本日上班</h4>
          <input type='text' style={{width: '25%' ,margin: '5%' }} value={this.props.data.workingHour} />
          <h4 style={{display: 'inline'}}>小時</h4>
        </div>
        <div>
          <Button name='typeGroupBtn' style={{ width: '40%', margin: '5%'}} className='btn btn-large btn-default' active={this.props.data.workdayType == 'WD'}>上班日</Button>
          <Button name='typeGroupBtn' style={{ width: '40%', margin: '5%'}} className='btn btn-large btn-default' active={this.props.data.workdayType == 'RB'}>例假</Button>
          <Button name='typeGroupBtn' style={{ width: '40%', margin: '5%'}} className='btn btn-large btn-default' active={this.props.data.workdayType == 'VB'}>國定休假</Button>
          <Button name='typeGroupBtn' style={{ width: '40%', margin: '5%'}} className='btn btn-large btn-default' active={this.props.data.workdayType == 'SB'}>特休</Button>
        </div>
      </div>
    )
  }
}

export default ShownDateInfoForm
