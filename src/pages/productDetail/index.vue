<template>
  <div>
    <div class="prode_top">
      <img
        style="width: 100%;height: 750rpx; background-color: #eeeeee;"
        mode="center"
        :src="content.picture"
      >
      <div class="ab cents weiyi">
        <div class="title">{{content.title}}</div>
        <div class="dja pf3">
          <div class="kuai">
            <div class="vertop">
              <i class="icoon">
                <img src="/static/images/icon1.png">
              </i>
              <span class="descss">户型</span>
            </div>
            <div class="mar40 huxin">{{ content.description }}</div>
          </div>

          <div class="kuai">
            <div class="vertop">
              <i class="icoon">
                <img src="/static/images/icon2.png">
              </i>
              <span class="descss">面积</span>
            </div>
            <div class="mar40 huxin">{{ content.link_url }}㎡</div>
          </div>

          <div class="kuai">
            <div class="vertop">
              <i class="icoon">
                <img src="/static/images/icon3.png">
              </i>
              <span class="descss">城市</span>
            </div>
            <div class="mar40 huxin">{{ content.author }}</div>
          </div>
        </div>
      </div>
      <div class="borru"></div>
    </div>

    <div class="titss mar30 mar20 colb59570 fontwei" v-show="content.massage.length>=1">
      业主说
      <!-- <span></span> -->
    </div>
    <div class="dja padd30" v-show="content.massage.length>=1" style="align-items: flex-start">
      <div class="fle1">
        <img src="/static/images/avatar.png" class="fle1pic">
      </div>
      <div class="fle2">{{ content.massage }}</div>
    </div>

    <div class="cenrt">
      <wxParse :content="content.contents.content" @preview="showImgs"/>
    </div>
    <div class="clearfix"></div>
    <div class="titss2 mar30" v-show="content.goods_list.length > 0">
      <span></span>
      选用产品
    </div>
    <div class="pad30 mar20" v-show="content.goods_list.length > 0">
      <swiper
        :display-multiple-items="multipleItems"
        next-margin="30rpx"
        class="fl"
        :indidator-dots="content.goods_list.length > 0"
      >
        <block v-for="(item, index) in content.goods_list" :key="index">
          <swiper-item class="widssgg3 fl">
            <img :src="item.goods_img" mode="aspectFill">
            <div class="titss2 mar20">
              <div class="descss eklp1 col999" style="font-size:22rpx;">{{ item.space }}</div>
              <div class="eklp1 fontwei">{{ item.goods_name }}</div>
            </div>
          </swiper-item>
        </block>
      </swiper>
    </div>
    <div class="clearfix"></div>
    <!--分享-->
    <Share
      :title="content.title"
      :url="'pages/productDetail/main?id='+content.article_id"
      :thumb="content.picture"
      cat="article"
      :keyid="content.article_id"
      :hasshare="hasshare"
    ></Share>
    <!--分享-->
    <div class="dja" v-show="content.other.length > 0">
      <div class="wid100ss padd30" @click="toanli('/pages/productlist/main?trw=1')">
        <span style="float:left;" class="eklp1 titss">您可能感兴趣的其他案例</span>
        <span style="font-family: cursive;float:right;padding-top:10rpx;">
          <img :src="righs" style="width:10rpx;height:22rpx;">
        </span>
      </div>
    </div>
    <!--2轮播-->
    <div class="padd30gs lunbo2" v-show="content.other.length == 1">
      <swiper
        display-multiple-items="1"
        previous-margin="30rpx"
        next-margin="30rpx"
        class="fl padd30gss swipersf"
      >
        <block v-for="(item, index) in content.other" :key="index">
          <swiper-item
            class="widssgg4 fl"
            @click="toanli('/pages/productDetail/main?id='+item.article_id)"
          >
            <div style="width:100%;height:400rpx;overflow:hidden;">
              <img :src="item.picture" mode="widthFix">
            </div>
            <div class="titss2 mar20 wid270 wid10d">
              <div class="eklp1 coladadad">{{ item.title }}</div>
              <div class="descss eklp1 coladadad">
                {{ item.description }}·{{ item.author }}·{{ item.keyword }}
                <i
                  class="fr dja coladadad"
                  style="margin-top:-10rpx"
                >
                  <a>
                    <img :src="guanzhu" class="ims">
                  </a>
                  {{ item.views }}
                </i>
              </div>
            </div>
          </swiper-item>
        </block>
      </swiper>
    </div>
    <!--2-->
    <div class="padd30gs lunbo2" v-show="content.other.length > 1">
      <swiper
        display-multiple-items="1"
        previous-margin="30rpx"
        next-margin="30rpx"
        class="fl padd30gss"
        v-if="content.other.length > 1"
      >
        <block v-for="(item, index) in content.other" :key="index">
          <swiper-item
            class="widssgg4 fl"
            @click="toanli('/pages/productDetail/main?id='+item.article_id)"
          >
            <div style="width:100%;height:300rpx;overflow:hidden;">
              <img :src="item.picture" mode="widthFix">
            </div>
            <div class="titss2 mar20 wid270">
              <div class="eklp1">{{ item.title }}</div>
              <div class="descss eklp1">
                {{ item.description }}·{{ item.author }}·{{ item.keyword }}
                <i
                  class="fr dja"
                  style="margin-top:-10rpx"
                >
                  <a>
                    <img :src="guanzhu" class="ims">
                  </a>
                  {{ item.views }}
                </i>
              </div>
            </div>
          </swiper-item>
        </block>
      </swiper>
    </div>
    <div class="fix wid100ss dja" v-if="content.is_state==1">
      <div class="butt dja" @click="toanli('/pages/appointment/main?id='+content.article_id)">
        <template v-if="content.hasyy>=1">再次预约</template>
        <template v-else>预约参观</template>
      </div>
      <button open-type="contact" session-from="weapp" class="dja">
        <img :src="listing" class="tupic">
      </button>
      <div class="dja">
        <img :src="shoucan" class="tupic" v-if="!content.collect" @click="collect(1)">
        <img :src="yishoucan" class="tupic" v-else @click="collect(2)">
      </div>
    </div>

    <div class="fix wid100ss dja" v-else>
      <div class="dis1">
        <button open-type="contact" session-from="weapp" class="dja">
          <img :src="listing" class="tupic">
        </button>
      </div>
      <div class="dis2">
        <div class="dja">
          <img :src="shoucan" class="tupic" v-if="!content.collect" @click="collect(1)">
          <img :src="yishoucan" class="tupic" v-else @click="collect(2)">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Share from "@/components/Share";

import wxParse from "mpvue-wxparse";
export default {
  components: {
    Share,
    wxParse
  },
  data() {
    return {
      shoucaning: false,
      indicatorDots: true,
      guanzhu: "/static/images/guanzhu.jpg",
      listing: "/static/images/listings.png",
      shoucan: "/static/images/shoucan.jpg",
      righs: "/static/images/right.png",
      yishoucan: "/static/images/yishoucan.png",
      detailImagesHeight: 0,
      id: "",
      content: {
        contents: {
          imglist: [],
          content: ""
        },
        massage: "",
        goods_list: [],
        other: []
      },
      multipleItems: 1,
      hasshare: false
    };
  },

  // components: {
  //   card
  // },
  mounted() {
    // console.log(this.$root.$mp.query.id);
    //获取图片信息
  },

  methods: {
    showImgs(e, evn) {
      mpvue.navigateTo({
        url: "/pages/keting/main?type=article&id=" + this.id + "&url=" + e
      });
    },

    toanli(url) {
      mpvue.navigateTo({
        url: url
      });
    },
    collect(type) {
      let url;
      let _this = this;
      if (type == 1) {
        url = "user/collect";
      } else {
        url = "user/cancelCollect";
      }
      mpvue.showLoading({
        title: "请求中",
        mask: true
      });
      _this.$http.post(
        url,
        { key: _this.content.article_id, cat_id: 1 },
        function(res) {
          wx.hideLoading();
          if (type == 1) {
            _this.content.collect = true;
          } else {
            _this.content.collect = false;
          }

          wx.showToast({
            title: res.msg,
            icon: "success",
            duration: 1500
          });
        }
      );
    }
  },

  onShow() {
    let _this = this;
    let Query = _this.$http.getQuery();
    let id = Query.id;
    //      let id=2
    _this.id = id;
    mpvue.showLoading({
      title: "加载中",
      mask: true
    });
    _this.$http.get("index/getArticleDetailsById/" + id, {}, function(res) {
      wx.hideLoading();
      _this.content = res.data;
      // console.log(_this.content);
      if (_this.content.goods_id >= 3) {
        _this.multipleItems = 3;
      }

      wx.setNavigationBarTitle({
        title: _this.content.title
      });
    });
    let share = _this.$http.getQuery().share;

    if (share) {
      _this.hasshare = true;
    }
  },
  /* 转发*/
  onShareAppMessage: function(ops) {
    let title = ops.target.dataset.title;
    let url = ops.target.dataset.url;
    return {
      title: title,
      path: url,
      success: function(res) {
        // 转发成功
        console.log("转发成功:" + JSON.stringify(res));
      },
      fail: function(res) {
        // 转发失败
        console.log("转发失败:" + JSON.stringify(res));
      }
    };
  }
};
</script>

<style scoped>
/* @import url("~mpvue-wxparse/src/wxParse.css"); */
.wid10d {
  width: 100% !important;
}
.lunbo2 .swipersf {
  height: 520rpx;
}
.dis1 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
}
.dis2 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
}
.widssgg4 image {
  width: 100%;
  height: 320rpx;
  overflow: hidden;
  /* border-radius: 10rpx; */
}
.padd30gss .widssgg4 {
  padding-right: 30rpx;
  box-sizing: border-box;
}
.padd30gss .widssgg4:last-child {
  padding-right: 0rpx;
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
  background-color: #403c3c;
}

.tupic {
  width: 60rpx;
  height: 58rpx;
  margin: 0 20rpx;
}
.tupic2 {
  width: 56rpx;
  height: 54rpx;
  margin: 0 20rpx;
}

.butt {
  width: 470rpx;
  height: 70rpx;
  border-radius: 4rpx;
  background-color: #b59570;
  font-size: 32rpx;
  color: #000;
  font-weight: 500;
  margin: 0 20rpx;
}
.fix {
  position: fixed;
  height: 100rpx;
  width: 100%;
  border-top: 1px solid #3b3737;
  bottom: 0;
  left: 0;
  background-color: #403c3c;
}
.ims {
  width: 30rpx !important;
  height: 25rpx !important;
  margin-top: 8rpx;
  margin-right: 8rpx;
}
.widssgg4 .wid270 {
  width: 540rpx;
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
.widssgg3:first-child {
  margin-right: 30rpx;
  box-sizing: border-box;
}
.widssgg3 {
  padding-left: 30rpx;
  box-sizing: border-box;
}
.widssgg3 image {
  width: 100%;
  height: 200rpx;
  overflow: hidden;
  /* border-radius: 10rpx; */
}
.widssgg4 image {
  width: 100%;
  height: 320rpx;
  overflow: hidden;
  /* border-radius: 10rpx; */
}
.descss {
  font-size: 25rpx;
  /*color: #999;*/
}
.titss2 {
  width: 210rpx;
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
  padding-left: 13rpx;
  flex-grow: 1;
  font-size: 30rpx;
  color: #adadad;
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
  margin-bottom: 125rpx;
}
.vertop {
  vertical-align: top;
  display: flex;
  align-items: center;
  color: #ccc;
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
  width: 100%;
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
  width: 40rpx;
  height: 40rpx;
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
  width: 35rpx;
  height: 35rpx;
}
.borru {
  position: relative;
  width: 750rpx;
  height: 70rpx;
  background-color: #403c3c;
  /* border-radius: 23rpx; */
  margin-top: -30rpx;
}
.swiper-box {
  width: 690rpx;
  overflow: hidden;
  margin: 0 auto;
}
/*.wid100 {*/
/*width: auto;*/
/*margin: 0 auto;*/
/*display: block;*/
/*height: 750rpx;*/
/*}*/
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
  font-size: 30rpx;
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
