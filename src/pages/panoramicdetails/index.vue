<template>
  <div @click="clickHandle">
    <div class="prode_top">
      <img :src="productdeal.alxq" alt class="wid100">
      <!-- <div class="ab cents weiyi">
        <div class="title">{{productdeal.title}}</div>
        <div class="dja pf3">
          <div class="kuai" v-for="(item,index) in productdeal.icon" :key="index">
            <div class="vertop">
              <i class="icoon">
                <img :src="item.pic">
              </i>
              <span class="descss">{{item.huxin}}</span>
            </div>
            <div class="mar40 huxin">{{item.val}}</div>
          </div>
        </div>
      </div>-->
      <div class="borru"></div>
    </div>
    <div class="mar20 pa3">
      <div class="titles">
        <p>
          <span class="col999">型号:</span>&nbsp;&nbsp;
          <span>TXHT4358</span>
        </p>
        <div class="pinfen mar20">
          <div class="fle1">
            <p class="col999">尺寸:</p>
            <p>90X90cm</p>
          </div>
          <div class="fle2">
            <p class="col999">质感:</p>
            <p>抛光</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productdeal: {
        title: "我是标题",
        alxq: "/static/images/alxqbg.jpg",
        icon: [
          { pic: "/static/images/icon1.png", huxin: "户型", val: "平房" },
          { pic: "/static/images/icon2.png", huxin: "面积", val: "70㎡" },
          { pic: "/static/images/icon3.png", huxin: "城市", val: "广州" }
        ]
      },
      centent: ""
    };
  },

  methods: {
    // bindViewTap() {
    //   const url = "../logs/main";
    //   if (mpvuePlatform === "wx") {
    //     mpvue.switchTab({ url });
    //   } else {
    //     mpvue.navigateTo({ url });
    //   }
    // },
    clickHandle(ev) {
      // console.log("clickHandle:", ev);
      // throw {message: 'custom test'}
    }
  },

  created() {
    // let app = getApp()
  }
};
</script>

<style scoped>
.pinfen {
  display: flex;
  width: 100%;
  box-sizing: border-box;
}
.fle1 {
  width: 345rpx !important;
  flex-basis: 345rpx !important;
  box-sizing: border-box;
}
.fle2 {
  width: 345rpx;
  flex-basis: 345rpx;
  box-sizing: border-box;
}
.pa3 {
  padding: 30rpx;
  box-sizing: border-box;
  font-size: 30rpx;
  font-weight: bold;
  line-height: 50rpx;
}
.tupic {
  width: 60rpx;
  height: 58rpx;
  margin: 0 20rpx;
}
.butt {
  width: 470rpx;
  height: 70rpx;
  border-radius: 8rpx;
  background-color: #f9d97a;
  font-size: 32rpx;
  color: #000;
  font-weight: 600;
  margin: 0 20rpx;
}
.fix {
  position: fixed;
  height: 100rpx;
  width: 100%;
  border-top: 1px solid #eee;
  bottom: 0;
  left: 0;
  background-color: rgb(255, 255, 255);
}
.ims {
  width: 30rpx !important;
  height: 25rpx !important;
  margin-top: 8rpx;
}
.wid270 {
  width: 560rpx !important;
  box-sizing: border-box;
}
.titss {
  font-size: 36rpx;
}
.bormar {
  /* border-top: 2rpx solid #eee; */
  padding: 30rpx;
}
.col999 {
  color: #999;
}

.lunbo2 .titss2 {
  padding-left: 0 !important;
}

.wid100ss {
  width: 100%;
  font-size: 30rpx;
}
.mart90 {
  border-top: 2rpx solid #eee;
  padding-top: 40rpx;
  border-bottom: 2rpx solid #eee;
  padding-bottom: 40rpx;
}
.tis {
  display: inline;
  float: right;
  padding: 0 20rpx;
}
.lin50 {
  line-height: 50rpx;
}
.cens .title {
  font-weight: bold;
}
.cens .desc {
  color: #999 !important;
  font-size: 24rpx;
}
.widssgg3 image {
  width: 210rpx;
  height: 200rpx;
  overflow: hidden;
  border-radius: 10rpx;
}
.widssgg4 image {
  width: 560rpx;
  height: 320rpx;
  overflow: hidden;
  border-radius: 10rpx;
}
.descss {
  font-size: 0.2rem;
  color: #999;
}
.titss2 {
  width: 250rpx;
}
.fle1pic {
  width: 100rpx;
  height: 100rpx;
  overflow: hidden;
  border-radius: 50%;
}
.fle1 {
  flex-basis: 100rpx;
  height: 100%;
}
.fle2 {
  padding-left: 10rpx;
  flex-grow: 1;
  font-size: 30rpx;
}
.wi100 {
  width: 100%;
}

swiper {
  height: 300rpx;
  text-align: center;
  display: flex;
}
.lunbo2 swiper {
  height: 450rpx;
  margin-bottom: 100rpx;
}
.vertop {
  vertical-align: top;
  display: flex;
  align-items: center;
}
.pf3 {
  flex: 1 1 1;
  flex-basis: 100%;
  width: 100%;
  margin-top: 15rpx;
}
.kuai {
  flex-basis: 33%;
  width: 33%;
  padding-left: 30rpx;
  box-sizing: border-box;
}
.prode_top {
  width: 750rpx;
  height: 750rpx;
  margin: 0 auto;
  position: relative;
}
.weiyi {
  bottom: 0;
  left: 0;
  color: #fff;
}
.icoon {
  display: inline-block;
  width: 30rpx;
  height: 30rpx;
  position: relative;
  margin-right: 10rpx;
}
.mar40 {
  margin-left: 40rpx;
}
.icoon image {
  position: absolute;
  top: 0;
  left: 0;
  width: 30rpx;
  height: 30rpx;
}
.borru {
  width: 750rpx;
  height: 70rpx;
  background-color: #fff;
  border-radius: 23rpx;
  margin-top: -30rpx;
}
.swiper-box {
  width: 690rpx;
  overflow: hidden;
  margin: 0 auto;
}
.wid100 {
  width: 100%;
  margin: 0 auto;
  display: block;
  height: 750rpx;
}
.cents {
  width: 100%;
  margin: 50rpx auto;
}

.cents .title {
  font-size: 40rpx;
  font-weight: bold;
  padding-left: 30rpx;
}
.padd30 {
  padding: 30rpx;
  box-sizing: border-box;
}
.cents .desc {
  font-size: 24rpx;
  line-height: 32rpx;
  color: rgba(255, 255, 255, 0.7);
}
.swiper-box2 {
  overflow: hidden;
  margin: 25rpx auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150rpx;
}
.texts {
  text-align: center;
  line-height: 150rpx;
  position: absolute;
  font-size: 32rpx;
  font-weight: bold;
  color: rgb(255, 255, 255);
}
.pross {
  height: 550rpx;
}
.paddi {
  height: 150rpx !important;
  padding: 15rpx;
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.paddi:first-child {
  padding-left: 0;
}
.paddi:last-child {
  padding-right: 0;
}
.paddi img {
  max-width: 100%;
  width: 100%;
  height: 100%;
}
.wid100 image {
  border-radius: 16rpx;
  height: 400rpx;
  width: 690rpx;
}
.huxin {
  font-size: 28rpx;
  font-weight: bold;
}
.wids {
  margin: 40rpx auto;
  display: block;
  max-width: 100%;
}
.widss image {
  border-radius: 16rpx;
  height: 370rpx;
  width: 630rpx;
}
.prossgg {
  height: 280rpx;
}
.re {
  position: relative;
}
.ab {
  position: absolute;
}
</style>
