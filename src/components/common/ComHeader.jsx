import React, { Component } from 'react'
import { ComHeaderWrap } from './common'
import { Popover, Icon } from 'antd-mobile';
import {
  withRouter,
} from "react-router-dom";
const Item = Popover.Item;

const myImg = src => <img style={{ display: 'block' }} src={`http://m.ehaoyao.com/_nuxt/img/${src}.png`} className="am-icon am-icon-xs" alt="" />;

@withRouter
class ComHeader extends Component {
  state = {
    visible: false,
    selected: '',
  };
  onSelect = (opt) => {
    this.setState({
      visible: false,
      selected: opt.props.value,
    });
    switch (opt.key) {
      case '4':
        this.props.history.push('/index/home')
        break;
      case '5':
        this.props.history.push('/index/category')
        break;
      case '6':
        this.props.history.push('/index/my')
        break;
      case '7':
        alert('search')
        break;
      default:
        break;
    }
  };
  handleVisibleChange = (visible) => {
    this.setState({
      visible,
    });
  };
  onGoBack = () => {
    this.props.history.goBack()
  }
  render() {

    return (
      <ComHeaderWrap>
        <header className="header">
          <div className="goback" onTouchEnd={this.onGoBack}></div>
          <div className="main"><span className="main-title">问药师</span></div>
          <div className="right">
            <Popover
              mask
              overlayClassName="fortest"
              overlayStyle={{ color: 'currentColor' }}
              visible={this.state.visible}
              overlay={[
                (<Item key="4" value="home" icon={myImg('headerboxMenu_1.be423f6')} data-seed="logId">首页</Item>),
                (<Item key="5" value="category" icon={myImg('headerboxMenu_2.8a9e1a2')} style={{ whiteSpace: 'nowrap' }}>分类</Item>),
                (<Item key="6" value="my" icon={myImg('headerboxMenu_3.9c4fc47')} style={{ whiteSpace: 'nowrap' }}>我的</Item>),
                (<Item key="7" value="search" icon={myImg('headerboxMenu_4.9bfc51f')}>
                  <span style={{ marginRight: 5 }}>搜索</span>
                </Item>),
              ]}
              align={{
                overflow: { adjustY: 0, adjustX: 0 },
                offset: [-10, 0],
              }}
              onVisibleChange={this.handleVisibleChange}
              onSelect={this.onSelect}
            >
              <div style={{
                height: '100%',
                padding: '0 15px',
                marginRight: '-15px',
                display: 'flex',
                alignItems: 'center',
              }}
              >
                <Icon type="ellipsis" />
              </div>
            </Popover>
          </div>
        </header>
      </ComHeaderWrap>
    )
  }
}

export default ComHeader