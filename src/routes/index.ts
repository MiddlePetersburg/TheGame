import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import Signup from "../components/pages/Signup";
import Game from "../components/pages/Game";
import Profile from "../components/pages/Profile";
import Board from "../components/pages/Board";

//Icons

import * as Icons from "@mui/icons-material";

export default [
  {
    path: "/",
    component: Home,
    icon: Icons.Home,
    text: "Домашняя страница",
  },
  {
    path: "/login",
    component: Login,
    icon: Icons.Login,
    text: "Логин",
  },
  {
    path: "/signup",
    component: Signup,
    icon: Icons.AppRegistration,
    text: "Регистрация",
  },
  {
    path: "/game",
    component: Game,
    icon: "SportsEsports",
    text: "Игра",
  },
  {
    path: "/profile",
    component: Profile,
    icon: "Person",
    text: "Аккаунт",
  },
  {
    path: "/board",
    component: Board,
    icon: Icons.Dashboard,
    text: "Борд",
  },
];
