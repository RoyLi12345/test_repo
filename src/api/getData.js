import request from "@/config.js/axios";

/* 任何get post请求都可以从这进行并暴露 */
// request参数默认 url = '', data = {}, method = 'GET', 需要token才能访问的接口要放token参数 传token进来

// 获取所有品牌分类
export const brandList = token => request('/getBrandList',{},'GET',token)

//登录
export const login = data => request('/login',data,'POST')

//注册
export const register = data => request('/register',data,'POST')


export const getProducts = () => request('/Get_MpProducts',{},'GET')



