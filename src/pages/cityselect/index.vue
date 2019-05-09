<template>
    <view class='wrapper'>
        <list-html :data="city" :my-city="mycity" :config="config"></list-html>
    </view>
</template>
<script>
    let City = require('@/utils/city.js');
    export default {

        data(){
            return{
                city:[],
                config: {
                    horizontal: true, // 第一个选项是否横排显示（一般第一个数据选项为 热门城市，常用城市之类 ，开启看需求）
                    animation: true, // 过渡动画是否开启
                    search: true, // 是否开启搜索
                    searchHeight: 45, // 搜索条高度
                    suctionTop: true // 是否开启标题吸顶
                },
                mycity:''
            }
        },
        methods:{

        },
        onShow(){
            let _this=this;
            let Query=_this.$http.getQuery()
            let mycity=Query.mycity

            _this.city=City
            _this.mycity=mycity

        }
    }
</script>
<style scoped>
    /* pages/dome/dome.wxss */

    .wrapper {
        height: 100vh;
    }
    /* 关闭滚动条  */
    ::-webkit-scrollbar{
        width: 0;
        height: 0;
        color: transparent;
    }

    .list-search {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        width: 100%;
        height: 90rpx;
        padding: 10rpx 30rpx;
        box-sizing: border-box;
        z-index: 20;
        background: #FFF;
    }

    .search-title {
        flex-shrink: 0;
        font-size: 28rpx;
        padding-right: 10rpx;
    }

    .list-search-box {
        display: flex;
        align-items: center;
        padding: 0 30rpx;
        width: 100%;
        height: 70rpx;
        background: #f5f5f5;
        border-radius: 90rpx;
        font-size: 28rpx;
        box-sizing: border-box;
    }

    .list-search-box input {
        width: 100%;
        padding-left: 10rpx;
    }

    .search-button {
        /* width: 100rpx; */
        flex-shrink: 0;
        height: 60rpx;
        line-height: 60rpx;
        font-size: 28rpx;
        margin-left: 10rpx;
    }
</style>

