import fly from 'flyio/dist/npm/wx'

//添加拦截器
fly.interceptors.request.use((config,promise)=>{
    token = mpvue.getStorageSync("token")
    //给所有请求添加自定义header
    config.headers["Authorization"]=token;
    return config;
})
//配置请求基地址
fly.config.baseURL='https://www.xinhui.cnm/'

function get(url,data,callback) {
    fly.get(url,data).then((d)=>{
        let res=d.data
        if(res.status==10013){
            mpvue.showToast({
                title: '请先登录',
                icon: 'error',
                duration: 2000,
                complete:function () {
                    mpvue.redirectTo({
                        url: ''
                    })
                }
            })
        }else{
            callback()
        }
    }).catch(err=>{
        console.log(err.status,err.message)
    })
}

export default {
    get
}
