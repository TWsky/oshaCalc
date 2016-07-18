import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      salaryT: "計薪方式",
      data: [
      ],
      selectedValue: "",
      outputValue: ""
    }

    this.setStateHandler = this.setStateHandler.bind(this);
    this.handleOnchange = this.handleOnchange.bind(this);
    this.getDomNodeHandler = this.getDomNodeHandler.bind(this);
    this.updateState = this.updateState.bind(this);
  };

  setStateHandler() {

  };

  handleOnchange(event) {
    var salaryType = "";
    var selectedState = event.target.value;

    if(selectedState == "m") {
      salaryType = "月薪";
    } else if (selectedState == "d") {
      salaryType = "日薪";
    } else if (selectedState == "h") {
      salaryType = "時薪";
    }
    this.setState({selectedValue: selectedState});
    this.setState({outputValue: salaryType});
  }

  getDomNodeHandler() {
    var divId = document.getElementById('myDiv');
    ReactDOM.findDOMNode(divId).style.color = 'green';
  };

  updateState(e) {
    this.setState({selectedValue: e.target.value})
  };

  render() {
    return (
      <div>
        <h2>{this.state.salaryT}</h2>
        <tr>
          <td>
            <input type="radio" name="salaryT" value="m" checked={this.state.selectedValue == "m"} onChange={this.handleOnchange} />月薪
          </td>
          <td>
            <input type="radio" name="salaryT" value="d" checked={this.state.selectedValue == "d"} onChange={this.handleOnchange} />日薪
          </td>
          <td>
            <input type="radio" name="salaryT" value="h" checked={this.state.selectedValue == "h"} onChange={this.handleOnchange} />月薪
          </td>
        </tr>
        <h3>目前計薪方式: {this.state.outputValue}</h3>
      </div>
    );
  }
}



export default App;
