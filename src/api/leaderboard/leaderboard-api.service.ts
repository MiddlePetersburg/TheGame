import { AxiosPromise, AxiosRequestConfig } from 'axios';
import axiosClient from '../axiosClient';
import {
  AllLeaderboardsRequestBody,
  LeaderboardNewLeaderRequest,
  TeamLeaderboardRequestBody,
} from './leaderboard-api.models';

export default class LeaderboardApiService {
  static addUserToLeaderboard(
    body: LeaderboardNewLeaderRequest, config?: AxiosRequestConfig,
  ): AxiosPromise<XMLHttpRequest> {
    return axiosClient.post('leaderboard', body, config);
  }

  static getAllLeaderboards(
    body: AllLeaderboardsRequestBody, config?: AxiosRequestConfig,
  ): AxiosPromise<XMLHttpRequest> {
    return axiosClient.post('leaderboard/all', body, config);
  }

  static getTeamLeaderboard(
    teamName: string, body: TeamLeaderboardRequestBody, config?: AxiosRequestConfig,
  ): AxiosPromise<XMLHttpRequest> {
    return axiosClient.post(`leaderboard/${teamName}`, body, config);
  }
}
