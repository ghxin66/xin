<template>
  <div class="centerdetail">
    <div class="padd30">
      <div class="titss colfff" style="color:#fff;font-weight:bold">我收藏的</div>
      <div class="da mar20">
        <div class="wid75" :class="sel==0?'titss coladadadd':'titmin'" @click="sels(0)">
          图片
          <!-- <span></span> -->
        </div>
        <div class="wid75" :class="sel==1?'titss coladadadd':'titmin'" @click="sels(1)">
          案例
          <!-- <span></span> -->
        </div>
        <div class="ab bainji" @click="bianji" v-show="bianjis">编辑</div>
        <div class="ab bainji" @click="cancel" v-show="!bianjis">取消</div>
      </div>
    </div>
    <div v-if="sel==0">
      <div class="pa3">
        <div class>
          <div
            class="fl tupian imgstu"
            @click="checkedOne(item)"
            @longpress="bianji"
            v-for="(item,inde) in tupians"
            :key="inde+1"
          >
            <img :src="item.tupian">
            <div v-if="!bianjis">
              <!-- <div class="ab yuan" v-show="!item.select"></div> -->
              <div class="ab yuan ggs" :class="{active:item.select}">
                <img :src="select">
              </div>
            </div>
          </div>
          <div v-if="tupians.length<=0" class="dja">
            <div class="hei285 dja">
              <img :src="noshou" style="width:190rpx;height:185rpx;">
            </div>
          </div>
        </div>
      </div>
      <!-- 结束 -->
      <div class="hei90 das pa3" v-show="!bianjis">
        <div class="fl claxu">
          已选择
          <span>{{lengths}}</span>套
        </div>
        <div class="fr">
          <button class="cencl" @click="tapSendTele">删除</button>
        </div>
      </div>

      <div class="modalMask" v-if="isModel"></div>
      <div class="modalDialog" v-if="changeModel">
        <div class="modalContent">
          <p class="contentTip">确认删除图片？</p>
        </div>
        <div class="modalFooter">
          <div class="btnCancel" @tap="tapCancel">取消</div>
          <div class="btnConfirm" @tap="confirmSend">删除</div>
        </div>
      </div>
    </div>
    <!-- show0已结束 -->

    <div v-if="sel==1">
      <div class="pa3">
        <div class>
          <div
            class="fl tupian2 imgstu"
            @click="checkedOne2(item)"
            @longpress="bianji"
            v-for="(item,inde) in anli"
            :key="inde+1"
          >
            <img :src="item.tupian">
            <!-- <div class="ab yuan" v-show="!item.select">
            </div>-->
            <div v-if="!bianjis">
              <div class="ab yuan ggs" :class="{active:item.select}">
                <img :src="select">
              </div>
            </div>
            <div class="ab butle">{{item.title}}</div>
          </div>
          <div v-if="anli.length<=0" class="dja">
            <div class="hei285 dja">
              <img :src="noshou" style="width:190rpx;height:185rpx;">
            </div>
          </div>
          <!-- jieshu -->
        </div>
      </div>
      <div class="hei90 das pa3" v-show="!bianjis">
        <div class="fl claxu">
          已选择
          <span>{{anli_lengths}}</span>套
        </div>
        <div class="fr">
          <button class="cencl" @click="tapSendTele">删除</button>
        </div>
      </div>

      <!--填写手机号弹框-->
      <div class="modalMask" v-if="isModel"></div>
      <div class="modalDialog" v-if="changeModel">
        <div class="modalContent">
          <p class="contentTip">确认删除案例？</p>
        </div>
        <div class="modalFooter">
          <div class="btnCancel" @tap="tapCancel">取消</div>
          <div class="btnConfirm" @tap="confirmSend2">删除</div>
        </div>
      </div>
    </div>
    <!-- jieshu -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      isa: -1,
      // add: true,
      bianjis: true,
      sel: 0,
      sele: 0,
      noshou: "/static/images/no.jpg",
      // yuan: "/static/images/yuan.jpg",
      select: "/static/images/select.png",
      changeModel: false,
      isModel: false,
      tupians: [
        {
          id: 0,
          title: "低调沉稳，成都500m2法式别墅",
          tupian: "/static/images/alxqbg.jpg",
          select: false
        },
        {
          id: 1,
          title: "低调沉稳，成都500m2法式别墅",
          tupian: "/static/images/alxqbg.jpg",
          select: false
        },
        {
          id: 2,
          title: "低调沉稳，成都500m2法式别墅",
          tupian: "/static/images/alxqbg.jpg",
          select: false
        },
        {
          id: 3,
          title: "低调沉稳，成都500m2法式别墅",
          tupian: "/static/images/alxqbg.jpg",
          select: false
        },
        {
          id: 4,
          title: "低调沉稳，成都500m2法式别墅",
          tupian: "/static/images/alxqbg.jpg",
          select: false
        }
      ],
      anli: [
        {
          id: 0,
          title: "低调沉稳，成都500m2法式别墅",
          tupian: "/static/images/banner_bg.png",
          select: false
        },
        {
          id: 1,
          title: "低调沉稳，成都500m2法式别墅",
          tupian: "/static/images/banner_bg.png",
          select: false
        },
        {
          id: 2,
          title: "低调沉稳，成都500m2法式别墅",
          tupian: "/static/images/banner_bg.png",
          select: false
        }
      ],
      fruitIds: [],
      anli_fruitIds: [],
      lengths: 0,
      anli_lengths: 0
    };
  },
  methods: {
    tapSendTele() {
      this.changeModel = !this.changeModel;
      this.isModel = !this.isModel;
    },
    //  弹框取消
    tapCancel() {
      console.log("取消删除");
      this.changeModel = !this.changeModel;
      this.isModel = !this.isModel;
    },
    confirmSend() {
      console.log("确认删除" + this.fruitIds);
      this.changeModel = !this.changeModel;
      this.isModel = !this.isModel;
    },
    confirmSend2() {
      console.log("确认删除" + this.anli_fruitIds);
      this.changeModel = !this.changeModel;
      this.isModel = !this.isModel;
    },
    checkedOne2(fruitId) {
      var that = this;
      fruitId.select = !fruitId.select;
      let idIndex = this.anli_fruitIds.indexOf(fruitId.id);
      if (idIndex >= 0) {
        //如果已经包含就去除
        this.anli_fruitIds.splice(idIndex, 1);
        that.anli_lengths = this.anli_fruitIds.length;
        console.log(this.anli_fruitIds);
      } else {
        //如果没有包含就添加
        this.anli_fruitIds.push(fruitId.id);
        that.anli_lengths = this.anli_fruitIds.length;
        console.log(this.anli_fruitIds);
      }
    },
    checkedOne(fruitId) {
      var that = this;
      fruitId.select = !fruitId.select;
      let idIndex = this.fruitIds.indexOf(fruitId.id);
      if (idIndex >= 0) {
        //如果已经包含就去除
        this.fruitIds.splice(idIndex, 1);
        that.lengths = this.fruitIds.length;
        console.log(this.fruitIds.length);
      } else {
        //如果没有包含就添加
        this.fruitIds.push(fruitId.id);
        that.lengths = this.fruitIds.length;
        console.log(this.fruitIds.length);
      }
    },
    sels(e) {
      this.sel = e;
      this.changeModel = false;
      this.isModel = false;
      this.bianjis = true;
      // this.add = true;
    },
    bianji() {
      this.bianjis = false;
      this.anli.select = false;
      this.tupians.select = false;
    },
    cancel() {
      this.bianjis = true;
      this.anli.select = false;
      this.tupians.select = false;
    }
  },
  mounted() {
    // wx.login({
    //   success(res) {
    //     if (res.code) {
    //       // 这里可以把code传给后台，后台用此获取openid及session_key
    //     }
    //   }
    // });
  }
};
</script>

<style scoped>
.titss {
  font-size: 42rpx;
  font-weight: 500;
  color: #b59570;
}
.coladadadd {
  padding-bottom: 15rpx;
  border-bottom: 1px solid #b59570;
}
.ggs img {
  display: none;
}
.active img {
  display: block !important;
}
.tupian2 {
  margin-bottom: 10rpx;
}
.butle {
  bottom: 30rpx;
  left: 30rpx;
  box-sizing: border-box;
  color: #fff;
  font-size: 32rpx;
}
.tupian2 img {
  width: 690rpx;
  height: 285rpx;
}
.hei285 {
  height: 485rpx;
  width: 420rpx;
  overflow: hidden;
  border-radius: 15rpx;
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
  color: #087bff;
  text-align: center;
  border-right: 1px solid #e5e5e5;
}
.btnConfirm {
  font-size: 32rpx;
  width: 50%;
  color: #ff4041;
  text-align: center;
}
/* tangkuang */

.yuan {
  top: 14rpx;
  right: 14rpx;
  width: 30rpx;
  height: 30rpx;
  border-radius: 50%;
  background-color: #fff;
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
  position: relative;
}
.cencl {
  font-size: 30rpx;
  margin-top: 16rpx;
  padding: 15rpx 40rpx;
  color: #fff;
  line-height: 29rpx;
  border-radius: 0;
  background-color: #f4604c;
}
.claxu {
  color: #c6c6c6;
  font-size: 28rpx;
}

.das {
  line-height: 90rpx;
}
.hei90 {
  height: 90rpx;
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 22;
  border-top: 1rpx solid #262525;
  background-color: #403c3c;
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
  color: #adadad;
}
.titmin {
  font-size: 30rpx;
  color: #adadad;
  font-weight: 100;
  display: flex;
  align-items: center;
  margin-top: -10rpx;
}
.wid75 {
  margin-right: 50rpx;
  /* display: inline-block; */
}
.padd30 {
  padding: 20rpx 30rpx 0 30rpx;
  box-sizing: border-box;
  margin: 0 auto;
}
.da {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  justify-content: flex-start;
  /* padding-bottom: 12rpx; */
  border-bottom: 1px solid #262525;
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
