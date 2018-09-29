Page({
/**
* 页面的初始数据
*/
	data: {
		items: ['数据a', '数据b', '数据c', '数据d'],
	},
/**
 * 生命周期函数--监听页面加载
 */
	onLoad: function (options) {
		console.log(this.route);
		console.log('onLoad',options)
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {
		console.log('onReady');
	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {
		console.log('监听页面显示');
	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {
		console.log('监听页面隐藏');
	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {
		console.log('监听页面卸载');
	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {
		
	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {
		
	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function (info) {
		console.log(info);
		console.log('用户点击右上角分享');
	},
	/**
	 * 事件
	 */
	addItem(){
		let arr = this.data.items;
		let str = '数据' + Math.floor(Math.random()*10);
		arr.push(str);
		this.setData({
			items:arr
		});
		console.log(arr);
	},
	footEvent(d){
		console.log(d);
	}
})