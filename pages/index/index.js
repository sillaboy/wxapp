//index.js
//获取应用实例
const app = getApp()

Page({
  //数据部分
  data: {
    text: "this is a demo!",
    items: [
      {
        pic: "图片1",
        time: "类别?",
        introduct: "这是说明"
      },
      {
        pic: "图片2",
        time: "类别2",
        introduct: "说明2"
      }
    ],
    iconType: [
      'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
    ]
  },
  onLoad: function () {
    console.log("page onload!")
  },
  onReady: function () {
  },
  onShow: function () {
  },
  onHide: function () {
  },
  onUnload: function () {

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  },
  onShareAppMessage: function () {
  },
  viewTap: function () {
    console.log("click me~!")
  },
  onItemClick:function(event){
    console.log("你点击了" + event.currentTarget.dataset.item);
  }
})
