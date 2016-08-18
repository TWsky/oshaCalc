/*
workDateInfo structure
{
  date: string,
  workingHour: int,
  workdayType: string(ENUM) [WD, RB, VB, SB]
}
*/

import moment from 'moment'
require('moment-range')

var nationVacation = [
  '2016-01-01', // 元旦
  '2016-02-08', // 除夕
  '2016-02-09', // 春節
  '2016-02-10', // 春節
  '2016-02-11', // 春節
  '2016-02-29', // 228
  '2016-04-04', // 兒童節
  '2016-04-05', // 清明節
  '2016-05-01', // 勞動節
  '2016-06-09', // 端午節
  '2016-09-15', // 中秋節
  '2016-10-10'  // 國慶日
]

const initialState = {
  startDate: '',
  endDate: '',
  workDateInfo: [
    {
      date: 'NAN',
      workingHour: 0,
      workdayType: 'WD'
    }
  ]
}

const dateInfo = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_DATE_RANGE':

      var start = moment(action.startDate)
      var end   = moment(action.endDate)
      var range = moment.range(start, end);
      var acc = []

      range.by('days', m => {
        var dateObj = {
          date: m.format("YYYY-MM-DD"),
          workingHour: 0
        }

        if( nationVacation.indexOf(m.format("YYYY-MM-DD")) != -1 ) {
          dateObj.workdayType = 'VB'
        } else if ( m.format("ddd") == 'Sun' ) {
          dateObj.workdayType = 'RB'
        } else {
          dateObj.workdayType = 'WD'
        }
        acc.push(dateObj)
      })

      return Object.assign({}, state, {
        startDate: action.startDate,
        endDate: action.endDate,
        workDateInfo: acc
      })
    default:
      return state
  }
}

export default dateInfo
