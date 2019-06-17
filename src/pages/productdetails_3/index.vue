<template>
  <div class="productdetail_3">
    <div class="cents">
      <div class="mar20">
        <div class="wh170 dja">
          <!-- <div class="pic">{{content.goods_name}}</div> -->
          <div>
            <div
              class="dja title fontwei colfff"
              style="text-align:center;font-size:48rpx;"
            >{{content.goods_name}}</div>
            <div
              class="desc coladadad"
              style="text-align:center;font-size:28rpx"
            >{{content.goods_title}}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- tab -->

    <div class="da mar20">
      <div class="wid75" @click="sels(0)">
        <div :class="sel==0?'titss colb59570 font38':'titmin font32'">
          产品介绍
          <!-- <span></span> -->
        </div>
      </div>
      <div class="wid75" @click="sels(1)">
        <div :class="sel==1?'titss colb59570 font38':'titmin font32'">
          高清大图
          <!-- <span></span> -->
        </div>
      </div>
      <div class="wid75" @click="sels(2)">
        <div :class="sel==2?'titss colb59570 font38':'titmin font32'">
          全景图
          <!-- <span></span> -->
        </div>
      </div>
    </div>
    <div class="clearfix"></div>
    <div v-show="sel==0">
      <div class="titss2 mar30 font500" style="margin-top:30rpx;padding-left:20rpx;">
        <span></span>
        设计灵感
      </div>
      <div class="cenrt">
        <wxParse :content="content.goods_desc.content"/>
      </div>
      <div class="titss2 mar30 font500" style="margin-top:30rpx;padding-left:20rpx;">
        <span></span>
        基础信息
      </div>
      <div class="wid485 pad30 font500 font28 mart50">
        <ul>
          <li>
            <span class="fl">位置</span>
            <span class="fr dja">
              <template v-for="(item,index) in content.service_1">
                <img :src="item.small_img" alt style="width: 30rpx;height:30rpx;margin-right:5rpx;">
              </template>
              <template v-for="(item,index) in content.service_1">
                <template v-if="index>0">/</template>
                {{ item.name }}
              </template>
            </span>
          </li>

          <li>
            <span class="fl">结构</span>
            <span class="fr dja">
              <template v-for="(item,index) in content.service_2">
                <img :src="item.small_img" alt style="width: 30rpx;height:30rpx;margin-right:5rpx;">
              </template>
              <template v-for="(item,index) in content.service_2">
                <template v-if="index>0">/</template>
                {{ item.name }}
              </template>
            </span>
          </li>
          <li>
            <span class="fl">表面外观</span>
            <span class="fr dja">
              <template v-for="(item,index) in content.service_3">
                <img :src="item.small_img" alt style="width: 30rpx;height:30rpx;margin-right:5rpx;">
              </template>
              <template v-for="(item,index) in content.service_3">
                <template v-if="index>0">/</template>
                {{ item.name }}
              </template>
            </span>
          </li>
        </ul>
      </div>
      <div class="clearfix"></div>

      <div
        class="titss2 mar30 fontwei"
        v-show="content.images.length>0"
        style="margin-top:40rpx;padding-left:20rpx;"
      >
        <span></span>
        规格参数
      </div>
      <div class="cenrts">
        <ul class="dja">
          <li
            v-for="(item,index) in content.images"
            :key="index+1"
            @click="chicuns(index)"
            class="dja iradio50"
          >
            <img :src="select" class="cres" v-if="selectchicun==index">
            <img :src="empty" v-else class="cres">
            {{item.title}}
          </li>
        </ul>
      </div>
      <div class="cents" style="height:600rpx;" v-show="content.images.length>0">
        <!-- v-show="selectchicun==idss" -->
        <ul
          v-for="(item,idss) in content.images"
          :key="idss+1"
          style="float:left;display:inline;width:690rpx;position:absolute"
          :class="selectchicun==idss?'animated fadeInRight':'animated fadeOutLeft'"
        >
          <li class="dja" style="height:650rpx">
            <img :src="item.pic" mode="widthFix" style="max-width: 100%;max-height:600rpx">
          </li>
          <div class="clearfix"></div>
        </ul>
        <div class="clearfix"></div>
      </div>
      <!-- 0结束 -->
    </div>
    <div v-show="sel==1">
      <div class="cenrt">
        <div style="border-bottom:1rpx solid #2b2828">
          <wxParse :content="content.wap_desc.content" @preview="showImgs"/>
        </div>
      </div>

      <!--分享-->
      <div class="gg">
        <div class="dja">
          <div class="wid100ss padd30">
            <span class="eklp1 titss colfff" style="font-size:38rpx;float:left;">你可能感兴趣</span>
            <!-- <span style="font-family: cursive;float:right;padding-top:4rpx;">></span> -->
          </div>
        </div>
        <div class="padd30 lunbo2">
          <swiper
            next-margin="80rpx"
            display-multiple-items="1"
            class="fl swiper"
            v-if="content.other.length > 0"
          >
            <block v-for="(item, index) in content.other" :key="index">
              <swiper-item class="widssgg4 fl re">
                <!-- <div class="bttn">预约体验</div> -->
                <img
                  :src="item.goods_img"
                  mode="scaleToFill"
                  v-show="item.videosing==0"
                  @click="toUrl('/pages/productdetails_3/main?id='+item.goods_id)"
                >
                <video :id="'myVideo_'+index" :src="item.urls" v-show="item.videosing==1"></video>
                <div
                  class="titss2 par20 wid270 bac403c3c"
                  style="border:1rpx solid #615e5e;border-top:none;"
                >
                  <div class="eklp1 fontwei">
                    <div class="dess coladadad">
                      {{ item.goods_name }}
                      <i></i>
                    </div>
                    <i class="fr dja">
                      <div style="font-size:0;width:48rpx;height:48rpx;">
                        <img
                          :src="bofan"
                          class="ims"
                          v-if="item.videosing==0"
                          v-show="item.urls"
                          @click="videoPlay(index)"
                        >
                        <img
                          :src="zantin"
                          class="ims"
                          v-if="item.videosing==1"
                          v-show="item.urls"
                          @click="videoPlay(index)"
                        >
                      </div>
                    </i>
                  </div>
                  <div class="descss eklp1 col999" style="font-size:24rpx;">{{ item.goods_title }}</div>
                </div>
              </swiper-item>
            </block>
          </swiper>
        </div>
      </div>
    </div>
    <div v-if="sel==2">
      <web-view :src="content.promote_title"></web-view>
      <div class="clearfix"></div>
    </div>

    <div class="clearfix"></div>
    <div class="dja mar45" style="margin-bottom:45rpx;">
      <div class="desc coleee talcen wid100r">
        <div class="bac403c3c bacffgg font20 coladadad">END</div>
        <div class="linegs desc dja"></div>
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
      productdetails: "<div>我是标题HTML</div>",
      article: "<div>这里放置富文本</div>",
      bofan: "/static/images/bofan.png",
      zantin: "/static/images/zantin.png",
      videosing: false,
      _index: -1,
      sel: 1,
      selectchicun: 0,
      select: "/static/images/select.png",
      empty: "/static/images/empty.png",

      imgcent: [
        {
          id: 0,
          title: "biaoti",
          cent: [
            {
              name: "标题1s",
              desc: "描述1s",
              url:
                "http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/newsPicture/05558951-de60-49fb-b674-dd906c8897a6"
            },
            {
              name: "标题2s",
              desc: "描述2s",
              url:
                "http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/newsPicture/05558951-de60-49fb-b674-dd906c8897a6"
            },
            {
              name: "标题3s",
              desc: "描述3s",
              url:
                "http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/newsPicture/05558951-de60-49fb-b674-dd906c8897a6"
            }
          ]
        },
        {
          id: 1,
          title: "2",
          cent: [
            {
              name: "标题1",
              desc: "描述1",
              url:
                "http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/newsPicture/05558951-de60-49fb-b674-dd906c8897a6"
            },
            {
              name: "标题2",
              desc: "描述2",
              url:
                "http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/newsPicture/05558951-de60-49fb-b674-dd906c8897a6"
            }
          ]
        }
      ],
      indicatorDots: true,
      guanzhu: "/static/images/guanzhu.jpg",
      //danxuan
      chicun: [
        {
          id: 1,
          name: "90X90cm"
        },
        {
          id: 2,
          name: "90X180cm"
        }
      ],
      content: {},
      id: ""
    };
  },

  // components: {
  //   card
  // },
  mounted() {
    console.log(this.$root.$mp.query.id);
  },
  methods: {
    toUrl(url) {
      mpvue.navigateTo({ url });
    },
    selectra(e) {
      console.log(e);
    },
    sels(e) {
      if (e == 2) {
        if (this.content.promote_title != "#") {
          this.sel = e;
        }
      } else {
        this.sel = e;
      }
    },
    videoPlay(index, e) {
      let videosing = this.content.other[index].videosing;

      if (videosing == 1) {
        this.content.other[index].videosing = 0;
      } else {
        this.content.other[index].videosing = 1;
      }

      let videoContext = wx.createVideoContext("myVideo_" + index);
      if (videosing == 0) {
        videoContext.pause();
      } else {
        videoContext.play();
      }
    },
    chicuns(index) {
      this.selectchicun = index;
    },
    showImgs(e, evn) {
      mpvue.navigateTo({
        url: "/pages/keting/main?type=goods&id=" + this.id + "&url=" + e
      });
    }
  },

  created() {
    // let app = getApp()
  },

  onShow() {
    let _this = this;
    let Query = _this.$http.getQuery();
    let id = Query.id;
    // let id=3
    this.id = id;
    _this.$http.get("product/getGoodsDetailsById/" + id, {}, function(res) {
      _this.content = res.data;
      wx.setNavigationBarTitle({
        title: _this.content.goods_name
      });
    });
  }
};
</script>

<style scoped>
.titss2 {
  font-size: 38rpx;
  color: #fff;
}
.titss2 span {
  width: 7rpx;
  height: 85%;
  top: 10%;
}

.wid50s {
  width: 49%;
  padding: 25rpx;
  box-sizing: border-box;
  float: left;
}
.widhei200 {
  width: 200rpx;
  height: 200rpx;
}

.cenrts {
  font-size: 28rpx;
  margin: 40rpx 0 50rpx 0;
}
.cres {
  width: 32rpx;
  height: 32rpx;
  margin-right: 16rpx;
}
.iradio50 {
  width: 340rpx;
  box-sizing: border-box;
  float: left;
  text-align: center;
  color: #adadad;
}
.mart50 {
  margin-bottom: 30rpx;
}
.mart50 ul li {
  height: 60rpx;
  border-bottom: 1rpx solid #262525;
}
.mart50 ul li:last-child {
  border-bottom: none;
}
.wid485 {
  width: 485rpx;
  color: #adadad;
}
.par20 {
  padding: 20rpx !important;
  box-sizing: border-box;
  border: 1rpx solid #eee;
  /* margin-top: -12rpx; */
  overflow: hidden;
}
video {
  width: 560rpx;
  height: 320rpx;
}
.wid270 {
  width: 560rpx !important;
}
swiper {
  height: 500rpx;
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
  width: 48rpx !important;
  height: 48rpx !important;
  /* margin-top: 8rpx; */
}
.descss {
  font-size: 22rpx;
  color: #999;
}
.gg {
  width: 690rpx;
  margin: 0 auto;
  /* height: 640rpx; */
  /* border-bottom: 1rpx solid #eee; */
}
.titss {
  margin-top: 15rpx;
  padding-bottom: 15rpx;
  border-bottom: 1rpx solid;
}
.wid75 {
  padding-top: 5rpx;
  width: 32%;
  float: left;
}
.wid75:nth-child(1) div {
  margin-top: -5rpx;
  float: left;
  padding-bottom: 15rpx;
}
.wid75:nth-child(2) {
  display: flex;
  justify-content: center;
  align-items: center;
}
.wid75:nth-child(3) div {
  margin-top: -5rpx;
  float: right;
  padding-bottom: 15rpx;
}
.da {
  display: flex;
  overflow: scroll;
  width: 690rpx;
  margin: 0 auto;
  padding-bottom: 20rpx;
  box-sizing: border-box;
  border-bottom: 1rpx solid #262525;
  height: 65rpx;
}
.titmin {
  font-size: 30rpx;
  color: #adadad;
  display: flex;
  align-items: center;
}
.tu img {
  width: 30rpx;
  height: 30rpx;
  padding-right: 5rpx;
}

.mart90 {
  margin-top: 80rpx;
  border-bottom: 1px solid #262525;
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
  /* border-radius: 10rpx; */
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
  height: 200rpx;
  font-size: 90rpx;
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
  font-size: 40rpx;
  font-weight: bold;
}

.cents .desc {
  font-size: 28rpx;
}
.linegs {
  margin-top: -20rpx !important;
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
.desc {
  margin-top: 10rpx;
}
.ban_text {
  width: 90%;
  margin: 0 auto;
  text-align: justify;
  box-shadow: 0 0 20rpx 2rpx #eee;
  /* border-radius: 10rpx; */
  padding: 28rpx;
  margin-top: -30rpx;
  position: relative;
  z-index: 1;
  background-color: #fff;
  font-size: 28rpx;
  box-sizing: border-box;
}
.lunbo2 {
  margin-top: 30rpx;
}

.wid100ss {
  width: 100%;
  font-size: 30rpx;
  margin-top: 25rpx;
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
  /* border-radius: 10rpx; */
}
.widssgg4 image {
  width: 560rpx;
  height: 320rpx;
  overflow: hidden;
  /* border-top-left-radius: 10rpx;
  border-top-right-radius: 10rpx; */
}
.descss {
  font-size: 0.2rem;
  color: #999;
}
.titss2 {
  width: 250rpx;
}
</style>
