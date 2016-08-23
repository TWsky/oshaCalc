import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'react-bootstrap'

class DateInfoForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleInput = this.handleInput.bind(this)
    this.updateDIObj = this.updateDIObj.bind(this)
  }
  handleInput(event) {
    this.updateDIObj('time', event.target.value)
  }
  updateDIObj(type, val) {
    switch (type) {
      case 'time':
        this.props.dayTypeDispatch(this.props.curID, {
          date: this.props.data[this.props.curID].date,
          workingHour: val,
          workdayType: this.props.data[this.props.curID].workdayType
        })
        break
      case 'DType':
        this.props.dayTypeDispatch(this.props.curID, {
          date: this.props.data[this.props.curID].date,
          workingHour: this.props.data[this.props.curID].workingHour,
          workdayType: val
        })
        break
      default:
        console.log("No Change")
    }
  }
  render() {
    const { data, curID, dayTypeDispatch } = this.props
    return (
      <div style={{'textAlign': 'center'}}>
        <h2>
          {data[curID].date.slice(5, 7) + '/' + data[curID].date.slice(8, 10)}
        </h2>
        <br/>
        <div>
          <h4 style={{display: 'inline'}}>本日上班</h4>
          <input
            type='text'
            style={{width: '25%' ,margin: '5%' }}
            value={data[curID].workingHour}
            onChange={this.handleInput}
            />
          <h4 style={{display: 'inline'}}>小時</h4>
        </div>
        <div>
          <Button name='typeGroupBtn' style={{ width: '40%', margin: '5%'}} bsSize='lg' active={data[curID].workdayType == 'WD'} onClick={() => this.updateDIObj('DType', 'WD')}>上班日</Button>
          <Button name='typeGroupBtn' style={{ width: '40%', margin: '5%'}} bsSize='lg' active={data[curID].workdayType == 'RB'} onClick={() => this.updateDIObj('DType', 'RB')}>例假</Button>
          <Button name='typeGroupBtn' style={{ width: '40%', margin: '5%'}} bsSize='lg' active={data[curID].workdayType == 'VB'} onClick={() => this.updateDIObj('DType', 'VB')}>國定休假</Button>
          <Button name='typeGroupBtn' style={{ width: '40%', margin: '5%'}} bsSize='lg' active={data[curID].workdayType == 'SB'} onClick={() => this.updateDIObj('DType', 'SB')}>特休</Button>
        </div>
      </div>
    )
  }
}

export default DateInfoForm
