let Fly=require("flyio/dist/npm/wx")
let fly=new Fly
import md5 from 'js-md5';
//添加拦截器
fly.interceptors.request.use((config,promise)=>{
    let token = mpvue.getStorageSync("token");
    //给所有请求添加自定义header
    config.headers["Authorization"]=token;
    let timestamp = (new Date()).getTime()

    let APP_ID="LTAIy1ADuhBfjNdh"
    let APP_SECRET="0ntUyxIZeZIvAtg4VfoOU7lKAY2Oj2Kfgs"
    let str=""
    str +="appid="+APP_ID
    str +="appsecret="+APP_SECRET
    str +="timestamp="+timestamp
    if(token){
        str +="authoriz="+token
    }
    let sing=md5(str)
    config.headers['timestamp']=timestamp
    config.headers['sing']=sing
    return config;
})
//配置请求基地址
fly.config.baseURL='https://www.xinhui.cnm/index.php/api/v1'

function get(url,data,callback) {
    fly.get(url,data).then((d)=>{
        let res=d.data
        if(res.code==10013){
            mpvue.showToast({
                title: '请先登录',
                icon: 'none',
                duration: 1000,
                complete:function () {
                    mpvue.redirectTo({
                        url: 'pages/center/main?login=true'
                    })
                }
            })
        }else{
            if(res.code!=200){
                mpvue.showToast({
                    title: res.msg,
                    icon: 'none',
                    duration: 1000
                })
            }else{
                callback(res)
            }
        }
    }).catch(err=>{
        console.log(err.status,err.message)
    })
}
export function getQuery() { /* 获取当前路由栈数组 */
    const pages = getCurrentPages()
    const currentPage = pages[pages.length - 1]
    const options = currentPage.options
    return options
}

export default {
    get,
    getQuery
}
