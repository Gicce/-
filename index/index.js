const app = getApp()

Page({
  data: {
    
  },
  onLoad: function () {
    this.setData({ msg: 'hello World CYPC' })
  },
  clickMe() {
    this.setData({ msg: 'Hello World' })
  }
})
