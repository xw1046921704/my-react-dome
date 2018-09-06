// pages/record/record.js
var sliderWidth = 30; // 需要设置slider的宽度，用于计算中间位置
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [{
      name: "等待中",
      number: 3
    }, {
      name: "处理中",
      number: 1
    }, {
      name: "待评价",
      number: 2
    }, {
      name: "全部",
      number: 6
    }],
    activeIndex: 0,
    sliderOffset: 1,
    sliderLeft: 0,
    list: [{
        BM: "销售部",
        MZ: "李某某",
        name: '张某某部长电话有点问题，速度来弄一下。',
        start: ' 等待中',
        status: '电脑/硬件/无法启动',
        time: '2018/08/09',
        color: "green",
        ZT: 0
      },
      {
        BM: "销售部",
        MZ: "李某某",
        name: '张某某部长电话有点问题，速度来弄一下。',
        start: ' 等待中',
        status: '电脑/软件/无法启动',
        time: '2018/08/08',
        color: "green",
        ZT: 0
      },
      {
        BM: "销售部",
        MZ: "李某某",
        name: '八号会议室的投影仪有问题，速度来，速度来八号会议室的投影仪有问题，速度来，速度来八号会议室的投影仪有问题，速度来，速度来',
        start: ' 等待中',
        status: '投影仪/无法启动',
        time: '2018/08/09',
        color: "green",
        ZT: 0
      },
      {
        BM: "人事部",
        MZ: "张某某",
        name: '八号会议室的投影仪有问题，速度来，速度来八号会议室的投影仪有问题，速度来，速度来八号会议室的投影仪有问题，速度来，速度来',
        start: ' 维修中',
        status: '电话/无法通讯',
        time: '2018/08/08',
        color: "yellow",
        ZT: 1
      },
      {
        BM: "人事部",
        MZ: "张某某",
        name: '八号会议室的投影仪有问题，速度来，速度来八号会议室的投影仪有问题，速度来，速度来八号会议室的投影仪有问题，速度来，速度来',
        start: ' 待评价',
        status: '电话/无法通讯',
        time: '2018/08/08',
        color: "red",
        ZT: 2
      },
      {
        BM: "人事部",
        MZ: "张某某",
        name: '八号会议室的投影仪有问题，速度来，速度来八号会议室的投影仪有问题，速度来，速度来八号会议室的投影仪有问题，速度来，速度来',
        start: ' 待评价',
        status: '电脑/无法启动',
        time: '2018/08/08',
        color: "red",
        ZT: 2
      },

      {
        BM: "ICT部",
        MZ: "赵某某",
        name: '八号会议室的投影仪有问题，速度来，速度来',
        start: ' 已完成',
        status: '电脑/软件/不能启动',
        time: '2018/08/08',
        color: "red",
        ZT: 3
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  tabClick: function(e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
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

  },
  // onTouchstartArticles: function(e) {
  //  //console.log(e.changedTouches[0].clientX)
  //   var that = this;
  //   console.log(that.data.activeIndex)
  //   that.setData({
  //     activeIndex: that.data.activeIndex+1,
  //     sliderOffset: that.data.sliderOffset+100
  //   })
  //   //console.log(1)
  //   this.setData({
  //     'startTouchs.x': e.changedTouches[0].clientX,
  //     'startTouchs.y': e.changedTouches[0].clientY
  //   });
  // },
  // onTouchendArticles: function(e) {
  //   let deltaX = e.changedTouches[0].clientX - this.data.startTouchs.x;
  //   let deltaY = e.changedTouches[0].clientY - this.data.startTouchs.y;
  //   if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 10) {
  //     let deltaNavbarIndex = deltaX > 0 ? -1 : 1;
  //     let currentChannelIndex = this.data.currentChannelIndex;
  //     let navbarShowIndexArray = this.data.navbarShowIndexArray;
  //     let targetChannelIndexOfNavbarShowIndexArray = navbarShowIndexArray.indexOf(currentChannelIndex) + deltaNavbarIndex;
  //     let navbarShowIndexArrayLength = navbarShowIndexArray.length;
  //     if (targetChannelIndexOfNavbarShowIndexArray >= 0 && targetChannelIndexOfNavbarShowIndexArray <= navbarShowIndexArrayLength - 1) {
  //       let targetChannelIndex = navbarShowIndexArray[targetChannelIndexOfNavbarShowIndexArray];
  //       if (navbarShowIndexArrayLength > 6) {
  //         let scrollNavbarLeft;
  //         if (targetChannelIndexOfNavbarShowIndexArray < 5) {
  //           scrollNavbarLeft = 0;
  //         } else if (targetChannelIndexOfNavbarShowIndexArray === navbarShowIndexArrayLength - 1) {
  //           scrollNavbarLeft = this.rpx2px(110 * (navbarShowIndexArrayLength - 6));
  //         } else {
  //           scrollNavbarLeft = this.rpx2px(110 * (targetChannelIndexOfNavbarShowIndexArray - 4));
  //         }
  //         console.log(scrollNavbarLeft)
  //         this.setData({
  //           scrollNavbarLeft: scrollNavbarLeft
  //         });
  //       }
  //       this.switchChannel(targetChannelIndex);
  //     }
  //   }
  // }
})