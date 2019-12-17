import React from 'react'
import { TabBar } from 'antd-mobile';
// home
import Ehome from './ehome/Ehome'
import { TabBarWrap } from './ehome/styledEhome'
import homeImg from 'assets/images/home.png'
import homeActive from 'assets/images/homeActive.png'
import categoryImg from 'assets/images/category.png'
import categoryActive from 'assets/images/categoryActive.png'
import cartImg from 'assets/images/cart.png'
import cartActive from 'assets/images/cartActive.png'
import docImg from 'assets/images/doc.png'
import myImg from 'assets/images/my.png'
// category
import Category from './category/Category'
// AskPharmacist
import AskPharmacist from './AskPharmacist/AskPharmacist'
// cart
import Cart from './cart/Cart'
// Products
import Products from './categoryList/Products'
import {
  withRouter,
} from "react-router-dom";

@withRouter
class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: '',
      hidden: false,
      fullScreen: true,
    };
  }
  componentDidMount() {
    
  }
  static getDerivedStateFromProps(props, state) {
    console.log(props)
    if(props.location.pathname === '/index/doc' || props.location.pathname === '/index/my'){
      return{
        selectedTab:props.location.pathname,
        hidden:true
      }
    }else{
      return{
        selectedTab:props.location.pathname,
        hidden:false
      }
    }
  }
  render() {
    // console.log(this.props)
    console.log(this.state.selectedTab)
    return (
        <TabBarWrap style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
          <TabBar
            unselectedTintColor="#464646"
            tintColor="#ff344d"
            barTintColor="white"
            // hidden={this.props.location.pathname === '/index/doc' || this.props.location.pathname === '/index/my'}
            hidden={this.state.hidden}
            prerenderingSiblingsNumber={0}
          >

            <TabBar.Item
              key="home"
              icon={<div style={{
                width: '44px',
                height: '44px',
                background: `url(${homeImg}) center center /  42px 42px no-repeat`
              }}
              />
              }
              selectedIcon={<div style={{
                width: '44px',
                height: '44px',
                background: `url(${homeActive}) center center /  42px 42px no-repeat`
              }}
              />
              }
              selected={this.state.selectedTab === '/index/home'}
              onPress={() => {
                this.setState({
                  selectedTab: '/index/home',
                 
                });
                this.props.history.push('/index/home')
              }}

            >
            <Ehome></Ehome>
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div style={{
                  width: '44px',
                  height: '44px',
                  background: `url(${categoryImg}) center center /  42px 44px no-repeat`
                }}
                />
              }
              selectedIcon={
                <div style={{
                  width: '44px',
                  height: '44px',
                  background: `url(${categoryActive}) center center /  42px 42px no-repeat`
                }}
                />
              }
              key="category"

              selected={this.state.selectedTab === '/index/category'}
              onPress={() => {
                this.setState({
                  selectedTab: '/index/category',
                });
                this.props.history.push('/index/category')
              }}

            >
             {
               this.state.selectedTab === '/index/category' && <Category></Category> 
             }
             {
               this.state.selectedTab === '/index/list' && <Products></Products>
             }
             {/* <Category></Category>
             <Products></Products> */}
            </TabBar.Item>
            <TabBar.Item
              style={{
                position: 'relative',
              }}
              icon={
                <div style={{
                  width: '44px',
                  height: '55px',
                  background: `url(${docImg}) center center /  42px 55px no-repeat`,
                  position: "absolute",
                  top: '-33px',
                  zIndex: 10
                }}
                />
              }
              key="doc"
              selected={this.state.selectedTab === '/index/doc'}
              onPress={() => {
                this.setState({
                  selectedTab: '/index/doc',
                
                });
                this.props.history.push('/index/doc')
              }}
            >
             <AskPharmacist></AskPharmacist>
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div style={{
                  width: '44px',
                  height: '44px',
                  background: `url(${cartImg}) center center /  42px 42px no-repeat`
                }}
                />
              }
              selectedIcon={
                <div style={{
                  width: '44px',
                  height: '44px',
                  background: `url(${cartActive}) center center /  42px 42px no-repeat`
                }}
                />
              }
              key="cart"
              selected={this.state.selectedTab === '/index/cart'}
              onPress={() => {
                this.setState({
                  selectedTab: '/index/cart',
                
                });
                this.props.history.push('/index/cart')
              }}
            >
              <Cart></Cart>
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div style={{
                  width: '44px',
                  height: '44px',
                  background: `url(${myImg}) center center /  42px 42px no-repeat`
                }}
                />
              }
              key="my"
              selected={this.state.selectedTab === '/index/my'}
              onPress={() => {
                this.setState({
                  selectedTab: '/index/my',
                 
                });
                this.props.history.push('/index/my')
              }}
            >
              <div>my</div>
            </TabBar.Item>
          </TabBar>
        </TabBarWrap>
    );
  }
}

// ReactDOM.render(<TabBarExample />, mountNode);

export default Layout