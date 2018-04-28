<template>
    <div>
        <router-link  tag="div" to="/" class="header-abs" v-show="showAbs">
            <div class="iconfont header-abs-back">&#xe624;</div>
        </router-link>
        <div 
            class="header-fixed" 
            :style="opacityStyle"
            v-show="!showAbs"
        >
            <router-link to="/">
                <div class="iconfont header-fixed-back">&#xe624;</div>
            </router-link>
            景区详情
        </div>
    </div>
</template>

<script>
export default {
    name: 'DeatilHeader',
    data () {
        return {
            showAbs: true,
            opacityStyle: {
                opacity: 0
            }
        }
    },
    activated () {
        window.addEventListener('scroll', this.handleScroll)
    },
    deactivated () {     // 与activated对应，当离开页面或隐藏页面时触发
        window.removeEventListener('scroll', this.handleScroll)   // 不解绑会在所有页面的滚动都触发
    },
    methods: {
        handleScroll () {
            // 因为这里要对opacity处理使用节流的话opacity的变化无法显示
            const top = document.documentElement.scrollTop    // 即html元素（p254）
            if (top > 10) {
                this.showAbs = false
                let opacity = top / 140
                opacity = (opacity > 1) ? 1 : opacity
                this.opacityStyle = { opacity } 
            } else {
                this.showAbs = true
            }
        }
    }
}
</script>

<style lang='stylus' scoped>
@import '~styles/variables.styl'
    .header-abs
        position : absolute
        left : .1rem
        top : .1rem
        width : .72rem
        height : .72rem
        border-radius : .4rem
        background : rgba(0, 0, 0, .8)
        text-align : center 
        line-height : .72rem
        .header-abs-back
            color : white
            font-size : .36rem
            font-weight : bold
    .header-fixed
        overflow : hidden
        height : $headerHeight
        line-height : $headerHeight
        text-align : center 
        color : #fff
        background-color : $bgColor
        font-size: .32rem
        position : fixed
        left : 0
        top : 0
        right : 0
        z-index : 10
        .header-fixed-back
            width: .64rem
            text-align: center 
            font-size : .4rem
            position : absolute
            top : 0
            left : 0
            color : #fff

</style>