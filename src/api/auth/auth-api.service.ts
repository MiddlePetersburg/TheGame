import { AxiosPromise, AxiosRequestConfig } from 'axios';
import { SignInBodyRequest, SignUpBodyRequest } from './auth-api.models';
import axiosClient from '../axiosClient';

export default class AuthApiService {
  static getUser(config?: AxiosRequestConfig): AxiosPromise {
    return axiosClient.get('auth/profile', config);
  }

  static signUp(
    data: SignUpBodyRequest, config?: AxiosRequestConfig,
  ): AxiosPromise<XMLHttpRequest> {
    return axiosClient.post('auth/signup', data, config);
  }

  static signIn(
    data: SignInBodyRequest, config?: AxiosRequestConfig,
  ): AxiosPromise<XMLHttpRequest> {
    return axiosClient.post('auth/signin', data, config);
  }

  static logout(): AxiosPromise<XMLHttpRequest> {
    return axiosClient.post('auth/logout');
  }
}
