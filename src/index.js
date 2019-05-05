import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

const renderRoot = (Component) => {
  ReactDOM.render(<Component />, document.getElementById('training'))
}

renderRoot(App)

// Reload without refreshing the browser
// if (module.hot) {
//   module.hot.accept('./app', () => {
//     const App = require('./app').default //eslint-disable-line
//     renderRoot(App)
//   })
// }
