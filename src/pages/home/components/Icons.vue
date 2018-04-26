<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
      
        <div class="icon" v-for="icon of page" :key="icon.id">
          <div class="icon-img">
            <img class='icon-img-content' :src="icon.imgUrl"/>
          </div>
          <p class="icon-desc">{{icon.desc}}</p>
        </div>
      </swiper-slide>


    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((icon, index) => {
        const page = Math.floor(index / 8)
          if (!pages[page]) {
            pages[page] = []
          }
          pages[page].push(icon)
      })
      return pages
    }
  }
}
</script>

<style lang='stylus' scoped>
    @import '~styles/variables.styl';
    @import '~styles/mixins.styl';
    .icons >>> .swiper-container   /* .swiper-container是组件封装的样式 */
        height : 0
        padding-bottom : 50%
    .icons
      margin-top : .1rem
      .icon
        overflow : hidden
        float : left
        width : 25%
        height : 0 
        padding-bottom : 25%
        position : relative
        .icon-img
          position : absolute
          top : 0
          left : 0
          right : 0
          bottom : .44rem
          box-sizing : border-box
          padding : .1rem
          .icon-img-content
            display : block 
            margin : 0 auto 
            height : 100%
        .icon-desc
          position : absolute
          left : 0
          right : 0
          bottom : 0
          height : .44rem
          line-height : .44rem
          color : $darkTextColor
          text-align : center
          ellipsis()
            
</style>


