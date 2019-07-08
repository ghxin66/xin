<template>
  <div class="experience">
    <div>
      <!-- <div
        class="titss mar30 mar20"
        :class="trw==1?'coladadad mar4':'colb59570 font42'"
        style="float:left;font-size:36rpx;"
        @click="trw=0"
      >
        {{shfs}}
      </div>-->
      <div
        class="titss mar20"
        :class="trw==0?'coladadad mar4':'col000 font35'"
        style="font-size:35rpx;width:100%;text-align:center;margin-top:30rpx;"
        @click="trw=1"
      >
        <!-- {{ddty}} -->
        <img src="/static/images/ddty138.png" style="width:137rpx;height:33rpx;margin:0 auto;" />
      </div>
    </div>
    <div style="clear:both;width:100%;height:1px;"></div>

    <div v-show="trw==0?'true':''">
      <div class="dja hei290" @click="bindViewTap('/pages/experiencedetails/main?id='+news7.id)">
        <img :src="news7.picture" class="hei290" />
        <div class="ab bott65">
          <span></span>
          <div>{{ news7.title }}</div>
        </div>
      </div>

      <div class="cenrt">
        <div v-html="centent"></div>
      </div>

      <div class="clearfix"></div>

      <!--2轮播-->
      <div class="padd30 lunbo2">
        <swper vertical class="fl swiper" v-if="imgUrls.length > 0">
          <block v-for="(item, index) in imgUrls" :key="index">
            <swiperitem
              class="widssgg4 fl"
              @click="bindViewTap('/pages/productDetail/main?id='+item.article_id)"
            >
              <div class="bttn">预约体验</div>
              <img :src="item.picture" mode="scaleToFill" />
              <div class="titss2 par20 wid270">
                <div class="eklp1 coladadad" style="font-size:34rpx;">{{ item.title }}</div>
                <div class="descss eklp1 coladadad font24" style="margin-top:10rpx;">
                  {{ item.description }} . {{ item.author }} . {{ item.keyword }}
                  <i
                    class="fr dja"
                    style="margin-top:-10rpx"
                  >
                    <a>
                      <img :src="shijian" class="ims" />
                    </a>
                    &nbsp;{{ item.reser_number }}人体验
                  </i>
                </div>
              </div>
            </swiperitem>
          </block>
        </swper>
      </div>
    </div>

    <div v-show="trw==1?'true':''">
      <!-- 2 -->

      <div class="re hei850">
        <cover-view class="re hei30">
          <cover-view class="ab bac" type="submit" @click="tijiao()">
            <cover-image :src="soupic" class="soupic"></cover-image>
          </cover-view>
          <cover-view class="sou" @click="tijiao()">大家都在搜广州</cover-view>
        </cover-view>

        <map
          id="map"
          :longitude="longitude"
          :latitude="latitude"
          scale="15"
          bindcontroltap="controltap"
          :markers="markers"
          bindmarkertap="markertap"
          :polyline="polyline"
          bindregionchange="regionchange"
          show-location
          style="width:100%;height:855rpx"
          class="re maps"
        ></map>
      </div>

      <div class="clearfix"></div>
      <div class="bufens">
        <div
          class="dibu"
          v-for="(item,index) in business_list"
          :key="index"
          @click="busine_click(item.lat,item.lng)"
        >
          <div class="dj dibu_view">
            <div class="fles1">
              <div class="gonli">
                <span>{{ item.distance }}公里</span>
                <span v-show="index==0">距离最短</span>
              </div>
              <div class="titss3">{{ item.bus_name }}</div>
              <div class="titss4">{{ item.address }}</div>
            </div>
            <div class="fles2 dja">
              <div @click="calling(item.mobile)" class="s100rp">
                <div class="dja">
                  <img :src="hujiao" class="hujiao" />
                </div>
                <div class="hujiaozi">一键呼叫</div>
              </div>
              <div @click="daohans(item.lat,item.lng)" class="s100rp">
                <div class="dja">
                  <img :src="daohan" class="hujiao" />
                </div>
                <div class="hujiaozi">一键导航</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QQMapWX from "qqmap-wx-jssdk1.2/qqmap-wx-jssdk";

let qqmapsdk;
export default {
  data() {
    return {
      hujiao: "/static/images/tel.jpg",
      daohan: "/static/images/daohan.jpg",
      soupic: "/static/images/soupic.png",
      sou_val: "",
      trw: 1,
      ddty: "到店体验",
      indicatorDots: true,
      shijian: "/static/images/shijian.jpg",
      listing: "/static/images/listing.jpg",
      shoucan: "/static/images/shoucan.jpg",
      userInfo: {
        nickName: "mpvue",
        avatarUrl: "http://mpvue.com/assets/logo.png"
      },
      imgUrls: [],
      lookpro: [],
      shfs: "到家体验",
      xinfengshan: "IMOLA · 新风尚",
      fles: "",
      yezhupic: "",

      centent: "",
      //地图开始
      markers: [],
      polyline: [
        {
          points: [],
          color: "#FF0000DD",
          width: 2,
          dottedLine: true
        }
      ],

      //地图结束
      news7: {
        title: "",
        picture: "",
        id: ""
      },
      latitude: "",
      longitude: "",
      business_list: [],
      mycity: "",
      page: 1,
      last_page: 1
    };
  },

  // components: {
  //   card
  // },

  methods: {
    tijiao() {
      mpvue.navigateTo({
        url: "/pages/cityselect/main?mycity=" + this.mycity
      });
    },
    daohans(lat, lng) {
      //根据经纬度在地图上显示
      // var value = e.detail.value;
      wx.openLocation({
        longitude: Number(lng),
        latitude: Number(lat)
      });
    },
    calling(phone) {
      wx.makePhoneCall({
        phoneNumber: phone,

        success: function() {
          console.log("拨打电话成功！");
        },

        fail: function() {
          console.log("拨打电话失败！");
        }
      });
    },

    bindViewTap(url) {
      mpvue.navigateTo({ url });
    },
    create_timestamp() {
      return Long.toString(System.currentTimeMillis() / 1000);
    },
    clickHandle(ev) {
      console.log("clickHandle:", ev);
      // throw {message: 'custom test'}
    },
    busine_click(lat, lng) {
      this.latitude = lat;
      this.longitude = lng;
    },
    getcaselist() {
      let _this = this;
      mpvue.showLoading({
        title: "加载中",
        mask: true
      });
      _this.$http.get(
        "index/getArticleByCatId/5",
        { page: _this.page },
        function(res) {
          wx.hideLoading();
          _this.last_page = res.data.last_page;
          let list = res.data.data;

          for (let item in list) {
            _this.imgUrls.push(list[item]);
          }
        }
      );
    }
  },
  onLoad: function() {
    // 实例化API核心类
    qqmapsdk = new QQMapWX({
      key: "ZZHBZ-L3J3W-U55R6-ROONK-TQIMO-RTF55"
    });
  },
  onShow() {
    var _this = this;

    // 获取文章
    _this.$http.get("index/getSingListByCatId/7/1", {}, function(res) {
      _this.news7 = res.data[0];
    });
    mpvue.showLoading({
      title: "加载中",
      mask: true
    });
    mpvue.getLocation({
      //返回可以用于wx.openLocation的经纬度
      success: function(res) {
        _this.latitude = res.latitude;
        _this.longitude = res.longitude; //经度
        let mycity = _this.$http.getQuery().mycity;
        if (mycity) {
          _this.trw = 1;
        }

        //          let city = res.result.address_component.city;
        let city = "";
        if (mycity) {
          city = mycity;
        }
        _this.mycity = city;
        _this.$http.get(
          "index/getBusinessList/" + city,
          { latlng: _this.latitude + "," + _this.longitude },
          function(res) {
            mpvue.hideLoading();
            _this.business_list = res.data;

            for (let item in _this.business_list) {
              if (item == 0) {
                _this.latitude = _this.business_list[item].lat;
                _this.longitude = _this.business_list[item].lng;
              }
              _this.markers.push({
                id: item,
                latitude: _this.business_list[item].lat,
                longitude: _this.business_list[item].lng,
                width: 50,
                height: 50
              });
            }
          }
        );
      }
    });
    _this.getcaselist();
  },
  onReachBottom() {
    if (this.page < this.last_page) {
      this.page += 1;
      this.getcaselist();
    }
  }
};
</script>

<style scoped>
.s100rp {
  flex-basis: 100rpx;
}
.mar4 {
  margin-top: 24rpx;
}
.hujiaozi {
  font-size: 22rpx;
  text-align: center;
  margin-top: 5rpx;
  color: #000000;
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
  background-color: #000;
  color: #fff;
  margin-right: 12rpx;
  font-size: 20rpx;
  padding: 5rpx 10rpx;
}
.bufens {
  padding-top: 20rpx;
  padding-bottom: 20rpx;
  background: #f4f4f6;
}
.dibu {
  width: 750rpx;
  height: 230rpx;
  margin-top: -2rpx;
  display: flex;
  justify-content: center;
  align-items: center;
}
.titss {
  color: #000;
}
.titss3 {
  color: #000;
  position: relative;
  width: max-content;
  font-weight: bold;
  font-size: 35rpx;
  margin-top: 20rpx;
  /* margin-left: 10rpx; */
}
.titss4 {
  color: #484544;
  position: relative;
  width: max-content;
  font-weight: bold;
  font-size: 24rpx;
  margin-top: 20rpx;
  /* margin-left: 10rpx; */
}
.dibu_view {
  width: 690rpx;
  margin: 0 auto;
  height: 200rpx;
  background-color: #fff;
  /* border-radius: 15rpx; */
  padding: 20rpx;
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
  line-height: 65rpx;
  width: 690rpx;
  margin: 0 auto;
  position: relative;
  z-index: 111;
  margin-top: 40rpx;
}
.sou {
  height: 65rpx;
  line-height: 65rpx;
  background-color: #fff;
  /* border: 1px solid #f5f5f5; */
  /* border-radius: 8rpx; */
  box-sizing: border-box;
  padding-left: 62rpx;
  font-size: 24rpx;
  color: #adadad;
  border: 1rpx solid #000;
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
  z-index: -1;
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
  /* border-radius: 8rpx; */
  background-color: #b59570;
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
  bottom: 65rpx;
  left: 35rpx;
  width: 620rpx;
  color: #fff;
  font-size: 36rpx;
  font-weight: bold;
}

.bott65 span {
  display: inline-block;
  width: 100rpx;
  height: 10rpx;
  background-color: #b59570;
  /* border-radius: 20rpx; */
  position: relative;
}

.fix {
  position: fixed;
  height: 100rpx;
  width: 100%;
  border-top: 1px solid #333030;
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
  font-size: 35rpx;
}
.bormar {
  /* border-top: 2rpx solid #eee; */
  padding: 30rpx;
}
.col999 {
  color: #999;
}

.lunbo2 .titss2 {
  padding: 20rpx !important;
  border: 1rpx solid #525050;
  border-top: none;
}
.hei290 {
  width: 690rpx;
  margin: 0 auto;
  height: 290rpx;
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
  /* border-radius: 10rpx; */
}
.widssgg4 {
  margin-bottom: 30rpx;
  /* border: 1rpx solid #333030; */
  /* border-radius: 15rpx; */
  position: relative;
}
.widssgg4 image {
  width: 690rpx;
  height: 420rpx;
  overflow: hidden;
  /* border-top-right-radius: 10rpx;
  border-top-left-radius: 10rpx; */
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
  margin-bottom: 50rpx;
  /* border: 1rpx solid #eee; */
}

.bttn {
  /* border-radius: 4rpx; */
  width: 140rpx;
  height: 50rpx;
  background-color: #b59570;
  position: absolute;
  top: 24rpx;
  left: 24rpx;
  color: #000;
  font-size: 24rpx;
  font-weight: 100;
  display: flex;
  justify-content: center;
  align-items: center;
}
.borru {
  width: 750rpx;
  height: 70rpx;
  background-color: #fff;
  /* border-radius: 23rpx; */
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
  /* border-radius: 16rpx; */
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
