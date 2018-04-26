<template>
    <ul class="list">
      <li class="item" v-for="item of letters" :key="item"
        @click='handleLetterClick'
        @touchstart='handleTouchStart'
        @touchmove='handleTouchMove'
        @touchend='handleTouchEnd'
        :ref="item"
      >
        {{item}}
      </li>
    </ul>
</template>
<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let letter in this.cities) {
        letters.push(letter)
      }
      return letters
    }
  },
  // updated钩子，当data中的数据改变时触发，然后页面渲染，也就是等组件完全加载好后再去获取startY
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (el) {
      this.$emit('clickLetter', el.target.innerText)
    },
    // touch事件系列（p399）
    handleTouchStart () {
      this.touchStatus = true
    },
    // 这里画个图就明了
    handleTouchMove (ev) {
      if (this.touchStatus) {                          // 设置在这里才能处理事件
        if (this.timer) {                              // 函数节流
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          // const startY = this.$refs['A'][0].offsetTop    // offsetTop（p321）第一个字母的偏移量
          const touchY = ev.touches[0].clientY - 79           // clientY相对窗口顶部的高度（p370），减去头部的高度
          const index = Math.floor((touchY - this.startY) / 20)         // 代表第几个字母
          
          if (index >= 0 && index <= this.letters.length) {      // 边界处理，再触发
            this.$emit('clickLetter', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false      
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl';
  .list
    position : absolute
    top : 1.58rem
    bottom: 0
    right : 0
    display : flex
    flex-direction : column
    justify-content : center
    width : .4rem
    .item
      text-align : center
      line-height : .4rem
      color : $bgColor
</style>
