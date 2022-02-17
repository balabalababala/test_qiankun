// import './App2.css'
// export component
export default {
  name: 'content',
  props: { name2: { type: String, default: 'asdf' } },
  data () {
    return { name: this.name, opacity: 1.0 }
  },
  beforeMount () {
    console.log('Component WILL MOUNT!')
  },
  mounted () {
    console.log('Component DID MOUNT!')
  },
  beforeUpdate () {
    console.log('Component WILL UPDATE!')
  },
  updated () {
    console.log('Component DID UPDATE!')
  },
  destroyed () {
    console.log('Component WILL UNMOUNT!')
  },
  render: function (createElement) {
    return createElement('div',
      Array.apply(null, { length: 20 }).map(function () {
        return createElement('p', 'hi')
      })
    )
  }
}
