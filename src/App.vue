<template>
  <div id="app">
    <router-view />
    <FooterGuide v-show="$route.meta.showFooter" />  <!-- $route指当前路由 -->
  </div>
</template>

<script>

import FooterGuide from './components/FooterGuide/FooterGuide'
import {mapActions} from 'vuex'

export default {

  mounted(){
    this.getAddress()
    this.getUserInfo()  //获取用户信息
  },
  methods:{
    ...mapActions(['getAddress','getUserInfo'])
  },
  components:{
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  width 100%
  height 100%
  background #f5f5f5
</style>
