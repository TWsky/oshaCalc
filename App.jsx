import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        Hello Osha!
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return {
      <div>
        <h1>This is a Header</h1>
      </div>
    };
  }
}


class Contents extends React.Component {
  render() {
    return {
      <div>
        <h2>This is the body</h2>
      </div>
    };
  }
}


export default App;
