//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imag: [
      {
        name: "行业优秀",
        url: "../../icon/youxiu.png"
      },
      {
        name: "精工细作",
        url: "../../icon/jinggong.png"
      },
      {
        name: "高性价比",
        url: "../../icon/xingjiabi.png"
      },
      {
        name: "质量服务",
        url: "../../icon/anquan.png"
      }
    ],
    imgUrls: [
      "https://m.qpic.cn/psb?/V14JKMah3aH4MD/QMsxGcLvsfNpNR.S1XWzSNMvxnAX7fRqP7WZxYddUZM!/b/dEYBAAAAAAAA&bo=nASVAgAAAAARBz8!&rf=viewer_4",
      'https://m.qpic.cn/psb?/V14JKMah3aH4MD/Dm3WpporBIk1F8qxkA9nYTqu77SBeMWHWRJtIMNhQwA!/b/dL8AAAAAAAAA&bo=oAU4BAAAAAARB6k!&rf=viewer_4',
      'http://m.qpic.cn/psb?/V14JKMah3aH4MD/dFk6uwJper2hbqEu8hd*Zmh6SCxSV3ms.T9vzQ5xIp8!/b/dDABAAAAAAAA&bo=oAU4BAAAAAARJ4k!&rf=viewer_4',
      'http://m.qpic.cn/psb?/V14JKMah3aH4MD/kmbqm8rVvw0j0KHIiJFFzI3cqMTUPtTxT2LJMSJu1C8!/b/dL4AAAAAAAAA&bo=OAQ4BAAAAAARFyA!&rf=viewer_4'

    ],
    indicatorDots: false,
    autoplay: true,
    interval1: 5000,
    duration: 1000,
    circular: true,
    indicator: true,
    wujintext: "海南金皇冠",
    jianjie: "本公司是一家集铝合金装饰门开发、生产、销售为一体的综合性企业，拥有一批强有力的生产技术人员及雄厚的综合开发能力。产品采用国际先进喷涂技术，确保产品具有环保、耐用、防潮、耐腐蚀、不褪色、隔音效果好的特点。一流的表面处理、先进的设备、超前的设计、精细的工艺，无论款式、性能还是质量均属上乘，被广泛应于别墅、酒店、住宅等高级建筑的门窗、推拉隔断、阳光房……，产品设计新颖，结构强硬，自投入市场以来深受客户一致好评。",

    
    imag1:["http://m.qpic.cn/psb?/V14JKMah3aH4MD/94Zc07jJAm8xPGIHrpefT*2qsK5RZzf4BEkj2RX2Tes!/b/dDUBAAAAAAAA&bo=OAQ4BAAAAAARFyA!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14JKMah3aH4MD/2HJe.KOuOP2dMRkIDjQw0hy*SPl4byW2VcnW5MTrrm4!/b/dMMAAAAAAAAA&bo=OASgBQAAAAARF7k!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14JKMah3aH4MD/Bafws5YUDUjNenEyISCSUQrYhPwkXok6fSag1grOfic!/b/dL8AAAAAAAAA&bo=IANYAgAAAAARF1k!&rf=viewer_4"
    ],
    
    aid: 0,
    shenchanghuanji:[
      "http://m.qpic.cn/psb?/V14JKMah3aH4MD/4QA0feuU47jHqNTaBsooj1JZt1mi9zHp61jc*nO.DWo!/b/dLYAAAAAAAAA&bo=OQQ4BAAAAAARFyE!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14JKMah3aH4MD/34KY5QZmQS6zpTvLmVmAFwEu.hWwj8MtemK2B93ZB7E!/b/dL4AAAAAAAAA&bo=vQJ.AAAAAAARF.E!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14JKMah3aH4MD/Jn9wt*dEuepmOzHpel4OTr*NG5Z6OeiboWM.E1pyyu0!/b/dL8AAAAAAAAA&bo=oAU4BAAAAAARJ4k!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14JKMah3aH4MD/k2IEg9IWfOOlrnwGLMm9GxhONPG3Zr2Is80o9r*HJ3Q!/b/dDEBAAAAAAAA&bo=OASgBQAAAAARJ4k!&rf=viewer_4",
      "http://m.qpic.cn/psb?/V14JKMah3aH4MD/72UBk*qQ*Mbfyb0sPhmMnDiC7xxmb6Dk9oaNMwWV8kc!/b/dE4BAAAAAAAA&bo=OASgBQAAAAARF7k!&rf=viewer_4"
    ]
  },
  previewImage: function (e) {
    console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.imgUrls;
    wx.previewImage({
      current: imgArr[index],     //当前图片地址
      urls: imgArr,               //所有要预览的图片的地址集合 数组形式
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  previewImage1: function (e) {
    this.setData({
      xiang: e.currentTarget.dataset.xiang
    })

    console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.xiang;
    wx.previewImage({
      current: imgArr[index],     //当前图片地址
      urls: imgArr.split(','),               //所有要预览的图片的地址集合 数组形式
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
   previewImage2: function (e) {
      this.setData({
        xiang:e.currentTarget.dataset.xiang
      })

    console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
     var imgArr = this.data.shenchanghuanji;
    wx.previewImage({
      current: imgArr[index],     //当前图片地址
      urls: imgArr,              //所有要预览的图片的地址集合 数组形式
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    }) 
  },
  toxiangqing: function (e) {
    this.setData({
      aid: e.currentTarget.dataset.index
    })
    wx.navigateTo({
      url: '../../pages/xiangqing/xiangqing?aid=' + this.data.aid + "&img=" + encodeURIComponent(JSON.stringify(this.data.img)),
    })
  },
  totianxiphone: function () {
    wx.makePhoneCall({
      phoneNumber: '18138911297',
    })
  },
  tophone: function () {
    wx.makePhoneCall({
      phoneNumber: '17819866722',
    })
  },
  //事件处理函数

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onShareAppMessage: function () {

  }
})
