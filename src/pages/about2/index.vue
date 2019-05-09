<template>
  <div>
    <div class="dja ban_cen">
      <img :src="content.big_pic" style>
      <div class="ban_tit">{{content.ad_name}}</div>
    </div>
    <div class="ban_text">
      <div>{{content.description}}</div>
    </div>

    <div class="cents">
      <div
        class="mar20"
        v-for="(item,index) in content.lists"
        :key="index"
        @click="bindViewTap('/pages/productdetails_3/main?id='+item.key_id.article_id)"
      >
        <div class="wh170 dja">
          <div class="pic" v-if="index<10">0{{index+1}}</div>
          <div class="pic" v-if="index>=10">{{index+1}}</div>
          <div class="dja title">{{item.title}}</div>
        </div>
        <div>
          <img :src="item.key_id.goods_img" class="wid100 ovh">
          <div class="title">{{item.key_id.goods_name}}系列</div>
        </div>
        <div class="desc">{{item.mcontent}}</div>
      </div>

      <!-- <wxParse :content="article"/> -->
      <!--分享-->
      <div class="fixd" v-if="showt" @click.stop="showthiss">
        <div>
          <div class="fidx"></div>
          <div class="savs dja" @click.stop="showthis">保存图片</div>
        </div>
      </div>
      <div class="bormar">
        <div class="cens mar20 mart90">
          <span class="title">分享到：</span>
          <button @click="showthiss" class="tis desc col999 lin50 tu dja">
            <img :src="pyq">朋友圈
          </button>
          <button open-type="share" class="tis desc col999 lin50 tu dja">
            <img :src="wxhy">微信好友
          </button>
        </div>
      </div>
      <!--分享-->
      <div class="dja mar45">
        <div class="desc coleee talcen wid100r">
          <div class="bacfff bacffgg">END</div>
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

import wxParse from "mpvue-wxparse";
export default {
  components: {
    wxParse
  },
  data() {
    return {
      // article: "<div>我是HTML代码</div>",
      wxhy: "/static/images/wechat.jpg",
      pyq: "/static/images/frient.jpg",
      logs: [],
      content: {
        lists: []
      },
      showt: false
    };
  },
  methods: {
    showthiss() {
      this.showt = !this.showt;
    },
    showthis() {
      //获取相册授权

      wx.getSetting({
        success(res) {
          wx.downloadFile({
            url:
              "http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/newsPicture/05558951-de60-49fb-b674-dd906c8897a6",
            success: function(res) {
              console.log(res);
              wx.saveImageToPhotosAlbum({
                filePath: res.tempFilePath,
                success: function(data) {
                  wx.showToast({
                    title: "保存成功",
                    icon: "success",
                    duration: 2000
                  });
                },
                fail: function(err) {
                  console.log(err);
                },
                complete(res) {
                  console.log(res);
                }
              });
            }
          });
        }
      });
    },
    bindViewTap(url) {
      mpvue.navigateTo({
        url: url
      });
    }
  },
  /* 转发*/
  onShareAppMessage: function(ops) {
    if (ops.from === "button") {
      // 来自页面内转发按钮
      console.log(ops.target);
    }
    return {
      title: "蜜蜂demo",
      path: `../about/main`,
      success: function(res) {
        // 转发成功
        console.log("转发成功:" + JSON.stringify(res));
        var shareTickets = res.shareTickets;
        // if (shareTickets.length == 0) {
        //   return false;
        // }
        // //可以获取群组信息
        // wx.getShareInfo({
        //   shareTicket: shareTickets[0],
        //   success: function (res) {
        //     console.log(res)
        //   }
        // })
      }
    };
  },
  created() {},
  onShow() {
    let _this = this;
    let Query = _this.$http.getQuery();
    let id = Query.id;
    //        let id=97
    _this.$http.get("index/getAdvDetailsById/" + id, {}, function(res) {
      _this.content = res.data;
    });
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
  width: 30rpx;
  height: 30rpx;
  padding-right: 5rpx;
}

.mart90 {
  margin-top: 80rpx;
  border-bottom: 1px solid #eee;
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
  box-shadow: 0 0 15rpx 2rpx #eee;
  border-radius: 10rpx;
  padding: 24rpx;
  position: relative;
  z-index: 1;
  background-color: #fff;
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
  border-radius: 8rpx;
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
  border-radius: 10rpx;
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
    0 80%,
    0 0%,
    from(rgb(255, 255, 255)),
    to(#ffeba2)
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
}

.cents .desc {
  font-size: 28rpx;
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
  box-shadow: 0 0 20rpx 2rpx #eee;
  border-radius: 10rpx;
  padding: 28rpx;
  margin-top: -30rpx;
  position: relative;
  z-index: 1;
  background-color: #fff;
  font-size: 28rpx;
  box-sizing: border-box;
}
</style>
