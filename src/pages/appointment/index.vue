<template>
  <div class="appointment">
    <div class="padd30">
      <div class="titss">
        选择体验方式
        <span></span>
      </div>
    </div>

    <div class="pa3">
      <div class>
        <!-- kaishi -->
        <div
          class="fl tupian2 imgstu"
          @click="selects(inde)"
          v-for="(item,inde) in anli"
          :key="inde+1"
        >
          <img :src="item.tupian">
          <div class="ab yuan" v-show="!item.select">推荐</div>
          <div class="ab yuan" v-show="item.select">不推荐</div>
          <div class="ab butle">
            <div class="titss cold">{{item.title}}</div>
            <div class="font27">{{item.desc}}</div>
          </div>
        </div>
        <div v-if="anli.length<=0" class="dja">
          <div class="hei285 dja">
            <img :src="noshou" style="width:190rpx;height:185rpx;">
          </div>
        </div>
        <!-- jieshu -->
      </div>
    </div>
    <!--填写手机号弹框-->
    <div class="zxty">
      <div class="modalMask" v-if="isModel" @click="tapCancel()"></div>
      <div class="modalDialog" v-if="changeModel">
        <div class="modalContent">
          <div class="contentTip">
            <img :src="wu">
            <div>
              <div class="titss">{{zxty}}</div>
              <div class="desc">{{ptty}}</div>
            </div>
          </div>
        </div>
        <div class="modalFooter">
          <div class="btnCancel" @click="tapCancel()">取消</div>
          <div class="btnConfirm" @click="confirmSend()">确定删除</div>
        </div>
      </div>
    </div>
    <!-- jieshu -->
    <div class="clearfix"></div>
    <!-- <div class="zxty">
      <div class="titss2 mar30" style="margin-top:30rpx;">
        <span></span>
        {{tydz}}
      </div>
      <div class="pad30 padr30">
        <div class="add">
          地址：河南省郑东新区金水区明理路与姚桥路交叉口永威五月花城
          <span class="rights">></span>
        </div>
      </div>
    </div>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      noshou: "/static/images/no.jpg",
      ptty: "你可以选择陪同体验更方便",
      zxty: "抱歉，自行体验暂未开放~",
      // tydz: "体验地址",
      wu: "/static/images/weikaifan.jpg",
      pttys: true,
      changeModel: false,
      isModel: false,
      sele: 0,
      anli: [
        {
          id: 0,
          title: "陪同体验",
          tupian: "/static/images/banner_bg.png",
          desc:
            "imola专业销售人员负责和业主确定体验时间，全程陪同您一起去业主家体验。"
        },
        {
          id: 1,
          title: "自行体验",
          tupian: "/static/images/banner_bg.png",
          desc: "您自己与业主取得联系，确定体验时间，全程自行体验。"
        }
      ]
    };
  },
  methods: {
    selects(e) {
      // e.select = !e.select;
      if (e == 1) {
        this.changeModel = !this.changeModel;
        this.isModel = !this.isModel;
      } else {
        this.pttys = !this.pttys;
        wx.navigateTo({ url: "../appointmentdetails/main" });
      }
    },
    // 打开输入手机号的模态框
    tapSendTele() {
      this.changeModel = !this.changeModel;
      this.isModel = !this.isModel;
    },
    //  弹框取消
    tapCancel() {
      // this.phoneNumber = "";
      console.log("取消删除");
      this.changeModel = !this.changeModel;
      this.isModel = !this.isModel;
    },
    //  确认删除
    confirmSend() {
      console.log("确认删除");
      this.changeModel = !this.changeModel;
      this.isModel = !this.isModel;
      // this.$emit("confirmSend", this.phoneNumber);
      // this.phoneNumber = "";
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
.rights {
  position: absolute;
  right: 0;
  font-family: cursive;
  top: 0rpx;
}
.add {
  font-size: 26rpx;
  line-height: 45rpx;
  color: #666;
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
.modalFooter {
  display: none !important;
}
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
.contentTip img {
  width: 300rpx;
  height: 300rpx;
  margin: 0 auto;
  display: block;
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
  position: relative;
  z-index: 9999;
}
.btnConfirm {
  font-size: 32rpx;
  width: 50%;
  color: #f5c659;
  text-align: center;
  position: relative;
  z-index: 9999;
}
/* tangkuang */
.cold {
  color: #ffdd76;
  margin-bottom: 10rpx;
}
.font27 {
  font-size: 28rpx;
}
.yuan {
  top: 24rpx;
  right: 30rpx;
  width: 90rpx;
  height: 30rpx;
  font-size: 28rpx;
  border-radius: 50%;
  text-align: right;
  color: #ffdd76;
  /* background-color: #fff; */
}
.yuan img {
  width: 30rpx !important;
  height: 30rpx !important;
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 0;
}
.imgstu {
  margin: 15rpx 0;
  position: relative;
}
.tupian2 {
  margin-bottom: 10rpx;
}
.weikaifan {
  width: 280rpx;
  height: 280rpx;
}
.butle {
  bottom: 55rpx;
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
.hei285 {
  height: 485rpx;
  width: 420rpx;
  overflow: hidden;
  border-radius: 15rpx;
}
.pa3 {
  padding: 0 30rpx;
  box-sizing: border-box;
}
.tupian {
  margin-right: 13rpx;
  margin-bottom: 10rpx;
}
.tupian:nth-child(3n) {
  margin-right: 0rpx !important;
}
.tupian img {
  width: 220rpx;
  height: 220rpx;
}
.fl {
  float: left;
}
.bainji {
  top: 10rpx;
  right: 10rpx;
  font-size: 30rpx;
  color: #f4be4e;
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
</style>
