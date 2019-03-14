
var carDetailFromServer = {
	"processPhotoList": [{
		"photo": "/resources/images/4brandChange8.png"
	}],
	"earnestMoney": "199",
	"typeMap": {
		"Yeti 2014款 1.4TSI DSG极地版": [{
			"saveMoney": 57,
			"num": "38",
			"tprice": "20.08",
			"color": "戈壁棕+黑内",
			"cprice": "14.38",
			"typeId": "120"
		},
		{
			"saveMoney": 57,
			"num": "96",
			"tprice": "20.08",
			"color": "戈壁棕+米内",
			"cprice": "14.38",
			"typeId": "121"
		},
		{
			"saveMoney": 57,
			"num": "95",
			"tprice": "20.08",
			"color": "藏野黑+黑内",
			"cprice": "14.38",
			"typeId": "122"
		},
		{
			"saveMoney": 57,
			"num": "97",
			"tprice": "20.08",
			"color": "藏野黑+米内",
			"cprice": "14.38",
			"typeId": "123"
		},
		{
			"saveMoney": 57,
			"num": "93",
			"tprice": "20.08",
			"color": "旷野灰+黑内",
			"cprice": "14.38万",
			"typeId": "125"
		},
		{
			"saveMoney": 57,
			"num": "81",
			"tprice": "20.08",
			"color": "旷野灰+米内",
			"cprice": "14.38",
			"typeId": "126"
		}],
		"Yeti 2014款 1.4TSI DSG野驱版": [{
			"saveMoney": 54,
			"num": "98",
			"tprice": "21.98",
			"color": "戈壁棕+米内",
			"cprice": "16.58",
			"typeId": "103"
		}]
	},
	"colors": ["戈壁棕+米内",
	"戈壁棕+黑内",
	"藏野黑+黑内",
	"藏野黑+米内",
	"旷野灰+黑内",
	"旷野灰+米内"],
	"minType": {
		"Yeti 2014款 1.4TSI DSG极地版": {
			"num": "81",
			"tprice": "20.08",
			"color": "旷野灰+米内",
			"cprice": "14.38",
			"typeId": "126"
		}
	},
  "photo": "/resources/images/4_2.jpg",
	"url": "http:\/\/m.chetuan.com\/temaihui\/series_68\/",
  "shareMsg": "纯天然、无污染，健康绿色食品,购买即送老板娘精心准备礼品,数量有限,赶快下单吧！http:\/\/m.chetuan.com\/temaihui\/series_68\/",
	"detailPhotowhList": [""],
	"saveMoney":35,
	"temaihuiId": "68",
	"title": "购车即送老板娘神秘礼品一份",
	"detailPhotoList": [{
		"photo": "/resources/images/4_1.png"
	}],
	"csPrice": "16.58",
  "carName": "纯天然、无污染，健康绿色食品",
	"tmPrice": "20.08"
};

Page({
  data: {
    carDetail: {},
	currentSelect:{
			"saveMoney": 57,
			"num": "38",
			"tprice": "20.08",
			"color": "戈壁棕+黑内",
			"cprice": "14.",
			"typeId": "120"
		}
  },
  onLoad: function (option) {
    wx.showToast({title: "加载中"  , icon: "loading"});
    var carId = option.id;
    this.setData({carDetail: carDetailFromServer});

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

