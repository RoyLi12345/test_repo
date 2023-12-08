import axios from 'axios';
import store from '../store/index.js'
import { error } from 'jquery';
import Vue from 'vue';
const baseUrl = 'http://www.mallapi.com/api'


const request = async (url = '', data = {}, method = 'GET',Authorization = '') => {
  try {
    // 创建请求配置对象
    const requestConfig = {
      url: url,
      method: method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${Authorization}`
      },
    };

    // if(store.state.token){
    //   requestConfig.headers['Authorization'] = `Bearer ${store.state.token}`
    // }

    // 根据请求方法设置请求数据
    if (method === 'GET') {
      requestConfig.params = data;
    } else {
      requestConfig.data = data;
    }

    // 发起请求
    const response = await instance(requestConfig);
    return response.data;

  } catch (error) {
    throw new Error(error);
  }
};

//请求出错处理
const handleError = (error) =>{
  console.log(error.message)
  Vue.prototype.$message({
    type: 'info',
    message: `请求出错啦 ~ ${error.message}`
  });   
  throw error;
}

//接收处理
const handleResponse = (response) =>{
  return response
}

//创建请求实例
const instance = axios.create({
  baseURL: baseUrl
})

//给实例插入响应拦截器和错误处理拦截器
instance.interceptors.response.use(handleResponse,handleError)

export default request;