<template>
    <div>
<<<<<<< Updated upstream
        <home-header></home-header>
        <home-swiper></home-swiper>    
        <home-icons></home-icons>
=======
        <home-header :city='city'></home-header>
        <home-swiper :list='swiperList'></home-swiper>    
        <home-icons :list='iconList'></home-icons>
        <home-recommend :list="recommendList"></home-recommend>
        <home-weekend :list="weekendList"></home-weekend>
>>>>>>> Stashed changes
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
<<<<<<< Updated upstream
=======
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'

import axios from 'axios'

>>>>>>> Stashed changes
export default {
  name: 'Home',
  components: {
      HomeHeader,
      HomeSwiper,
<<<<<<< Updated upstream
      HomeIcons
=======
      HomeIcons,
      HomeRecommend,
      HomeWeekend
  },
  data () {
      return {
          city: '',
          swiperList: [],
          iconList: [],
          recommendList: [],
          weekendList: []
      }
  },
  methods: {
      getHomeInfo() {
          axios.get('/static/mock/index.json')
            .then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc(res) {
          res = res.data
          if (res.ret && res.data) {
              const data = res.data
              this.city = data.city
              this.swiperList = data.swiperList
              this.iconList = data.iconList
              this.recommendList = data.recommendList
              this.weekendList = data.weekendList
          }
      }
  },
  mounted() {
      this.getHomeInfo()
>>>>>>> Stashed changes
  }
}
</script>

<style>

</style>