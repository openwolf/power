// pages/user/list/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        //  用户头像测试用
        userImg:"https://pic2.zhimg.com/v2-1e02c1531c33f9460ae82eb88a999cdd_r.jpg",
        val:"",
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },
    getInputVal(e){
        console.log(e);
        this.setData({
            val: e.detail.value
        });
    },
    removeVal() {
        console.log('removeVal');
        this.setData({
            val: ""
        });
    }
})