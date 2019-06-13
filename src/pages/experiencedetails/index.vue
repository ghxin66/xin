<template>
  <div class="experience">
    <div style="clear:both;width:100%;height:1px;"></div>

    <div>
      <div class="dja hei290">
        <img :src="content.picture" class="hei290">
        <div class="ab bott65">
          <span></span>
          <div>{{ content.title }}</div>
        </div>
      </div>
      <div class="re mar342"></div>

      <wxParse :content="content.contents"/>
      <div class="kuaiqu">
        <div class="buttn dja" @click="back()">快去预约参观</div>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
// import card from "@/components/card";
import wxParse from "mpvue-wxparse";
export default {
  components: {
    wxParse
  },
  data() {
    return {
      imcon1: "/static/images/imcon1.jpg",
      imcon2: "/static/images/imcon2.jpg",
      imcon3: "/static/images/imcon3.jpg",
      ty_bg: "/static/images/ty_bg.jpg",
      shijian: "/static/images/shijian.jpg",
      listing: "/static/images/listing.jpg",
      shoucan: "/static/images/shoucan.jpg",
      content: {}
      //地图结束
    };
  },

  methods: {
    back() {
      mpvue.navigateBack({
        delta: 1
      });
    }
  },
  created() {
    // let app = getApp()
  },
  onShow(options) {
    let _this = this;
    let Query = _this.$http.getQuery();
    let id = Query.id;
    _this.$http.get("index/getSingContentById/" + id, {}, function(res) {
      _this.content = res.data;
    });
  }
};
</script>

<style scoped>
@import url("~mpvue-wxparse/src/wxParse.css");

.imcons {
  width: 73rpx;
  height: 76rpx;
}
.centers {
  text-align: center;
}
.buttn {
  width: 690rpx;
  margin: 0 auto;
  height: 82rpx;
  font-size: 32rpx;
  margin-bottom: 110rpx;
  background: -webkit-linear-gradient(left, #fadd81, #f5c254);
  background: -o-linear-gradient(right, #fadd81, #f5c254);
  background: -moz-linear-gradient(right, #fadd81, #f5c254);
  background: linear-gradient(to right, #fadd81, #f5c254);
  background: #b59570;
}
.pics {
  width: 67rpx;
  height: 67rpx;
  margin-right: 42rpx;
}
.ty_bg {
  width: 750rpx;
  height: 280rpx;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30rpx;
  box-sizing: border-box;
}
.fls {
  flex-grow: 1;
  flex-basis: 33%;
}
.imsgg {
  width: 750rpx;
  height: 320rpx;
  position: absolute;
  z-index: -1;
  left: 0;
  top: 0;
}
.hei120 {
  height: 125rpx;
  width: 690rpx;
  margin: 30rpx auto;
  box-shadow: 0 0 10rpx 10rpx #eee;
  font-size: 28rpx;
  font-weight: bold;
}
.cenrt {
  line-height: 50rpx;
}
.cenrt img {
  max-width: 100%;
  height: auto !important;
  overflow: hidden;
  /* border-radius: 20px !important; */
}
.mar342 {
  width: 100%;
  height: 50rpx;
  border-radius: 80rpx;
  margin-top: -25rpx;
  background-color: #403c3c;
}
.s100rp {
  flex-basis: 100rpx;
}
.hujiaozi {
  font-size: 22rpx;
  text-align: center;
  margin-top: 5rpx;
}
.hujiao {
  width: 55rpx;
  height: 55rpx;
}
.dj {
  display: flex;
  justify-content: flex-start;
}
.gonli span {
  width: 100rpx;
  height: 37rpx;
  /* border-radius: 4rpx; */
  background-color: #fff1d1;
  color: #b59570;
  margin-right: 12rpx;
  font-size: 20rpx;
  padding: 5rpx 10rpx;
}
.dibu {
  background-color: #f3f1ee;
  width: 750rpx;
  height: 250rpx;
  margin-top: -2rpx;
  display: flex;
  justify-content: center;
  align-items: center;
}
.titss3 {
  color: #333;
  position: relative;
  width: max-content;
  font-weight: bold;
  font-size: 36rpx;
  margin-top: 10rpx;
}
.dibu_view {
  width: 690rpx;
  margin: 0 auto;
  height: 200rpx;
  background-color: #fff;
  /* border-radius: 15rpx; */
  padding: 10rpx 30rpx;
  box-sizing: border-box;
}
.fles1 {
  flex: 1;
}
.fles2 {
  width: 200rpx;
  flex-basis: 200rpx;
}
.hei30 {
  height: 65rpx;
  width: 690rpx;
  margin: 0 auto;
  position: relative;
  z-index: 111;
  margin-top: 40rpx;
}
.sou {
  height: 65rpx;
  background-color: #fff;
  border: 1px solid #f5f5f5;
  /* border-radius: 8rpx; */
  box-sizing: border-box;
  padding-left: 62rpx;
  font-size: 24rpx;
  color: #999;
}
input::-webkit-input-placeholder {
  color: #c6c6c6;
}
.bac {
  position: absolute;
  z-index: 22;
  left: 15rpx;
  top: 7rpx;
}
.soupic {
  width: 50rpx;
  height: 50rpx;
}
.maps {
  z-index: 1;
  margin-top: -90rpx;
}
.re {
  position: relative;
}
.hei850 {
  height: 100%;
}
.tupic {
  width: 60rpx;
  height: 58rpx;
  margin: 0 20rpx;
}
.butt {
  width: 470rpx;
  height: 70rpx;
  /* border-radius: 8rpx; */
  background-color: #b59570;
  font-size: 32rpx;
  color: #000;
  font-weight: 600;
  margin: 0 20rpx;
  opacity: 0.9;
  transition: all 1s;
}
.butt:hover {
  opacity: 1;
}
.bott65 {
  bottom: 100rpx;
  left: 35rpx;
  width: 620rpx;
  color: #fff;
  font-size: 42rpx;
  font-weight: bold;
}
.bott65 span {
  display: inline-block;
  width: 65rpx;
  height: 10rpx;
  background-color: #b59570;
  /* border-radius: 20rpx; */
  position: relative;
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
  width: 26rpx !important;
  height: 26rpx !important;
  margin-top: 8rpx;
}
.wid270 {
  width: 690rpx !important;
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
  padding-right: 20rpx !important;
}
.hei290 {
  width: 750rpx;
  margin: 0 auto;
  height: 390rpx;
  /* border-radius: 8rpx; */
  position: relative;
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
  /* border-radius: 10rpx; */
}
.widssgg4 {
  margin-bottom: 50rpx;
  border: 1rpx solid #eee;
  /* border-radius: 15rpx; */
  position: relative;
}
.widssgg4 image {
  width: 690rpx;
  height: 420rpx;
  overflow: hidden;
  border-top-right-radius: 10rpx;
  border-top-left-radius: 10rpx;
}
.descss {
  font-size: 0.22rem;
  color: #999;
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
.lunbo2 {
  margin-top: -20rpx;
}
swiper {
  height: 300rpx;
  text-align: center;
  display: flex;
}
.lunbo2 .swiper {
  /* height: 560rpx; */
  margin-bottom: 150rpx;
  /* border: 1rpx solid #eee; */
}
.bttn {
  /* border-radius: 4rpx; */
  width: 140rpx;
  height: 50rpx;
  background-color: #b59570;
  position: absolute;
  top: 24rpx;
  left: 24rpx;
  color: #000;
  font-size: 24rpx;
  font-weight: 100;
  display: flex;
  justify-content: center;
  align-items: center;
}
.borru {
  width: 750rpx;
  height: 70rpx;
  background-color: #fff;
  /* border-radius: 23rpx; */
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
  /* border-radius: 16rpx; */
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
  /* border-radius: 16rpx; */
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
