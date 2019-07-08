<template>
  <div class="appointmentdetails">
    <!-- <div class="clearfix"></div>
    <div class="zxty">-->
    <div class="titss2 mar30 fontwei" style="margin-top:30rpx;">
      <span></span>
      {{tydz}}
    </div>
    <div class="pad30 padr30">
      <div class="add ma3" @click="daohans">
        地址：{{content.area}}{{content.address}}
        <!-- <span class="rights">
          <img :src="rig" style="width:12rpx;height:20rpx">
        </span>-->
      </div>

      <div class="re hei850">
        <div class="re ma3">
          <!-- <div type="submit" class="ab bac">
              <img :src="soupic" class="soupic">
            </div>
          <input type="text" name="sou" placeholder="大家都在搜。。。" class="sou">-->
        </div>
        <map
          id="map"
          :longitude="content.lng"
          :latitude="content.lat"
          scale="16"
          bindcontroltap="controltap"
          :markers="markers"
          :polyline="polyline"
          bindmarkertap="markertap"
          bindregionchange="regionchange"
          show-location
          style="width:100%;height:280rpx"
          class="re maps"
        ></map>
      </div>
    </div>
    <div class="mar80">
      <div class="titss2 mar30 fontwei" style="margin-top:30rpx;">
        <span></span>
        {{lxdh_tit}}
      </div>
      <div class="re hei30 ma3">
        <div type="submit" class="ab bac">
          <img :src="lxdh" class="soupic" />
        </div>
        <input type="text" name="sou" v-model="tel_val" placeholder="请输入电话号码" class="sou" />
      </div>
      <div class="mar80 pa3">
        <div class="add fontwei" style="font-size:28rpx">备注:</div>
        <div class="add mar10">
          <p>您的信息将仅作为预约申请使用</p>
          <p>预约成功后，工作人员将与您联系并确认预约时间</p>
          <p>imola承诺您的隐私不会被泄露</p>
        </div>
      </div>
    </div>
    <!-- jieshu -->
    <button type="submit" class="fix btnns dja" @click="tijiao()">确认提交</button>

    <!--填写手机号弹框-->
    <div class="modalMask" v-if="isModel"></div>
    <div class="modalDialog" v-if="changeModel">
      <div class="modalContent">
        <p class="contentTip">{{zhi}}</p>
      </div>
      <div class="modalFooter">
        <div class="btnCancel" @tap="tapCancel">取消</div>
        <div class="btnConfirm" @tap="confirmSend" v-if="!crre">确定</div>
        <div class="btnConfirm" @tap="confirmSends" v-if="crre">确认提交</div>
      </div>
    </div>
    <!-- //结束 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      zhi: "",
      changeModel: false,
      isModel: false,
      crre: false,
      tel_val: "",
      tydz: "体验地址",
      lxdh_tit: "填写联系电话",
      lxdh: "/static/images/phone.png",
      rig: "/static/images/right.png",
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
      content: {}
      //地图结束
    };
  },
  methods: {
    daohans(e) {
      //根据经纬度在地图上显示
      // var value = e.detail.value;
      wx.openLocation({
        longitude: Number(this.content.lng),
        latitude: Number(this.content.lat)
      });
    },
    tijiao() {
      if (!/^1[34578]\d{9}$/.test(this.tel_val)) {
        this.changeModel = !this.changeModel;
        this.isModel = !this.isModel;
        this.zhi = "请填写正确的电话号码哦~";
        this.crre = false;
        return false;
      } else {
        this.changeModel = !this.changeModel;
        this.isModel = !this.isModel;
        this.crre = true;
        this.zhi = `当前号码为：` + this.tel_val + `，点击确定进行预约`;
      }
    },
    //  弹框取消
    tapCancel() {
      // this.phoneNumber = "";
      console.log("取消");
      this.changeModel = !this.changeModel;
      this.isModel = !this.isModel;
      this.crre = false;
    },
    //  确认删除
    confirmSend() {
      console.log("确认");
      this.changeModel = !this.changeModel;
      this.isModel = !this.isModel;
      this.crre = false;
    },
    confirmSends() {
      console.log("确认预约");
      this.changeModel = !this.changeModel;
      this.isModel = !this.isModel;
      //提交后置为false
      this.crre = false;

      this.$http.post(
        "user/reserve",
        {
          id: this.content.article_id,
          phone: this.tel_val
        },
        function(res) {
          wx.showModal({
            title: "预约成功",
            content: res.msg,
            showCancel: false,
            confirmText: "好的",
            success: function(r) {
              if (res.confirm) {
                wx.redirectTo({
                  url: "/pages/index/main"
                });
              }
            }
          });
        }
      );
    },
    daohans(e) {
      //根据经纬度在地图上显示
      // var value = e.detail.value;
      wx.openLocation({
        longitude: Number(this.content.lng),
        latitude: Number(this.content.lat)
      });
    }
  },
  created() {
    // let app = getApp();
  },
  mounted() {},
  onShow() {
    let _this = this;
    let Query = _this.$http.getQuery();
    let id = Query.id;

    _this.$http.get("index/getArticleDetailsById/" + id, {}, function(res) {
      _this.content = res.data;
      _this.markers.push({
        id: 0,
        latitude: _this.content.lat,
        longitude: _this.content.lng,
        width: 50,
        height: 50
      });
    });
  }
};
</script>

<style scoped>
.sou {
  background: #fff;
}
.titss2 {
  font-size: 36rpx;
  color: #333;
  padding-left: 20rpx;
}
.titss2 span {
  width: 7rpx;
  height: 85%;
  top: 10%;
}
.btnns {
  height: 85rpx;
  width: 100%;
  margin: 0 auto;
  background-color: #b59570;
  border: none;
  position: fixed;
  bottom: 0;
  border-radius: 0;
  /* color: #2e2f31; */
  font-size: 30rpx;
  font-weight: bold;
}
.maps {
  margin-top: 30rpx;
}
.ma3 {
  margin-top: 30rpx;
}
.rights {
  position: absolute;
  right: 0;
  font-family: cursive;
  top: 2rpx;
}
.add {
  font-size: 26rpx;
  line-height: 45rpx;
  color: #adadad;
  padding-right: 20rpx;
  position: relative;
}
.titss {
  font-size: 30rpx;
}
.desc {
  font-size: 22rpx;
  margin: 10rpx 0;
  color: #999;
}
.cold {
  color: #b59570;
  margin-bottom: 10rpx;
}
.font27 {
  font-size: 28rpx;
}
.imgstu {
  margin: 15rpx 0;
  position: relative;
}
.tupian2 {
  margin-bottom: 10rpx;
}
.butle {
  bottom: 50rpx;
  left: 30rpx;
  box-sizing: border-box;
  color: #fff;
  font-size: 32rpx;
}
.tupian2 img {
  width: 690rpx;
  height: 285rpx;
  border-radius: 8rpx;
}
.pa3 {
  padding: 0 30rpx;
  box-sizing: border-box;
}
.fl {
  float: left;
}
.bainji {
  top: 10rpx;
  right: 10rpx;
  font-size: 30rpx;
  color: #b59570;
}
.titmin {
  font-size: 30rpx;
  color: #cccccc;
  display: flex;
  align-items: center;
}
.wid75 {
  margin-right: 50rpx;
  /* display: inline-block; */
}
.padd30 {
  padding: 20rpx 30rpx 20rpx 30rpx;
  box-sizing: border-box;
  margin: 0 auto;
}
.da {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  justify-content: flex-start;
  padding-bottom: 12rpx;
  border-bottom: 1px solid #eee;
  position: relative;
  padding-right: 80rpx;
  overflow: hidden;
}
.re {
  position: relative;
}
.ab {
  position: absolute;
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
</style>
