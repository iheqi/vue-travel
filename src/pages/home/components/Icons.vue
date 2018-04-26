<template>
  <div class="icons">
    <swiper>
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
<<<<<<< Updated upstream
      iconList: [{
        id: '0001',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '景点门票'
      }, {
        id: '0002',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        desc: '必游清单'
      }, {
        id: '0003',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
        desc: '踏青赏花'
      }, {
        id: '0004',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        desc: '一日游'
      }, {
        id: '0005',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
        desc: '动植物园'
      }, {
        id: '0006',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png',
        desc: '自然风光'
      }, {
        id: '0007',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
        desc: '名胜古迹'
      }, {
        id: '0008',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
        desc: '故宫'
      }, {
        id: '0009',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png',
        desc: '古北水镇'
      }],
=======
      swiperOption: {
        pagination: '.swiper-pagination',
      }
>>>>>>> Stashed changes
    }
  },
  computed: {
    pages() {
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


