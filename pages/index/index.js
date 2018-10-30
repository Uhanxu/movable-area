Page({
  data: {
    movable: {
      image: '../../resource/image/home-active.png'
    }
  },
  onLoad: function(options) {
    console.log('optionsIndex', options)
  },
  onShow: function() {},
  /*
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
   
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function(res) {
   
  }
})