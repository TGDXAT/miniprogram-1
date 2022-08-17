// pages/index/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:'/pages/index/images/logo.png',
    name:'NAME'
  },

  getMyInfo(e) {
    //e=event，微信的事件系统，可以将它视为一个微信的内部请求，具体看这里
    //https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html

    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        //console.log(res)
        this.setData({
          src: res.userInfo.avatarUrl,
          name: res.userInfo.nickName
        })
      }
    })
  }

})