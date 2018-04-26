<template>
  <div class="search-container">
      <input type="text" class="search-input" placeholder="输入城市名或拼音"/>
  </div>
</template>

<script>
export default {
    name: 'CitySearch'
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
</style>

