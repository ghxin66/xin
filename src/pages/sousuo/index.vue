<template>
  <div class="experience">
    <div class="clearfix"></div>
    <div class="re hei30 ma3">
      <input type="text" name="sou" v-model="val" placeholder="大家都在搜。。。" class="sou">
      <span class="font28 widtal" @click="sou_pro(val)">搜索</span>
    </div>
    <div class="cenrt">
      <ul>
        <li
          v-for="(item,index) in sou_content"
          :key="index+1"
          class="soucon"
          @click="fenlei(item.title)"
        >{{item.title}}</li>
      </ul>
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
      changeModel: false,
      isModel: false,
      val: "",
      sou_content: [
        {
          title: "客厅"
        },
        {
          title: "卫生间"
        },
        {
          title: "马卡龙"
        },
        {
          title: "安特瑞斯"
        },
        {
          title: "卡瑞拉"
        },
        {
          title: "吉那斯"
        },
        {
          title: "KOALA"
        },
        {
          title: "紫金"
        }
      ]
      //地图结束
    };
  },
  methods: {
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
    sou_pro(val) {
      if (val.trim() == "" || val.trim() == null) {
        this.changeModel = !this.changeModel;
        this.isModel = !this.isModel;
      } else {
        console.log(val.trim(val));
      }
    },
    fenlei(val) {
      if (val.trim() == "" || val.trim() == null) {
        this.changeModel = !this.changeModel;
        this.isModel = !this.isModel;
      } else {
        console.log(val.trim(val));
      }
    }
  },
  created() {
    // let app = getApp()
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
  border-radius: 8rpx;
  float: left;
}
.soucon:nth-child(4n) {
  margin: 36rpx 0rpx 0 0;
}
.widtal {
  text-align: center;
  display: inline-block;
  width: 92rpx;
}
.sou {
  width: 615rpx;
  height: 65rpx;
  background-color: #f6f5f5;
  border: 2rpx solid #f5f5f5;
  border-radius: 8rpx;
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
  color: #f5c659;
  text-align: center;
}
/* tangkuang */
.re {
  position: relative;
}
.ab {
  position: absolute;
}
</style>
