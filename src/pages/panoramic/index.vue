<template>
  <div class="panoramic" :style="'height:'+hight+'px'">
    <div class="swiper-box">
      <swiper
        autoplay="true"
        easing-function="'linear'"
        duration="10000"
        interval="5000"
        class="autopanoramic"
        :style="'height:'+hight+'px;'"
        @change="current"
      >
        <div class="re">
          <swiper-item class="wid100" :style="'height:'+hight+'px;'">
            <img
              :src="item"
              id="idv"
              :style="'height:'+hight+'px;'+'width:'+1500/750*wgg+'rpx;'"
              class="ing"
              @change="ggo($event)"
              @click="clickHandle($event)"
            >
          </swiper-item>
          <swiper-item class="wid100" :style="'height:'+hight+'px;'">
            <!-- <img
            :src="item"
            id="idv1"
            :style="'height:'+hight+'px;'+'width:'+1500/hight*hgg+'px;'"
            class="ing"
            @change="ggo($event)"
            >-->
          </swiper-item>
          <swiper-item class="wid100" :style="'height:'+hight+'rpx;'">
            <!-- <img
            :src="item"
            id="idv2"
            :style="'height:'+hight+'px;'+'width:'+1500/hight*hgg+'px;'"
            class="ing"
            @change="ggo($event)"
            >-->
          </swiper-item>
          <swiper-item class="wid100" :style="'height:'+hight+'rpx;'"></swiper-item>
        </div>

        <div
          class="sfd"
          @click="ssg($event)"
          style="background:url('/static/images/dian.png');background-size:100% 100%"
        ></div>
      </swiper>
    </div>

    <div class="fixe ab">
      <div class="shows" v-show="dibu">
        <ul>
          <li
            v-for="(item, index) in list"
            :key="index+1"
            :title="item.name"
            :id="'index'+index"
            @click="bindtas($event)"
          >{{item.name}}</li>
        </ul>
      </div>
      <div class="cece dja" @click="ketin()" id="tit">
        <img :src="ditu" class="ditu">
        {{tits}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dibu: false,
      hgg: 0,
      wgg: 0,
      tits: "客厅",
      hight: 0,
      ditu: "/static/images/ditu.png",
      item:
        "http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/newsPicture/05558951-de60-49fb-b674-dd906c8897a6",
      list: [
        {
          name: "客厅"
        },
        {
          name: "卧室"
        },
        {
          name: "厨房"
        },
        {
          name: "其他"
        }
      ]
    };
  },

  methods: {
    ketin(e) {
      console.log(e);
      this.dibu = !this.dibu;
    },
    bindtas(e) {
      console.log(e);
      this.tits = e.mp._relatedInfo.anchorTargetText;
      this.dibu = !this.dibu;
    },
    clickHandle(ev) {
      console.log("clickHandle:", ev);
      // throw {message: 'custom test'}
    },
    ssg(e) {
      console.log(e);
      wx.navigateTo({ url: "/pages/panoramicdetails/main" });
    }
  },

  created() {
    let that = this;
    wx.getSystemInfo({
      success: function(res) {
        // let clientHeight = res.windowHeight;
        // let clientWidth = res.windowWidth;
        // let ratio = 750 / clientWidth;
        // let height = clientHeight * ratio;
        // console.log(res);
        that.hight = res.windowHeight;
      }
    });

    wx.getImageInfo({
      src: that.item,
      success: function(res) {
        // console.log(res);
        that.hgg = res.height;
        that.wgg = res.width;
      }
    });
  }
};
</script>

<style scoped>
.shows {
  width: 215rpx;
  border-radius: 15rpx;
  background: rgba(240, 240, 240, 0.7);
  box-sizing: border-box;
  margin-bottom: 20rpx;
}
.shows ul {
  padding: 10rpx;
  box-sizing: border-box;
}
.shows ul li {
  font-size: 28rpx;
  line-height: 58rpx;
  border-bottom: 1rpx solid #fff;
  color: #000;
}
.shows ul li:last-child {
  border-bottom: none;
}
.cece {
  color: #000;
  width: 200rpx;
  margin-left: 7rpx;
  height: 58rpx;
  font-size: 28rpx;
  line-height: 58rpx;
  background: rgba(240, 240, 240, 0.5);
  border-radius: 60rpx;
}
.fixe {
  bottom: 50rpx;
  text-align: center;
  position: fixed;
  left: 285rpx;
}
#idv1 {
  left: -750rpx;
}
#idv2 {
  left: -1500rpx;
}
.wid100 {
  overflow: visible;
}
.wid0 {
  width: 750rpx !important;
  margin-right: -1500rpx !important;
  opacity: 0;
  zoom: 0;
}
.ing {
}
.autopanoramic {
}
.panoramic {
  background-color: #000;
}
.ditu {
  width: 22rpx;
  height: 28rpx;

  margin-right: 8rpx;
}
page {
  background-color: #000;
}
swiper {
  height: 750rpx;
  text-align: center;
  display: flex;
}
.swiper-box {
  width: 750rpx;
  overflow: hidden;
  margin: 0 auto;
}
.sfd {
  background: red;
  width: 100rpx;
  height: 100rpx;
  border-radius: 50%;
  left: 1020px;
  top: 40px;
  position: fixed;
  animation: mymove 1.8s infinite;
  -webkit-animation: mymove 1.8s infinite; /*Safari and Chrome*/
}
@keyframes mymove {
  from {
    transform: scale(0.2);
  }
  to {
    transform: scale(1);
  }
}

@-webkit-keyframes mymove {
  from {
    transform: scale(0.2);
  }
  to {
    transform: scale(1);
  }
}
</style>
