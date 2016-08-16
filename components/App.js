import React from 'react'
import { salaryData, transData } from './staticDataSet'
import SelectSalaryType from '../containers/selectSalaryType'
import SelectTransType from '../containers/selectTransType'
import SelectCalendarRange from '../containers/selectCalendarRange'

const App = React.createClass({
  componentDidMount: function() {
    $('#fullpage').fullpage({
      navigation: true,
      navigationPosition: 'right',
      navigationTooltips: ['計薪方式', '出勤記錄', '詳細工時']
    });
  },

  render: function () {
    return (
      <div>
        <div id="nav">
          <h1>勞檢工資工時試算</h1>
        </div>
        <div id="fullpage">
          <div id="step1" className="section">
            <div className="col-xs-6">
              <div className="row">
                <div className="col-lg-offset-2 col-lg-8 col-xs-offset-2 col-xs-8">
                  <SelectSalaryType data={salaryData}/>
                </div>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="row">
                <div className="col-lg-offset-2 col-lg-8 col-xs-offset-2 col-xs-8">
                  <SelectTransType data={transData}/>
                </div>
              </div>
            </div>
          </div>
          <div id="step2" className="section">
            <div className="container">
              <SelectCalendarRange />
            </div>
          </div>
          <div id="step3" className="section">
          </div>
        </div>
      </div>
    );
  }
});

export default App
