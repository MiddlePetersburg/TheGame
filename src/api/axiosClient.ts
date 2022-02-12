import axios from "axios";
import { APIPaths } from "../constants/api";
import store from "../redux/store";

// Actions
import { setUser, setAllUserFields } from "../redux/actions/user";
import { setError } from "../redux/actions/errors";

const axiosClient = axios.create({
  baseURL: "https://ya-praktikum.tech/api/v2/",
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

export default axiosClient;

export const getProfile = async () => {
  if (localStorage.getItem("userId")) {
    try {
      const userInfo = await axios.get(APIPaths.GET_USER, {
        withCredentials: true,
      });
      store.dispatch(setUser(userInfo.data));
      store.dispatch(setAllUserFields(userInfo.data));
      localStorage.setItem("userId", userInfo.data.id);
    } catch (e: any) {
      store.dispatch(setError(e.response.data.reason));
      console.log("err", e);
    }
  }
};

export const getLeaderBoard = async (cursor = 0, limit = 20) => {
  try {
    return await axios.post(
      APIPaths.GET_TEAM_LEADERBOARD,
      {
        ratingFieldName: "score",
        cursor,
        limit,
      },
      {
        withCredentials: true,
      }
    );
  } catch (e: any) {
    store.dispatch(setError(e.response.data.reason));
  }
};
