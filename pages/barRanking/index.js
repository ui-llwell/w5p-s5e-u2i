// pages/authorize/index.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    category: [
      { name: '推荐分类', id: 'a' },
      { name: '美容院系', id: 'b' },
      { name: '美容护肤', id: 'c' },
      { name: '彩妆香水', id: 'd' },
      { name: '个人护理', id: 'e' },
      { name: '母婴用品', id: 'f' },
      { name: '服饰箱包', id: 'g' },
    ],
    context: [
     {
        id:'a',
        unit:[
          {
            cate: '面部护理',
            detail: [
              {
                thumb: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/goodtest.png',
                name: '护手霜'
              },
              {
                thumb: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/goodtest.png',
                name: '护手霜'
              }, {
                thumb: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/goodtest.png',
                name: '护手霜'
              }, {
                thumb: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/goodtest.png',
                name: '护手霜'
              }, {
                thumb: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/goodtest.png',
                name: '护手霜'
              }, {
                thumb: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/goodtest.png',
                name: '护手霜'
              }, {
                thumb: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/goodtest.png',
                name: '护手霜'
              }, {
                thumb: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/goodtest.png',
                name: '护手霜'
              }, {
                thumb: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/goodtest.png',
                name: '护手霜'
              }, {
                thumb: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/goodtest.png',
                name: '护手霜'
              }, {
                thumb: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/goodtest.png',
                name: '护手霜'
              }, {
                thumb: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/goodtest.png',
                name: '护手霜'
              }, {
                thumb: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/goodtest.png',
                name: '护手霜'
              },
            ]
          },
          {
            cate: '防晒修护',
            detail: [
              {
                thumb: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/goodtest.png',
                name: '护手霜'
              },
              {
                thumb: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/goodtest.png',
                name: '护手霜'
              }, {
                thumb: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/goodtest.png',
                name: '护手霜'
              },
            ]
          },
          {
            cate: '唇部护理',
            detail: [
              {
                thumb: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/goodtest.png',
                name: '护手霜'
              },
              {
                thumb: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/goodtest.png',
                name: '护手霜'
              }, {
                thumb: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/goodtest.png',
                name: '护手霜'
              },
            ]
          },
          {
            cate: '其他',
            detail: [
              {
                thumb: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/goodtest.png',
                name: '护手霜'
              },
              {
                thumb: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/goodtest.png',
                name: '护手霜'
              }, {
                thumb: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/goodtest.png',
                name: '护手霜'
              },
            ]
          },
          // {
          //   cate: '面部护理',
          //   detail: [
          //     {
          //       thumb: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/goodtest.png',
          //       name: '护手霜'
          //     },
          //     {
          //       thumb: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/goodtest.png',
          //       name: '护手霜'
          //     }, {
          //       thumb: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/goodtest.png',
          //       name: '护手霜'
          //     },

          //   ]
          // }
        ],
       
     },
     {
       id: 'b',
       unit: [
         {
           cate: '面部护理',
           detail: [
             {
               thumb: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/goodtest.png',
               name: '护手霜'
             },
             {
               thumb: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/goodtest.png',
               name: '护手霜'
             }, {
               thumb: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/goodtest.png',
               name: '护手霜'
             },
           ]
         }, {
           cate: '面部护理',
           detail: [
             {
               thumb: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/goodtest.png',
               name: '护手霜'
             },
             {
               thumb: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/goodtest.png',
               name: '护手霜'
             }, {
               thumb: 'http://llwell-wxapp.oss-cn-beijing.aliyuncs.com/A-test/goodtest.png',
               name: '护手霜'
             },
           ]
         }
         ]
     },{
       id: 'c',
       unit:[],
     }, {
       id: 'd',
       unit: [],
     }, {
       id: 'e',
       unit: [],
     }, {
       id: 'f',
       unit: [],
     }, {
       id: 'g',
       unit: [],
     }
    ],
    curIndex: 0,
    isScroll: false,
    toView: 'guowei'
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
    var self = this;
    // wx.request({
    //   url: 'http://www.gdfengshuo.com/api/wx/cate-detail.txt',
    //   success(res) {
    //     self.setData({
    //       detail: res.data
    //     })
    //   }
    // });
  },
  switchTab(e) {
    const self = this;
    this.setData({
      isScroll: true
    })
    setTimeout(function () {
      self.setData({
        toView: e.target.dataset.id,
        curIndex: e.target.dataset.index
      })
    }, 0)
    setTimeout(function () {
      self.setData({
        isScroll: false
      })
    }, 1)

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