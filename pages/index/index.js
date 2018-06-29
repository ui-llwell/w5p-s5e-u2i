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
      // unreadNum: 2
    }, {
      icon: '',
      text: '联系客服',
      isunread: false,
      // unreadNum: 1
    }, {
      icon: '',
      text: '关于我们'
    }],
    orderStatus:[
      {
        url:'',
        image:'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/Store/icon_unpaid@3x.png',
        text:'代付款',
      },{
        url: '',
        image: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/Store/icon_waiting_for_delivery@3x.png',
        text: '代发货',
      },{
        url: '',
        image: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/Store/icon_waiting_for_the_goods@3x.png',
        text: '待收货',
      }, {
        url: '',
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

})