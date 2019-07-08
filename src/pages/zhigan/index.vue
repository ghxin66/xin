<template>
  <div class="experience">
    <div>
      <div
        class="titss mar30 mar20"
        :class="trw==0?'disno':'col000'"
        style="float:left"
        @click="gg(1)"
      >{{ani}}</div>
    </div>
    <div class="clearfix"></div>

    <!-- 0-->
    <div v-if="trw==0?'true':''">
      <div class="cenrt">
        <div class="dix" :class="'ijd'+index" v-for="(item,index) in product_case" :key="index">
          <!-- <div class="fles2 fontwei colb59570">{{item.name}}</div> -->
          <div class="fles1">
            <span :key="key" @click="selec_case(-1)" :class="ggdd==1?'sspan':'col000'">全部</span>
            <span
              v-for="(val,key) in product_case[0].childs"
              :key="key"
              @click="selec_case(index,val.id)"
              :class="(item.sel===val.id)?'sspan':'col000'"
            >{{val.name}}</span>
          </div>
        </div>

        <!--结束-->
      </div>

      <div class="clearfix"></div>

      <div class="padd30 lunbo2">
        <swper vertical class="fl swiper" v-if="articlelist.length > 0">
          <block v-for="(item, index) in articlelist" :key="index">
            <swiperitem class="widssgg4 fl">
              <div class="absbot">{{ item.title }}</div>
              <img
                :src="item.picture"
                mode="aspectFill"
                @click="toUrl('/pages/productDetail/main?id='+item.article_id)"
              />
              <!-- <video :src="item.urls" v-show="item.videosing==1" :id="'myVideo_'+index"></video> -->
              <!-- <div class="titss2 par20 wid270" style="padding-left:20rpx;">
                <div class="eklp1 fontwei">
                  <div class="dess coladadad">
                    {{ item.goods_name }}
                  </div>
                  <i class="fr dja">
                    <div>
                      <img
                        :src="bofan"
                        v-if="item.videosing==0"
                        class="ims"
                        @click="videoPlay(index)"
                      />
                      <img
                        :src="zantin"
                        v-if="item.videosing==1"
                        class="ims"
                        @click="videoPlay(index)"
                      />
                    </div>
                  </i>
                </div>
                <div class="descss eklp1 coladadad" style="font-size:24rpx;">{{ item.goods_title }}</div>
              </div>-->
            </swiperitem>
          </block>
        </swper>
      </div>
      <div class="clearfix"></div>
      <div class="dja mar45" style="margin-bottom:45rpx;" v-if="articlelist.length > 0">
        <div class="desc col484544 talcen wid100r">
          <div class="bac403c3c bacffgg font20 coladadad">END</div>
          <div class="linegs desc dja"></div>
        </div>
      </div>
      <div class="dja mar45 martt45" v-else>
        <div class="desc col484544 talcen wid100r">
          <div class="bac403c3c bacffgg" style="font-size:28rpx;color:#666">暂无数据</div>
          <div class="desc dja linegs"></div>
        </div>
      </div>
    </div>

    <div class="clearfix"></div>

    <!-- <div class="dja mar45" style="margin-bottom:45rpx;" v-if="articlelist.length > 0">
      <div class="desc coleee talcen wid100r">
        <div class="bac403c3c bacffgg font20 coladadad">END</div>
        <div class="linegs desc dja"></div>
      </div>
    </div>
    <div class="dja mar45 martt45" v-else>
      <div class="desc coleee talcen wid100r">
        <div class="bac403c3c bacffgg" style="font-size:28rpx;">暂无数据</div>
        <div class="desc dja linegs"></div>
      </div>
    </div>-->
  </div>
</template>

<script>
// import card from "@/components/card";

export default {
  data() {
    return {
      // hujiao: "/static/images/tel.jpg",
      // daohan: "/static/images/daohan.jpg",
      videosing: false,
      sels: false,
      soupic: "/static/images/soupic.png",
      trw: 1,
      ani: "案例",
      // indicatorDots: true,
      bofan: "/static/images/bofan.png",
      zantin: "/static/images/zantin.png",
      listing: "/static/images/listing.jpg",
      shijian: "/static/images/guanzhu.jpg",
      imgUrls: [],
      pro: "产品",
      _index: -1,
      product: [],
      goodslist: [],
      goodsSel: null,
      product_case: [],
      articlelist: [],
      articleSel: null,
      //产品分类选择
      ins1: -1,
      centent: "",
      goods_page: 1,
      goods_last_page: 1,
      article_page: 1,
      article_last_page: 1,
      ggdd: 1

      //地图结束
    };
  },

  methods: {
    toUrl(url) {
      mpvue.navigateTo({ url });
    },
    sousuo() {
      if (this.trw == 1) {
        wx.navigateTo({ url: "/pages/sousuo_article/main" });
      } else {
        wx.navigateTo({ url: "/pages/sousuo/main" });
      }
    },
    clickHandle(ev) {
      console.log("clickHandle:", ev);
      // throw {message: 'custom test'}
    },
    selec(index, id) {
      let data = this.product[index];
      this.goodsSel = data.id;

      if (id != data.sel) {
        data.sel = id;
      } else {
        data.sel = null;
      }
      this.goods_page = 1;
      this.goodslist = [];
      this.getGoodsList();
    },

    selec_case(index, id) {
      var that = this;

      if (index == -1) {
        for (var item in this.product_case[0].childs) {
          this.product_case[0].sel = null;
        }
        this.articleSel = 0;
        that.ggdd = 1;
      } else {
        let data = this.product_case[index];
        this.articleSel = index;
        if (id != data.sel) {
          data.sel = id;
        } else {
          data.sel = null;
        }
        that.ggdd = 0;
      }
      this.article_page = 1;
      this.articlelist = [];

      this.getArticleList();
    },

    gg(trw) {
      this.trw = trw;
      this.ins1 = -1;
      this.sels = false;
      if (trw == 1) {
        this.getArticleFilter();
      } else {
        this.getGoodsFilter();
      }
    },
    getGoodsFilter() {
      let _this = this;
      _this.product = [];
      _this.goodslist = [];
      _this.goodsSel = null;
      _this.getGoodsList();
    },
    getGoodsList() {
      let _this = this;
      //        mpvue.showLoading({
      //            title: '加载中',
      //            mask:true
      //        })
      let filter = [];
      // 获取筛选条件
      for (let item in _this.product) {
        let sel = _this.product[item].sel;
        if (sel != null) {
          filter.push({
            filter_id: _this.product[item].id,
            filter_value: sel
          });
        }
      }

      _this.$http.get(
        "product/getGoodsListByParam",
        {
          page: _this.goods_page,
          filter: filter,
          articleSel: _this.goodsSel,
          filterBool: 1
        },
        function(res) {
          //            wx.hideLoading();
          _this.goods_last_page = res.data.last_page;
          let list = res.data.data;
          for (let item in list) {
            _this.goodslist.push(list[item]);
          }
          console.log(_this.goodslist);
          if (_this.goods_page == 1 && res.data.filter.length >= 1) {
            _this.product = res.data.filter;
          }
        }
      );
    },
    getArticleFilter() {
      let _this = this;
      _this.product_case = [];
      _this.articlelist = [];
      _this.articleSel = null;
      _this.getArticleList();
    },
    getArticleList() {
      let _this = this;
      mpvue.showLoading({
        title: "加载中",
        mask: true
      });
      let filter = [];
      // 获取筛选条件
      for (let item in _this.product_case) {
        let sel = _this.product_case[item].sel;
        if (sel != null) {
          filter.push({
            filter_id: _this.product_case[item].id,
            filter_value: sel
          });
        }
      }
      _this.$http.get(
        "index/getArticleByCatId/5",
        {
          page: _this.article_page,
          filter: filter,
          articleSel: _this.articleSel,
          filterBool: 1
        },
        function(res) {
          wx.hideLoading();
          _this.article_last_page = res.data.last_page;
          let list = res.data.data;
          for (let item in list) {
            _this.articlelist.push(list[item]);
          }
          if (_this.article_page == 1 && res.data.filter.length >= 1) {
            _this.product_case = res.data.filter;
          }
        }
      );
    },
    videoPlay(index, e) {
      let videosing = this.goodslist[index].videosing;

      if (videosing == 0) {
        this.goodslist[index].videosing = 1;
      } else {
        this.goodslist[index].videosing = 0;
      }

      let videoContext = wx.createVideoContext("myVideo_" + index);
      // console.log(videosing);
      if (videosing == 0) {
        videoContext.play();
      } else {
        videoContext.pause();
      }
    }
  },
  onShow() {
    let _this = this;
    let Query = _this.$http.getQuery();
    let trw = Query.trw ? Query.trw : 0;
    if (trw == 1) {
      _this.gg(1);
    } else {
      _this.gg(0);
    }
    mpvue.showLoading({
      title: "加载中",
      mask: true
    });
    let filter = [];
    this.getArticleList();
  },
  onReachBottom() {
    if (this.trw == 1) {
      if (this.article_page < this.article_last_page) {
        this.article_page += 1;
        this.getArticleList();
      }
    } else if (this.trw === 0) {
      if (this.goods_page < this.goods_last_page) {
        this.goods_page += 1;
        this.getGoodsList();
      }
    }
  }
};
</script>

<style scoped>
.martt45 {
  margin-bottom: 70rpx;
}
.dix {
  display: none !important;
}
.ijd0 {
  display: block !important;
}
.absbot {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0%;
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  font-size: 30rpx;
  line-height: 50rpx;
  height: 50rpx;
  padding-left: 25rpx;
  box-sizing: border-box;
}
.widssgg4 video {
  width: 100%;
  height: 420rpx;
  overflow: hidden;
  /* border-top-right-radius: 10rpx;
  border-top-left-radius: 10rpx; */
}
.col000 {
  color: #000;
}
.disno {
  display: none;
}
.dix {
  display: flex;
  line-height: 63rpx;
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
  /* border-radius: 4rpx; */
  background-color: #fff1d1;
  color: #b59570;
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
  color: #adadad;
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
  /* border-radius: 15rpx; */
  padding: 10rpx 30rpx;
  box-sizing: border-box;
}

.fles1 {
  flex: 1;
  padding-right: 10rpx;
  overflow-x: scroll;
  white-space: nowrap;
  font-size: 24rpx;
  color: #000;
  width: 690rpx;
}
.fles1 span {
  padding: 6rpx 25rpx;
  border-radius: 4rpx;
  font-size: 24rpx;
  color: #000;
  position: relative;
  /* display: inline-block; */
}
.cha {
  display: none;
}
.fles1 .sspan {
  /* background-color: #efefef; */
  color: #b59570;
}
/* .fles1 .sspan .cha {
  display: flex !important;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -3rpx;
  right: -3rpx;
  width: 20rpx;
  height: 20rpx;
  border-radius: 50%;
  background: #b59570;
  color: #fff;
  font-size: 14rpx;
} */

.fles2 {
  width: 65rpx;
  padding-left: 5rpx;
  flex-basis: 70rpx;
  font-size: 24rpx;
  color: #b59570;
}
.hei30 {
  height: 65rpx;
  width: 690rpx;
  margin: 0 auto;
  position: relative;
  z-index: 111;
  margin-top: 5rpx;
}
.sou {
  height: 65rpx;
  background-color: #f6f5f5;
  border: 1px solid #f5f5f5;
  border-radius: 4rpx;
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
  /* border-radius: 8rpx; */
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
  font-size: 42rpx;
  font-weight: bold;
}

.bott65 span {
  display: inline-block;
  width: 100rpx;
  height: 10rpx;
  /* border-radius: 20rpx; */
  position: relative;
  animation: myfirst 2s;
}
@keyframes myfirst {
  from {
    width: 0;
  }
  to {
    width: 100rpx;
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
  width: 48rpx !important;
  height: 48rpx !important;
  /* margin-top: 8rpx; */
}
.imshijian {
  width: 25rpx !important;
  height: 25rpx !important;
  /* margin-top: 8rpx; */
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
  margin-bottom: 50rpx;
  /*  border: 1rpx solid #eee;
  border-radius: 15rpx; */
  position: relative;
  width: 690rpx;
  height: 433rpx;
  /* box-shadow: 0 0 15rpx 0rpx #ccc; */
}
.widssgg4 image {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.descss {
  font-size: 22rpx;
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
  /* margin-bottom: 20rpx; */
  /* border: 1rpx solid #eee; */
}

.bttn {
  border-radius: 2rpx;
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
