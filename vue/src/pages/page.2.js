import Vue from 'vue'

Vue.component('anchored-heading', {
  render: function (createElement) {
    return createElement(
      'h' + this.level, // tag name标签名称
      this.$slots.default // 子组件中的阵列
    )
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
})

const app = new Vue({
  template: `<div>{{ msg }}</div>`,
  data () {
    return {
      msg: '123'
    }
  }
})

export default app
