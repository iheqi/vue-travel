<template>
    <div class="list" ref="wrapper">
      <div>
        <div class="area">
          <div class="title border-topbottom">当前城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">{{this.currentCity}}</div>
            </div>
          </div>
        </div>

        <div class="area">
          <div class="title border-topbottom">热门城市</div>
          <div class="button-list">
            <div 
              class="button-wrapper" 
              v-for="item of hot" 
              :key="item.id"
              @click="handleCityClick(item.name)"
            >
              <div class="button">{{item.name}}</div>
            </div>
          </div>
        </div>
        
     
        <div class="area" v-for='(item, key) of cities' :key='key' :ref='key'>
          <div class="title border-topbottom">{{key}}</div>
          <div class="item-list">
            <div 
              class="item border-bottom" 
              v-for='innerItem of item' 
              :key="innerItem.id"
              @click="handleCityClick(innerItem.name)"
            >
              {{innerItem.name}}
            </div>
          </div>
        </div>

      </div>
    </div>
</template>
<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'


export default {
  name: 'CityList',
  props: {
    cities: Object,
    hot: Array,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })      // mapState用于将vuex的state中的属性映射（解构赋值）到计算属性的city中
            
  },
  methods: {
    handleCityClick (city) {
      // 
      // this.$store.dispatch('changeCity', city)
      // 数据较少时省略actions转发
      // this.$store.commit('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])     // 属性名必须相同
  },
  watch: {
    letter () {
      if (this.letter) {
                        // 因为获取v-for中的元素得到的会是一个元素数组，
                        // 就像getElementsByTagName那样，所有用下标获到真正的元素
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
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
