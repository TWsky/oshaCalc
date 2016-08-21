import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import DateInfoBox from './DateInfoBox'
import ShownDateInfoForm from './ShownDateInfoForm'


class DateInfoList extends React.Component {
  constructor(props) {
    super(props)
    const { workDateInfo, curEditId, loadDateInfo, updateDateInfo } = this.props
  }

  render() {
    return (
      <div>
        <div className="col-xs-8" style={{paddingLeft: '0%'}}>
          <h3>填入對應工時及該日型態</h3>
          {this.props.workDateInfo.map((di, id) =>
            <DateInfoBox
              key={id}
              data={di}
              onClick={() => this.props.loadDateInfo(id)}
            />
          )}
        </div>
        <div className="col-xs-3">
          <ShownDateInfoForm data={this.props.workDateInfo[this.props.curEditId]} />
        </div>
      </div>
    )
  }
}

DateInfoList.PropTypes = {
  workDateInfo: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    workingHour: PropTypes.number.isRequired,
    workdayType: PropTypes.oneOf(['WD', 'RB', 'VB', 'SB'])
  }).isRequired)
}

export default DateInfoList
