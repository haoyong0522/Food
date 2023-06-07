const app = getApp();
Component({
  data: {
    navHeight: app.globalData.navHeight,
    navTap: app.globalData.navTap,
  },
  properties: {
  },
  methods: {
    returnFun() {
      wx.navigateBack({
        delta: 1, 
      });
    }
  }
})