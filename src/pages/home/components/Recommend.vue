<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>
            <router-link :to="'/detail/' + item.id"
                class="item border-bottom" 
                v-for="item of list" 
                :key="item.id"
                tag='li'
            >
                <img :src="item.imgUrl" class="item-img">

                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-btn">查看详情</button>
                </div>
            </router-link>
        </ul>
    </div>

</template>

<script>
export default {
    name: 'HomeRecommend',
    props: {
        list: Array
    }
}
</script>

<style lang='stylus' scoped>
    @import '~styles/mixins.styl';
    .recommend-title
        line-height : .8rem
        background-color : #eee
        text-indent : .2rem
        margin-top : .2rem
    .item 
        overflow : hidden
        display : flex
        height : 1.9rem
        .item-img
            width : 1.7rem
            height : 1.7rem
            padding : .1rem
        .item-info
            flex : 1
            padding : .1rem
            min-width : 0
            .item-title
                line-height : .54rem
                font-size .32rem
                ellipsis()
            .item-desc
                line-height : .4rem
                color : #787878
                ellipsis()
            .item-btn
                line-height : .44rem
                margin-top : .16rem
                background-color : #ff9300
                border-radius : .06rem
                padding : 0 .2rem
                color : #fff
</style>
