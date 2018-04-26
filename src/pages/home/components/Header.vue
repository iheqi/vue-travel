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
export default {
  name: 'HomeHeader',
  props: {
    city: String
  },
  mounted() {
    console.log(this.city)
  }
  
}
</script>

<style lang='stylus' scoped>
  @import '~styles/variables.styl';
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
      width : 1.24rem
      float : right
      text-align : center
      color : #fff
      .arrow-icon
        font-size : .24rem
        margin-left : -.04rem
</style>
