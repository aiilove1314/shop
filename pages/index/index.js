//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    cars:[{
        "id": 1,
      "car_image":"/resources/images/4_2.jpg",
        "car_description": "纯天然、无污染，健康绿色食品",
        "price": 14.35,
        "guid_price": 20.08
      },{
        "id": 2,
        "car_image":"/resources/images/4_3.jpg",
        "car_description": "纯天然、无污染，健康绿色食品",
        "price": 14.35,
        "guid_price": 20.08
      },{
        "id": 3,
        "car_image":"/resources/images/4_4.jpg",
        "car_description": "纯天然、无污染，健康绿色食品",
        "price": 14.35,
        "guid_price": 20.08
      },{
        "id": 4,
        "car_image":"/resources/images/4_2.jpg",
        "car_description": "纯天然、无污染，健康绿色食品",
        "price": 14.35,
        "guid_price": 20.08
      },{
        "id": 5,
        "car_image":"/resources/images/4_3.jpg",
        "car_description": "纯天然、无污染，健康绿色食品",
        "price": 14.35,
        "guid_price": 20.08
      },{
        "id": 5,
        "car_image":"/resources/images/4_4.jpg",
        "car_description": "纯天然、无污染，健康绿色食品",
        "price": 14.35,
        "guid_price": 20.08
      }
    ]
  },
  onLoad: function () {
    console.log('onLoad')
  },
  onPullDownRefresh: function() {
    console.log('下拉刷新...');
  },
  buy: function(e) {
    console.info("id", e.currentTarget.id);
    wx.navigateTo({url: '/pages/Detail/Detail?id=' + e.currentTarget.id});
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
