<template>
  <div id="app">
    <router-view />
    <FooterGuide v-show="$route.meta.showFooter" />  <!-- $route指当前路由 -->
  </div>
</template>

<script>

import FooterGuide from './components/FooterGuide/FooterGuide'
import {mapActions} from 'vuex'
// import {reqAddress} from './api'
// import {reqFoodCategorys} from './api'
// import {reqShops} from './api'

export default {

  // async mounted(){
  //   const result = await reqShops()
  //   console.log(result)
  // },
  mounted(){
    // this.$store.dispatch('getAddress')
    // this.$store.dispatch('getCategorys')
    // this.$store.dispatch('getShops')
    this.getAddress()
  },
  methods:{
    ...mapActions(['getAddress'])
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
