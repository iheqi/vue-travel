<template>
    <div>
        <city-header></city-header>
        <city-search :cities='cities'></city-search>
        <city-list :cities='cities' :hot='hotCities' :letter='letter'></city-list>
        <city-alphabet :cities='cities' @clickLetter='handleLetterClick'></city-alphabet>
    </div>
</template>
<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'

import axios from 'axios'

export default {
  name: 'City',
  components: {
      CityHeader,
      CitySearch,
      CityList,
      CityAlphabet,
  },
  data () {
      return {
          cities: {},
          hotCities: [],
          letter: ''
      }
  },
  methods: {
      getCityInfo () {
          axios.get('/static/mock/city.json')    /* axios前面不要加this */
            .then(this.handleCityInfo)    /* 传入方法名即可 */
      },
      handleCityInfo (res) {
          res = res.data
          if (res.ret && res.data) {
              const data = res.data
              this.cities = data.cities
              this.hotCities = data.hotCities
          }
      },
      handleLetterClick(letter) {
          this.letter = letter
      }
  },
  mounted () {
      this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>
</style>
