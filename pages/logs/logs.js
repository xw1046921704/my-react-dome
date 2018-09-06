//logs.js
// const util = require('../../utils/util.js')

Page({
  data: {
    logs: {
      icon: '../../imag/个人中心 2.png',
      name: '李斯',
      phone: '13564841175'
    },
    routers: [{
        name: '休假申请',
        url: '../entry/entry',
        icon: '../../imag/工单记录.png'
      },
      {
        name: '公出申请',
        url: '../entry/entry',
        icon: '../../imag/质检点检验.png'
      },
      {
        name:'暂不接单',
        url:'../entry/entry',
        icon:'../../imag/工单记录.png'
      }
    ]
  },
  onLoad: function() {
    // this.setData({
    //   logs: (wx.getStorageSync('logs') || []).map(log => {
    //     return util.formatTime(new Date(log))
    //   })
    // })
  }
})