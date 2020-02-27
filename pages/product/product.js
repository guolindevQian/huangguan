// pages/product/product.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    category: ['产品', '案例展示'],
    currentTab: 0,
    isScroll: false,
    anli:[
      {
        url:"http://m.qpic.cn/psb?/V14JKMah3aH4MD/fPpDsx2ebSlTahzzUjYO3XR5yyfXAsAuYC0UP5I*knI!/b/dLYAAAAAAAAA&bo=IALAAwAAAAARF8E!&rf=viewer_4",
    video:"https://wx.aijiakongjian.com/addons/zjhj_mall/core/web/uploads/video/store_1/52933426c553b08bba908970a19d23051f8e19b2.mp4"
      },
      
      {
        url: "http://m.qpic.cn/psb?/V14JKMah3aH4MD/i62mkD4RE0L0ZxNkmJVhzJ8jFa8RcJQyRrJgXr3hAlU!/b/dL4AAAAAAAAA&bo=HALAAwAAAAARF*0!&rf=viewer_4",
    video:"https://wx.aijiakongjian.com/addons/zjhj_mall/core/web/uploads/video/store_1/71b1e92e29ca3251a797a06f67af040f42c50471.mp4"
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah3aH4MD/uzjCUFGWRyQWC4Bax6r96lWMIO199F6zCO1ue00HSSY!/b/dMUAAAAAAAAA&bo=IALAAwAAAAARF8E!&rf=viewer_4",
    video:"https://wx.aijiakongjian.com/addons/zjhj_mall/core/web/uploads/video/store_1/2bd9d49cdbdbca5af615f128ae6c083499613220.mp4"
      },
      {
        url: "https://m.qpic.cn/psb?/V14JKMah3aH4MD/NLrhB*5LLa*vEPw5qYtL82DbJZvyPkxiOIEO3G9wdn0!/b/dL8AAAAAAAAA&bo=RAGsAgAAAAADB8k!&rf=viewer_4",
    video:"https://wx.aijiakongjian.com/addons/zjhj_mall/core/web/uploads/video/store_1/422f24655c160b9ab4eff405654080852e757a0c.mp4"
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah3aH4MD/J1W9Zbh1.eFZCrqlKK8VsRPw.vjy21Gr2Bar1QNRwd0!/b/dL8AAAAAAAAA&bo=UAGoAgAAAAADJ*k!&rf=viewer_4",
    video:"https://wx.aijiakongjian.com/addons/zjhj_mall/core/web/uploads/video/store_1/4db150120d05d72f511ea49fe25f1802b9604469.mp4"
      },
      
      {
        url: "https://wx.aijiakongjian.com/addons/zjhj_mall/core/web/uploads/image/store_1/c8da7041d758545c48986df7d5fa4327262e9027.png",
        video: "https://wx.aijiakongjian.com/addons/zjhj_mall/core/web/uploads/video/store_1/f964cefbe631fe2cb64043b08607a53d1bd52df7.mp4"
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah3aH4MD/CbyjeFSIdMxIa.ZSkaL5Tx39MPHDJl38MA5mS35YBtE!/b/dL8AAAAAAAAA&bo=NgSgBQAAAAARF7c!&rf=viewer_4",
        urlimag: [
           "http://m.qpic.cn/psb?/V14JKMah3aH4MD/CbyjeFSIdMxIa.ZSkaL5Tx39MPHDJl38MA5mS35YBtE!/b/dL8AAAAAAAAA&bo=NgSgBQAAAAARF7c!&rf=viewer_4",
         "http://m.qpic.cn/psb?/V14JKMah3aH4MD/035Aqql7579*i5QNIM7T9AVwgCjjsGfDDYeAXuj2jU4!/b/dDEBAAAAAAAA&bo=OAQ4BAAAAAARFyA!&rf=viewer_4",
         "http://m.qpic.cn/psb?/V14JKMah3aH4MD/SP4p0wIZE9Kv.Kkg1DH.0MVf0JB4IlkjlUZ18zNy4.8!/b/dL8AAAAAAAAA&bo=OAQ4BAAAAAARFyA!&rf=viewer_4",
         "http://m.qpic.cn/psb?/V14JKMah3aH4MD/94Zc07jJAm8xPGIHrpefT*2qsK5RZzf4BEkj2RX2Tes!/b/dDUBAAAAAAAA&bo=OAQ4BAAAAAARFyA!&rf=viewer_4",
         "http://m.qpic.cn/psb?/V14JKMah3aH4MD/bNWes1YtvId*HjGLXAI*h9DrVslQXuxat8ljsBA32ms!/b/dL8AAAAAAAAA&bo=NgSgBQAAAAARF7c!&rf=viewer_4"
       
        ],
        name: "产品推荐"
      }
    ],
    img: [
      {
        url: "http://m.qpic.cn/psb?/V14JKMah3aH4MD/vNPB5qyfGz76hSxVHRxFukAxZyiqrnur3UEAM5L*ToI!/b/dFMBAAAAAAAA&bo=oAU4BAAAAAARJ4k!&rf=viewer_4",
        urlimag: [
          "http://m.qpic.cn/psb?/V14JKMah3aH4MD/vNPB5qyfGz76hSxVHRxFukAxZyiqrnur3UEAM5L*ToI!/b/dFMBAAAAAAAA&bo=oAU4BAAAAAARJ4k!&rf=viewer_4", 
           "http://m.qpic.cn/psb?/V14JKMah3aH4MD/rS289hlkK6.JNTtOxh8ULilAPjpNtcMS9moPL0ww9Wg!/b/dDQBAAAAAAAA&bo=OASgBQAAAAARJ4k!&rf=viewer_4",
          "http://m.qpic.cn/psb?/V14JKMah3aH4MD/9rvbsaa*v0qFDKzfn5kvcXZM6CijFEup*mYGRseJ5gg!/b/dLYAAAAAAAAA&bo=OASgBQAAAAARN5k!&rf=viewer_4",
           "https://m.qpic.cn/psb?/V14JKMah3aH4MD/YcayvQPhTyI2ZR4W7o8twCCiZQiOMp7TV.hMnhwhEOs!/b/dEEBAAAAAAAA&bo=OASABwAAAAARB4s!&rf=viewer_4",
          "http://m.qpic.cn/psb?/V14JKMah3aH4MD/auBy6PXdPMNPFuWV0cjezFv8vxAWuQAi17K7HuhL0UY!/b/dMMAAAAAAAAA&bo=OASgBQAAAAARF7k!&rf=viewer_4"
          
        ],
        name: "重型推拉门190系列",
        jieshao:"重型推拉门：190系列，断桥窗纱一体，2.0mm厚材料，5+12A+5中空玻璃。隔音隔热效果更强。搭配希美克五金配件，提升产品使用品质"
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah3aH4MD/kmbqm8rVvw0j0KHIiJFFzI3cqMTUPtTxT2LJMSJu1C8!/b/dL4AAAAAAAAA&bo=OAQ4BAAAAAARFyA!&rf=viewer_4",

        urlimag: [
           "http://m.qpic.cn/psb?/V14JKMah3aH4MD/kmbqm8rVvw0j0KHIiJFFzI3cqMTUPtTxT2LJMSJu1C8!/b/dL4AAAAAAAAA&bo=OAQ4BAAAAAARFyA!&rf=viewer_4",
            
          "http://m.qpic.cn/psb?/V14JKMah3aH4MD/zuWQMJ5zXpFhegjZQc1Y5L*yOi0z4*jOZYkMjfmQlq8!/b/dL8AAAAAAAAA&bo=OAQ4BAAAAAARFyA!&rf=viewer_4",
            
          "http://m.qpic.cn/psb?/V14JKMah3aH4MD/uS*es8HYZU5.p1cXwQOU1CeideELSt3QoJp1kYHntuQ!/b/dLYAAAAAAAAA&bo=OASgBQAAAAARF7k!&rf=viewer_4",
          "http://m.qpic.cn/psb?/V14JKMah3aH4MD/ZNwUnt.VXO6WjdfMxamfsGeaHUNTFJDkOwTuTUrJfWA!/b/dFQBAAAAAAAA&bo=OAQ4BAAAAAARFyA!&rf=viewer_4",
          "https://m.qpic.cn/psb?/V14JKMah3aH4MD/b0YwyoIX1.xqL6Zg9lt*1t2BYlfY7vrsGpPbJ3gc398!/b/dL4AAAAAAAAA&bo=OASgBQAAAAARB6k!&rf=viewer_4",
           "http://m.qpic.cn/psb?/V14JKMah3aH4MD/2*eMyFQVcXmW5xMQceS6sB*4umvwOCXKEZA1PAML5CM!/b/dL4AAAAAAAAA&bo=OASgBQAAAAARF7k!&rf=viewer_4",
          "http://m.qpic.cn/psb?/V14JKMah3aH4MD/qLgDYvcalmr*dl39Nl9Ik55NS.EyYm02kEigO4L2o9s!/b/dL8AAAAAAAAA&bo=OASgBQAAAAARF7k!&rf=viewer_4  ",
          "http://m.qpic.cn/psb?/V14JKMah3aH4MD/7NN*5GVc9gPY*tuceouphCmmMQAPplFKuTRRzYmH4HY!/b/dL8AAAAAAAAA&bo=OASgBQAAAAARF7k!&rf=viewer_4"
         
        ],
        name: "重型推拉210提升系列",
        jieshao:"重型推拉：210系列，撞角，德式注胶，气密性更完美！也可带提升式五金配件。2.0mm厚材料，6+12A+6中空玻璃"
      },

      
      {
        url: "https://m.qpic.cn/psb?/V14JKMah3aH4MD/.xAfuK88zaQvV2pQ5onMc*pHFchdoSbd3msueaGAxaI!/b/dDABAAAAAAAA&bo=igEgAwAAAAARB5g!&rf=viewer_4",
        urlimag: [
          "http://m.qpic.cn/psb?/V14JKMah3aH4MD/oSPszhknoa.hFEhrLqWiKCQTo9U9e5SOaklSIlCSpiQ!/b/dL4AAAAAAAAA&bo=igEgAwAAAAARF4g!&rf=viewer_4",
          "http://m.qpic.cn/psb?/V14JKMah3aH4MD/FQI4esOHmZkFnGUuQpFvF4XtKiVIYnf6XS7S7BoKV7U!/b/dMUAAAAAAAAA&bo=igEgAwAAAAARF4g!&rf=viewer_4",
         "https://m.qpic.cn/psb?/V14JKMah3aH4MD/.xAfuK88zaQvV2pQ5onMc*pHFchdoSbd3msueaGAxaI!/b/dDABAAAAAAAA&bo=igEgAwAAAAARB5g!&rf=viewer_4",
          "http://m.qpic.cn/psb?/V14JKMah3aH4MD/NaMbSTdCi9d.eosFRSyvr2M96GYZrWQW5ZKbICLSXWI!/b/dDcBAAAAAAAA&bo=igEgAwAAAAARF4g!&rf=viewer_4",
           "http://m.qpic.cn/psb?/V14JKMah3aH4MD/BvwFKzrY1PIVkwz6wYeKsVzitN1GbWjrzFRz2LUr9Mw!/b/dLYAAAAAAAAA&bo=igEgAwAAAAARF4g!&rf=viewer_4",
          "http://m.qpic.cn/psb?/V14JKMah3aH4MD/VJ7*GtxigAR*DQfq5mr1pAEJGQVydxiKylFo8cabtKY!/b/dIQAAAAAAAAA&bo=igEgAwAAAAARF4g!&rf=viewer_4"
          
        ],
        name: "皇冠77系列平开门"
      },
      {
        url: "http://m.qpic.cn/psb?/V14JKMah3aH4MD/VVnmjxIwwjwKTzbMFwpC9HGktZ4RmKK*6AhPlJ47frU!/b/dL4AAAAAAAAA&bo=WAIgAwAAAAARF1k!&rf=viewer_4",
        urlimag: [
         
           "http://m.qpic.cn/psb?/V14JKMah3aH4MD/VVnmjxIwwjwKTzbMFwpC9HGktZ4RmKK*6AhPlJ47frU!/b/dL4AAAAAAAAA&bo=WAIgAwAAAAARF1k!&rf=viewer_4",
            
          "http://m.qpic.cn/psb?/V14JKMah3aH4MD/UMjjT48koZwrAMZDUC6xhNq*n7svYXJm5CSnItbJnac!/b/dL4AAAAAAAAA&bo=WAIgAwAAAAARF1k!&rf=viewer_4",
            
           "http://m.qpic.cn/psb?/V14JKMah3aH4MD/Bafws5YUDUjNenEyISCSUQrYhPwkXok6fSag1grOfic!/b/dL8AAAAAAAAA&bo=IANYAgAAAAARF1k!&rf=viewer_4",
         "http://m.qpic.cn/psb?/V14JKMah3aH4MD/SJgCml8khAEo1wcKJusGa3QH8F7sa5CRjOKe9VUwoS4!/b/dAgBAAAAAAAA&bo=OASgBQAAAAARF7k!&rf=viewer_4",
           "http://m.qpic.cn/psb?/V14JKMah3aH4MD/uAb1wV2wRaU7w*L5bQKFrIka*m9Xc3sA*5puQ6rFWwY!/b/dFABAAAAAAAA&bo=OASgBQAAAAARF7k!&rf=viewer_4",
           "http://m.qpic.cn/psb?/V14JKMah3aH4MD/yQFaAsbQQqJMIeBAeOOqhdTUapZ643zqVjD6Nd1x4fo!/b/dDEBAAAAAAAA&bo=OASgBQAAAAARF7k!&rf=viewer_4",
           "http://m.qpic.cn/psb?/V14JKMah3aH4MD/43GCXaC895IS83inGrTbSGu7f29LtXMztI1EPu5GGOQ!/b/dMMAAAAAAAAA&bo=OASgBQAAAAARF7k!&rf=viewer_4",
           "https://m.qpic.cn/psb?/V14JKMah3aH4MD/H4gVM*mHZnHjHo.TZ*ZJYRRNxcTlf8rblbL18IthTC0!/b/dL4AAAAAAAAA&bo=OASgBQAAAAARB6k!&rf=viewer_4"
         
        ],
        name: "皇冠SA128系列",
        jieshao:[
          "•铝合金型材采用双道隔热设计，并在隔热腔内填充保温棉，更在玻璃边缘布置PE海绵隔热条从而提高了窗体的保温性能和隔声性能。",
          "•纱网扇可独立安装拆卸便于纱网的清洗与更换。",
          "•以疏水为设计原则的排水结构，结合等压排水原理，使窗体排水更加顺畅。 ",
          " •双长尾玻外胶条和发泡共挤复合胶条的采用，以及胶条角部硫化焊接工艺的采用，使窗体具有较高的气密性能和水密性能。",
          "  •欧洲标准型材五金槽口的设计，为客户提供了更多门窗开启功能和五金选择。"
        ]
      },

      {
        url: "http://m.qpic.cn/psb?/V14JKMah3aH4MD/Ltp3uR5waISU*Sqv0s5ADSXPphGbI40t33djak9q1Bg!/b/dLgAAAAAAAAA&bo=OASgBQAAAAARJ4k!&rf=viewer_4",

        urlimag: [
           "http://m.qpic.cn/psb?/V14JKMah3aH4MD/Ltp3uR5waISU*Sqv0s5ADSXPphGbI40t33djak9q1Bg!/b/dLgAAAAAAAAA&bo=OASgBQAAAAARJ4k!&rf=viewer_4",
            "http://m.qpic.cn/psb?/V14JKMah3aH4MD/PaLIKx0FI.3aPL3KUb2MG.LTQ1JoME.PNVHWeTK6ydI!/b/dL8AAAAAAAAA&bo=OAQ4BAAAAAARJxA!&rf=viewer_4",
           "http://m.qpic.cn/psb?/V14JKMah3aH4MD/*zuAuuZ1DUkTaz4NgDAuiFOEsvVSi89nrm8LjNkUfWA!/b/dLYAAAAAAAAA&bo=OASgBQAAAAARF7k!&rf=viewer_4",
           "http://m.qpic.cn/psb?/V14JKMah3aH4MD/Hqjoliv.PBZ0nwyZsMXUVXwZMn2o4yBwbooX2fY0t1c!/b/dLgAAAAAAAAA&bo=OAQ4BAAAAAARFyA!&rf=viewer_4",
           "https://m.qpic.cn/psb?/V14JKMah3aH4MD/t3jfR2TpJtp.snbEbUIteNNuLUsjQcosVCtof0NkSM8!/b/dL8AAAAAAAAA&bo=OAR*BwAAAAARB3Q!&rf=viewer_4"
        ],
        name: "118平框系列",
        jieshao: "118平框：销钉注胶角码连接！搭配斯坦福铰链！"
      },
      {
        url: "https://m.qpic.cn/psb?/V14JKMah3aH4MD/EHD7Pre.zTJSmPPbjiTg7kBz1CKkMy24z.ZlwB9VQQA!/b/dL4AAAAAAAAA&bo=wAMABQAAAAARB*Y!&rf=viewer_4",
        urlimag: [
           "https://m.qpic.cn/psb?/V14JKMah3aH4MD/EHD7Pre.zTJSmPPbjiTg7kBz1CKkMy24z.ZlwB9VQQA!/b/dL4AAAAAAAAA&bo=wAMABQAAAAARB*Y!&rf=viewer_4",
           "http://m.qpic.cn/psb?/V14JKMah3aH4MD/ArX**n8UNH68rrxAE5WYEO4N77d.rVblE6Jr9hUtMZg!/b/dIQAAAAAAAAA&bo=wAMABQAAAAARF.Y!&rf=viewer_4",
           "http://m.qpic.cn/psb?/V14JKMah3aH4MD/yvM6glTmN.Sh2KLO6zM2sesXbPX2ZL3gZR92bRYG6IQ!/b/dLYAAAAAAAAA&bo=WAIgAwAAAAARF1k!&rf=viewer_4",
           "http://m.qpic.cn/psb?/V14JKMah3aH4MD/uHI.oaPtOJd80qk4tkWAWFX4Qh68DVbrP8p6of*0*w8!/b/dLYAAAAAAAAA&bo=wAMABQAAAAARF.Y!&rf=viewer_4",
           "http://m.qpic.cn/psb?/V14JKMah3aH4MD/QfCgkALeUhrEcne1nfeB.3zvgtft.GGjeL0P4TPDtgg!/b/dL4AAAAAAAAA&bo=wAMABQAAAAARF.Y!&rf=viewer_4",
           "http://m.qpic.cn/psb?/V14JKMah3aH4MD/8*rRHQMVu3sI.5bqEcorsMXEGJPpt2bpUxa4*mVWEBY!/b/dMUAAAAAAAAA&bo=WAIgAwAAAAARF1k!&rf=viewer_4"
          
        ],
        name: "纱窗系列"
      }
      
      
    ],
    imageurl: "http://m.qpic.cn/psb?/V14JKMah3aH4MD/w8wFdnvibCHeNPJBg2iU3mRKSmwEzEBFxgWVEMaGf.k!/b/dE0BAAAAAAAA&bo=OASgBQAAAAARJ4k!&rf=viewer_4",
    aid: 0,
    xiang: []
  },
  previewImage: function (e) {
    console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.imageurl;
    wx.previewImage({
      current: imgArr[index],     //当前图片地址
      urls: imgArr.split(','),               //所有要预览的图片的地址集合 数组形式
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  tophone: function () {
    wx.makePhoneCall({
      phoneNumber: '17819866722',
    })
  },
  toxiangqing: function (e) {
    this.setData({
      aid: e.currentTarget.dataset.index,
      xiang: e.currentTarget.dataset.xiang
    })
    wx.navigateTo({
      url: '../../pages/xiangqing/xiangqing?aid=' + this.data.aid + "&img=" + encodeURIComponent(JSON.stringify(this.data.xiang)),
    })
  },
  toxiangqing1: function (e) {
    this.setData({
      aid: e.currentTarget.dataset.index,
      xiang: e.currentTarget.dataset.xiang
    })
    wx.navigateTo({
      url: '../../pages/xiang/xiang?aid=' + this.data.aid + "&img=" + encodeURIComponent(JSON.stringify(this.data.xiang)),
    })
  },
  
  totianxiphone: function () {
    wx.makePhoneCall({
      phoneNumber: '18138911297',
    })
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.index
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