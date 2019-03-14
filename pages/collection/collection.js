// pages/collection/collection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this;
    var msg = this.data.msg;
    wx.request({
      url:'http://127.0.0.1:8080/user/alluser',
      data: {
      
      },
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        that.setData({ msg: res.data.data });
        //console.log(that.data.msg);
        //将获取到的json数据，存在名字叫zhihu的这个数组中
        //zhihu: res.data[0].userAccount;
        //wx(".msg").text(res.data[0].userAccount);
        wx: for (let i = 0; i < res.data.length; ++i){
          //console.log(res.data[i].userAccount);
        }
      

      }
    })


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
  /**
   * 查看详情
   */
  lookdetail: function (e){
    //跳转页面
    console.log(e.data);
    console.log(e.data.data.userid);
    wx.navigateTo({ url: '/pages/Detail/Detail?id=' + e.data.data.userid });

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