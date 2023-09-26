import axios from 'axios';
import store from '../store/index.js'
// const baseUrl = 'http://www.mallapi.com/api'

const request = async (url = '', data = {}, method = 'GET',Authorization = '') => {
  try {
    // 创建请求配置对象
    const requestConfig = {
      url: url,
      method: method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':Authorization
      },
    };

    // console.log(store.state.token)

    // if(store.state.token){
    //   requestConfig.headers['Authorization'] = `Bearer ${store.state.token}`
    // }

    console.log(requestConfig)

    // 根据请求方法设置请求数据
    if (method === 'GET') {
      requestConfig.params = data;
    } else {
      requestConfig.data = data;
    }

    // 发起请求
    const response = await axios(requestConfig);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.log(error.message)
    throw new Error(error);
  }
};

export default request;