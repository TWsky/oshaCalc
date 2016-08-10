import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// import paidType from './reducers/paidType'
import mainReducer from './reducers'
import App from './components/App'


const store = createStore(mainReducer, window.devToolsExtension && window.devToolsExtension());


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('App')
);
