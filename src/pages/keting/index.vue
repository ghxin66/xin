<template>
  <div class="keting">
    <div class="centsimg dja">
      <swiper
        :current="curr"
        display-multiple-items="1"
        next-margin="0rpx"
        class="fl prossgg marbtn50"
        v-if="urls.length > 0"
        @change="onSlideChangeEnd"
      >
        <block v-for="(item,ind) in urls" :key="ind+1">
          <swiper-item class="fl">
            <div class="dja" style="height:100%">
              <img
                @click="previewImg(ind)"
                :src="item.img"
                :style="{'width':width || '750rpx'}"
                class="img"
                mode="widthFix"
              >
            </div>
            <div class="fixbt">
              <span class="fl font24 coladadad" style="margin-top:4rpx;">{{curt}}/{{urls.length}}</span>
              <span class="fr font28 dja closes">
                <i v-show="item.collect" @click="collect(2,item.img,ind)">
                  <img
                    src="/static/images/yishoucan.png"
                    style="width:38rpx;height:38rpx;margin-right:5rpx;"
                  >收藏图片
                </i>
              </span>
              <span class="fr font28 dja">
                <i v-show="!item.collect" @click="collect(1,item.img,ind)">
                  <img
                    src="/static/images/weishoucan.png"
                    style="width:38rpx;height:38rpx;margin-right:5rpx;"
                  >收藏图片
                </i>
              </span>
            </div>
          </swiper-item>
        </block>
      </swiper>
    </div>
  </div>
</template>

<script>
import wxParse from "mpvue-wxparse";
export default {
  components: {
    wxParse
  },
  data() {
    return {
      curr: 0,
      urls: [
        {
          shoucan: false,
          img: ""
        },
        {
          shoucan: true,
          img: ""
        }
      ]
    };
  },
  computed: {
    curt() {
      return parseInt(this.curr) + parseInt(1);
    }
  },
  methods: {
    onSlideChangeEnd(e) {
      this.curr = e.target.current;
      let title = this.urls[e.target.current].title;

      wx.setNavigationBarTitle({
        title: title
      });
    },
    previewImg(ind) {
      let that = this;
      that.curr = ind;
      var jsonText = new Array(that.urls[ind].img);
      // console.log(jsonText);
      wx.previewImage({
        current: that.urls[ind].img,
        urls: jsonText
      });
    },
    collect(type, img_url, index) {
      let url;
      let _this = this;
      if (type == 1) {
        url = "user/collect";
      } else {
        url = "user/cancelCollect";
      }
      mpvue.showLoading({
        title: "请求中",
        mask: true
      });
      _this.$http.post(url, { key: img_url, cat_id: 2 }, function(res) {
        wx.hideLoading();
        if (type == 1) {
          _this.urls[index].collect = true;
        } else {
          _this.urls[index].collect = false;
        }

        wx.showToast({
          title: res.msg,
          icon: "success",
          duration: 1500
        });
      });
    }
  },
  created() {
    // this.article.replace("<img", '<img style="max-width:100%;height:auto" ');
    // console.log(this.urls);
    // this.previewImg(0);
  },
  onShow() {
    let _this = this;
    let Query = _this.$http.getQuery();
    let id = Query.id;
    let url = Query.url;
    let type = Query.type;

    let geturl;
    if (type == "goods") {
      geturl = "product/getGoodsContentById/" + id;
    } else {
      geturl = "index/getArticleContentById/" + id;
    }

    _this.$http.get(geturl, {}, function(res) {
      _this.urls = res.data;
      for (let item in _this.urls) {
        if (url == _this.urls[item].img) {
          _this.curr = item;
        }
      }
      let title = _this.urls[_this.curr].title;

      wx.setNavigationBarTitle({
        title: title
      });
    });
  }
};
</script>

<style scoped>
@import url("~mpvue-wxparse/src/wxParse.css");
page {
  background: #000;
}
swiper {
  width: 750rpx;
  height: 100%;
}
.closes {
  color: #b59570;
}
.fixbt {
  position: fixed;
  left: 0;
  bottom: 0;
  height: 90rpx;
  width: 100%;
  align-items: center;
  z-index: 11;
  color: #fff;
  padding: 30rpx;
  box-sizing: border-box;
}
.centsimg {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9;
  width: max-content;
  height: 100%;
  background: rgba(0, 0, 0, 1);
  overflow-x: scroll;
  display: flex;
}
.centsimg img {
  float: left;
}
</style>
