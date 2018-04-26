<template>
  <div>
    <div class="search-container">
        <input type="text" class="search-input" 
            placeholder="输入城市名或拼音" v-model='keyword'/>
    </div>
    <div class="search-content" ref="search" v-show="keyword">
        <ul>
            <li v-for="city of list" :key="city.id" class="search-result border-bottom">
                {{city.name}}
            </li>
            <li class="search-result border-bottom" v-show="hasNoData">
                没有匹配的数据
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import BsScroll from 'better-scroll'

export default {
    name: 'CitySearch',
    props: {
        cities: Object,
    },
    data () {
        return {
            list: [],
            timer: null,
            keyword: ''
        }
    },
    computed: {    // 避免在模板写逻辑
      hasNoData () {
          return !this.list.length
      }  
    },
    watch: {
        keyword () {
            if (this.timer) {
                clearTimeout(this.timer)
            }
            if (!this.keyword) {    // 解决当输入keyword后又删除为空时匹配到全部的问题
                this.list = []
                return              // 必须
            }
            this.timer = setTimeout(() => {
                const result = []
                for (let letter in this.cities) {
                    for (let city of this.cities[letter]) {
                        if (city.spell.includes(this.keyword) || city.name.includes(this.keyword)) {
                            result.push(city)
                        }
                    }
                }
                this.list = result
            }, 100)
        }
    },
    mounted () {                  // 使搜索结果也可滑动
        this.scroll = new BsScroll(this.$refs.search);
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/variables.styl';
    .search-container
        height : .72rem
        padding : 0 .1rem
        background-color : $bgColor
        .search-input
            height : 0.62rem
            line-height : 0.62rem
            width : 100%
            text-align : center 
            border-radius : .06rem
            color : #666
            padding : 0 .1rem
            box-sizing : border-box
    .search-content
        position : absolute
        top : 1.58rem
        left : 0
        right : 0
        bottom : 0
        background : #eee
        z-index : 1
        overflow : hidden
        .search-result
            line-height : .62rem
            padding-left : .2rem
            color : #666
            background : #fff

</style>

