// pages/contact/contact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageurl:[ "https://m.qpic.cn/psb?/V14JKMah3aH4MD/QMsxGcLvsfNpNR.S1XWzSNMvxnAX7fRqP7WZxYddUZM!/b/dEYBAAAAAAAA&bo=nASVAgAAAAARBz8!&rf=viewer_4",
    "https://m.qpic.cn/psb?/V14JKMah3aH4MD/*aEpXTq4ZN2ltTxWaCyqg4bFeXpLfaLEJA3SojkeCGk!/b/dL8AAAAAAAAA&bo=oAU4BAAAAAARB6k!&rf=viewer_4"],
    indicatorDots: false,
    autoplay: true,
    interval1: 5000,
    duration: 1000,
    circular: true,
    indicator: true,
    xiang: "公司一直以“质量第一，信誉为本”的服务宗旨，以专业的人才，精良的设备，尖端的技术为基本，以诚信服务为宗旨，以提高产品质量和生产效率为目标不断努力……",
    phone: "0898-88337544",
    tousu: "18898978808",
    address: "海南省三亚市天涯区凤凰镇火车头鸿运达综合市场 26-28号",
    erwei:"http://m.qpic.cn/psb?/V14JKMah3aH4MD/lp6iv5j08bpju5*gFgAoUfrYtlKdtUvQWBOoUEpgTrA!/b/dDcBAAAAAAAA&bo=GQINAgAAAAARFzQ!&rf=viewer_4",
    hezuo:[
      "http://m.qpic.cn/psb?/V14JKMah3aH4MD/2HJe.KOuOP2dMRkIDjQw0hy*SPl4byW2VcnW5MTrrm4!/b/dMMAAAAAAAAA&bo=OASgBQAAAAARF7k!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14JKMah3aH4MD/z3Kqjh.AIur0cPy5qt.Ht9kepjQP48L7*62Xr1ZHf4Q!/b/dLgAAAAAAAAA&bo=OASgBQAAAAARF7k!&rf=viewer_4"
    ]

  },
  totousu:function(){
    wx.makePhoneCall({
      phoneNumber: '18898978808',
    })
  },
  tophone: function () {
    wx.makePhoneCall({
      phoneNumber: '0898-88337544',
    })
  },
  totianxiphone: function () {
    wx.makePhoneCall({
      phoneNumber: '18138911297',
    })
  },
  previewImage: function (e) {
   
    console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.imageurl;
    wx.previewImage({
      current: imgArr[index],     //当前图片地址
      urls: imgArr,               //所有要预览的图片的地址集合 数组形式
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  previewImage1: function (e) {
    console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.erwei;
    wx.previewImage({
      current: imgArr[index],     //当前图片地址
      urls: imgArr.split(','),               //所有要预览的图片的地址集合 数组形式
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  previewImage2: function (e) {

    console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.hezuo;
    wx.previewImage({
      current: imgArr[index],     //当前图片地址
      urls: imgArr,               //所有要预览的图片的地址集合 数组形式
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  click: function (e) {
    wx.openLocation({
      latitude: 18.307144,
      longitude: 109.5005,
      scale: 15,
      name: '海南金皇冠幕墙门窗科技有限公司',
      address: '海南省三亚市天涯区凤凰镇火车头鸿运达综合市场 26-28号'
    })
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