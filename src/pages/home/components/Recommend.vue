<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <img :src="item.imgUrl" class="item-img">

                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-btn">查看详情</button>
                </div>
            </li>
        </ul>
    </div>

</template>

<script>
export default {
    name: 'HomeRecommend',
    data () {
        return {
            recommendList: [{
                id: '0001',
                imgUrl: 'http://img1.qunarzz.com/sight/p0/1507/36/ce3d2d6c9ab44d67ae68d940b8781829.water.jpg_200x200_0938a8f2.jpg',
                title: '北京野生动物园',
                desc: '北京郊区的一座大型自然生态动物园'
            }, {
                id: '0002',
                imgUrl: 'http://img1.qunarzz.com/sight/p0/201308/08/41150dacc0e3a0c8c8d65eac.jpg_200x200_c62292e9.jpg',
                title: '北京动物园',
                desc: '百余种动物，让你离自然更近'
            }, {
                id: '0003',
                imgUrl: 'http://img1.qunarzz.com/sight/p0/1803/9d/9d862d8166170089a3.img.jpg_200x200_8974965b.jpg',
                title: '北京园博园',
                desc: ''
            }, {
                id: '0004',
                imgUrl: 'http://img1.qunarzz.com/sight/p0/1507/36/ce3d2d6c9ab44d67ae68d940b8781829.water.jpg_200x200_0938a8f2.jpg',
                title: '北京野生动物园',
                desc: '北京郊区的一座大型自然生态动物园'
            }, ]
        }
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
