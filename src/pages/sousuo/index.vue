<template>
  <div class="experience">
    <div class="clearfix"></div>
    <div class="re hei30 ma3">
      <input type="text" name="sou" v-model="val" placeholder="大家都在搜。。。" class="sou">
      <span class="font28 widtal" @click="sou_pro(val)">搜索</span>
    </div>
    <div class="cenrt" v-show="isClicktrue==0">
      <ul>
        <li
          v-for="(item,index) in sou_content"
          :key="index+1"
          class="soucon"
          @click="fenlei(item.keyword)"
        >{{item.keyword}}</li>
      </ul>
    </div>

    <div class="padd30 lunbo2">
      <swper vertical class="fl swiper" v-if="goodslist.length > 0">
        <block v-for="(item, index) in goodslist" :key="index">
          <swiperitem class="widssgg4 fl">
            <img :src="item.goods_img" mode="scaleToFill" v-show="item.videosing==0" @click="toUrl('/pages/productdetails_3/main?id='+item.goods_id)">
            <video
                    :src="item.urls"
                    v-show="item.videosing==1"
                    :id="'myVideo_'+index"
            ></video>
            <div class="titss2 mar20 wid270">
              <div class="eklp1 fontwei">
                <div class="dess">
                  {{ item.goods_name }}
                  <i></i>
                </div>
                <i class="fr dja">
                  <div>
                    <img :src="bofan" v-show="item.urls" class="ims" @click="videoPlay(index)">
                  </div>
                </i>
              </div>
              <div class="descss eklp1" style="font-size:24rpx;">{{ item.goods_title }}</div>
            </div>
          </swiperitem>
        </block>
      </swper>
    </div>

    <div class="clearfix"></div>
    <div class="dja mar45 martt45" v-if="goodslist.length > 0">
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
      sou_content: [],
      //地图结束
        isClicktrue:false,
        goodslist:[],
        goods_page:1,
        goods_last_page:1,
    };
  },
  methods: {
      toUrl(url){
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
        let val=this.val
      if (val.trim() == "" || val.trim() == null) {
        this.changeModel = !this.changeModel;
        this.isModel = !this.isModel;
      } else {
            this.goodslist=[]
          this.getArticleList()
      }
    },
    fenlei(keyrowd) {
        this.val=keyrowd
        this.getArticleList()
    },
      getArticleList(){
          let _this=this;

          mpvue.showLoading({
              title: '加载中',
              mask:true
          })
          _this.$http.get('product/getGoodsListByParam/',{
              page:_this.goods_page,
              keyword:_this.val,
          },function (res) {
              wx.hideLoading();
              _this.goods_last_page=res.data.last_page
              let list=res.data.data
              for(let item in list){
                  _this.goodslist.push(list[item])
              }
              _this.isClicktrue=true;
          })
      }
  },
    onShow() {
        let _this=this

        _this.$http.get('product/getSearchList',{},function (res) {
            _this.sou_content=res.data
        })
    },
    onReachBottom(){
        if(this.goods_page<this.goods_last_page){
            this.goods_page +=1
            this.getArticleList()
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
  border-radius: 8rpx;
  float: left;
  overflow:hidden ;
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
.padd30 {
  padding: 30rpx;
  box-sizing: border-box;
}
.cents .desc {
  font-size: 24rpx;
  line-height: 32rpx;
  color: rgba(255, 255, 255, 0.7);
}
.swiper-box2 {
  overflow: hidden;
  margin: 25rpx auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150rpx;
}
.texts {
  text-align: center;
  line-height: 150rpx;
  position: absolute;
  font-size: 32rpx;
  font-weight: bold;
  color: rgb(255, 255, 255);
}
.pross {
  height: 550rpx;
}
.paddi {
  height: 150rpx !important;
  padding: 15rpx;
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.paddi:first-child {
  padding-left: 0;
}
.paddi:last-child {
  padding-right: 0;
}
.paddi img {
  max-width: 100%;
  width: 100%;
  height: 100%;
}
.wid100 image {
  border-radius: 16rpx;
  height: 400rpx;
  width: 690rpx;
}
.huxin {
  font-size: 28rpx;
  font-weight: bold;
}
.wids {
  margin: 40rpx auto;
  display: block;
  max-width: 100%;
}
.widss image {
  border-radius: 16rpx;
  height: 370rpx;
  width: 630rpx;
}
.prossgg {
  height: 280rpx;
}
.re {
  position: relative;
}
.ab {
  position: absolute;
}
</style>
