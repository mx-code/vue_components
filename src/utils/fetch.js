import axios from 'axios';
import qs from 'qs';

import router from '@/router';

import { append, remove } from './ajaxLoading';

// create an axios instance
const baseURL = process.env.VUE_APP_BASE_API;

function signout() {
  if (router.currentRoute.name !== 'login') {
    router.push({
      name: 'login'
    });
  }
}

let tokenTimeout = null;

const service = axios.create({
  baseURL, // process.env.VUE_APP_BASE_API, // api的base_url
  timeout: 600000, // request timeout  10分钟
  // 指定请求超时的毫秒数(0 表示无超时时间)
  headers: {
    // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Content-Type': 'application/json;charset=UTF-8',
    'X-Requested-With': 'XMLHttpRequest'
  }
});

service.defaults.withCredentials = false; // true请求头带凭证cookie

// request interceptor
service.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('access_token'),
      { data, formData, noToken, loading } = config;
    // config 额外参数
    // noToken   登录页接口专用
    // isRefreshToken    更新token接口专用
    // 携带token
    if (token && !noToken) {
      config.headers.Authorization = 'Bearer ' + token;
    }

    if (formData) {
      config.data = qs.stringify(data || formData);
    }
    // 设置id 加loading
    if (loading) {
      const ajaxId = Date.now();
      config.ajaxId = ajaxId;
      append(ajaxId);
    }

    return config;
  },
  (error) =>
    // Do something with request error
    Promise.reject(error)
);

// respone interceptor
service.interceptors.response.use(
  (response) => {
    const { data, config } = response,
      { responseType, ajaxId, loading } = config;

    loading && remove(ajaxId);

    // 如果响应类型是 blob 直接返回response 用来判断文件类型
    if (responseType === 'blob') {
      return response;
    }

    // 如果参数类型中含有 isBonusPoint = true 则执行积分计算操作
    return data;
  },
  (error) => {
    const { response = {}, config = {} } = error,
      { isRefreshToken, noToken, ajaxId, loading } = config,
      isLogin = router.currentRoute.name === 'login',
      refreshToken = localStorage.getItem('refresh_token');

    // 删除ajaxId 若没有其他接口正在请求 则关闭loading
    loading && remove(ajaxId);

    if (!isLogin || !noToken) {
      // 登录页不做处理
      // noToken 特殊接口 不做处理
      if (isRefreshToken) {
        signout();
      } else if (response.status === 401) {
        if (refreshToken) {
          clearTimeout(tokenTimeout);
          tokenTimeout = setTimeout(() => {
            service({
              url: '/dahua-b-usercenter/oauth/token',
              method: 'post',
              params: {
                grant_type: 'refresh_token',
                client_id: 'client_1',
                client_secret: 'B0123456!AbC',
                refresh_token: refreshToken
              },
              noToken: true,
              isRefreshToken: true,
              loading: false
            }).then(({ access_token, refresh_token }) => {
              access_token &&
                localStorage.setItem('access_token', access_token);
              refresh_token &&
                localStorage.setItem('refresh_token', refresh_token);
            });
          }, 200);
        } else {
          signout();
        }
      }
    }

    return Promise.reject(error);
  }
);

export default service;
