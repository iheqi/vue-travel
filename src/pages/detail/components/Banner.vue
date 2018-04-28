<template>
    <div>
        <div class="banner" @click='showGallary'>
            <img class="banner-img" :src="bannerImg"/>
            <div class="banner-info">
                <div class="banner-title">{{this.sightName}}</div>
                <div class="banner-num">
                    <span class="iconfont banner-icon">&#xe692;</span>
                    {{this.bannerImgs.length}}
                </div>
            </div>
        </div>
        <fade-animation>
            <common-gallary 
                :imgs='bannerImgs' 
                v-show="ifShowGallary"
                @close='hideGallary'
            ></common-gallary>
        </fade-animation>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'

export default {
    name: 'DetailBanner',
    components: {
        CommonGallary,
        FadeAnimation
    },
    props: {
        sightName: String,
        bannerImg: String,
        bannerImgs: Array
    },
    data () {
        return {
            ifShowGallary: false
        }
    },
    methods: {
        showGallary () {
            this.ifShowGallary = true
        },
        hideGallary () {
            this.ifShowGallary = false
        }
    }
}
</script>

<style lang="stylus" scoped>
    .banner
        overflow : hidden
        height : 0
        padding-bottom : 55%
        position : relative
        .banner-img
            width : 100%
        .banner-info
            display : flex
            position : absolute
            left : 0
            right : 0
            bottom : 0
            line-height : .6rem
            color : #fff
            /* 加渐变 */
            background-image : linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
            .banner-title
                flex : 1   /* 写在子元素上的，让所有弹性盒模型对象的子元素都有相同的长度，忽略它们内部的内容 */
                font-size : .32rem
                padding : 0 .2rem
            .banner-num
                padding : 0 .4rem
                height : .32rem
                line-height : .32rem
                border-radius : .2rem
                background-color : rgba(0, 0, 0, 0.8)
                font-size : .24rem
                margin-top : .14rem 
                margin-right : .14rem 
                .banner-icon 
                    font-size : .24rem
                    
</style>
