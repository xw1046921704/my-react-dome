// pages/added/added.js
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
    imgalist:[
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496287851&di=0a26048f586b852193cb5026d60c4fad & imgtype=jpg & er=1 & src=http % 3A % 2F % 2Fpic.58pic.com % 2F58pic % 2F12 % 2F74 % 2F05 % 2F99C58PICYck.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496287851&di=0a26048f586b852193cb5026d60c4fad & imgtype=jpg & er=1 & src=http % 3A % 2F % 2Fpic.58pic.com % 2F58pic % 2F12 % 2F74 % 2F05 % 2F99C58PICYck.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495693185413&di=0d0acdebf0f532edd0fcdb76265623c5 & imgtype=0 & src=http % 3A % 2F % 2Fimg1.3lian.com % 2Fimg013 % 2Fv3 % 2F2 % 2Fd % 2F61.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495693185413&di=0d0acdebf0f532edd0fcdb76265623c5 & imgtype=0 & src=http % 3A % 2F % 2Fimg1.3lian.com % 2Fimg013 % 2Fv3 % 2F2 % 2Fd % 2F61.jpg'
    ],
    isChecked1: false,
    Checked1Text:'关'
  },
  //图片预览
  previewImage: function (e) {
    var current = e.target.dataset.src;
    console.log(current);
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: this.data.imgalist // 需要预览的图片http链接列表
    })
  },  
  changeSwitch1:function(e){
    var isChecked1 = e.detail.value;
    if (isChecked1){
      this.setData({
        isChecked1: isChecked1,
        Checked1Text:"开"
      }); 
    }else{
      this.setData({
        isChecked1: isChecked1,
        Checked1Text: "关"
      }); 
    }  
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
  
  }
})