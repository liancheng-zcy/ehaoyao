import React, { Component } from 'react'
import Layout from 'pages/home/Layout'
import './assets/styles/reset.css'
import { Provider } from 'react-redux'
import store from 'store/index.js'
import Detail from 'pages/detail/Detail'
import Products from 'pages/home/categoryList/Products'
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
          <Route 
             path="/products/:id" 
             component={Products} 
          />
          <Route 
             path="/search" 
             component={Products} 
          />
          <Route 
             path = "/detail" 
             exact
             component={Detail} 
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
