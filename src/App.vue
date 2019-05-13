<template>
    <div id="app">
        <FooterGuide v-show="$route.meta.isShowFooter"></FooterGuide>
        <router-view></router-view>
    </div>    
</template>
<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
import {reqFoodTypes} from './api'

export default {
    components: {
        FooterGuide,
    },
    async mounted() {
       let result = await reqFoodTypes()
       console.log(result);
       
    }
}
</script>
<style lang="stylus" scoped>
#app
    width 100%
    height 100%
</style>
