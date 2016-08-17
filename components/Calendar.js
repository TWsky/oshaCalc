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
    const { title, content, label, startDate, endDate, onStandaloneSelect } = this.props
  }

  render() {
    return (
      <div className="row">
        <div>
          <h2>{this.props.title}</h2>
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
          <h3>{this.props.content}</h3>
          <h3>{this.props.label}</h3>
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
