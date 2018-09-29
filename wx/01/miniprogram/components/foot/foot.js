// components/foot/foot.js
Component({
  /**
   * 接受外部样式
   */
  externalClasses: ['my-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type:Array,
      value: ['默认值这是地址', '默认值这是邮箱', '默认值这是联系方式','默认值等等等等的信息']
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    arr: [1, 2, 3, 4, 5]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemTap(e){
      let o={
        e,
        option:{
          a:1,
          b:2
        }
      }
      // console.log(e);
      this.triggerEvent('footEvent',o);
    }
  },
  /**
   * 生命周期
   */
  lifetimes:{
    created(d){
      console.log('lifetime,created',d);
    },
    attached(d){
      console.log('lifetime,attached', d);
    },
    ready(d){
      console.log('lifetime,ready', d);
    }
  }
})
