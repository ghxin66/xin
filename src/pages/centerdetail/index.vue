<template>
  <div class="centerdetail">
    <div class="padd30">
      <div class="titss" style="color:#000;font-size:35rpx;">
        <!-- 我的收藏 -->
        <img src="/static/images/wdsc138.png" style="width:138rpx;height:33rpx;" />
      </div>
      <div class="da mar20" style="margin-top:6rpx">
        <div class="wid75" style="font-size:30rpx;" :class="sel==0?'titss col000':'titmin'">
          <!-- 图片 -->
          <img src="/static/images/tp138.png" style="width:56rpx;height:29rpx;" />
          <!-- @click="sels(0)" -->
        </div>
        <!-- <div class="wid75" :class="sel==1?'titss coladadadd':'titmin'" @click="sels(1)">
          案例
        </div>-->
        <div class="ab bainji" @click="bianji" v-show="bianjis">编辑</div>
        <div class="ab bainji" @click="cancel" v-show="!bianjis">取消</div>
      </div>
    </div>
    <div v-if="sel==0">
      <div class="pa3">
        <div class>
          <div
            class="fl tupian imgstu"
            @click="checkedOne(item,bianjis)"
            @longpress="bianji"
            v-for="(item,inde) in imglist"
            :key="inde+1"
          >
            <img :src="item.img_url" />
            <div v-if="!bianjis">
              <!-- <div class="ab yuan" v-show="!item.select"></div> -->
              <div
                style="position:absolute;width:100%;height:100%;background:rgba(0,0,0,0.3);left:0;top:0;opacity:0.5"
                :class="{dis:!item.select}"
              ></div>
              <div class="ab yuan ggs" :class="{active:item.select}">
                <img :src="select" />
              </div>
            </div>
          </div>
          <div v-if="imglist.length<=0" class="dja">
            <div class="hei285 dja">
              <img :src="noshou" style="width:190rpx;height:185rpx;" />
            </div>
          </div>
        </div>
      </div>
      <!-- 结束 -->
      <div class="hei90 das pa3" v-show="!bianjis">
        <div class="fl claxu" style="font-size:30rpx;color:#adadad">
          已选择
          <span>{{lengths}}</span>
          张
        </div>
        <div class="fr">
          <button class="cencl" @click="tapSendTele">删除</button>
        </div>
      </div>

      <div class="modalMask" v-if="isModel"></div>
      <div class="modalDialog" v-if="changeModel">
        <div class="modalContent">
          <p class="contentTip">确认删除{{lengths}}张图片？</p>
        </div>
        <div class="modalFooter">
          <div class="btnCancel" @tap="confirmSend">删除</div>
          <div class="btnConfirm" @tap="tapCancel">取消</div>
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
            v-for="(item,inde) in articlelist"
            :key="inde+1"
          >
            <img
              :src="item.article_id.picture"
              @click="toUrl('/pages/productDetail/main?id='+item.article_id.article_id)"
            />
            <!-- <div class="ab yuan" v-show="!item.select">
            </div>-->
            <div v-if="!bianjis">
              <div class="ab yuan ggs" :class="{active:item.select}">
                <img :src="select" />
              </div>
            </div>
            <div class="ab butle">{{item.article_id.title}}</div>
          </div>
          <div v-if="articlelist.length<=0" class="dja">
            <div class="hei285 dja">
              <img :src="noshou" style="width:190rpx;height:185rpx;" />
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
      fruitIds: [],
      anli_fruitIds: [],
      lengths: 0,
      anli_lengths: 0,
      ///////////////
      img_page: 1,
      img_last_page: 1,
      article_page: 1,
      article_last_page: 1,
      imglist: [],
      articlelist: []
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
      let _this = this;
      mpvue.showLoading({
        title: "加载中",
        mask: true
      });
      _this.$http.post(
        "user/cancelCollectAll",
        { ids: this.fruitIds },
        function(res) {
          wx.hideLoading();
          console.log("确认删除" + _this.fruitIds);
          _this.changeModel = !_this.changeModel;
          _this.isModel = !_this.isModel;
          _this.img_last_page = 1;
          _this.img_page = 1;
          _this.imglist = [];
          _this.bianjis = true;
          _this.lengths = 0;
          _this.anli_lengths = 0;
          _this.fruitIds = [];
          _this.anli_fruitIds = [];
          _this.getimglist();
        }
      );
    },
    confirmSend2() {
      let _this = this;
      mpvue.showLoading({
        title: "加载中",
        mask: true
      });
      _this.$http.post(
        "user/cancelCollectAll",
        { ids: this.anli_fruitIds },
        function(res) {
          wx.hideLoading();
          console.log("确认删除" + _this.anli_fruitIds);
          _this.changeModel = !_this.changeModel;
          _this.isModel = !_this.isModel;
          _this.article_last_page = 1;
          _this.article_page = 1;
          _this.articlelist = [];

          _this.bianjis = true;
          _this.lengths = 0;
          _this.anli_lengths = 0;
          _this.fruitIds = [];
          _this.anli_fruitIds = [];
          _this.getarticleList();
        }
      );
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
    checkedOne(fruitId, eee) {
      var that = this;
      if (eee == true) {
        return false;
      } else {
        fruitId.select = !fruitId.select;
        let idIndex = that.fruitIds.indexOf(fruitId.id);
        if (idIndex >= 0) {
          //如果已经包含就去除
          that.fruitIds.splice(idIndex, 1);
          that.lengths = that.fruitIds.length;
          console.log(that.fruitIds.length);
        } else {
          //如果没有包含就添加
          that.fruitIds.push(fruitId.id);
          that.lengths = that.fruitIds.length;
          console.log(that.fruitIds.length);
        }
      }
    },
    sels(e) {
      this.sel = e;
      this.changeModel = false;
      this.isModel = false;
      this.bianjis = true;
      this.fruitIds = [];
      this.anli_fruitIds = [];
      this.lengths = 0;
      this.anli_lengths = 0;
      // this.add = true;
      this.img_page = 1;
      this.img_last_page = 1;
      this.article_page = 1;
      this.article_last_page = 1;
      this.imglist = [];
      this.articlelist = [];
      if (e == 0) {
        this.getimglist();
      } else {
        this.getarticleList();
      }
    },
    bianji() {
      // this.bianjis = false;
      // this.anli.select = false;
      // this.tupians.select = false;
      this.bianjis = false;
    },
    cancel() {
      this.bianjis = true;
    },
    toUrl(url) {
      mpvue.navigateTo({ url });
    },
    getimglist() {
      let _this = this;
      mpvue.showLoading({
        title: "加载中",
        mask: true
      });
      _this.$http.get(
        "user/getUserCollectListByCatId/2",
        {
          page: _this.img_page
        },
        function(res) {
          wx.hideLoading();
          _this.img_last_page = res.data.last_page;
          _this.imglist = res.data.data;
        }
      );
    },
    getarticleList() {
      let _this = this;
      mpvue.showLoading({
        title: "加载中",
        mask: true
      });
      _this.$http.get(
        "user/getUserCollectListByCatId/1",
        {
          page: _this.article_page
        },
        function(res) {
          wx.hideLoading();
          _this.article_last_page = res.data.last_page;
          _this.articlelist = res.data.data;
        }
      );
    }
  },
  mounted() {},
  onShow() {
    this.getimglist();
    this.lengths = 0;
    this.anli_lengths = 0;
    this.bianjis = true;
    this.fruitIds = [];
    this.anli_fruitIds = [];
    var selelist = [];
    this.articlelist.forEach(item => {
      item.select = false;
      selelist.push(item);
    });
    this.articlelist = selelist;
  },
  onReachBottom() {
    if (this.sel == 0) {
      if (this.img_page < this.img_last_page) {
        this.img_page += 1;
        this.getimglist();
      }
    } else {
      if (this.article_page < this.article_last_page) {
        this.article_page += 1;
        this.getarticleList();
      }
    }
  }
};
</script>

<style scoped>
.titss {
  font-size: 30rpx;
  font-weight: 600;
  color: #000;
}
/* .coladadadd {
  padding-bottom: 15rpx;
  border-bottom: 1rpx solid #b59570;
} */
.ggs img {
  display: none;
}
.active img {
  display: block !important;
}
.tupian2 {
  margin-bottom: 10rpx;
}
.dis {
  display: none;
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
  border-radius: 15rpx;
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
  font-size: 30rpx;
  color: #000;
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
  border-top: 1px solid #f4f4f6;
  font-size: 30rpx;
  line-height: 100rpx;
}
.btnCancel {
  width: 50%;
  font-size: 30rpx;
  color: #db0913;
  text-align: center;
  border-right: 1px solid #f4f4f6;
}
.btnConfirm {
  font-size: 30rpx;
  width: 50%;
  color: #b59570;
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
  font-size: 25rpx;
  margin-top: 16rpx;
  width: 160rpx;
  height: 60rpx;
  color: #fff;
  text-align: center;
  line-height: 60rpx;
  border-radius: 10rpx;
  background-color: #b59570;
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
  border-top: 1rpx solid #adadad;
  background-color: #fff;
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
  font-size: 25rpx;
  color: #b59570;
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
  border-bottom: 1rpx solid #f4f4f6;
  position: relative;
  padding-right: 80rpx;
  overflow: hidden;
  height: 52rpx;
}
.re {
  position: relative;
}
.ab {
  position: absolute;
}
</style>
