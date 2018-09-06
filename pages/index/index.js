//index.js
//获取应用实例
const app = getApp()

Page({

  a: function() {

  },
  data: {
    userInfo: {},
    hasUserInfo: false,
    routers: [{
        name: '报修',
        url: '../entry/entry',
        icon: '../../imag/报修.png'
      },
      {
        name: '报修记录',
        url: '../record/record',
        icon: '../../imag/报修记录.png'
      },
      {
        name: '工单记录',
        url: '../entry/entry',
        icon: '../../imag/工单记录.png'
      },
      {
        name: '设备检点',
        url: '../entry/entry',
        icon: '../../imag/质检点检验.png'
      },
      {
        name: '个人中心',
        url: '../logs/logs',
        icon: '../../imag/个人中心 2.png'
      }
    ],
    list: [{
        BM: "销售部",
        MZ: "李某某",
        name: '张某某部长电话有点问题，速度来弄一下。',
        start: ' 等待中',
        status: '电脑/硬件/无法启动',
        time: '2018/08/08',
        color: "green",
        url:'../work/work',
        ZT: 0,
        bgImg: '../../imag/催.png'
      },
      {
        BM: "人事部",
        MZ: "张某某",
        name: '八号会议室的投影仪有问题，速度来，速度来八号会议室的投影仪有问题，速度来，速度来八号会议室的投影仪有问题，速度来，速度来',
        start: ' 维修中',
        status: '电话/无法通讯',
        time: '2018/08/08',
        color: "yellow",
        url: '../work/work',
        ZT: 1,
        bgImg: ''

      },
      {
        BM: "ICT部",
        MZ: "赵某某",
        name: '八号会议室的投影仪有问题，速度来，速度来',
        start: ' 已完成',
        status: '电脑/软件/不能启动',
        time: '2018/08/08',
        url: '../work/work',
        color: "red",
        ZT: 3
      }
    ],
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    movies: [{
        url: '../../imag/169458683.jpg'
      },
      {
        url: '../../imag/150555818.jpg'
      }
    ]
  },
  onshow: function() {
    console.log(1)
  },
  showInput: function() {
    console.log(1)
  },
  //撤单操作
  Reminder: function(e) {
    wx.showModal({
      title: '撤单',
      content: '是否撤回该工作单',
      confirmText: "确定撤回",
      cancelText: "确定撤回",
      success: function(res) {
        console.log(res);
        if (res.confirm) {
          console.log('确定撤回')
        } else {
          console.log('确定撤回')
        }
      }
    });
  },
  openToast: function () {
    wx.showToast({
      title: '已完成',
      icon: 'success',
      duration: 3000
    });
  }
})