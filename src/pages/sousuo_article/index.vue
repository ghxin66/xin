<template>
  <div class="experience">
    <div class="clearfix"></div>
    <div class="re hei30 ma3">
      <input type="text" name="sou" v-model="val" placeholder="大家都在搜:现代" class="sou">
      <span class="font28 widtal" @click="sou_pro()">搜索</span>
    </div>
    <div class="clearfix"></div>
    <div>
      <div class="padd30 lunbo2">
        <swper vertical class="fl swiper" v-if="articlelist.length > 0">
          <block v-for="(item, index) in articlelist" :key="index">
            <swiperitem
              class="widssgg4 fl"
              @click="toUrl('/pages/productDetail/main?id='+item.article_id)"
            >
              <img :src="item.picture" mode="scaleToFill">
              <div
                class="titss2 par20 wid270"
                style="padding:20rpx;border:1rpx solid #646262;border-top:1rpx solid #403c3c;width:100%;box-sizing:border-box;"
              >
                <div class="eklp1 coladadad" style="font-size:30rpx;">{{ item.title }}</div>
                <div class="descss eklp1 coladadad" style="margin-top:17rpx;">
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
      <!-- <div class="dja mar45 martt45" v-if="articlelist.length > 0">
        <div class="desc coleee talcen wid100r">
          <div class="bacfff bacffgg" style="font-size:28rpx;">END</div>
          <div class="desc dja linegs"></div>
        </div>
      </div>
      <div class="dja mar45 martt45" v-else>
        <div class="desc coleee talcen wid100r" v-if="isClicktrue">
          <div class="bacfff bacffgg" style="font-size:28rpx;color: #000">暂无数据</div>
          <div class="desc dja linegs"></div>
        </div>
      </div>-->
      <div class="dja mar45" style="margin-bottom:45rpx;" v-if="articlelist.length > 0">
        <div class="desc coleee talcen wid100r">
          <div class="bac403c3c bacffgg font20 coladadad">END</div>
          <div class="linegs desc dja"></div>
        </div>
      </div>
      <div class="dja mar45 martt45" v-else>
        <div class="desc coleee talcen wid100r" v-if="isClicktrue">
          <div class="bac403c3c bacffgg" style="font-size:28rpx;">暂无数据</div>
          <div class="desc dja linegs"></div>
        </div>
      </div>
    </div>

    <!--填写手机号弹框-->
    <div class="modalMask" v-if="isModel"></div>
    <div class="modalDialog" v-if="changeModel">
      <div class="modalContent">
        <p class="contentTip">搜索值不能为空哦~</p>
      </div>
      <div class="modalFooter">
        <div class="btnCancel" @tap="tapCancel">取消</div>
        <div class="btnConfirm" @tap="confirmSend">确定</div>
      </div>
    </div>
    <!-- //结束 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      shijian: "/static/images/guanzhu.jpg",
      changeModel: false,
      isModel: false,
      val: "",
      articlelist: [],
      article_page: 1,
      article_last_page: 1,
      isClicktrue: false
    };
  },
  methods: {
    toUrl(url) {
      mpvue.navigateTo({ url });
    },
    //  弹框取消
    tapCancel() {
      // this.phoneNumber = "";
      console.log("取消");
      this.changeModel = !this.changeModel;
      this.isModel = !this.isModel;
    },
    //  确认删除
    confirmSend() {
      console.log("确认");
      this.changeModel = !this.changeModel;
      this.isModel = !this.isModel;
      // this.$emit("confirmSend", this.phoneNumber);
      // this.phoneNumber = "";
    },
    sou_pro() {
      let val = this.val;
      if (val.trim() == "" || val.trim() == null) {
        this.changeModel = !this.changeModel;
        this.isModel = !this.isModel;
      } else {
        this.articlelist = [];
        this.getArticleList();
      }
    },
    fenlei() {
      let val = this.val;
      if (val.trim() == "" || val.trim() == null) {
        this.changeModel = !this.changeModel;
        this.isModel = !this.isModel;
      } else {
        console.log(val.trim(val));
      }
    },
    getArticleList() {
      let _this = this;

      mpvue.showLoading({
        title: "加载中",
        mask: true
      });
      _this.$http.get(
        "index/getArticleByCatId/5",
        {
          page: _this.article_page,
          keyword: _this.val
        },
        function(res) {
          wx.hideLoading();
          _this.article_last_page = res.data.last_page;
          let list = res.data.data;
          for (let item in list) {
            _this.articlelist.push(list[item]);
          }
          _this.isClicktrue = true;
        }
      );
    }
  },

  onReachBottom() {
    if (this.article_page < this.article_last_page) {
      this.article_page += 1;
      this.getArticleList();
    }
  }
};
</script>

<style scoped>
.hei30 {
  margin-top: 30rpx;
}
.soucon {
  font-size: 24rpx;
  width: 125rpx;
  height: 45rpx;
  line-height: 45rpx;
  margin: 36rpx 60rpx 0 0;
  text-align: center;
  background-color: #edecec;
  border-radius: 4rpx;
  float: left;
}
.soucon:nth-child(4n) {
  margin: 36rpx 0rpx 0 0;
}
.widtal {
  text-align: center;
  display: inline-block;
  width: 92rpx;
  color: #b59570;
}
.sou {
  width: 615rpx;
  height: 65rpx;
  background-color: #f6f5f5;
  border: 2rpx solid #f5f5f5;
  border-radius: 4rpx;
  box-sizing: border-box;
  padding-left: 20rpx;
  font-size: 24rpx;
  color: #999;
}
.ma3 {
  display: flex;
  align-items: center;
}

/* tangkuang */

.modalMask {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #000;
  opacity: 0.5;
  overflow: hidden;
  z-index: 9000;
  color: #fff;
}
.modalDialog {
  box-sizing: border-box;
  width: 560rpx;
  overflow: hidden;
  position: fixed;
  top: 50%;
  left: 0;
  z-index: 9999;
  background: #fff;
  margin: -180rpx 95rpx;
  border-radius: 8rpx;
}
.modalContent {
  box-sizing: border-box;
  display: flex;
  padding: 50rpx 53rpx;
  font-size: 32rpx;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.contentTip {
  text-align: center;
  font-size: 36rpx;
  color: #333333;
}
.teleStyle {
  background: #ffffff;
  border: 1px solid #979797;
  border-radius: 6rpx;
  line-height: 50rpx;
  height: 50rpx;
  box-sizing: border-box;
  padding-left: 12rpx;
  width: 460rpx;
  font-size: 28rpx;
  /*color: rgba(0,0,0,0.25);*/
  margin-top: 30px;
}
.modalFooter {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: 100rpx;
  border-top: 1px solid #e5e5e5;
  font-size: 32rpx;
  line-height: 100rpx;
}
.btnCancel {
  width: 50%;
  font-size: 32rpx;
  color: #333;
  text-align: center;
  border-right: 1px solid #e5e5e5;
}
.btnConfirm {
  font-size: 32rpx;
  width: 50%;
  color: #b59570;
  text-align: center;
}
/* tangkuang */
.re {
  position: relative;
}
.ab {
  position: absolute;
}
.lunbo2 {
  margin-top: 20rpx;
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
.widssgg4 {
  margin-bottom: 50rpx;
  position: relative;
}
.widssgg4 image {
  width: 690rpx;
  height: 420rpx;
  overflow: hidden;
  border-top-right-radius: 10rpx;
  border-top-left-radius: 10rpx;
}
.wid270 {
  width: 690rpx !important;
  box-sizing: border-box;
}
.descss {
  font-size: 22rpx;
  color: #999;
}
.imshijian {
  width: 25rpx !important;
  height: 25rpx !important;
  /* margin-top: 8rpx; */
}
.padd30 {
  padding: 30rpx;
  box-sizing: border-box;
}
.lunbo2 .titss2 {
  padding-right: 20rpx !important;
}
</style>
