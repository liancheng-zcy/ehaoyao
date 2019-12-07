import React from 'react'
import { TabBar } from 'antd-mobile';
import Ehome from './home/ehome/Ehome'
import { TabBarWrap } from './home/ehome/styledEhome'
import homeImg from 'assets/images/home.png'
import homeActive from 'assets/images/homeActive.png'
import categoryImg from 'assets/images/category.png'
import categoryActive from 'assets/images/categoryActive.png'
import cartImg from 'assets/images/cart.png'
import cartActive from 'assets/images/cartActive.png'
import docImg from 'assets/images/doc.png'
import myImg from 'assets/images/my.png'
// import { relative } from 'path';
class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
      hidden: false,
      fullScreen: true,
    };
  }
  render() {
    return (
      <TabBarWrap style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#464646"
          tintColor="#ff344d"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            key="home"
            icon={<div style={{
              width: '44px',
              height: '44px',
              background: `url(${homeImg}) center center /  42px 42px no-repeat` }}
            />
            }
            selectedIcon={<div style={{
              width: '44px',
              height: '44px',
              background: `url(${homeActive}) center center /  42px 42px no-repeat` }}
            />
            }
            selected={this.state.selectedTab === 'home'}
            onPress={() => {
              this.setState({
                selectedTab: 'home',
              });
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
                background: `url(${categoryActive}) center center /  42px 42px no-repeat` }}
              />
            }
            key="category"
           
            selected={this.state.selectedTab === 'category'}
            onPress={() => {
              this.setState({
                selectedTab: 'category',
              });
            }}
           
          >
          <div>2</div>
          </TabBar.Item>
          <TabBar.Item
            style={{
              position:'relative',
            }}
            icon={
              <div style={{
                width: '44px',
                height: '55px',
                background: `url(${docImg}) center center /  42px 55px no-repeat`,
                position:"absolute",
                top:'-33px',
                zIndex:10
               }}
              />
            }
            key="doc"
          >
            <div>3</div>
          </TabBar.Item>
          <TabBar.Item
             icon={
              <div style={{
                width: '44px',
                height: '44px',
                background: `url(${cartImg}) center center /  42px 42px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '44px',
                height: '44px',
                background: `url(${cartActive}) center center /  42px 42px no-repeat` }}
              />
            }
            key="cart"
            selected={this.state.selectedTab === 'cart'}
            onPress={() => {
              this.setState({
                selectedTab: 'cart',
              });
            }}
          >
            <div>4</div>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '44px',
                height: '44px',
                background: `url(${myImg}) center center /  42px 42px no-repeat` }}
              />
            }
            key="my"
          >
            <div>5</div>
          </TabBar.Item>
        </TabBar>
      </TabBarWrap>

    );
  }
}

// ReactDOM.render(<TabBarExample />, mountNode);

export default Layout