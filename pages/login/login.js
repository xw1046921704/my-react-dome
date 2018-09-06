// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    GS: ["小松上海本部", "小松常州", "上海携景"],
    GSIndex: 0,
    countries: ["ICT部", "人事部", "IT部","售后部"],
    countryIndex: 0,
    DH: ['0731-6119921', '0731-6119922', '0731-6119923', '0731-6119924','0731-6119925'],
    DHIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "注册"//页面标题为路由参数
    })
  
  },
  bindCountryChange: function (e) {
    this.setData({
      countryIndex: e.detail.value
    })
  },
  bindDHChange: function (e) {
    this.setData({
      DHIndex: e.detail.value
    })
  },
  bindGSChange: function (e) {
    this.setData({
      GSIndex: e.detail.value
    })
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