<template>
    <div>
        <footer class="footer_guide border-1px" >
            <a href="javascript:;" class="guide_item" :class="{on:'/home'===$route.path}" @click="goTo('/home')">
                <span class="item_icon">
                    <i class="iconfont icon-U"></i>
                </span>
                <span>外卖</span>
            </a>
            <a href="javascript:;" class="guide_item" :class="{on:'/search'===$route.path}" @click="goTo('/search')">
                <span class="item_icon">
                    <i class="iconfont icon-sousuo1"></i>
                </span>
                <span>搜索</span>
            </a>
            <a href="javascript:;" class="guide_item" :class="{on:'/order'===$route.path}" @click="goTo('/order')">
                <span class="item_icon">
                    <i class="iconfont icon-dingdan"></i>
                </span>
                <span>订单</span>
            </a>
            <a href="javascript:;" class="guide_item" :class="{on:'/profile'===$route.path}" @click="goTo('/profile')">
                <span class="item_icon">
                    <i class="iconfont icon-wodedangxuan"></i>
                </span>
                <span>我的</span>
            </a>
        </footer>
    </div>
</template>
<script>
import Axios from 'axios'

export default {
    methods: {
        goTo(path) {
            this.$router.replace(path)
        }
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.footer_guide
    border-top solid 1px #e4e4e4
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #f5f5f5
    width 100%
    height 50px
    display flex
    .guide_item
        display flex
        flex 1
        text-align center
        flex-direction column
        align-items center
        margin 8px
        color #999999
        &.on
            color #02a774
            span 
            font-size 10px
            margin-bottom 22px
            .iconfont
                font-size 20px 
</style>
