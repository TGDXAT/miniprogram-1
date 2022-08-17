// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:'/pages/index/images/logo.png',
    name:'NAME'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  getMyInfo(e){
    //e=event，微信的事件系统，可以将它视为一个微信的内部请求，具体看这里
    //https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html

    //此功能已不再可用，将返回匿名信息 2022/8/17
    //https://developers.weixin.qq.com/community/develop/doc/000e881c7046a8fa1f4d464105b001
    //https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html
  
    let info = e.detail.userInfo;
    this.setData({
      src:info.avatarUrl,
      name:info.nickName
    })

    //debug
    //console.log(e);
    //console.log(this.src);
    //console.log(this.name);
  }
})