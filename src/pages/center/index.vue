<template>
  <div class="center">
    <div class="cen_tops dja">
      <div class="re fls">
        <img :src="cent_bg" class="ab tl00">
        <!-- //结束 -->
        <div class="leftsto">
          <div style="width:120rpx;text-align:center">
            <button
              open-type="getUserInfo"
              @getuserinfo="bindGetUserInfo"
              @click="getUserInfoClick"
              class="butto"
            >
              <img :src="userInfo.avatarUrl" style="width:90rpx;height:90rpx">
            </button>
            <!-- {{userInfo}} -->
            <div
              class="titss fon30"
              v-show="!userInfo.avatarUrl"
              @click="getUserInfoClick"
              style="width:90rpx;text-align:center;margin-top:5rpx;"
            >登录</div>
            <div class="titss fon30" v-show="userInfo.avatarUrl" style="margin-top:5rpx;">欢迎您!</div>
            <div class="titss font36">{{nickName}}</div>
          </div>
        </div>
      </div>

      <div class="frs dja">
        <button open-type="contact" session-from="weapp" class="dja kefubtn">
          <div class="kefucen">
            <img :src="listing" class="listing">
            <div class="kefu">在线客服</div>
          </div>
        </button>
      </div>
    </div>
    <div class="clearfix"></div>

    <div class="titss mar30">
      {{wscd}}
      <span></span>
    </div>
    <div class="dja" v-show="userInfo.avatarUrl">
      <div class="re flss2 mar30 mar20 hei285" v-if="userInfo.avatarUrl">
        <img :src="userInfo.avatarUrl" class="ab tl00 hei285">
      </div>

      <div class="marr30">
        <div v-if="userInfo.avatarUrl">
          <img :src="userInfo.avatarUrl" class="hei185">
        </div>
        <!-- 判断有大于3的显示 -->
        <div class="cl245 kefu dja" v-if="userInfo.avatarUrl" @click="tocenterdetail()">全部收藏</div>
      </div>
    </div>
    <div v-if="!userInfo.avatarUrl" class="dja">
      <div class="hei285 dja" v-if="!userInfo.avatarUrl">
        <img :src="noshou" style="width:190rpx;height:185rpx;">
      </div>
    </div>
    <!-- 以上的是收藏，以下是预约 -->
    <div class="titss mar30" style="margin-top:10rpx;">
      {{wyyd}}
      <span></span>
    </div>

    <div class="dja" v-show="userInfo.avatarUrl">
      <div class="re flss2 mar30 mar20 hei285" v-if="userInfo.avatarUrl">
        <img :src="userInfo.avatarUrl" class="ab tl00 hei285">
      </div>

      <div class="marr30">
        <div v-if="userInfo.avatarUrl" class="hei185 dja yutiem">
          <div>
            <!-- <img :src="userInfo.avatarUrl"> -->
            <div class="font24">最近预约</div>
            <div class="font24">
              <span class="titss" style="color:#666">29</span>日
            </div>
            <div class="font24">2019年2月</div>
          </div>
        </div>
        <div class="cl245 kefu dja" v-if="userInfo.avatarUrl" @click="tocenterdetail2">全部预约</div>
      </div>
    </div>

    <div v-if="!userInfo.avatarUrl" class="dja">
      <div class="hei285 dja">
        <img :src="noyu" style="width:190rpx;height:185rpx;">
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
      wscd: "我收藏的",
      wyyd: "我预约的"
    };
  },

  methods: {
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
      const self = this;
      if (e.mp.detail.userInfo) {
        console.log("用户按了允许授权按钮");
        wx.getUserInfo({
          success: function(res) {
            console.log(res.userInfo);
            self.userInfo = res.userInfo;
            self.nickName = res.userInfo.nickName;
            // var nickName = userInfo.nickName; //用户名
            // var avatarUrl = userInfo.avatarUrl; //头像链接
            // var gender = userInfo.gender; //性别 0：未知、1：男、2：女
            // var province = userInfo.province; //所在省
            // var city = userInfo.city; //所在市
            // var country = userInfo.country; //所在国家
          }
        });
        // let { encryptedData, userInfo, iv } = e.mp.detail;
        // self.$http
        //   .post(api, {
        //     // 这里的code就是通过wx.login()获取的
        //     code: self.code,
        //     encryptedData,
        //     iv
        //   })
        //   .then(res => {
        //     console.log(`后台交互拿回数据:`, res);
        //     // 获取到后台重写的session数据，可以通过vuex做本地保存
        //   })
        //   .catch(err => {
        //     console.log(`api请求出错:`, err);
        //   });
      } else {
        //用户按了拒绝按钮
        console.log("用户按了拒绝按钮");
      }
    }
  },
  created() {
    // let app = getApp();
  },
  mounted() {
    wx.login({
      success(res) {
        if (res.code) {
          // 这里可以把code传给后台，后台用此获取openid及session_key
        }
      }
    });
  }
};
</script>

<style scoped>
.yutiem {
  background: #fff;
  box-shadow: 0 0 50rpx 5rpx #eee;
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
  height: 95rpx;
  box-shadow: 0 0 50rpx 5rpx #eee;
  border-radius: 15rpx;
  background-color: #fff !important;
}
.marr30 {
  margin-right: 30rpx;
}
.hei185 {
  height: 170rpx;
  width: 245rpx;
  border-radius: 15rpx;
  margin-bottom: 10rpx;
}
.kefucen {
  text-align: center;
  padding: 35rpx;
}
.button-hover {
  color: rgba(0, 0, 0, 0);
  background-color: #fff !important;
  border: 1px solid #fff !important;
}
.kefubtn {
  line-height: 50rpx;
  background-color: #fff !important;
  border: 1px solid #fff !important;
}
.kefubtn::after {
  border: none;
}
.kefu {
  color: #747474;
  font-size: 26rpx;
}
.listing {
  width: 62rpx;
  height: 62rpx;
}
.tl00 {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.leftsto {
  padding: 30rpx 20rpx;
  position: relative;
  z-index: 1;
}
.butto {
  padding: 0;
  margin: 0;
  width: 90rpx;
  height: 90rpx;
  border-radius: 50%;
  overflow: hidden;
  border: 4rpx solid #fff;
}
.cen_tops {
  width: 690rpx;
  margin: 40rpx auto;
}
.fls {
  flex: 1;
  width: 420rpx;
  height: 240rpx;
  margin-right: 30rpx;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 15rpx;
}
.flss2 {
  flex: 1;
  width: 420rpx;
  height: 240rpx;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 15rpx;
}
.hei285 {
  height: 285rpx;
  width: 420rpx;
  overflow: hidden;
  border-radius: 15rpx;
}
.frs {
  flex-basis: 240rpx;
  height: 240rpx;
  width: 240rpx;
  box-shadow: 0 0 50rpx 5rpx #eee;
  border-radius: 15rpx;
}
.re {
  position: relative;
}
.ab {
  position: absolute;
}
</style>
