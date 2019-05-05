<template>
  <div>
    <div class="dja ban_cen">
      <img :src="banner_bg" style>
      <div class="ban_tit">{{ban_tit}}</div>
    </div>
    <div class="ban_text">
      <div>{{conent}}</div>
    </div>

    <div class="cents">
      <div class="mar20" v-for="(item,index) in conts" :key="index">
        <div class="wh170 dja">
          <div class="pic" v-if="index<10">0{{index+1}}</div>
          <div class="pic" v-if="index>=10">{{index+1}}</div>
          <div class="dja title">{{item.title}}</div>
        </div>
        <div class="desc">{{item.desc}}</div>
        <div>
          <img :src="item.pic" class="wid100 ovh">
        </div>

        <div class="ban_text2 sdfjk">
          <div class="wid120">
            <img :src="item.thumb" alt>
          </div>
          <div class="wid1202 mar24">
            <div class="title">{{item.mintitle}}</div>
            <div class="desc col999">{{item.mindesc}}</div>
          </div>
          <div class="dja wid1203">></div>
        </div>
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
      banner_bg: "/static/images/banner_bg.png",
      imgUrls: [
        "http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/newsPicture/05558951-de60-49fb-b674-dd906c8897a6",
        "http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/coursePicture/0fbcfdf7-0040-4692-8f84-78bb21f3395d",
        "http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/management-school-picture/7683b32e-4e44-4b2f-9c03-c21f34320870"
      ],
      ban_tit: "时尚青年代言色，高级灰的那些事儿！",
      conent:
        "灰色，是现代青年偏爱额色调。它低调内敛，却时刻露出非凡的质感，它不动声色，却具有很大的包容性，总给人一种接近自然、极简单却又极优雅的视觉感受。本期我们就收集了IMOLA高级灰实景案例，一起来看看灰色在室内设计中的巧妙运用，希望给大家一些装修小灵感。",
      conts: [
        {
          title: "我是标题",
          desc:
            "很多人都好奇：设计师装修过各种风格、各种样式的家，那他们自己的家会是什么样呢？他又是如何运用灰色呢？",
          pic:
            "http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/newsPicture/05558951-de60-49fb-b674-dd906c8897a6",
          mintitle: "我是小标题",
          thumb:
            "http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/newsPicture/05558951-de60-49fb-b674-dd906c8897a6",
          mindesc: "我是小描述"
        },
        {
          title: "我是标题2",
          desc:
            "很多人都好奇：设计师装修过各种风格、各种样式的家，那他们自己的家会是什么样呢？他又是如何运用灰色呢？",
          pic:
            "http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/newsPicture/05558951-de60-49fb-b674-dd906c8897a6",
          mintitle: "我是小标题2",
          thumb:
            "http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/newsPicture/05558951-de60-49fb-b674-dd906c8897a6",
          mindesc: "我是小描述2"
        }
      ],
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
  created() {
    // this.article.replace("<img", '<img style="max-width:100%;height:auto" ');
    // let logs;
    // if (mpvuePlatform === "my") {
    //   logs = mpvue.getStorageSync({ key: "logs" }).data || [];
    // } else {
    //   logs = mpvue.getStorageSync("logs") || [];
    // }
    // this.logs = logs.map(log => formatTime(new Date(log)));
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
  font-size: 40rpx;
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
