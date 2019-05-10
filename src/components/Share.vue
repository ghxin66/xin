<template>
    <div>
        <div class="fixd" v-if="showt" @click.stop="showthiss">
            <div>
                <div class="fidx"></div>
                <div class="savs dja" @click.stop="showthis">保存图片</div>
            </div>
        </div>
        <div class="bormar">
            <div class="cens mar20 mart90">
                <span class="title">分享到：</span>
                <button @click="showthiss" class="tis desc col999 lin50 tu dja">
                    <img :src="pyq" alt="">朋友圈
                </button>
                <button open-type="share" class="tis desc col999 lin50 tu dja">
                    <img :src="wxhy" alt="">微信好友
                </button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            title: {
                type: String,
                value: {},
            },
            url: {
                type: String,
                value: {},
            },
        },
        data(){
            return{
                wxhy: "/static/images/wechat.jpg",
                pyq: "/static/images/frient.jpg",
            }
        },
        /* 转发*/
        onShareAppMessage: function(ops) {
            if (ops.from === "button") {
                // 来自页面内转发按钮
                console.log(ops.target);
            }
            return {
                title: this.title,
                path: this.url,
                success: function(res) {
                    // 转发成功
                    console.log("转发成功:" + JSON.stringify(res));
                },
                fail: function(res) {
                    // 转发失败
                    console.log("转发失败:" + JSON.stringify(res));
                }
            };
        },
    }
</script>