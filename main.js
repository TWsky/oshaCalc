import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { paidType } from './reducers/paidTypeReducer'
// import { mainReducer } from './reducers'
import { App } from './components/App'


const store = createStore(paidType);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('App')
);
