<template>
  <div class="wrapper">
    <swiper :options="swiperOption">

        <swiper-slide v-for='item of swiperList' :key='item.id'>
            <img class='swiper-img' :src="item.imgUrl" />
        </swiper-slide>
        
        <div class="swiper-pagination"  slot="pagination"></div>

    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
      return {
          swiperOption: {
              pagination: '.swiper-pagination',
              loop: true
          },
          swiperList: [{
              id: '0001',
              imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/f3/7d76e56716bad002.jpg_640x200_6c45b28a.jpg'
          }, {
              id: '0002',
              imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/2c/4a64ed2e384e0b02.jpg_640x200_da6dfd87.jpg'
          }]
      } 
  }
}
</script>

<style lang='stylus' scoped>
    .wrapper >>> .swiper-pagination-bullet-active   /* 穿透，不受scoped限制 */
        background-color : #fff !important
    .wrapper
        overflow : hidden
        width: 100%
        height : 0
        padding-bottom : 31.25%        /* 避免图片加载缓慢时的抖动 */
        /* height : 31.25vw */
        background-color : #eee
        /* .swiper-pagination-bullet-active
            background-color : red !important */   /* 这里无法修改 */
        .swiper-img
            width : 100%
</style>