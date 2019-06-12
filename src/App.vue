<script>
export default {
  created() {
    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */

    let logs;
    if (mpvuePlatform === "my") {
      logs = mpvue.getStorageSync({ key: "logs" }).data || [];
      logs.unshift(Date.now());
      mpvue.setStorageSync({
        key: "logs",
        data: logs
      });
    } else {
      logs = mpvue.getStorageSync("logs") || [];
      logs.unshift(Date.now());
      mpvue.setStorageSync("logs", logs);
    }
  },
  log() {
    console.log(`log at:${Date.now()}`);
  }
};
</script>

<style>
page {
  font-size: 0;
  background: #403c3c;
}
.coladadad {
  color: #adadad !important;
}
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
swiper {
  width: 100%;
  position: relative;
}
.tu img {
  width: 30rpx;
  height: 30rpx;
  padding-right: 5rpx;
}
.coleee {
  color: #eee;
}
.col999 {
  color: #999;
}
.martt45 {
  margin-bottom: 30rpx;
}
.mart90 {
  margin-top: 80rpx;
  border-bottom: 1rpx solid #333030;
  padding-bottom: 40rpx;
}
.bott65 {
  bottom: 65rpx;
  left: 35rpx;
  width: 620rpx;
  color: #fff;
  font-size: 42rpx;
  font-weight: bold;
}

.bott65 span {
  display: inline-block;
  width: 100rpx;
  height: 10rpx;
  background-color: #ffdc76;
  border-radius: 20rpx;
  position: relative;
}

.fr {
  float: right;
}
.tis {
  display: inline;
  float: right;
  padding: 0 20rpx;
}
.lin50 {
  line-height: 50rpx;
}
.cents .desc {
  font-size: 28rpx;
}
* {
  font-size: 26rpx;
  /* transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s; */
}
.eklp1 {
  overflow: hidden; /*超出部分隐藏*/
  white-space: nowrap; /*不换行*/
  text-overflow: ellipsis;
}
.eklp2 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.fontwei {
  font-weight: bold;
}
.wid100 {
  width: 100%;
}
.mar30 {
  margin-left: 30rpx;
  box-sizing: border-box;
}
.widssgg {
  padding-right: 30rpx;
  box-sizing: border-box;
  width: 100%;
}
.widssgg:last-child {
  padding-right: 0rpx;
}
.padr30 {
  padding-right: 30rpx;
  box-sizing: border-box;
}
.widssgg img {
  width: 100%;
  height: 280rpx;
}
.cenrt {
  font-size: 26rpx;
  padding: 30rpx;
  box-sizing: border-box;
  line-height: 45rpx;
}

.fixd {
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 111;
}
.fidx {
  width: 430rpx;
  margin: 0 auto;
  height: 580rpx;
  background: #eee;
  z-index: 555;
}
.fidx img {
  width: 430rpx;
  margin: 0 auto;
  height: 580rpx;
  background: #eee;
  z-index: 555;
}
.savs {
  background: #f8c52a;
  border-radius: 60rpx;
  width: 420rpx;
  margin: 50rpx auto;
  height: 60rpx;
  line-height: 60rpx;
  font-size: 32rpx;
}

.cenrt image {
  display: block;
  /* margin: 20rpx auto; */
}
.pad30 {
  padding-left: 30rpx !important;
}
.mar50 {
  margin-top: 40rpx;
}
.titss {
  font-size: 48rpx;
  color: #333;
  position: relative;
  width: max-content;
  font-weight: bold;
}
.titss span {
  display: inline-block;
  position: absolute;
  right: -15rpx;
  top: 5rpx;
  width: 10rpx;
  height: 10rpx;
  border-radius: 50%;
  background: rgb(231, 170, 3);
}
.col999 .gjsd {
  display: none;
}
.dess {
  position: relative;
  width: max-content;
  display: inline;
}
.dess i {
  display: inline-block;
  position: absolute;
  right: -15rpx;
  top: 2rpx;
  width: 10rpx;
  height: 10rpx;
  border-radius: 50%;
  background: rgb(231, 170, 3);
}
.clearfix {
  clear: both;
  width: 100%;
  height: 1px;
  zoom: 1;
}
.par20 {
  padding-top: 20rpx;
  padding-bottom: 20rpx;
}
.mar20 {
  margin-top: 20rpx;
  margin-bottom: 20rpx;
}
.marbtn50 {
  margin-bottom: 50rpx;
}
.font28 {
  font-size: 28rpx;
}
.colb59570 {
  color: #b59570;
}
.font42 {
  font-size: 42rpx !important;
}
.mart50 {
  margin-top: 30rpx;
  line-height: 60rpx;
}
.titss2 {
  font-size: 36rpx;
  position: relative;
  width: max-content;
  /* padding-left: 15rpx; */
  font-weight: 500;
}
.icos {
  background-color: #fff;
  color: #999;
  float: left;
  margin-right: 10rpx;
  font-size: 20rpx;
  padding: 6rpx 20rpx;
  margin-top: 20rpx;
}
.act {
  background-color: #b59570;
  color: #fff;
}
.titss2 span {
  display: inline-block;
  position: absolute;
  left: 0rpx;
  top: 49%;
  width: 22rpx;
  height: 3rpx;
  border-radius: 10rpx;
  background: #b59570;
}
.ovscll {
  overflow-x: scroll;
}
.fl {
  float: left;
  text-align: left;
}
.dja {
  display: flex !important;
  justify-content: center;
  align-items: center;
}
.maxcont {
  width: max-content;
}
.hei30 {
  height: 65rpx;
  width: 690rpx;
  margin: 0 auto;
  position: relative;
  z-index: 111;
  margin-top: 40rpx;
}
button::after {
  border: none;
}
.mar45 {
  margin-top: 40rpx;
}
.talcen {
  text-align: center;
}
.wid100r {
  width: 120rpx;
  opacity: 0.3;
}
.bacfff {
  background: #fff;
}
.bacffgg {
  position: relative;
  width: max-content;
  margin: 0 auto;
  padding: 0 12rpx;
  font-size: 20rpx;
}
.linegs {
  margin-top: -15rpx;
  width: 100%;
  height: 1px;
  background-color: #adadad;
}
.mar80 {
  margin-top: 75rpx;
}
.mar10 {
  margin: 10rpx 0;
}
.font24 {
  font-size: 24rpx !important;
}
.font26 {
  font-size: 26rpx !important;
}
.sou {
  height: 65rpx;
  background-color: #fff;
  border: 1px solid #f5f5f5;
  border-radius: 8rpx;
  box-sizing: border-box;
  padding-left: 62rpx;
  font-size: 24rpx;
  color: #999;
}
input::-webkit-input-placeholder {
  color: #c6c6c6;
}
.font20 {
  font-size: 20rpx !important;
}
.bac403c3c {
  background: #403c3c;
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
</style>
