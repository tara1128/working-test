/*
  client/index.js
*/

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from '../common/components/App'
import DBInit from '../common/components/DBInit'
import store from '../common/store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('RootElement')
);

ReactDOM.render(
  <DBInit />,
  document.getElementById('initDB')
);
