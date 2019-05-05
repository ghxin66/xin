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
              <span class="fl">{{curr+1}}/{{urls.length}}</span>
              <span class="fr font28 dja closes">
                <i v-show="item.shoucan">
                  <img
                    src="/static/images/yishoucan.png"
                    style="width:38rpx;height:38rpx;margin-right:5rpx;"
                  >收藏图片
                </i>
              </span>
              <span class="fr font28 dja">
                <i v-show="!item.shoucan">
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
          img:
            "http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/newsPicture/05558951-de60-49fb-b674-dd906c8897a6"
        },
        {
          shoucan: true,
          img:
            "http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/coursePicture/0fbcfdf7-0040-4692-8f84-78bb21f3395d"
        }
      ]
    };
  },
  methods: {
    onSlideChangeEnd(e) {
      this.curr = e.target.current;
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
    }
  },
  created() {
    // this.article.replace("<img", '<img style="max-width:100%;height:auto" ');
    // console.log(this.urls);
    // this.previewImg(0);
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
  color: #f4be4e;
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
