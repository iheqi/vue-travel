<template>
    <ul class="list">
      <li class="item">A</li>
      <li class="item">B</li>
      <li class="item">C</li>
    </ul>
</template>
<script>
export default {
  name: 'CityAlphabet',
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl';
  .list
    position : absolute
    top : 1.58rem
    bottom: 0
    right : 0
    display : flex
    flex-direction : column
    justify-content : center
    width : .4rem
    .item
      text-align : center
      line-height : .4rem
      color : $bgColor
</style>
