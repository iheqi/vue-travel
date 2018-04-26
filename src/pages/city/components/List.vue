<template>
    <div class="list" ref="wrapper">
      <div>
        <div class="area">
          <div class="title border-topbottom">当前城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">北京</div>
              
            </div>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">热门城市</div>
          <div class="button-list">
            <div class="button-wrapper" v-for="item of hot" :key="item.id">
              <div class="button">{{item.name}}</div>
            </div>
            
          </div>
        </div>
        
     
        <div class="area" v-for='(item, key) of cities' :key='key'>
          <div class="title border-topbottom">{{key}}</div>
          <div class="item-list">
            <div class="item border-bottom" v-for='innerItem of item' :key="innerItem.id">
              {{innerItem.name}}
            </div>
          </div>
        </div>

      </div>
    </div>
</template>
<script>
import Bscroll from 'better-scroll'

export default {
  name: 'CityList',
  props: {
    cities: Object,
    hot: Array
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .border-topbottom   /* &暂时查不到 */
    &:before
      border-color : #ccc
    &:after
      border-color : #ccc
  .border-bottom
    &:before
      border-color : #999
  .list
    overflow : hidden     /* 为什么会超出？又没固定高度 */
    position : absolute   /* 固定list不让它随滚轮滚动 */
    top : 1.58rem
    right : 0
    left : 0
    bottom : 0
    .title
      line-height : .54rem
      color : #666
      background-color : #eee
      font-size : .26rem
      padding-left : .2rem
      color : #666
    
    .button-list
      padding : .1rem .6rem .1em .1rem
      overflow : hidden   /* 搞不懂为什么按钮没显示，反而加了这句才显示 */
      .button-wrapper
        float : left
        width : 33.33%
        .button
          margin : .1rem
          padding : .1rem
          text-align : center
          border : .02rem solid #ccc
          border-radius : .06rem
    .item-list
      .item
        line-height : .76rem
        padding-left : .2rem
</style>
