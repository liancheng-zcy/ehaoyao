import React, { Component } from 'react'
import Layout from 'pages/home/Layout'
import './assets/styles/reset.css'
import { Provider } from 'react-redux'
import store from 'store/index.js'
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Switch>
          <Route 
             path = "/index" 
             component={Layout} 
          />
          
          <Redirect
            exact
            from="/"
            to="/index/home"
          />
        </Switch>
      </Provider>
    )
  }
}
