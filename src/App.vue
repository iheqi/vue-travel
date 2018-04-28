<template>
  <div id="app">
    <!-- 显示当前地址所对应的内容 -->
    <keep-alive>       <!--  exclude="Detail"的坑 -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
