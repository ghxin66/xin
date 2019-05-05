<template>
  <div class="productdetail_3">
    <div class="cents">
      <div class="mar20" v-for="(item,index) in conts" :key="index">
        <div class="wh170 dja">
          <div class="pic">{{item.title}}</div>
          <div>
            <div class="dja title">{{item.title}}</div>
            <div class="desc">{{item.desc}}</div>
          </div>
        </div>

        <!-- <div>
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
        </div>-->
      </div>
    </div>

    <!-- tab -->

    <div class="da mar20">
      <div class="wid75" @click="sels(0)">
        <div :class="sel==0?'titss':'titmin'">
          产品介绍
          <span></span>
        </div>
      </div>
      <div class="wid75" @click="sels(1)">
        <div :class="sel==1?'titss':'titmin'">
          高清大图
          <span></span>
        </div>
      </div>
      <div class="wid75" @click="sels(2)">
        <div :class="sel==2?'titss':'titmin'">
          产品图
          <span></span>
        </div>
      </div>
    </div>
    <div class="clearfix"></div>
    <div v-show="sel==0">
      <div class="titss2 mar30 fontwei" style="margin-top:30rpx">
        <span></span>
        {{sjlg}}
      </div>
      <div class="cenrt">
        <wxParse :content="productdetails"/>
      </div>
      <div class="titss2 mar30 fontwei" style="margin-top:30rpx">
        <span></span>
        {{jcxx}}
      </div>
      <div class="wid485 pad30 fontwei font28 mart50">
        <ul>
          <li>
            <span class="fl">位置</span>
            <span class="fr">墙面/地面</span>
          </li>
          <div class="clearfix"></div>
          <li>
            <span class="fl">结构</span>
            <span class="fr">光滑</span>
          </li>
          <div class="clearfix"></div>
          <li>
            <span class="fl">表面外观</span>
            <span class="fr">亚光/抛光</span>
          </li>
          <div class="clearfix"></div>
        </ul>
      </div>
      <div class="titss2 mar30 fontwei" style="margin-top:40rpx">
        <span></span>
        {{ggcs}}
      </div>
      <div class="cenrts">
        <ul class="dja">
          <li
            v-for="(item,index) in chicun"
            :key="index+1"
            @click="chicuns(index)"
            class="dja iradio50"
          >
            <img :src="select" class="cres" v-if="selectchicun==index">
            <img :src="empty" v-else class="cres">
            {{item.name}}
          </li>
        </ul>
      </div>
      <div class="cents">
        <ul
          v-for="(item,idss) in imgcent"
          :key="idss+1"
          v-show="selectchicun==idss"
          :class="selectchicun==idss?'animated fadeInRight':''"
        >
          <li
            v-for="(items,index) in item.cent"
            :key="index+1"
            @click="chicuns(index)"
            class="dja wid50s"
          >
            <div>
              <img :src="items.url" class="widhei200">
              <div class="font26 col999">{{items.name}}</div>
              <div class="font26 col999">{{items.desc}}</div>
            </div>
          </li>
        </ul>
      </div>
      <!-- 0结束 -->
      <div class="clearfix"></div>
    </div>
    <div v-show="sel==1">
      <div class="cenrt">
        <wxParse :content="article"/>
      </div>

      <!--分享-->
      <div class="gg">
        <div class="dja">
          <div class="wid100ss padd30">
            <span style="float:left;" class="eklp1 titss">你可能感兴趣的其他案例</span>
            <span style="font-family: cursive;float:right;padding-top:4rpx;">></span>
          </div>
        </div>
        <div class="padd30 lunbo2">
          <swiper
            next-margin="80rpx"
            display-multiple-items="1"
            class="fl swiper"
            v-if="imgUrls.length > 0"
          >
            <block v-for="(item, index) in imgUrls" :key="index">
              <swiper-item class="widssgg4 fl re">
                <!-- <div class="bttn">预约体验</div> -->
                <img :src="item" mode="scaleToFill" v-show="!videosing">
                <video
                  src="http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46"
                  v-show="videosing"
                ></video>
                <div class="titss2 par20 wid270">
                  <div class="eklp1 fontwei">
                    <div class="dess">
                      现代 . 郑州 . 平层
                      <i></i>
                    </div>
                    <i class="fr dja">
                      <div>
                        <img :src="bofan" class="ims" @click="videoPlay()">
                      </div>
                    </i>
                  </div>
                  <div class="descss eklp1" style="font-size:24rpx;">灰色系 | 郑州设计师170 m2小窝</div>
                </div>
              </swiper-item>
            </block>
          </swiper>
        </div>
      </div>
    </div>
    <div v-if="sel==2">
      <web-view src="https://www.baidu.com/"></web-view>
      <div class="clearfix"></div>
    </div>

    <div class="clearfix"></div>
    <div class="dja mar45 martt45">
      <div class="desc coleee talcen wid100r">
        <div class="bacfff bacffgg" style="font-size:28rpx;">END</div>
        <div class="desc dja linegs"></div>
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
      sjlg: "设计灵感",
      jcxx: "基础信息",
      ggcs: "规格参数",
      productdetails: "<div>我是标题HTML</div>",
      article: "<div>这里放置富文本</div>",
      bofan: "/static/images/bofan.png",
      zantin: "/static/images/zantin.png",
      videosing: false,
      _index: -1,
      sel: 1,
      selectchicun: 0,
      select: "/static/images/sele.jpg",
      empty: "/static/images/empty.jpg",
      conts: [
        {
          title: "我是标题",
          desc: "6种大理石纹的变化，独一无二的天然纯净",
          pic:
            "http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/newsPicture/05558951-de60-49fb-b674-dd906c8897a6",
          mintitle: "我是小标题",
          thumb:
            "http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/newsPicture/05558951-de60-49fb-b674-dd906c8897a6",
          mindesc: "我是小描述"
        }
      ],
      imgUrls: [
        "http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/newsPicture/05558951-de60-49fb-b674-dd906c8897a6",
        "http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/newsPicture/05558951-de60-49fb-b674-dd906c8897a6",
        "http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/newsPicture/05558951-de60-49fb-b674-dd906c8897a6"
      ],
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
      ]
    };
  },

  // components: {
  //   card
  // },
  mounted() {
    console.log(this.$root.$mp.query.id);
  },
  methods: {
    selectra(e) {
      console.log(e);
    },
    sels(e) {
      this.sel = e;
      // this.add = true;
    },
    videoPlay(index, e) {
      this.videosing = !this.videosing;
    },
    chicuns(index) {
      this.selectchicun = index;
    }
  },

  created() {
    // let app = getApp()
  }
};
</script>

<style scoped>
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
  margin: 40rpx 0 100rpx 0;
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
}
.mart50 {
  margin-bottom: 30rpx;
}
.mart50 ul li {
  height: 60rpx;
  border-bottom: 1rpx solid #eee;
}
.wid485 {
  width: 485rpx;
}
.par20 {
  padding: 20rpx !important;
  box-sizing: border-box;
  border: 1rpx solid #eee;
  margin-top: -12rpx;
  background-color: #fff;
  border-bottom-left-radius: 10rpx;
  border-bottom-right-radius: 10rpx;
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
  margin-top: -5rpx;
}
.wid75 {
  padding-top: 5rpx;
  width: 32%;
  float: left;
}
.wid75:nth-child(1) div {
  float: left;
}
.wid75:nth-child(2) {
  display: flex;
  justify-content: center;
  align-items: center;
}
.wid75:nth-child(3) div {
  float: right;
}
.da {
  display: flex;
  overflow: scroll;
  width: 690rpx;
  margin: 0 auto;
  padding-bottom: 20rpx;
  box-sizing: border-box;
  border-bottom: 1rpx solid #eee;
  height: 65rpx;
}
.titmin {
  font-size: 30rpx;
  color: #cccccc;
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
  height: 160rpx;
  font-size: 75rpx;

  font-weight: bold;
  z-index: -1;
  -webkit-background-clip: text;
  background-image: -webkit-gradient(
    linear,
    0 60%,
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
  border-radius: 10rpx;
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
  margin-top: 70rpx;
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
  border-top-left-radius: 10rpx;
  border-top-right-radius: 10rpx;
}
.descss {
  font-size: 0.2rem;
  color: #999;
}
.titss2 {
  width: 250rpx;
}
</style>
