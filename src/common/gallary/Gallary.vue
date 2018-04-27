<template>
  <div class="container" @click="hideGallary">
      <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(img, index) of imgs" :key="index">
                <img class="gallary-img" :src="img"/>
            </swiper-slide>

        </swiper>

        <div class="swiper-pagination"  slot="pagination"></div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'CommonGallary',
    props: {
        imgs: {
            type: Array,
            default () {
                return []
            }
        }
    },
    methods: {
        hideGallary () {
            this.$emit('close')
        }
    },
    data () {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                paginationType: 'fraction',
                observeParents: true,             // 解决画廊隐藏或显示由于计算而引起的错误 
                observer: true                    // 这里会在自身或父级元素dom变化时刷新一次
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    .container
        position : fixed
        background-color : black
        left : 0
        right : 0
        top : 0
        bottom : 0
        z-index : 99

        display : flex
        align-items : center
        justify-content : center
        .wrapper
            background-color : white
            width : 100%
            /* height : 0
            overflow : hidden
            padding-bottom : 100% */
            .gallary-img
                width : 100%
            .swiper-pagination
                color: white
                margin-bottom : 0.5rem
</style>
