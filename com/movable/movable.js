// com/movable/movable.js
let {
  windowWidth,
  windowHeight
} = wx.getSystemInfoSync();
let localCoord = wx.getStorageSync('localPostion');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    content: String
  },
  /**
   * 组件的初始数据
   */
  data: {
    status: true,
    x: (localCoord.x >= 0) ? localCoord.x : 0,
    y: localCoord.y ? localCoord.y : windowHeight - 150
  },
  /*
   * 组件的方法列表
   */
  methods: {
    onShareMoveStart: function(e) {
      this.y = e.changedTouches[0].clientY - 30;
      this.x = e.changedTouches[0].clientX - 30;
    },
    onShareMoving: function(e) {
      if ((e.changedTouches[0].clientY) < -100) {
        this.setData({
          x: this.x,
          status: false,
          y: this.y,
        })
      }
    },
    onShareMoveEnd: function(e) {
      if ((e.changedTouches[0].clientY) < -100) {
        this.setData({
          x: this.x,
          status: true,
          y: this.y,
        })
        return;
      }
      let sysAveWidth = windowWidth / 2;
      let sysHeight = windowHeight;
      let currentP = {
        x: 0,
        y: (e.changedTouches[0].clientY - 30) > 0 ? Math.abs(e.changedTouches[0].clientY - 30) : 0,
      }
      if (e.changedTouches[0].clientX > sysAveWidth) {
        currentP.x = windowWidth - 60;
      }
      if ((sysHeight - e.changedTouches[0].clientY) <= 60) {
        currentP.y = windowHeight - 60;
      }
      this.setData({
        x: currentP.x,
        y: currentP.y,
        status: true
      })
      wx.setStorageSync('localPostion', currentP);
    },
  }
})