import request from "@/config.js/axios";

/* 任何get post请求都可以从这进行并暴露 */
// request参数默认 url = '', data = {}, method = 'GET', 需要token才能访问的接口要放token参数 传token进来

//参数传过来得是JSON格式 方便自定义 {id:id,username:123} 写好的格式 

// 获取所有品牌分类
export const brandList = token => request('/getBrandList',{},'GET',token)

//登录
export const login = data => request('/login',data,'POST')

//注册
export const register = data => request('/register',data,'POST')

//获取商品
export const getProducts = () => request('/Get_MpProducts',{},'GET')


//获取单个用户信息
export const getUserData = data => request('/user/Profile',data,'POST')


//修改昵称和性别
export const updateUserInfo = data => request('/User_update',data,'POST')

//修改密码
export const updatePassword = data => request('/User_up_pas',data,'POST')

//获取个人地址(单个)
export const getMyAddress = id => request(`/getAddressById/${id}`,{},'GET')

//添加单个地址
export const addAddress = data => request('/addAddress',data,'POST')

//删除单个地址
export const delAddress = data => request('/deleteAddressById',data,'DELETE')

//修改单个地址
export const editAddress = data => request('/updateAddressById',data,'PUT')

//获取我的购物车(个人)
export const getCart = (data,token) => request('/ShopCart/getData',data,'POST')

//添加购物车
export const addCart = (data) => request('/ShopCart/add',data,'POST')

//减少购物车
export const reduceCart = (data) => request('/ShopCart/Reduce',data,'POST')

//删除购物车
export const delCart = (data) => request('/ShopCart/delete',data,'POST')

//获取单个商品详细
export const getProDetail = (data) => request('/Get_ProductDetails',data,'POST')


