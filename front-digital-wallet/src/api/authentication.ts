import endpoints from '../constants/endpoints';

import request from './index';

export const loginRequest = (data: URLSearchParams): Promise<any> => request({
  url: endpoints.LOGIN,
  method: 'POST',
  data,
});

export const logoutRequest = (): Promise<any> => request({
  url: endpoints.LOGOUT,
  method: 'DELETE',
});

export const userRequest = (): Promise<any> => request({
  url: endpoints.USER,
  method: 'GET',
});
