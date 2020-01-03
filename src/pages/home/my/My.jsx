import React, { Component } from 'react'
import { Button } from 'antd-mobile';
import ComHeader from 'components/common/ComHeader'
export default class My extends Component {
  qrCodeClick = () =>{
    window.wx.ready(function(){
      window.wx.scanQRCode({
        needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
        scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
        success: function (res) {
          var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
          alert(result)
        }
      });
    });
  }
  tackPic = () =>{
    window.wx.ready(function(){
      window.wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
          alert(localIds)
        }
      });
    })
  }
  render() {
    
    return (
      <div>
        <ComHeader flag = "my"></ComHeader>
        <div>二维码</div>
        <Button type="primary" onClick={this.qrCodeClick}>扫描二维码</Button>
        <div>拍照</div>
        <Button type="primary" onClick={this.tackPic}>拍照</Button>
      </div>
    )
  }
}
