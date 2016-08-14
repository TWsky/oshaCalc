import 'rc-calendar/assets/index.css';
import RangeCalendar from 'rc-calendar/lib/RangeCalendar';
import React from 'react';
import ReactDOM from 'react-dom';
import Picker from 'rc-calendar/lib/Picker';

import 'rc-time-picker/assets/index.css';

import zhCN from 'rc-calendar/lib/locale/zh_CN';
import enUS from 'rc-calendar/lib/locale/en_US';
import 'rc-time-picker/assets/index.css';
import TimePickerPanel from 'rc-time-picker/lib/Panel';

import moment from 'moment';
import 'moment/locale/zh-cn';
import 'moment/locale/en-gb';

const formatStr = 'YYYY-MM-DD';
const cn = location.search.indexOf('cn') !== -1;

const now = moment();
var selectedArr = [];
if (cn) {
  now.locale('zh-cn').utcOffset(8);
} else {
  now.locale('en-gb').utcOffset(0);
}

const defaultCalendarValue = now.clone();
defaultCalendarValue.add(-1, 'month');

const timePickerElement = <TimePickerPanel />;

const divStyle = {
  display: 'inline-block',
  width: '40%',
  margin: '5%'


};

function disabledDate(current) {
  const date = moment();
  date.hour(0);
  date.minute(0);
  date.second(0);
  return current.isBefore(date);  // can not select days before today
}

function format(v) {
  return v ? v.format(formatStr) : '';
}

function isValidRange(v) {
  return v && v[0] && v[1];
}

function onStandaloneChange(value) {
  console.log('onChange');
  console.log(value[0] && format(value[0]), value[1] && format(value[1]));
}



// const Test = React.createClass({
//   getInitialState() {
//     return {
//       value: [],
//     };
//   },
//
//   onChange(value) {
//     this.setState({ value });
//   },
//
//   render() {
//     const state = this.state;
//     const calendar = (
//       <RangeCalendar
//         showWeekNumber={false}
//         dateInputPlaceholder={['start', 'end']}
//         defaultValue={[now, now]}
//         locale={cn ? zhCN : enUS}
//         disabledDate={disabledDate}
//         timePicker={timePickerElement}
//       />
//     );
//     return (<Picker
//       value={state.value}
//       onChange={this.onChange}
//       animation="slide-up"
//       calendar={calendar}
//     >
//       {
//         ({ value }) => {
//           return (<span>
//                 <input
//                   placeholder="please select"
//                   style={{ width: 350 }}
//                   disabled={state.disabled}
//                   readOnly
//                   className="ant-calendar-picker-input ant-input"
//                   value={isValidRange(value) && `${format(value[0])} - ${format(value[1])}` || ''}
//                 />
//                 </span>);
//         }
//       }
//     </Picker>);
//   },
// });
export class ResultCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.onStandaloneSelect = this.onStandaloneSelect.bind(this);

    this.state = {
      selectedArr: [],
      diffDate: 0
    };
  }

  onStandaloneSelect(value) {
    var selectedArr = [];
    var diffDate = 0;
    // console.log('onSelect');
    // console.log(format(value[0]), format(value[1]));
    selectedArr.push(format(value[0]), format(value[1]));
    diffDate = moment.duration(value[1].diff(value[0]));


    this.setState({selectedArr: selectedArr, diffDate: diffDate/86400000});

  }

  render() {
    return (
      <div>
        <div>
          <h2>選擇對應日期</h2>
        </div>
        <div style={divStyle}>
          <RangeCalendar
            defaultValue={now}
            dateInputPlaceholder={['start', 'end']}
            locale={zhCN}
            showOk={true}
            showClear
            format={formatStr}
            onChange={onStandaloneChange}
            onSelect={this.onStandaloneSelect}
            disabledDate={disabledDate}
          />
        </div>
        <div style={divStyle}>
          <h4>
            請依您的出勤紀錄選擇對應的範圍日期
            （理論上依八週需選兩個月外，其餘皆一個月）
          </h4>
          <h5>您選的日期：</h5>
          <div>
            <input type='textbox' value={this.state.selectedArr[0]} onChange={this.onStandaloneSelect}/>
            <input type='textbox' value={this.state.selectedArr[1]} onChange={this.onStandaloneSelect}/>
          </div>
          <span>差</span>
          <input type='textbox' value={ this.state.diffDate } onChange={this.onStandaloneSelect}/>
          <span>日</span>
        </div>
      </div>
    );
  }

}

export default ResultCalendar
