//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '欢迎您！',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },
  /**
  * 用户点击右上角分享
  */
  onShareAppMessage: function () {
    var that = this;
    return {
      title: '分享快乐',
      path: '/pages/list/list?id=' + that.data.scratchId,
      success: function (res) {
        // 转发成功

        that.shareClick();
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})
