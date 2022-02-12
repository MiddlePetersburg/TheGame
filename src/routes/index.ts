import HomeContainer from "../containers/HomeContainer";
import LoginContainer from "../containers/LoginContainer";
import SignupContainer from "../containers/SignupContainer";
import GameContainer from "../containers/GameContainer";
import ProfileContainer from "../containers/ProfileContainer";
import BoardContainer from "../containers/BoardContainer";
import FabricContainer from "../containers/FabricContainer";

// Icons

export default [
  {
    path: "/",
    component: HomeContainer,
    icon: "Home",
    text: "Home",
    meta: {
      id: 1,
    },
  },
  {
    path: "/login",
    component: LoginContainer,
    icon: "Login",
    text: "Sign In",
    meta: {
      id: 2,
    },
  },
  {
    path: "/signup",
    component: SignupContainer,
    icon: "AppRegistration",
    text: "Sign Up",
    meta: {
      id: 3,
    },
  },
  {
    path: "/game",
    component: GameContainer,
    icon: "SportsEsports",
    text: "Game",
    meta: {
      id: 4,
    },
  },
  {
    path: "/fabric",
    component: FabricContainer,
    icon: "SportsEsports",
    text: "Fabric",
    meta: {
      id: 5,
    },
  },
  {
    path: "/profile",
    component: ProfileContainer,
    icon: "Person",
    text: "Profile",
    meta: {
      id: 6,
    },
  },
  {
    path: "/board",
    component: BoardContainer,
    icon: "Dashboard",
    text: "Leaderboard",
    meta: {
      id: 7,
    },
  },
];
