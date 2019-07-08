<template>
  <div class="experience">
    <div>
      <div class="titss mar30 mar20" style="float:left">
        {{wyyd}}
        <span></span>
      </div>
    </div>
    <div class="clearfix"></div>

    <div class="padd30 lunbo2">
      <swper vertical class="fl swiper" v-if="lists.length > 0">
        <block v-for="(item, index) in lists" :key="index">
          <div class="des fontwei mar20">{{item.add_time.ym}}{{item.add_time.d}}</div>
          <swiperitem class="widssgg4 fl">
            <!-- <div class="bttn">预约体验</div> -->
            <img
              :src="item.article_id.picture"
              mode="widthFix"
              @click="toUrl('/pages/productDetail/main?id='+item.article_id.article_id)"
            />
            <div class="titss2 mar20 wid270">
              <div class="eklp1 fontwei">
                <div class="dess">
                  {{ item.article_id.description }} . {{item.article_id.author}} . {{item.article_id.keyword}}
                  <i></i>
                </div>
              </div>
              <div class="descss eklp1" style="font-size:24rpx;">
                {{ item.article_id.title }}
                <i
                  class="fr dja font22"
                  @click="todaohan(item.article_id.lng,item.article_id.lat)"
                >
                  <img :src="daohan" class="imssg" />
                  一键导航
                </i>
              </div>
            </div>
          </swiperitem>
        </block>
      </swper>
      <div v-else class="dja">
        <div class="hei285 dja">
          <img :src="noyu" style="width:190rpx;height:185rpx;" />
        </div>
      </div>
    </div>
    <div class="clearfix"></div>
    <div class="dja mar45 martt45">
      <div class="desc coleee talcen wid100r">
        <div class="bacfff bacffgg" style="font-size:26rpx;">END</div>
        <div class="desc dja linegs"></div>
      </div>
    </div>
  </div>
</template>

<script>
// import card from "@/components/card";

export default {
  data() {
    return {
      noyu: "/static/images/yuyue.jpg",
      daohan: "/static/images/daohan.png",
      imgUrls: [],
      wyyd: "我预约的",
      lists: [],
      page: 1,
      last_page: 1
    };
  },

  methods: {
    toUrl(url) {
      mpvue.navigateTo({ url });
    },
    todaohan(e, a) {
      //根据经纬度在地图上显示
      // var value = e.detail.value;
      wx.openLocation({
        longitude: Number(e),
        latitude: Number(a)
      });
    },
    getlists() {
      let _this = this;
      mpvue.showLoading({
        title: "加载中",
        mask: true
      });
      _this.$http.get(
        "user/userReserveList",
        {
          page: _this.page
        },
        function(res) {
          wx.hideLoading();
          _this.last_page = res.data.last_page;
          let list = res.data.data;
          for (let item in list) {
            _this.lists.push(list[item]);
          }
        }
      );
    }
  },
  onShow() {
    this.lists = [];
    this.getlists();
  },
  onReachBottom() {
    if (this.page < this.last_page) {
      this.page += 1;
      this.getlists();
    }
  }
};
</script>

<style scoped>
.des {
  font-size: 32rpx;
  color: #333;
}
.martt45 {
  margin-bottom: 70rpx;
}

.widssgg4 video {
  width: 100%;
  height: 420rpx;
  overflow: hidden;
  border-top-right-radius: 10rpx;
  border-top-left-radius: 10rpx;
}
.font22 {
  font-size: 22rpx;
  color: #fff;
  background: #ffdc76;
  padding-right: 8rpx;
  line-height: 24rpx;
  border-radius: 8rpx;
}
.dix {
  display: flex;
  line-height: 55rpx;
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
  border-radius: 4rpx;
  background-color: #fff1d1;
  color: #f6c251;
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
  border-radius: 15rpx;
  padding: 10rpx 30rpx;
  box-sizing: border-box;
}

.fles1 {
  flex: 1;
  padding-right: 10rpx;
  overflow-x: scroll;
  white-space: nowrap;
  font-size: 24rpx;
  color: #333;
  width: 690rpx;
}
.fles1 span {
  padding: 6rpx 27rpx;
  border-radius: 30rpx;
  font-size: 24rpx;
  color: #333;
  position: relative;
  /* display: inline-block; */
}
.cha {
  display: none;
}
.fles1 .sspan {
  background-color: #efefef;
}
.fles1 .sspan .cha {
  display: flex !important;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -3rpx;
  right: -3rpx;
  width: 20rpx;
  height: 20rpx;
  border-radius: 50%;
  background: #333;
  color: #fff;
  font-size: 16rpx;
}

.fles2 {
  width: 65rpx;
  padding-left: 5rpx;
  flex-basis: 70rpx;
  font-size: 24rpx;
  color: #f4be4e;
}
.hei30 {
  height: 65rpx;
  width: 690rpx;
  margin: 0 auto;
  position: relative;
  z-index: 111;
  margin-top: 5rpx;
}
.sou {
  height: 65rpx;
  background-color: #f6f5f5;
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
  border-radius: 8rpx;
  background-color: #f9d97a;
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
  animation: myfirst 2s;
}
@keyframes myfirst {
  from {
    width: 0;
  }
  to {
    width: 100rpx;
  }
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
.imssg {
  width: 35rpx !important;
  height: 35rpx !important;
  margin-right: 5rpx;
  margin-top: 3rpx;
  /* margin-top: 8rpx; */
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
  width: 690rpx;
  margin: 0 auto;
  height: 290rpx;
  border-radius: 8rpx;
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
  border-radius: 10rpx;
}
.widssgg4 {
  margin-bottom: 50rpx;
  border: none;
  border-radius: 15rpx;
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
  font-size: 22rpx;
  color: #999;
  padding-top: 8rpx;
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
  /* margin-bottom: 20rpx; */
  /* border: 1rpx solid #eee; */
}

.bttn {
  border-radius: 4rpx;
  width: 140rpx;
  height: 50rpx;
  background: -webkit-linear-gradient(
    left,
    #fadd81,
    #f5c254
  ); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(
    right,
    #fadd81,
    #f5c254
  ); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(
    right,
    #fadd81,
    #f5c254
  ); /* Firefox 3.6 - 15 */
  background: linear-gradient(to right, #fadd81, #f5c254);
  position: absolute;
  top: 24rpx;
  left: 24rpx;
  color: #000;
  font-size: 24rpx;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
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
.hei285 {
  height: 285rpx;
  width: 420rpx;
  overflow: hidden;
  border-radius: 15rpx;
}
</style>
