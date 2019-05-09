<template>
  <div class="experience">
    <div>
      <div class="titss mar30 mar20" :class="trw==1?'col999':''" style="float:left" @click="gg(0)">
        {{pro}}
        <span class="gjsd"></span>
      </div>
      <div class="titss mar30 mar20" :class="trw==0?'col999':''" style="float:left" @click="gg(1)">
        {{ani}}
        <span class="gjsd"></span>
      </div>
    </div>
    <div class="clearfix"></div>

    <div class="re hei30 ma3" @click="sousuo">
      <div type="submit" class="ab bac">
        <img :src="soupic" class="soupic">
      </div>
      <input type="text" name="sou" placeholder="大家都在搜:现代" class="sou">
    </div>

    <!-- 0-->
    <div v-if="trw==0?'true':''">
      <div class="cenrt">
        <div class="dix" v-for="(item,index) in product" :key="index">
          <div class="fles2 fontwei">{{item.name}}</div>
          <div class="fles1">
            <span
              v-for="(items,key) in item.childs"
              :key="key"
              @click="selec(index,items.id)"
              :class="(item.sel===items.id)?'sspan':''"
            >
              {{items.name}}
              <i class="cha">X</i>
            </span>
          </div>
        </div>

        <!--结束-->
      </div>

      <div class="clearfix"></div>

      <div class="padd30 lunbo2">
        <swper vertical class="fl swiper" v-if="goodslist.length > 0">
          <block v-for="(item, index) in goodslist" :key="index">
            <swiperitem class="widssgg4 fl">
              <img
                :src="item.goods_img"
                mode="scaleToFill"
                v-show="item.videosing==0"
                @click="toUrl('/pages/productdetails_3/main?id='+item.goods_id)"
              >
              <video :src="item.urls" v-show="item.videosing==1" :id="'myVideo_'+index"></video>
              <div class="titss2 mar20 wid270">
                <div class="eklp1 fontwei">
                  <div class="dess">
                    {{ item.goods_name }}
                    <i></i>
                  </div>
                  <i class="fr dja">
                    <div>
                      <img :src="bofan" v-show="item.urls" class="ims" @click="videoPlay(index)">
                    </div>
                  </i>
                </div>
                <div class="descss eklp1" style="font-size:24rpx;">{{ item.goods_title }}</div>
              </div>
            </swiperitem>
          </block>
        </swper>
      </div>
      <div class="clearfix"></div>
      <div class="dja mar45 martt45" v-if="goodslist.length > 0">
        <div class="desc coleee talcen wid100r">
          <div class="bacfff bacffgg" style="font-size:28rpx;">END</div>
          <div class="desc dja linegs"></div>
        </div>
      </div>
      <div class="dja mar45 martt45" v-else>
        <div class="desc coleee talcen wid100r">
          <div class="bacfff bacffgg" style="font-size:28rpx;">暂无数据</div>
          <div class="desc dja linegs"></div>
        </div>
      </div>
    </div>

    <div v-if="trw==1?'true':''">
      <!-- 1 -->

      <div class="cenrt">
        <!--0-->
        <div class="dix" v-for="(item,index) in product_case" :key="index">
          <div class="fles2 fontwei">{{ item.title }}</div>
          <div class="fles1">
            <span
              v-for="(val,key) in item.childs"
              :key="key"
              @click="selec_case(index,val.id)"
              :class="(item.sel===val.id)?'sspan':''"
            >
              {{val.name}}
              <i class="cha">X</i>
            </span>
          </div>
        </div>

        <!--结束-->
      </div>

      <div class="clearfix"></div>

      <div class="padd30 lunbo2">
        <swper vertical class="fl swiper" v-if="articlelist.length > 0">
          <block v-for="(item, index) in articlelist" :key="index">
            <swiperitem
              class="widssgg4 fl"
              @click="toUrl('/pages/productDetail/main?id='+item.article_id)"
            >
              <img :src="item.picture" mode="scaleToFill">
              <div class="titss2 mar20 wid270">
                <div class="eklp1" style="font-size:30rpx;">{{ item.title }}</div>
                <div class="descss eklp1">
                  {{ item.description }} . {{ item.author }} . {{ item.keyword }}
                  <i class="fr dja">
                    <a style="margin-top:6rpx">
                      <img :src="shijian" class="imshijian">
                    </a>
                    &nbsp;{{ item.views }}
                  </i>
                </div>
              </div>
            </swiperitem>
          </block>
        </swper>
      </div>
      <div class="clearfix"></div>
      <div class="dja mar45 martt45" v-if="articlelist.length > 0">
        <div class="desc coleee talcen wid100r">
          <div class="bacfff bacffgg" style="font-size:28rpx;">END</div>
          <div class="desc dja linegs"></div>
        </div>
      </div>
      <div class="dja mar45 martt45" v-else>
        <div class="desc coleee talcen wid100r">
          <div class="bacfff bacffgg" style="font-size:28rpx;">暂无数据</div>
          <div class="desc dja linegs"></div>
        </div>
      </div>
    </div>
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
      trw: 0,
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
      article_last_page: 1

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
      let data = this.product_case[index];
      this.articleSel = index;
      if (id != data.sel) {
        data.sel = id;
      } else {
        data.sel = null;
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
      console.log(videosing);
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

.widssgg4 video {
  width: 100%;
  height: 420rpx;
  overflow: hidden;
  border-top-right-radius: 10rpx;
  border-top-left-radius: 10rpx;
}

.dix {
  display: flex;
  line-height: 55rpx;
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
  padding-right: 10rpx;
  overflow-x: scroll;
  white-space: nowrap;
  font-size: 24rpx;
  color: #333;
  width: 690rpx;
}
.fles1 span {
  padding: 6rpx 18rpx;
  border-radius: 30rpx;
  font-size: 24rpx;
  color: #333;
  position: relative;
  /* display: inline-block; */
}
.cha {
  display: none;
}
.fles1 .sspan {
  background-color: #efefef;
}
.fles1 .sspan .cha {
  display: flex !important;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -3rpx;
  right: -3rpx;
  width: 20rpx;
  height: 20rpx;
  border-radius: 50%;
  background: #333;
  color: #fff;
  font-size: 16rpx;
}

.fles2 {
  width: 65rpx;
  padding-left: 5rpx;
  flex-basis: 70rpx;
  font-size: 24rpx;
  color: #f4be4e;
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
  border-radius: 8rpx;
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
  border-radius: 4rpx;
  width: 140rpx;
  height: 50rpx;
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
