// pages/work/work.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    logs: {
      icon: '../../imag/电脑.png',
      name: '电脑',
      phone: 'PG-fz88888'
    },
    list: [{
      BM: "销售部",
      MZ: "李某某",
      name: '维修人员预计1小时后处理工单，维修人员预计1小时后处理工单',
      start: ' 已分配',
      status: '电脑/硬件/无法启动',
      time: '2018/08/13 12:03:21',
      color: "green",
      url: '../work/work',
      ZT: 0
    },
    {
      BM: "人事部",
      MZ: "张某某",
      name: '拉闸了，快走算了',
      start: ' 维修中',
      status: '电话/无法通讯',
      time: '2018/08/23 02:08:22',
      color: "yellow",
      url: '../work/work',
      ZT: 1,
    
    },
      {
        BM: "人事部",
        MZ: "张某某",
        name: '拉闸了，快走算了',
        start: ' 维修中',
        status: '电话/无法通讯',
        time: '2018/08/23 02:08:22',
        color: "yellow",
        url: '../work/work',
        ZT: 1,

      }],
      ZT:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
       ZT: options.ZT
    })
    console.log(options.ZT)
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
  
  }
})