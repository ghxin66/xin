<template>
  <div class="center">
    <div v-show="!gghs" :style="'height:'+hei+'px;'" class="bacf6f6">
      <div class="cen_tops dja">
        <div class="re fls">
          <img :src="cent_bg" class="ab tl00" />
          <!-- //结束 -->
          <div class="leftsto dja">
            <div style="text-align:center">
              <button class="butto">
                <img :src="userInfo.avatarUrl" style="width:185rpx;height:185rpx" />
              </button>
              <!-- {{userInfo}} -->
              <div
                class="titss fon30"
                v-show="!userInfo.avatarUrl"
                @click="getUserInfoClick"
                style="width:185rpx;text-align:center;margin-top:5rpx;"
              >登录</div>
              <!-- <div
                class="titss fon30"
                v-show="userInfo.avatarUrl"
                style="width:185rpx;margin-top:5rpx;"
              >欢迎您!</div>-->
              <div class="titss" style="width:185rpx;font-size:30rpx;color:#000">{{nickName}}</div>
            </div>
          </div>
        </div>

        <!-- <div class="frs dja">
          <button open-type="contact" session-from="weapp" class="dja kefubtn">
            <div class="kefucen">
              <img :src="listing" class="listing" />
              <div class="kefu">在线客服</div>
            </div>
          </button>
        </div>-->
      </div>
      <div class="clearfix"></div>
      <div style="background:#fff;">
        <div class="titss mar30" style="padding-top:60rpx">
          <!-- <a style="display:inline;color:#b59570">质感</a> -->
          <a style="display:inline;color:#000;font-size:38rpx">
            <img src="/static/images/wdsc138.png" style="width:138rpx;height:33rpx;" />
          </a>
          <!-- <span></span> -->
        </div>
        <div class="dja" v-if="collect">
          <div class="re flss2 mar30 mar20 hei285" style="margin-top:5rpx;" v-if="userInfo">
            <template v-if="collect.cat_id==1">
              <img :src="collect.article_id.picture" class="ab tl00 hei285" />
            </template>
            <template v-else>
              <img :src="collect.img_url" class="ab tl00 hei285" />
            </template>
          </div>

          <div class="marr30" style="margin-bottom:18rpx;">
            <div v-if="collect">
              <img :src="collect.article_id.picture" class="hei185" v-if="collect.cat_id==1" />
              <img :src="collect.img_url" class="hei185" v-else />
            </div>
            <!-- 判断有大于3的显示 -->
            <div class="cl245 kefu dja" v-if="collect" @click="tocenterdetail()">全部收藏</div>
          </div>
        </div>
        <div v-else class="dja">
          <div class="hei285 dja">
            <img :src="noshou" style="width:190rpx;height:185rpx;" />
          </div>
        </div>
      </div>
      <!-- 以上的是收藏，以下是预约 -->

      <div class="frs dja" style="margin-top:13rpx;">
        <button open-type="contact" session-from="weapp" class="dja kefubtn">
          <div class="kefucen dja">
            <img :src="listing" class="listing" />
            <div class="kefu">联系我们</div>
          </div>
        </button>
      </div>

      <!-- <div class="titss mar30 mar50">
        <a style="display:inline;color:#000;font-size:38rpx">我预约的</a>
      </div>

      <div class="dja" v-if="reserve">
        <div class="re flss2 mar30 mar20 hei285" v-if="userInfo.avatarUrl">
          <img :src="reserve.article_id.picture" class="ab tl00 hei285" />
        </div>

        <div class="marr30">
          <div v-if="userInfo.avatarUrl" class="hei185 dja yutiem">
            <div>
              <div class="font24">最近预约</div>
              <div class="font24">
                <span class="titss" style="color:#666">{{ reserve.add_time.d }}</span>日
              </div>
              <div class="font24">{{ reserve.add_time.ym }}</div>
            </div>
          </div>
          <div class="cl245 kefu dja" v-if="userInfo.avatarUrl" @click="tocenterdetail2">全部预约</div>
        </div>
      </div> 

      <div v-if="!reserve" class="dja">
        <div class="hei285 dja">
          <img :src="noyu" style="width:190rpx;height:185rpx;" />
        </div>
      </div>-->
    </div>

    <div class="gghs" v-show="gghs" style="background:#fff;">
      <img :src="pics" class="pics" />
      <button
        open-type="getUserInfo"
        @getuserinfo="bindGetUserInfo"
        @click="getUserInfoClick"
        class="dic"
      >微信登录</button>
      <div class="tywm dj">
        <i class="gou" @click="zhuan()">
          <img :src="gous" mode="widthFix" v-show="trus" class="gouz" />
        </i>&nbsp;
        同意
        <span @click="dengshow1">SANFI国际用户注册协议</span>和
        <span @click="dengshow2">隐私条款</span>
      </div>
    </div>
  </div>
</template>

<script>
import card from "@/components/card";

export default {
  data() {
    return {
      no: true,
      noshou: "/static/images/no.jpg",
      noyu: "/static/images/yuyue.jpg",
      cent_bg: "/static/images/cent_bg.png",
      userInfo: "gg",
      nickName: [],
      avatarUrl: "",
      listing: "/static/images/listing.jpg",
      gghs: false,
      collect: false,
      reserve: false,
      hei: 1000,
      //xinhui
      pics: "/static/images/xinhui.png",
      gous: "/static/images/gous.png",
      trus: false
    };
  },

  methods: {
    zhuan() {
      this.trus = !this.trus;
    },
    tocenterdetail(e) {
      const url = "../centerdetail/main";
      mpvue.navigateTo({ url });
      console.log(e);
    },
    tocenterdetail2(e) {
      const url = "../centerdetail2/main?id=" + e;
      mpvue.navigateTo({ url });
      console.log(e);
    },
    getUserInfoClick() {
      // console.log('click事件首先触发')
    },
    bindGetUserInfo(e) {
      // console.log(e);
      let _this = this;
      if (_this.trus == true) {
        if (e.mp.detail.userInfo) {
          console.log("用户按了允许授权按钮");
          wx.getUserInfo({
            success: function(res) {
              wx.login({
                success(loginres) {
                  if (loginres.code) {
                    _this.$http.post(
                      "login/wxlogin",
                      {
                        code: loginres.code,
                        nickname: res.userInfo.nickName,
                        avatarUrl: res.userInfo.avatarUrl,
                        sex: res.userInfo.gender
                      },
                      function(data) {
                        var ss = wx.setStorageSync("token", data.data);
                        console.log(ss);
                      }
                    );
                    // 这里可以把code传给后台，后台用此获取openid及session_key
                  }
                }
              });
              _this.gghs = !_this.gghs;
              _this.userInfo = res.userInfo;
              _this.nickName = res.userInfo.nickName;

              // var nickName = userInfo.nickName; //用户名
              // var avatarUrl = userInfo.avatarUrl; //头像链接
              // var gender = userInfo.gender; //性别 0：未知、1：男、2：女
              // var province = userInfo.province; //所在省
              // var city = userInfo.city; //所在市
              // var country = userInfo.country; //所在国家
            }
          });
        } else {
          //用户按了拒绝按钮
          console.log("用户按了拒绝按钮");
        }
      } else {
        wx.showModal({
          title: "提示",
          content: "请先勾选同意按钮",
          success(res) {
            _this.trus = false;
          }
        });
      }
    },
    getUserInfo() {
      var _this = this;
      let userInfo = mpvue.getStorageSync("UserInfo");
      if (userInfo) {
        let info = {
          avatarUrl: userInfo.open_face,
          nickName: userInfo.open_name
        };
        _this.userInfo = info;
        _this.nickName = userInfo.open_name;
      } else {
        _this.$http.get("user/getUserInfo", {}, function(res) {
          let data = res.data;
          let info = {
            avatarUrl: data.open_face,
            nickName: data.open_name
          };
          _this.userInfo = info;
          _this.nickName = data.open_name;

          wx.setStorageSync("UserInfo", data);
        });
      }
    },
    getUserCollect() {
      let _this = this;
      _this.$http.get("user/getUserCollectOne", {}, function(res) {
        _this.collect = res.data;
      });
    },
    getUserReserve() {
      let _this = this;
      _this.$http.get("user/getUserReserveOne", {}, function(res) {
        _this.reserve = res.data;
      });
    }
  },
  created() {
    // let app = getApp();
  },

  onShow() {
    let _this = this;
    _this.gghs = false;
    wx.getSystemInfo({
      success: function(res) {
        _this.hei = res.windowHeight;
      }
    });
    let token = wx.getStorageSync("token");
    if (!token) {
      // wx.showModal({
      //   title: "提示",
      //   content: "请先点击头像进行登录",
      //   success(res) {
      //     if (res.confirm) {
      //     } else if (res.cancel) {
      //     }
      //   }
      // });
      // console.log("111");

      setTimeout(function() {
        _this.gghs = !_this.gghs;
      });
      return false;
    }
    _this.getUserInfo();
    _this.getUserCollect();
    _this.getUserReserve();
  }
};
</script>

<style scoped>
.center {
  background: #f5f5f7;
}
.pics {
  width: 230rpx;
  height: 165rpx;
  display: block;
  margin: 110rpx auto;
}
.bacf6f6 {
  background: #f5f5f7;
}
.gou {
  width: 35rpx;
  height: 35rpx;
  border-radius: 50%;
  background: #b59570;
  display: block;
  text-align: center;
  line-height: 33rpx;
}
.gouz {
  width: 24rpx;
}
.dj {
  display: flex;
  align-items: center;
}

.tywm {
  color: #474544;
  font-size: 22rpx;
  width: 590rpx;
  margin: 38rpx auto;
}
.tywm span {
  color: #b59570;
}
.dic {
  width: 590rpx;
  margin: 0 auto;
  height: 75rpx;
  font-size: 28rpx;
  border-radius: 6rpx;
  line-height: 75rpx;
  text-align: center;
  background: #05c25e;
  color: #fff;
}
/* //xinhui */
.yutiem {
  background: #fff;
  /* box-shadow: 0 0 50rpx 5rpx #eee; */
  text-align: center;
  color: #747474;
}
.font36 {
  font-size: 36rpx;
  color: #fff;
}
.fon30 {
  font-size: 30rpx;
  color: #fff;
}
.cl245 {
  width: 245rpx;
  height: 100rpx;
  /* box-shadow: 0 0 50rpx 5rpx #eee; 
  border-radius: 15rpx;*/
  background-color: #f5f5f7 !important;
}
.marr30 {
  margin-right: 30rpx;
}
.hei185 {
  height: 185rpx;
  width: 245rpx;
  /* border-radius: 15rpx; */
  margin-bottom: 10rpx;
}
.kefucen {
  text-align: center;
  /* padding: 35rpx; */
}
/* .button-hover {
  color: rgba(0, 0, 0, 0);
  background-color: #fff !important;
  border: 1px solid #fff !important;
} */
.kefubtn {
  line-height: 50rpx;
  background-color: #fff !important;
  border: 1px solid #fff !important;
  width: 100%;
}
.kefubtn::after {
  border: none;
}
.kefu {
  color: #000;
  font-size: 25rpx;
}
.listing {
  width: 56rpx;
  height: 56rpx;
  margin-right: 20rpx;
}
.tl00 {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.leftsto {
  /* padding: 30rpx 20rpx; */
  height: 425rpx;
  position: relative;
  z-index: 1;
}
.butto {
  padding: 0;
  margin: 0;
  width: 185rpx;
  height: 185rpx;
  border-radius: 50%;
  overflow: hidden;
  border: 4rpx solid #fff;
}
.cen_tops {
  width: 100%;
  margin: 0rpx auto;
}
.fls {
  flex: 1;
  width: 100%;
  height: 425rpx;
  box-sizing: border-box;
  overflow: hidden;
  /* border-radius: 15rpx; */
}
.flss2 {
  flex: 1;
  width: 420rpx;
  height: 240rpx;
  box-sizing: border-box;
  overflow: hidden;
  /* border-radius: 15rpx; */
}
.hei285 {
  height: 295rpx;
  width: 433rpx;
  overflow: hidden;
  /* border-radius: 15rpx; */
}
.frs {
  flex-basis: 240rpx;
  height: 100rpx;
  width: 100%;
  background: #fff;
  /* box-shadow: 0 0 50rpx 5rpx #eee; */
  /* border-radius: 15rpx; */
}
.re {
  position: relative;
}
.ab {
  position: absolute;
}
</style>
