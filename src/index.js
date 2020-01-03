import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import axios from 'axios'
import {get} from 'utils/http.js'
axios.defaults.withCredentials=true

ReactDOM.render(
    <Router>
      <App />
    </Router>
    , 
    document.getElementById('root')
);

(async function(){
  let result = await get({
    url:'/wx/sign',
  })

  console.log(result)
window.wx.config({
  debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
  appId:result.data.appId, // 必填，公众号的唯一标识
  timestamp:result.data.timestamp , // 必填，生成签名的时间戳
  nonceStr: result.data.nonceStr, // 必填，生成签名的随机串
  signature: result.data.signature,// 必填，签名
  jsApiList: [
    'scanQRCode',
    'chooseImage'
  ] // 必填，需要使用的JS接口列表
});
})()


