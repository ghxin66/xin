<template>
  <div>
    <div class="prode_top">
      <img :src="productdeal.alxq" alt class="wid100">
      <div class="ab cents weiyi">
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
      </div>
      <div class="borru"></div>
    </div>

    <div class="titss mar30 mar20">
      {{shfs}}
      <span></span>
    </div>
    <div class="dja padd30" style="align-items: flex-start">
      <div class="fle1">
        <img :src="yezhupic" class="fle1pic">
      </div>
      <div class="fle2">{{fles}}</div>
    </div>

    <div class="cenrt">
      <!-- <wxParse :content="centent"/> -->
      <div v-for="(item,indd) in list_item" :key="indd+1">
        <div class="titss mar20">{{item.title}}</div>
        <div v-for="(items,index) in item.imgs" :key="index" @click="toketin(items.id)">
          <img :src="items.pic" mode="widthFix" :style="'width:100%;'">
        </div>
        <div class="desc">{{item.text}}</div>
      </div>
    </div>

    <div class="titss mar30 mar20">
      {{shfs}}
      <span></span>
    </div>

    <div class="clearfix"></div>

    <div class="titss2 mar30" style>
      <span></span>
      {{xinfengshan}}
    </div>
    <div class="pad30 mar20">
      <swiper display-multiple-items="3" next-margin="50rpx" class="fl" v-if="imgUrls.length > 0">
        <block v-for="(item, index) in imgUrls" :key="index">
          <swiper-item class="widssgg3 fl" @click="toproductdetails_3(item.id)">
            <img :src="item.pic" mode="aspectFill">
            <div class="titss2 mar20">
              <div class="descss eklp1">客厅</div>
              <div class="eklp1">NIRVIRA</div>
              <!-- <div class>
                <i class="icos act fl">#法式</i>
                <i class="icos fl">#法式</i>
                <i class="icos fl">#法式</i>
              </div>-->
            </div>
          </swiper-item>
        </block>
      </swiper>
    </div>
    <div class="clearfix"></div>
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
    <div class="dja">
      <div class="wid100ss padd30" @click="toanli()">
        <span style="float:left;" class="eklp1 titss">你可能感兴趣的其他案例</span>
        <span style="font-family: cursive;float:right;padding-top:10rpx;">></span>
      </div>
    </div>
    <!--2轮播-->
    <div class="padd30 lunbo2">
      <swiper display-multiple-items="1" next-margin="80rpx" class="fl" v-if="imgUrls.length > 0">
        <block v-for="(item, index) in imgUrls" :key="index">
          <swiper-item class="widssgg4 fl" @click="toproductdetail(item.id)">
            <img :src="item.pic">
            <div class="titss2 mar20 wid270">
              <div class="eklp1">NIRVIRA</div>
              <div class="descss eklp1">
                客厅
                <i class="fr dja" style="margin-top:-10rpx">
                  <a>
                    <img :src="guanzhu" class="ims">
                  </a>880
                </i>
              </div>

              <!-- <div class>
                <i class="icos act fl">#法式</i>
                <i class="icos fl">#法式</i>
                <i class="icos fl">#法式</i>
              </div>-->
            </div>
          </swiper-item>
        </block>
      </swiper>
    </div>

    <div class="fix wid100ss dja">
      <div class="butt dja" @click="toappointment">预约参观</div>
      <button open-type="contact" session-from="weapp" class="dja">
        <img :src="listing" class="tupic">
      </button>
      <div class="dja">
        <img :src="shoucan" class="tupic">
      </div>
    </div>
  </div>
</template>

<script>
// import card from "@/components/card";

// import wxParse from "mpvue-wxparse";
export default {
  // components: {
  //   wxParse
  // },
  data() {
    return {
      wxhy: "/static/images/wechat.jpg",
      pyq: "/static/images/frient.jpg",
      indicatorDots: true,
      guanzhu: "/static/images/guanzhu.jpg",
      listing: "/static/images/listing.jpg",
      shoucan: "/static/images/shoucan.jpg",
      userInfo: {
        nickName: "mpvue",
        avatarUrl: "http://mpvue.com/assets/logo.png"
      },
      imgUrls: [
        {
          pic:
            "http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/newsPicture/05558951-de60-49fb-b674-dd906c8897a6",
          id: 0
        },
        {
          pic:
            "http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/newsPicture/05558951-de60-49fb-b674-dd906c8897a6",
          id: 1
        },
        {
          pic:
            "http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/newsPicture/05558951-de60-49fb-b674-dd906c8897a6",
          id: 2
        }
      ],
      shfs: "业主说",
      xinfengshan: "IMOLA · 新风尚",
      fles:
        "很多人都好奇，设计师装修过各种风格、各种样式的家，那他们自己的家会是什么样呢？今天我们就一起来欣赏一个从业14年的资深设计师的家，看他是如何设计的。",
      yezhupic:
        "http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/coursePicture/0fbcfdf7-0040-4692-8f84-78bb21f3395d",
      productdeal: {
        title: "我是标题",
        alxq: "/static/images/alxqbg.jpg",
        icon: [
          { pic: "/static/images/icon1.png", huxin: "户型", val: "平房" },
          { pic: "/static/images/icon2.png", huxin: "面积", val: "70㎡" },
          { pic: "/static/images/icon3.png", huxin: "城市", val: "广州" }
        ]
      },
      list_item: [
        {
          title: "我是标题",
          imgs: [
            {
              id: 0,
              pic:
                "http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/newsPicture/05558951-de60-49fb-b674-dd906c8897a6"
            },
            {
              id: 1,
              pic:
                "http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/newsPicture/05558951-de60-49fb-b674-dd906c8897a6"
            },
            {
              id: 2,
              pic:
                "http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/newsPicture/05558951-de60-49fb-b674-dd906c8897a6"
            }
          ],
          text:
            "这是一个设计师的家。客厅则根据自己的喜好，选了不同色彩倾向的灰色系，搭配蓝色的抽象画，让空间更有冷静的质感。他认为设计应该真正服务于生活，所以摒弃了复杂的电视背景墙，而是以极具造型感的整排收纳柜代替，从而满足日常生活中的储物需求，也展现出设计中“藏”的本质。"
        },
        {
          title: "我是标题",
          imgs: [
            {
              id: 3,
              pic:
                "http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/coursePicture/0fbcfdf7-0040-4692-8f84-78bb21f3395d"
            },
            {
              id: 4,
              pic:
                "http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/coursePicture/0fbcfdf7-0040-4692-8f84-78bb21f3395d"
            }
          ],
          text: ""
        }
      ],
      detailImagesHeight: 0,
      showt: false
      // centent: "我是富文本，富文本不能为空"
    };
  },

  // components: {
  //   card
  // },
  mounted() {
    // console.log(this.$root.$mp.query.id);
    //获取图片信息
  },
  /* 转发*/
  onShareAppMessage: function(ops) {
    if (ops.from === "button") {
      // 来自页面内转发按钮
      console.log(ops.target);
    }
    return {
      title: "蜜蜂demo",
      path: `../productDetail/main`,
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
      },
      fail: function(res) {
        // 转发失败
        console.log("转发失败:" + JSON.stringify(res));
      }
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
    toketin(e) {
      const url = "../keting/main?id=" + e;
      mpvue.navigateTo({ url });
    },
    bindViewTap() {
      const url = "../logs/main";
      if (mpvuePlatform === "wx") {
        mpvue.switchTab({ url });
      } else {
        mpvue.navigateTo({ url });
      }
    },
    toanli() {
      // console.log("gfds");
      wx.setStorageSync("trw", 1);
      const url = "../productlist/main";
      mpvue.navigateTo({ url });
    },
    toappointment() {
      const url = "../appointment/main";
      mpvue.navigateTo({ url });
    },
    toproductdetails_3(e) {
      const url = "../productdetails_3/main?id=" + e;
      mpvue.navigateTo({ url });
    },
    toproductdetail(e) {
      const url = "../productDetail/main?id=" + e;
      mpvue.navigateTo({ url });
    }
  },

  created() {
    // let app = getApp()
  }
};
</script>

<style scoped>
/* @import url("~mpvue-wxparse/src/wxParse.css"); */

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
  margin-bottom: 125rpx;
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
