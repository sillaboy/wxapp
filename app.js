//app.js
App({
  onLaunch: function () {
    console.log("app run on launch!");    
  },
  onShow: function() {
    console.log("app run on show!");
  },
  onHide: function() {
    console.log("app run on hide!!");
  },
  globalData: {
    userInfo: null
  }
})