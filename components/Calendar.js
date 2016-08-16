import 'rc-calendar/assets/index.css';
import RangeCalendar from 'rc-calendar/lib/RangeCalendar';
import React from 'react';
import ReactDOM from 'react-dom';
import Picker from 'rc-calendar/lib/Picker';

import zhCN from 'rc-calendar/lib/locale/zh_CN';
import 'rc-time-picker/assets/index.css';
import TimePickerPanel from 'rc-time-picker/lib/Panel';

import moment from 'moment';
import 'moment/locale/zh-cn';
import 'moment/locale/en-gb';

const formatStr = 'YYYY-MM-DD';

const now = moment();

function format(v) {
  return v ? v.format(formatStr) : '';
}


class ResultCalendar extends React.Component {
  constructor(props) {
    super(props)
    const { startDate, endDate, onStandaloneSelect } = this.props
  }

  render() {
    return (
      <div className="row">
        <div>
          <h2>3.選擇對應日期</h2>
        </div>
        <div className="col-xs-6">
          <RangeCalendar
            defaultValue={now}
            dateInputPlaceholder={['start', 'end']}
            locale={zhCN}
            showClear
            format={formatStr}
            onSelect={this.props.onStandaloneSelect}
          />
        </div>
        <div className="col-xs-6">
          <h3>
            請依您的出勤紀錄選擇對應的範圍日期
            （理論上除八週需選兩個月外，<br/>其餘皆一個月）
          </h3>
          <h3>您選的日期：</h3>
          <div>
            <input type='textbox' value={this.props.startDate} onChange={this.props.onStandaloneSelect}/>
            <span> ~ </span>
            <input type='textbox' value={this.props.endDate} onChange={this.props.onStandaloneSelect}/>
          </div>
        </div>
      </div>
    );
  }

}

export default ResultCalendar
