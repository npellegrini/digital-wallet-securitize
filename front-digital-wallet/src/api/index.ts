import axios, { AxiosResponse } from 'axios';
import cookies from 'js-cookie';
import qs from 'qs';

import {
  ACCESS_TOKEN,
} from '../constants/auth';
import { X_TOKEN } from '../constants/common';
import { statusProcessor } from '../services/handling-errors/request';

import { AxiosRequestConfig, AxiosError } from './interfaces';

export const serverUrl = process.env.REACT_APP_API_URL || 'test';

const refreshTokenAxios = axios.create();
refreshTokenAxios.defaults.baseURL = serverUrl;
refreshTokenAxios.defaults.headers.common['Content-Type'] = 'application/json';

export const onFulfilled = (config: AxiosRequestConfig) => {
  const token = cookies.get(ACCESS_TOKEN);

  if (!token) {
    return config;
  }

  const newConfig = {
    headers: {},
    data: {},
    ...config,
  };

  newConfig.headers[X_TOKEN] = token;
  return newConfig;
};

export const responseError = async (error?: AxiosError) => {
  statusProcessor(error);

  throw error;
};

export const responseSuccess = (response: AxiosResponse) => response;

axios.interceptors.request.use(
  onFulfilled,
  (e) => Promise.reject(e),
);

axios.interceptors.response.use(responseSuccess, responseError);

axios.defaults.baseURL = serverUrl;
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.paramsSerializer = (params) => qs.stringify(params, { arrayFormat: 'comma', encode: false });

export default (requestOptions: AxiosRequestConfig) => axios(requestOptions);
