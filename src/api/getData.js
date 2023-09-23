import request from "@/config.js/axios";

/* 任何get post请求都可以从这进行并暴露 */
// request参数默认 url = '', data = {}, method = 'GET'

// 获取所有品牌分类
export const brandList = await request('/getBrandList')