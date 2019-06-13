<template>
  <div>
    <div>
      <div class="dja ban_cen" style="position: relative">
        <img :src="content.big_pic" style>
        <div class="zz"></div>
        <div class="ban_tit" style="z-index: 99">{{content.ad_name}}</div>
      </div>
      <div class="ban_text">
        <div>{{content.description}}</div>
      </div>

      <div class="cents">
        <div
          class="mar20"
          v-for="(item,index) in content.lists"
          :key="index"
          @click="bindViewTap('/pages/productDetail/main?id='+item.key_id.article_id)"
        >
          <div class="wh170 dja">
            <div class="pic" v-if="index<10">0{{index+1}}</div>
            <div class="pic" v-if="index>=10">{{index+1}}</div>
            <div class="dja title">{{item.title}}</div>
          </div>
          <div class="desc">{{item.mcontent}}</div>
          <div>
            <img :src="item.key_id.picture" class="wid100 ovh">
          </div>

          <div class="ban_text2 sdfjk">
            <div class="wid120">
              <img :src="item.key_id.picture" alt>
            </div>
            <div class="wid1202 mar24">
              <div
                class="title coladadad"
                style="font-size:34rpx;line-height:48rpx;font-weight:500;"
              >{{item.key_id.title}}</div>
              <div
                class="desc coladadad"
                style="font-size:24rpx;margin-top:15rpx;"
              >{{ item.key_id.keyword }}·{{item.key_id.link_url}}㎡</div>
            </div>

            <div class="dja wid1203">
              <span style="font-family: cursive;float:right;padding-top:10rpx;">
                <img :src="righs" style="width:10rpx;height:22rpx;">
              </span>
            </div>
          </div>
        </div>
      </div>
      <!-- <wxParse :content="article"/> -->
      <!--分享-->
      <Share
        :title="content.ad_name"
        :url="'/pages/about/main?id='+content.adv_id"
        :thumb="content.big_pic"
        cat="adv"
        :keyid="content.adv_id"
        :hasshare="hasshare"
      ></Share>
      <!--分享-->
      <div class="dja mar45" style="margin-bottom:45rpx;">
        <div class="desc coleee talcen wid100r">
          <div class="bac403c3c bacffgg font20 coladadad">END</div>
          <div class="linegs desc dja"></div>
        </div>
      </div>
    </div>

    <!-- <ul class="container log-list">
      <li v-for="(log, index) in logs" :class="{ red: aa }" :key="index" class="log-item">
        <card :text="(index + 1) + ' . ' + log"></card>
      </li>
    </ul>-->
  </div>
</template>

<script>
// import { formatTime } from "@/utils/index";
// import card from "@/components/card";
import Share from "@/components/Share";
import wxParse from "mpvue-wxparse";
export default {
  components: { wxParse, Share },
  data() {
    return {
      // article: "<div>我是HTML代码</div>",
      wxhy: "/static/images/wechat.jpg",
      pyq: "/static/images/frient.jpg",
      logs: [],
      righs: "/static/images/right.png",
      content: {
        lists: []
      },
      showt: false,
      hasshare: false
    };
  },
  methods: {
    bindViewTap(url) {
      mpvue.navigateTo({
        url: url
      });
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
  },
  created() {},
  onShow() {
    let _this = this;
    let Query = _this.$http.getQuery();
    //    let id = Query.id;
    let id = 97;
    _this.$http.get("index/getAdvDetailsById/" + id, {}, function(res) {
      _this.content = res.data;
    });
    let share = _this.$http.getQuery().share;

    if (share) {
      _this.hasshare = true;
    }
  }
};
</script>

<style scoped>
@import url("~mpvue-wxparse/src/wxParse.css");

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

.tu img {
  width: 35rpx;
  height: 35rpx;
  padding-right: 10rpx;
}

.mart90 {
  margin-top: 80rpx;
  border-bottom: 1rpx solid #333030;
  padding-bottom: 40rpx;
}

.lin50 {
  line-height: 50rpx;
}

.sdfjk {
  display: flex;
  flex: 150rpx 1 0;
}

.tis {
  display: inline;
  float: right;
  padding: 0 20rpx;
}

.ban_text2 {
  margin: 0 auto;
  text-align: justify;
  /* box-shadow: 0 0 15rpx 2rpx #eee; */
  /* border-radius: 10rpx; */
  padding: 24rpx;
  position: relative;
  z-index: 1;
  background-color: #333030;
  font-size: 28rpx;
  box-sizing: border-box;
}

.mar24 {
  margin-left: 24rpx;
}

.wid120 {
  width: 210rpx;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wid120 image {
  height: 150rpx;
  /* border-radius: 8rpx; */
  overflow: hidden;
}

.wid1202 {
  flex-grow: 1;
}

.wid1203 {
  flex: 0 1 20rpx;
  font-family: cursive;
  margin-left: 12rpx;
}

.ovh {
  overflow: hidden;
  /* border-radius: 10rpx; */
  margin: 15rpx 0;
}

.wh170 {
  width: 100%;
  height: 130rpx;
  margin: 0.5rem 0;
  margin-bottom: 0rem;
}

.pic {
  position: absolute;
  width: 100%;
  text-align: center;
  height: 190rpx;
  font-size: 120rpx;
  font-weight: bold;
  z-index: -1;
  -webkit-background-clip: text;
  background-image: -webkit-gradient(
    linear,
    0 50%,
    0 0%,
    from(rgba(0, 0, 0, 0)),
    to(#bc966c)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
}

.pic image {
  width: 140rpx;
  height: 100rpx !important;
  z-index: -1;
}

.cents {
  width: 90%;
  margin: 50rpx auto;
}

.cents .title {
  font-size: 38rpx;
  font-weight: bold;
  color: #fff;
}

.cents .desc {
  font-size: 28rpx;
  color: #adadad;
}

.col999 {
  color: #999;
}

.ban_cen {
  width: 100%;
  height: 400rpx;
  position: relative;
}

.ban_cen image {
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  z-index: -1;
}

.ban_tit {
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 40rpx;
}

.ban_text {
  width: 90%;
  margin: 0 auto;
  text-align: justify;
  /* box-shadow: 0 0 20rpx 2rpx #eee; */
  /* border-radius: 10rpx; */
  padding: 28rpx;
  margin-top: -30rpx;
  position: relative;
  z-index: 1;
  background-color: #fff;
  font-size: 28rpx;
  box-sizing: border-box;
}
</style>
