// app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    // 登录
    let menuButtonObject = wx.getMenuButtonBoundingClientRect(); //获取菜单按钮（右上角胶囊按钮）的布局位置信息。坐标信息以屏幕左上角为原点。
    // console.log(menuButtonObject)
    wx.getSystemInfo({ //获取系统信息
      success: res => {
        let {
          screenWidth,
          screenHeight,
        } = res
        let _screen = [{
            w: 375,
            h: 812
          },
          {
            w: 414,
            h: 896
          }
        ]
        this.globalData.iPhoneX = _screen.some(item => item.w === screenWidth && item.h === screenHeight)
        console.log(" iPhoneX设备：", this.globalData.iPhoneX)
        // console.log(res);
        // let navHeight = menuButtonObject.height + (menuButtonObject.top - res.statusBarHeight) * 2; //导航栏高度=菜单按钮高度+（菜单按钮与顶部距离-状态栏高度）*2
        this.globalData.navHeight = menuButtonObject.height - menuButtonObject.top;
        this.globalData.navTap = menuButtonObject.top;
        this.globalData.Savebottom = res.screenHeight - res.safeArea.bottom;
        // console.log(navHeight);
        // if(res.platform == "devtools"){
        //     PC
        // }else if(res.platform == "ios"){
        //     IOS
        // }else if(res.platform == "android"){
        //     android
        // }
        this.globalData.platform = res.platform
        console.log('设备为:',res.platform);
      },
      fail(err) {
        console.log(err);
      }
    })
  },
  globalData: {
    userInfo: null,
    navHeight: 0,
    navTap: 0,
  }
})
