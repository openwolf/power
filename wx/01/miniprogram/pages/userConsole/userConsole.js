// pages/userConsole/userConsole.js
Page({

  data: {
    openid: ''
  },

  onLoad: function (options) {
    this.setData({
      openid: getApp().globalData.openid
    })

      wx.setNavigationBarTitle({
          title: '当前页面'
      })

  }
})