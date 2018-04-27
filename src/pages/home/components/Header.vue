<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe600;</span>  
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'HomeHeader',
  props: {
    // city: String      // 改为用vuex
  },
 
  computed: {
    ...mapState(['city']),      // mapState用于将vuex的state中的属性映射（解构赋值）到计算属性的city中
    // ...mapGetters(['doubleCity'])
  }
  
}
</script>

<style lang='stylus' scoped>
  @import '~styles/variables.styl';
  @import '~styles/mixins.styl';
  .header
    display : flex
    line-height : $headerHeight
    background-color : $bgColor
    color : #fff
    .header-left
      width : .64rem
      float : left
      .back-icon          /* 因为多缩进了两个空格而报错 */
        text-align : center
        font-size : .4rem
    .header-input
      flex : 1
      line-height : .64rem
      height : .64rem
      background-color : #fff
      border-radius : .1rem 
      margin-top : .12rem
      margin-left : .2rem
      padding-left : .2rem
      color : #ccc
    .header-right
      min-width : 1.04rem    /* 解决字体过长的问题，这会挤用input的位置（input没固定） */
      padding : 0 .1rem
      float : right
      text-align : center
      color : #fff
      .arrow-icon
        font-size : .24rem
        margin-left : -.04rem
</style>
