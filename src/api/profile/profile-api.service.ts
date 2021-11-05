import { AxiosPromise, AxiosRequestConfig } from 'axios';
import { ChangePasswordRequestBody, ChangeUserDataRequestBody } from './profile-api.models';
import axiosClient from '../axiosClient';

export default class ProfileApiService {
  static changePassword(
    body: ChangePasswordRequestBody, config?: AxiosRequestConfig,
  ): AxiosPromise<XMLHttpRequest> {
    return axiosClient.put('user/password', body, config);
  }

  static changeUserProfileData(
    body: ChangeUserDataRequestBody, config?: AxiosRequestConfig,
  ): AxiosPromise<XMLHttpRequest> {
    return axiosClient.put('user/profile', body, config);
  }
}
