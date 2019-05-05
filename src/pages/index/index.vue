<template>
  <div class="index_index">
    <div class="swiper-box">
      <swiper
        v-if="imgUrls.length > 0"
        :indidator-dots="imgUrls.length > 0"
        :indicator-dots="indicatorDots"
        indicator-active-color="#efc159"
        autoplay
      >
        <block v-for="(item, index) in imgUrls" :key="index">
          <swiper-item class="wid100">
            <img :src="item" mode="scaleToFill">
          </swiper-item>
        </block>
      </swiper>
    </div>
    <swiper
      class="swiper-box2"
      display-multiple-items="2"
      previous-margin="30rpx"
      next-margin="30rpx"
      v-if="lookpro.length > 0"
    >
      <block v-for="(item, index) in lookpro" :key="index">
        <swiper-item class="wid100 paddi">
          <img :src="item.img" mode="scaleToFill">
          <div class="texts">{{item.name}}</div>
        </swiper-item>
      </block>
    </swiper>

    <div class="titss mar30 mar50">
      {{zwal}}
      <span></span>
    </div>

    <div class="wids pad30">
      <swiper next-margin="70rpx" class="fl pross" v-if="imgUrls.length > 0">
        <block v-for="(item, index) in imgUrls" :key="index">
          <swiper-item class="widss fl" @click="toproductdetail(item.id)">
            <img :src="item" mode="scaleToFill">
            <div class="titss2 mar20">
              低调沉稳，策划过年都法式别墅
              <div class>
                <i class="icos act fl">#法式</i>
                <i class="icos fl">#法式</i>
                <i class="icos fl">#法式</i>
              </div>
            </div>
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

    <div class="titss mar30">
      {{shfs}}
      <span></span>
    </div>
    <div class="titss2 mar30" style="margin-top:30rpx">
      <span></span>
      {{xinfengshan}}
    </div>
    <div class="pad30 mar20">
      <swiper
        display-multiple-items="2"
        next-margin="50rpx"
        class="fl prossgg marbtn50"
        v-if="imgUrls.length > 0"
      >
        <block v-for="(item, index) in imgUrls" :key="index">
          <swiper-item class="widssgg fl">
            <img :src="item" mode="scaleToFill">
          </swiper-item>
        </block>
      </swiper>
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
import card from "@/components/card";

export default {
  data() {
    return {
      indicatorDots: true,
      userInfo: {
        nickName: "mpvue",
        avatarUrl: "http://mpvue.com/assets/logo.png"
      },
      imgUrls: [
        "http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/newsPicture/05558951-de60-49fb-b674-dd906c8897a6",
        "http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/coursePicture/0fbcfdf7-0040-4692-8f84-78bb21f3395d",
        "http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/management-school-picture/7683b32e-4e44-4b2f-9c03-c21f34320870"
      ],
      lookpro: [
        {
          name: "看产品",
          img:
            "http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/newsPicture/05558951-de60-49fb-b674-dd906c8897a6"
        },
        {
          name: "去体验",
          img:
            "http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/coursePicture/0fbcfdf7-0040-4692-8f84-78bb21f3395d"
        }
      ],
      zwal: "整屋案例",
      shfs: "生活方式",
      xinfengshan: "IMOLA · 新风尚"
    };
  },
  components: {
    card
  },
  methods: {
    bindViewTap() {
      const url = "../logs/main";
      if (mpvuePlatform === "wx") {
        mpvue.switchTab({ url });
      } else {
        mpvue.navigateTo({ url });
      }
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

  created() {
    // let app = getApp()
  }
};
</script>

<style scoped>
swiper {
  height: 400rpx;
  text-align: center;
  display: flex;
}
.swiper-box {
  width: 690rpx;
  overflow: hidden;
  margin: 0 auto;
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
</style>
