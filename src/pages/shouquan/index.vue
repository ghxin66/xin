<template>
  <div>
    <div class="shouquan">
      <div class="titss hgg">LMOAL电子相册</div>
      <div class="desx">欢迎体验，请点击授权登录</div>
      <div class="btt" @click="queren()">授权登录</div>
    </div>
  </div>
</template>

<script>
// import card from "@/components/card";

// import wxParse from "mpvue-wxparse";
export default {
  // components: {
  //   wxParse
  // },
  data() {
    return {};
  },

  // components: {
  //   card
  // },
  mounted() {
    // console.log(this.$root.$mp.query.id);
    //获取图片信息
  },

  methods: {
    queren() {
      console.log("授权登录");
    }
  },

  created() {
    // let app = getApp()
  }
};
</script>

<style scoped>
/* @import url("~mpvue-wxparse/src/wxParse.css"); */

.hgg {
  text-align: center;
  margin: 0 auto;
  margin-top: 50rpx;
  font-size: 48rpx;
}
.desx {
  margin: 50rpx 0;
  font-size: 24rpx;
  text-align: center;
}

button {
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0x;
  padding-right: 0;
  box-sizing: border-box;
  text-align: center;
  text-decoration: none;
  overflow: hidden;
  background-color: #ffffff;
}
.btt {
  margin: 0 auto;
  border-radius: 10rpx;
  text-align: center;
  line-height: 90rpx;
  margin-top: 70rpx;
  background-color: #1aac19;
  height: 90rpx;
  width: 690rpx;
  color: #fff;
  font-size: 30rpx;
}
.re {
  position: relative;
}
.ab {
  position: absolute;
}
</style>
