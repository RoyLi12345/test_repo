import axios from 'axios';

const baseUrl = 'http://www.mallapi.com/api'

const request = async (url = '', data = {}, method = 'GET') => {
  try {
    // 创建请求配置对象
    const requestConfig = {
      url: baseUrl+url,
      method: method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    };

    // 根据请求方法设置请求数据
    if (method === 'GET') {
      requestConfig.params = data;
    } else {
      requestConfig.data = data;
    }

    // 发起请求
    const response = await axios(requestConfig);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default request;