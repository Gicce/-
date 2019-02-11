const app = getApp()

Page({
  data: {
    
  },
  onLoad: function () {
    this.setData({ msg: 'hello World CYPC' }),
    this.setData( {time: (new Date()).toString()})
  },
  clickMe() {
    this.setData({ msg: 'Hello World' })
  }
})
