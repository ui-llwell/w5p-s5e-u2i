// pages/authorize/index.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    projectSource: 'https://github.com/liuxuanqiang/wechat-weapp-mall',
    userListInfo: [{
      icon: '',
      text: '我的订单',
      isunread: false ,
      url:'../indexx/index',
      order:true
      // unreadNum: 2
    }, {
      icon: '',
      text: '我的地址',
      isunread: false,
      method:'getAddress',
      // unreadNum: 2
    }, {
      icon: '',
      text: '联系客服',
      isunread: false,
      connect:true
      // unreadNum: 1
    }, {
      icon: '',
      text: '关于我们',
      url: '../aboutUs_s/index',
    }],
    orderStatus:[
      {
        url: '',
        methodStatus:'orderNopay',
        image:'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/Store/icon_unpaid@3x.png',
        text:'待付款',
      },{
        url: '',
        methodStatus: 'orderNosend',
        image: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/Store/icon_waiting_for_delivery@3x.png',
        text: '待发货',
      },{
        url: '',
        methodStatus: 'orderNoget',
        image: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/Store/icon_waiting_for_the_goods@3x.png',
        text: '待收货',
      }, {
        url: '',
        methodStatus: 'orderFinish',
        image: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/Store/icon_finish@3x.png',
        text: '已完成',
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // 待付款
  orderNopay:function(){
    console.log(1);
    wx.navigateTo({
      url: '../aboutUs_s/index?id=1'
    })
  },
  // 待发货
  orderNosend: function () {
    console.log(2);
  },
  // 待收货
  orderNoget: function () {
    console.log(3);
  },
  // 待完成
  orderFinish: function () {
    console.log(4);
  },
  getAddress: function () {
    var that = this;
    wx.getSetting({
      success(res) {
        // console.log('成功输出')
        if (!res.authSetting['scope.address']) {
          wx.authorize({
            scope: 'scope.address',
            success() {
              wx.chooseAddress({
                success: function (res) {
                  that.setData({
                    inputPerson: res.userName,
                    inputAddress: res.provinceName + res.cityName + res.countyName + res.detailInfo,
                    inputPhone: res.telNumber,
                  });
                }
              })
            }
          })
        } else {
          // console.log('失败输出')
          wx.chooseAddress({
            success: function (res) {
              that.setData({
                inputPerson: res.userName,
                inputAddress: res.provinceName + res.cityName + res.countyName + res.detailInfo,
                inputPhone: res.telNumber,
              });
            }
          })
        }
      }
    })
  },
})