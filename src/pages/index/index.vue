
<template>
  <div class="index_index">
    <div class="swiper-box" style="position:relative">
      <swiper
        v-if="imgUrls.length > 0"
        :indidator-dots="imgUrls.length > 0"
        autoplay
        :circular="circular"
        interval="10000"
        @change="handleChange($event)"
      >
        <block v-for="(item, index) in imgUrls" :key="index">
          <swiper-item
            class="wid100 dja"
            :class="curIndex===index ? 'active_item' : 'item'"
            :animation="index == curIndex ? animationData : animationData2"
          >
            <img :src="item.big_pic" style="width:100%;height:460rpx;" />
            <!-- @click="topic(item.linkurl,item.adv_id)" -->
          </swiper-item>
        </block>
      </swiper>
      <div class="swiper_dot_wrap swiper-container-top">
        <ul class="nowarpers">
          <li
            v-for="(item, index) in imgUrls"
            :key="index"
            class="tabs swiper-slide dja"
            :class="{'actives':curIndex === index}"
          >
            <!-- <dd></dd> -->
            <img
              src="/static/images/zhishidian.png"
              alt
              style="width:18rpx;height:18rpx;"
              v-show="curIndex === index"
            />
          </li>
        </ul>
      </div>
    </div>

    <swipers class="swiper-box2" style="padding:0 32rpx;">
      <block>
        <swiperitem
          class="wid100 paddi"
          style="height:155rpx;"
          @click="bindViewTap('/pages/productlist2/main')"
        >
          <img :src="lookpro.big_pic" mode="aspectFill" style="height:100%;" />
        </swiperitem>
      </block>

      <block>
        <swiperitem
          class="wid100 paddi"
          style="height:155rpx;"
          @click="bindViewTap('/pages/experience/main')"
        >
          <img :src="topro.big_pic" mode="aspectFill" style="height:100%;" />
        </swiperitem>
      </block>
    </swipers>

    <div style="margin-top:80rpx;">
      <div class="titss mar30 mar50" style="margin-left:32rpx;display:inline">
        <!-- <a style="display:inline;color:#000">质感</a>
        <a style="display:inline;color:#000">空间</a>-->
        <img src="/static/images/zgkj138.png" style="width:142rpx;height:33rpx;margin:0 auto;" />
        <!-- <span></span> -->
      </div>
      <div
        style="float:right;font-size:24rpx;color:#444;display:inline;margin-right:30rpx;line-height:50rpx;"
        @click="bindViewTap('/pages/zhigan/main')"
      >更多</div>
    </div>

    <!-- <div class="mar30 font24 coladadad" style="text-transform:uppercase">Texture space</div> -->

    <div class="wids">
      <swiper
        next-margin="30rpx"
        previous-margin="30rpx"
        class="fl pross"
        display-multiple-items="1"
        v-if="articlelist.length > 0"
      >
        <block v-for="(item, index) in articlelist" :key="index">
          <swiper-item
            class="widss fl"
            @click="bindViewTap('/pages/productDetail/main?id='+item.article_id)"
          >
            <img :src="item.picture" mode="scaleToFill" />

            <!-- <div class="titss2 mar20 coladadad" style="font-size:32rpx;text-align:left">
              {{ item.title }}
              <div class>
                <i class="icos act fl">#{{ item.keyword }}</i>
                <i class="icos fl">#{{ item.author }}</i>
                <i class="icos fl">#{{ item.description }}</i>
              </div>
            </div>-->
          </swiper-item>
        </block>
      </swiper>
    </div>
    <div class="clearfix"></div>
    <!-- <div class="userinfo" @click="bindViewTap">
      <img
        class="userinfo-avatar"
        v-if="userInfo.avatarUrl"
        :src="userInfo.avatarUrl"
        background-size="cover"
      >
      <img class="userinfo-avatar" src="/static/images/user.png" background-size="cover">

      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>-->

    <!-- <div class="titss mar30 mar50">
      <a style="display:inline;color:#b59570">设计</a>
      <a style="display:inline;color:#fff">方式</a>
       <span></span>
    </div>
    <div class="mar30 font24 coladadad" style="text-transform:uppercase">Design life</div>
    <div class="titss2 mar30 coladadad" style="margin-top:30rpx;margin-left:34rpx;">
      <span style="left:-30rpx;"></span>
      {{xinfengshan}}
    </div>
    <div class="mar20">
      <swiper
        display-multiple-items="2"
        next-margin="30rpx"
        previous-margin="30rpx"
        class="fl prossgg marbtn50"
        v-if="goodslist.length > 0"
      >
        <block v-for="(item, index) in goodslist" :key="index">
          <swiper-item
            class="widssgg fl"
            @click="bindViewTap('/pages/productdetails_3/main?id='+item.goods_id)"
          >
            <img :src="item.goods_img" mode="center" />
          </swiper-item>
        </block>
      </swiper>
    </div>-->
    <div class="clearfix"></div>
  </div>
</template>

<script>
import card from "@/components/card";

export default {
  data() {
    return {
      curIndex: 0,
      indicatorDots: true,
      circular: true,
      userInfo: {
        nickName: "mpvue",
        avatarUrl: "http://mpvue.com/assets/logo.png"
      },
      imgUrls: [],
      lookpro: {},
      topro: {},
      zwal: "整屋案例",
      shfs: "生活方式",
      xinfengshan: "SANFI · 新风尚",
      articlelist: [],
      goodslist: [],
      hasshare: false
    };
  },
  components: {
    card
  },
  methods: {
    handleChange(e) {
      this.curIndex = e.mp.detail.current;
      this.changeActive();
      this.changeNormal();
    },
    // 收缩
    changeNormal() {
      var animation2 = wx.createAnimation({
        duration: 500,
        timingFunction: "ease"
      });
      this.animation2 = animation2;
      animation2
        .scale(0.9)
        .opacity(0.3)
        .step();
      this.animationData2 = animation2.export();
    },
    // 展开
    changeActive() {
      var animation = wx.createAnimation({
        duration: 500,
        timingFunction: "ease"
      });
      this.animation = animation;
      animation
        .scale(1)
        .opacity(1)
        .step();
      this.animationData = animation.export();
    },
    topic(linkurl, adv_id) {
      if (linkurl == 1) {
        mpvue.navigateTo({
          url: "/pages/about/main?id=" + adv_id
        });
      } else {
        mpvue.navigateTo({
          url: "/pages/about2/main?id=" + adv_id
        });
      }
    },
    bindViewTap(url) {
      mpvue.navigateTo({
        url: url
      });
    },
    toproductdetail(e) {
      const url = "/pages/productDetail/main?id=" + e;
      if (mpvuePlatform === "wx") {
        mpvue.switchTab({ url });
      } else {
        mpvue.navigateTo({ url });
      }
    }
  },
  onShow() {
    var _this = this;
    // 获取banner图
    _this.$http.get("index/getAdvListByCatId/15", {}, function(res) {
      _this.imgUrls = res.data;
    });
    // 获取看产品模块的图
    _this.$http.get("index/getAdvListByCatId/16", {}, function(res) {
      _this.lookpro = res.data[0];
    });
    // 获取去体验模块的图
    _this.$http.get("index/getAdvListByCatId/17", {}, function(res) {
      _this.topro = res.data[0];
    });
    // 获取案例
    _this.$http.get("index/getArticleByCatId/5", {}, function(res) {
      _this.articlelist = res.data.data;
    });
    // 获取产品
    _this.$http.get("product/getGoodsListByParam", {}, function(res) {
      _this.goodslist = res.data.data;
    });
  }
};
</script>

<style scoped>
.actives {
  padding: 0 !important;
  background: rgba(0, 0, 0, 0) !important;
}
swiper {
  height: 460rpx;
  text-align: center;
  display: flex;
}
.widssgg img {
  margin: 0 auto;
  width: 325rpx;
}
.widssgg {
  text-align: center;
  padding-right: 0;
}
.swiper-box {
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  /* margin-top: 30rpx; */
}
.wid100 {
  width: 690rpx;
  margin: 0 auto;
  display: block;
  height: 400rpx;
  max-width: 100%;
}
.swiper-box2 {
  overflow: hidden;
  margin: 35rpx auto;
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
  height: 465rpx;
  margin-bottom: 30rpx;
}
/* .pross .widss:first-child {
  padding-left: 30rpx;
} */
.pross .widss {
  padding-right: 25rpx;
  box-sizing: border-box;
}
.pross .widss:last-child {
  padding-right: 0rpx;
}
.paddi {
  width: 334rpx !important;
  /* height: 156rpx !important; */
  padding: 15rpx;
  /* box-sizing: border-box; */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.paddi:first-child {
  padding-left: 2rpx;
}
.paddi:last-child {
  padding-right: 2rpx;
}
.paddi img {
  max-width: 100%;
  width: 100%;
  border-radius: 16rpx;
  overflow: hidden;
  /* height: 100%; */
}
.wid100 image {
  height: 460rpx;
  width: 690rpx;
}
.wids {
  margin: 10rpx auto;
  display: block;
  max-width: 100%;
}
.widss {
  /* text-align: center; */
}
.widss image {
  height: 465rpx;
  width: 100%;
  margin: 0 auto;
}
.prossgg {
  height: 280rpx;
}
/*这里开始是自定义轮播指示点*/

.active_item {
  transform: scale(1);
  opacity: 1;
}

.swiper_dot_wrap {
  position: absolute;
  bottom: 20rpx;
  right: 45rpx;
}

.swiper-container-top .swiper-slide {
  padding-bottom: 0px;
  margin-right: 20rpx;
  transition: all 0s;
  padding: 8rpx;
  /* border: 1rpx solid #ccc; */
  background: #706d6c;
  border-radius: 50%;
  float: left;
}

.swiper-container-top .swiper-slide ._dd {
  width: 0rpx;
  height: 0rpx;
  border-radius: 50%;
  color: #fff;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
}

.swiper-container-top .active ._dd {
  width: 4rpx;
  height: 4rpx;
  background: #fff;
  transition: all 0s;
}
.swiper-container-top .active {
  border: 1rpx solid #fff;
  padding: 8rpx;
  margin-top: -4rpx;
}
</style>
