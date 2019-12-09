import React, { Component } from 'react'
import Layout from 'pages/home/Layout'
import './assets/styles/reset.css'
import { Provider } from 'react-redux'
import store from 'store/index.js'
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Layout></Layout>
      </Provider>
    )
  }
}
