<template>
  <div style="padding: 0 30rpx;">
    <div class="fixd" v-if="showt" @click.stop="showthiss2">
      <div>
        <div class="fidx">
          <img class="bg" :src="share">
          <img class="img" :src="thumb">
          <span class="sharetitle">{{ title }}</span>
          <img class="qrcode" :src="qrcode" mode="aspectFit">
          <canvas class="myCanvas" canvas-id="myCanvas" style="width: 224px;height: 298px"></canvas>
        </div>
        <div class="savs dja" @click.stop="saveImage">保存图片</div>
      </div>
    </div>
    <div class="bormar">
      <div class="cens mar20 mart90">
        <span class="title">分享到：</span>
        <button @click="showthiss" class="tis desc col999 lin50 tu dja">
          <img :src="pyq" alt>朋友圈
        </button>
        <button
          open-type="share"
          :data-title="title"
          :data-url="url+'&share=1'"
          class="tis desc col999 lin50 tu dja"
        >
          <img :src="wxhy" alt>微信好友
        </button>
      </div>
    </div>
    <div class="gohome" v-if="hasshare" @click="gohomeUrl">
      <img :src="gohome" class="gohome_img" alt>
    </div>
    <div class="modalDialog" v-if="changeModel">
      <div class="modalContent">
        <p class="contentTip">请先授权小程序可访问手机相册</p>
      </div>
      <div class="modalFooter">
        <div class="btnCancel" @tap="tapCancel">取消</div>
        <button
          type="primary"
          class="btnConfirm"
          open-type="openSetting"
          bindopensetting="handleSetting"
        >去授权</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      value: {}
    },
    url: {
      type: String,
      value: {}
    },
    thumb: {
      type: String,
      value: {}
    },
    cat: {
      type: String,
      value: {}
    },

    keyid: {
      type: Number,
      value: {}
    },
    hasshare: {
      type: Boolean,
      value: {}
    }
  },
  data() {
    return {
      wxhy: "/static/images/wechat.jpg",
      pyq: "/static/images/frient.jpg",
      share: "/static/images/share.png",
      gohome: "/static/images/gohome.png",
      showt: false,
      qrcode: "",
      shareImg: "",
      changeModel: false
    };
  },
  methods: {
    gohomeUrl() {
      wx.switchTab({
        url: "/pages/index/main",
        fail: function(res) {
          console.log(res);
        }
      });
    },
    tapCancel() {
      this.changeModel;
    },
    showthiss2() {
      let _this = this;
      _this.showt = !_this.showt;
    },
    showthiss() {
      mpvue.showLoading({
        title: "图片生成中",
        mask: true
      });
      let _this = this;
      _this.$http.get(
        "weixin/getQrcode",
        {
          url: _this.url + "&share=1",
          cat: _this.cat,
          key_id: _this.keyid,
          thumb: _this.thumb,
          title: _this.title
        },
        function(res) {
          wx.hideLoading();
          _this.qrcode = res.data.qrcode;
          _this.shareImg = res.data.sharePng;

          _this.showt = !_this.showt;
        }
      );
    },
    hctp() {
      // let self = this;
      // if(self.shareImg){
      //     return true
      // }
      // let ctx=wx.createCanvasContext("myCanvas")
      // ctx.drawImage(self.share, 0, 0, 224, 298);
      // ctx.drawImage(self.thumb, 16,72, 192, 119.254);
      // ctx.fillText(self.title, 16, 212.254, 300);
      // ctx.drawImage(self.qrcode, 176,238, 50, 50);
      // ctx.draw(false, function(e) {
      //     // 保存到本地
      //     wx.canvasToTempFilePath({
      //         x: 0,
      //         y: 0,
      //         width: 375,
      //         height: 417,
      //         canvasId: 'myCanvas',
      //         success: function(res) {
      //             let pic = res.tempFilePath;
      //             self.shareImg=pic
      //             console.log(self.shareImg)
      //         },
      //         fail:function(res){
      //             console.log(res)
      //         }
      //     });
      // });
    },
    saveImage() {
      wx.showLoading({
        title: "保存中..."
      });
      let self = this;
      wx.downloadFile({
        url: self.shareImg, // 仅为示例，并非真实的资源
        success(fileres) {
          // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容

          if (fileres.statusCode === 200) {
            wx.saveImageToPhotosAlbum({
              filePath: fileres.tempFilePath,
              success(res) {
                wx.hideLoading();
                wx.showToast({
                  title: "保存成功",
                  icon: "success",
                  duration: 2000
                });
                wx.removeSavedFile({ filePath: fileres.tempFilePath });
              },
              fail: function(error) {
                console.log(error);
                wx.hideLoading();
                wx.removeSavedFile({ filePath: fileres.tempFilePath });
              }
            });
          }
        }
      });
      return false;
    }
  }
};
</script>
<style scoped>
.title {
  font-size: 36rpx;
  color: #adadad;
}
.mart90 {
  margin-top: 80rpx;
  border-bottom: 1rpx solid #333030;
  padding-bottom: 40rpx;
}
button {
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0x;
  padding-right: 0;
  box-sizing: border-box;
  text-align: center;
  text-decoration: none;
  overflow: hidden;
  background-color: #403c3c;
}
.dja {
  display: flex !important;
  justify-content: center;
  align-items: center;
  font-size: 28rpx;
}
.tu ._img {
  width: 35rpx;
  height: 35rpx;
  padding-right: 10rpx;
}
.fidx {
  position: relative;
}
.bg {
  display: block;
  width: 100%;
  height: 100%;
  z-index: 9;
}
.img {
  position: absolute;
  top: 126rpx;
  left: 21rpx;
  display: block;
  width: 393.75rpx;
  height: 244.125rpx;
  border-radius: 5rpx;
  z-index: 9;
}
.sharetitle {
  position: absolute;
  left: 21rpx;
  top: 380.125rpx;
  font-size: 18rpx;
  color: #2b1c00;
  z-index: 9;
}
.qrcode {
  width: 100rpx;
  height: 110rpx;
  position: absolute;
  bottom: 10rpx;
  right: 10rpx;
  z-index: 9;
}
.myCanvas {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  opacity: 0;
}
.gohome {
  width: 100rpx;
  height: 100rpx;
  position: fixed;
  bottom: 30rpx;
  right: 10rpx;
  z-index: 99;
}
.gohome_img {
  width: 100%;
  height: 100%;
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
</style>