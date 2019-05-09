<template>
  <div>
    <div class="prode_top">
      <image
              style="width: 100%;height: 750rpx; background-color: #eeeeee;"
              mode="center"
              :src="content.picture"
      ></image>
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

    <div class="titss mar30 mar20" v-show="content.massage.length>=1">
      业主说
      <span></span>
    </div>
    <div class="dja padd30"  v-show="content.massage.length>=1" style="align-items: flex-start">
      <div class="fle1">
        <img src="/static/images/avatar.png" class="fle1pic">
      </div>
      <div class="fle2">{{ content.massage }}</div>
    </div>


    <div class="cenrt">
       <wxParse :content="content.contents.content" @preview="showImgs"/>
    </div>



    <div class="clearfix"></div>

    <div class="titss2 mar30"  v-show="content.goods_list.length > 0">
      <span></span>
      选用产品
    </div>
    <div class="pad30 mar20" v-show="content.goods_list.length > 0">
      <swiper
              :display-multiple-items="multipleItems"
              next-margin="50rpx"
              class="fl"
              :indidator-dots="content.goods_list.length > 0">
        <block v-for="(item, index) in content.goods_list" :key="index">
          <swiper-item class="widssgg3 fl">
            <img :src="item.goods_img" mode="aspectFill">
            <div class="titss2 mar20">
              <div class="descss eklp1">{{ item.space }}</div>
              <div class="eklp1">{{ item.goods_name }}</div>
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
    <div class="dja" v-show="content.other.length > 0">
      <div class="wid100ss padd30" @click="toanli('/pages/productlist/main?trw=1')">
        <span style="float:left;" class="eklp1 titss">你可能感兴趣的其他案例</span>
        <span style="font-family: cursive;float:right;padding-top:10rpx;">></span>
      </div>
    </div>
    <!--2轮播-->
    <div class="padd30 lunbo2" v-show="content.other.length > 0">
      <swiper display-multiple-items="1" next-margin="80rpx" class="fl" v-if="content.other.length > 0">
        <block v-for="(item, index) in content.other" :key="index">
          <swiper-item class="widssgg4 fl" @click="toanli('/pages/productDetail/main?id'+item.article_id)">
            <img :src="item.picture">
            <div class="titss2 mar20 wid270">
              <div class="eklp1">{{ item.title }}</div>
              <div class="descss eklp1">
                {{ item.description }}·{{ item.author }}·{{ item.keyword }}
                <i class="fr dja" style="margin-top:-10rpx">
                  <a>
                    <img :src="guanzhu" class="ims">
                  </a>{{ item.views }}
                </i>
              </div>

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

import wxParse from "mpvue-wxparse";
export default {
   components: {
     wxParse
   },
  data() {
    return {
      wxhy: "/static/images/wechat.jpg",
      pyq: "/static/images/frient.jpg",
      indicatorDots: true,
      guanzhu: "/static/images/guanzhu.jpg",
      listing: "/static/images/listing.jpg",
      shoucan: "/static/images/shoucan.jpg",

      detailImagesHeight: 0,
      showt: false,
      id:'',

      content:{
          contents:{
              imglist:[],
              content:''
          },
          massage:'',
          goods_list:[],
          other:[]
      },
      multipleItems:1,
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
      path: `/pages/productDetail/main?id=`+this.id,
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
    showImgs(e,evn){
        mpvue.navigateTo({
            url: '/pages/keting/main?type=article&id='+this.id+'&url='+e
        })
    },
    toanli(url){
        mpvue.navigateTo({
            url: url
        })
    }
  },

  onShow(){
      let _this=this;
      let Query=_this.$http.getQuery()
      let id=Query.id
//      let id=2
      _this.id=id
      mpvue.showLoading({
          title: '加载中',
          mask:true
      })
      _this.$http.get('index/getArticleDetailsById/'+id,{},function (res) {
          wx.hideLoading();
          _this.content=res.data
          if(_this.content.goods_id>=3){
              _this.multipleItems=3
          }

          wx.setNavigationBarTitle({
            title: _this.content.title
          })
      });


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
  font-size: 25rpx;
  /*color: #999;*/
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
  border-radius: 16rpx;
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
