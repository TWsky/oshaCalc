import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import DateInfoBox from './DateInfoBox'


const DateInfoList = ({ workDateInfo, diBoxOnclick }) => (
  <div>
    <h3>填入對應工時及該日型態</h3>
    {workDateInfo.map((di, id) =>
      <DateInfoBox
        key={id}
        diObj={di}
      />
    )}
  </div>
)

DateInfoList.PropTypes = {
  workDateInfo: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    workingHour: PropTypes.number.isRequired,
    workdayType: PropTypes.oneOf(['WD', 'RB', 'VB', 'SB'])
  }).isRequired)
}

export default DateInfoList
