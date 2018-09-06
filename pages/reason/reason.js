// pages/reason/reason.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    routers: [{
        name: '无法启动',
        url: '../added/added',
      },
      {
        name: '无法连接设备',
        url: '',
      },
      {
        name: '无发对焦',
        url: '',
      },
      {
        name: '外接设备损坏',
        url: '',
      },
      {
        name: '外观破损',
        url: '',
      },
      {
        name: '遥控器失灵',
        url: '',
      },
      {
        name: '其他',
        url: '',
      }
    ]
  },
  gridtop: function() {
    wx.navigateTo({
      url: '../added/added'
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})