<template>
  <div>
    <div class="gs">
      <div class="teit">{{ssggd.name}}</div>
      <div class="xiao">{{ssggd.url_link}}</div>
    </div>
    <div class="prode_top">
      <img
        style="width: 100%;margin:0rpx auto;display:block;height:100%"
        mode="aspectFill"
        :src="ssggd.small_img"
      />
    </div>

    <!-- <div class="titss2 mar30" v-show="content.goods_list.length > 0" style="margin-top:82rpx;">
      <img src="/static/images/yycp138.png" style="width:137rpx;height:34rpx;margin:0 auto;" />
    </div>-->
    <div class="padd30 lunbo2">
      <swper vertical class="fl swiper" v-if="goodslist.length > 0">
        <block v-for="(item, index) in goodslist" :key="index">
          <swiperitem class="fl wihe3">
            <div class="wihe330">
              <img
                :src="item.goods_img"
                mode="aspectFit"
                style="width:100%;height:100%"
                @click="toUrl('/pages/productdetails_3/main?id='+item.goods_id)"
              />
            </div>
            <div class="titss2ss">
              <div class>
                <div
                  class="dess col000 eklp1"
                  style="heiight:53rpx;line-heiight:55rpx;display:block"
                >{{ item.goods_name }}</div>
                <div
                  class="col484544 font20 eklp1"
                  style="heiight:20rpx;line-heiight:22rpx"
                >{{ item.p_1 }}</div>
              </div>
            </div>
          </swiperitem>
        </block>
      </swper>
      <div class="clearfix"></div>
      <div class="dja mar45" style="margin-bottom:45rpx;" v-if="goodslist.length > 0">
        <div class="desc col484544 talcen wid100r">
          <div class="bac403c3c bacffgg font20 coladadad">END</div>
          <div class="linegs desc dja"></div>
        </div>
      </div>
      <div class="dja mar45 martt45" v-else>
        <div class="desc col484544 talcen wid100r">
          <div class="bac403c3c bacffgg" style="font-size:26rpx;">暂无数据</div>
          <div class="desc dja linegs"></div>
        </div>
      </div>
    </div>
    <!-- // -->
  </div>
</template>

<script>
import Share from "@/components/Share";

export default {
  components: {
    Share
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
      indxx: 0,
      ssggd: [],
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
      hasshare: false,
      product: [],
      goodslist: [],
      goodsSel: null
    };
  },
  methods: {
    toUrl(url) {
      mpvue.navigateTo({ url });
    },
    toanli(url) {
      mpvue.navigateTo({
        url: url
      });
    }
  },
  onShow() {
    let _this = this;
    let Query = _this.$http.getQuery();
    let id = Query.id;
    _this.id = id;
    // console.log(id);
    let filter = [];

    mpvue.showLoading({
      title: "加载中",
      mask: true
    });
    filter.push({
      filter_id: 2,
      filter_value: id
    });

    _this.$http.get("product/getGoodsListByParam", { filter: filter }, function(
      res
    ) {
      wx.hideLoading();
      _this.goodslist = res.data.data;
      var arrs = [];
      for (let item in res.data.type) {
        if (res.data.type[item].id == id) {
          _this.indxx = item;
          _this.ssggd = res.data.type[_this.indxx];
        }
      }
    });

    // gg
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
.lunbo2 {
  padding: 30rpx;
  box-sizing: border-box;
}
.prode_top {
  height: 457rpx;
}
.gs {
  margin-top: 10rpx;
  width: 100%;
  text-align: center;
  padding: 23rpx;
  box-sizing: border-box;
  font-weight: 600;
}
.gs .teit {
  font-size: 35rpx;
  color: #000;
  line-height: 35rpx;
}
.gs .xiao {
  font-size: 22rpx;
  color: #000;
  line-height: 20rpx;
  margin-top: 14rpx;
}
.chanp {
  width: 690rpx;
  margin: 0 auto;
}
.tupian {
  width: 310rpx;
  height: 310rpx;
  float: left;
  border: 1rpx solid #f4f4f6;
  margin-right: 30rpx;
}
.titss2ss {
  width: 100%;
  /* line-height: 45rpx; */
  font-size: 30rpx;
  font-weight: 500;
  margin-top: 8rpx;
  margin-bottom: 10rpx;
  color: #000;
  text-align: center;
}
.titss2ss .dess {
  text-align: center;
  width: 100%;
  margin-bottom: 2rpx;
}
.wihe3 {
  width: 330rpx;
  margin-right: 30rpx;
  height: 430rpx;
  box-sizing: border-box;
}
.wihe3:nth-child(2n) {
  margin-right: 0;
}
.wihe330 {
  width: 330rpx;
  height: 330rpx;
  box-sizing: border-box;
  border: 1rpx solid #f4f4f6;
}
.texal {
  display: flex;
  justify-content: center;
  align-items: center;
}
.tupian img {
  max-width: 310rpx;
  max-height: 310rpx;
}
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

.re {
  position: relative;
}
.ab {
  position: absolute;
}
</style>
