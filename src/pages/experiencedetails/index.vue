<template>
  <div class="experience">
    <div style="clear:both;width:100%;height:1px;"></div>

    <div>
      <div class="dja hei290">
        <img
          src="http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/coursePicture/0fbcfdf7-0040-4692-8f84-78bb21f3395d"
          class="hei290"
        >
        <div class="ab bott65">
          <span></span>
          <div>到实景案例看效果更真实</div>
        </div>
      </div>
      <div class="re mar342"></div>

      <div class="cenrt">
        <wxParse :content="centent"/>
      </div>
      <div>
        <ul>
          <li class="dja hei120" v-for="(item,index) in listts" :key="index">
            <img :src="item.pic" class="pics">
            {{item.name}}
          </li>
        </ul>
      </div>
      <div class="cenrt">
        <wxParse :content="centent2"/>
      </div>
      <div class="ty_bg">
        <img :src="ty_bg" class="imsgg">
        <div class="fls dja">
          <div class="centers">
            <img :src="imcon1" class="imcons">
            <div class="font24 fontwei">预约体验</div>
          </div>
        </div>
        <div class="fls dja">
          <div class="centers">
            <img :src="imcon2" class="imcons">
            <div class="font24 fontwei">确认时间</div>
          </div>
        </div>
        <div class="fls dja">
          <div class="centers">
            <img :src="imcon3" class="imcons">
            <div class="font24 fontwei">实地参观</div>
          </div>
        </div>
      </div>
      <div class="cenrt">
        <wxParse :content="centent3"/>
      </div>
      <div class="kuaiqu">
        <div class="buttn dja">快去预约参观</div>
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
      // hujiao: "/static/images/tel.jpg",
      // daohan: "/static/images/daohan.jpg",
      // soupic: "/static/images/soupic.png",
      // trw: 0,
      // ddty: "到店体验",
      // indicatorDots: true,
      imcon1: "/static/images/imcon1.jpg",
      imcon2: "/static/images/imcon2.jpg",
      imcon3: "/static/images/imcon3.jpg",
      ty_bg: "/static/images/ty_bg.jpg",
      shijian: "/static/images/shijian.jpg",
      listing: "/static/images/listing.jpg",
      shoucan: "/static/images/shoucan.jpg",
      listts: [
        {
          name: "自由预约时间地点",
          pic: "/static/images/icon1.jpg"
        },
        {
          name: "沟通真实购买用户",
          pic: "/static/images/icon2.jpg"
        },
        {
          name: "瓷砖真实铺贴效果",
          pic: "/static/images/icon3.jpg"
        },
        {
          name: "瓷砖实际使用状况",
          pic: "/static/images/icon4.jpg"
        }
      ],
      // userInfo: {
      //   nickName: "mpvue",
      //   avatarUrl: "http://mpvue.com/assets/logo.png"
      // },

      imgUrls: [
        "http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/newsPicture/05558951-de60-49fb-b674-dd906c8897a6",
        "http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/newsPicture/05558951-de60-49fb-b674-dd906c8897a6",
        "http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/newsPicture/05558951-de60-49fb-b674-dd906c8897a6"
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
      // shfs: "到家体验",
      xinfengshan: "IMOLA · 新风尚",
      fles:
        "很多人都好奇，设计师装修过各种风格、各种样式的家，那他们自己的家会是什么样呢？今天我们就一起来欣赏一个从业14年的资深设计师的家，看他是如何设计的。",
      yezhupic:
        "http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/coursePicture/0fbcfdf7-0040-4692-8f84-78bb21f3395d",

      centent: `      <div>
        <div class="titss">什么是到家体验？</div>
        <div class="desc mar20" style="">
          <p>还在纠结装修风格？</p>
          <p>还在犹豫品牌选择？</p>
          <p>还想听听更多用户心声？</p>
          <p>为什么不跟我们一起去线下参观真实业主家！</p>
        </div>
        <div class="titss">一、实地参观瓷砖铺贴效果</div>
        <img src="http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/coursePicture/0fbcfdf7-0040-4692-8f84-78bb21f3395d"/>
      </div>`,
      centent2: `
       <div class="titss">二、线上预约，便捷高效</div>
      <img src="http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/newsPicture/05558951-de60-49fb-b674-dd906c8897a6"/>`,
      centent3: `
       <div class="titss">三、业主热情相邀，享受贵宾体验</div>
      <img src="http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/newsPicture/05558951-de60-49fb-b674-dd906c8897a6"/>`
      //地图结束
    };
  },

  // components: {
  //   card
  // },

  methods: {
    onShareAppMessage: function(options) {
      var that = this; // 设置菜单中的转发按钮触发转发事件时的转发内容
      console.log(options);
      var shareObj = {
        title: "体验馆", // 默认是小程序的名称(可以写slogan等)
        path: "/pages/experience/index", // 默认是当前页面，必须是以‘/’开头的完整路径
        imgUrl: "", //自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径，支持PNG及JPG，不传入 imageUrl 则使用默认截图。显示图片长宽比是 5:4
        success: function(res) {
          // 转发成功之后的回调
          if (res.errMsg == "shareAppMessage:ok") {
          }
        },
        fail: function() {
          // 转发失败之后的回调
          if (res.errMsg == "shareAppMessage:fail cancel") {
            // 用户取消转发
          } else if (res.errMsg == "shareAppMessage:fail") {
            // 转发失败，其中 detail message 为详细失败信息
          }
        }
        // 　　　　complete:fucntion(){
        // 　　　　　　// 转发结束之后的回调（转发成不成功都会执行）
        //           console.log("gg");
        // 　　　　},
      }; // 来自页面内的按钮的转发
      if (options.from == "button") {
        var eData = options.target.dataset;
        console.log(eData.name); // shareBtn // 此处可以修改 shareObj 中的内容
        shareObj.path = "/pages/experience/index";
      } // 返回shareObj
      return shareObj;
    }
  },
  created() {
    // let app = getApp()
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
  border-radius: 8rpx;
  margin-bottom: 110rpx;
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
  border-radius: 20px !important;
}
.mar342 {
  width: 100%;
  height: 50rpx;
  border-radius: 80rpx;
  margin-top: -25rpx;
  background-color: #fff;
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
    width: 65rpx;
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
  border-radius: 10rpx;
}
.widssgg4 {
  margin-bottom: 50rpx;
  border: 1rpx solid #eee;
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
  border-radius: 4rpx;
  width: 140rpx;
  height: 50rpx;
  background-color: #f4be4e;
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
</style>
