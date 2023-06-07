const app = getApp()
Page({
  data: {
    day: [{
      week: '明天',
      time: '05-12'
    }, {
      week: '周六',
      time: '05-13'
    }, {
      week: '周日',
      time: '05-14'
    }, {
      week: '周一',
      time: '05-15'
    }, {
      week: '周二',
      time: '05-16'
    }, {
      week: '周三',
      time: '05-17'
    }],
    commodity: [{
      title: '这里是商品名称',
      label_one: '商品标签',
      label_two: '商品标签',
      label_three: '商品标签',
      price: '45'
    }, {
      title: '这里是商品名称太长自动换行最多显示两行',
      label_one: '商品标签',
      label_two: '商品标签',
      label_three: '商品标签',
      price: '45'
    }, {
      title: '这里是商品名称',
      label_one: '商品标签',
      label_two: '商品标签',
      label_three: '商品标签',
      price: '45'
    }, {
      title: '这里是商品名称太长自动换行最多显示两行',
      label_one: '商品标签',
      label_two: '商品标签',
      label_three: '商品标签',
      price: '45'
    }, {
      title: '这里是商品名称',
      label_one: '商品标签',
      label_two: '商品标签',
      label_three: '商品标签',
      price: '45'
    }, {
      title: '这里是商品名称',
      label_one: '商品标签',
      label_two: '商品标签',
      label_three: '商品标签',
      price: '45'
    }],
    selectedIndex: 0,
    scrollTop: 0,
  },
  onLoad() {

  },
  chooseDay(e) {
    this.setData({
      selectedIndex: this.data.selectedIndex = e.currentTarget.dataset.index
    })
  },
  touchTop(e) {
    this.setData({
      scrollTop: this.data.scrollTop = e.detail.scrollTop
    })
  }
})