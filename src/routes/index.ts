import HomeContainer from '../containers/HomeContainer';
import LoginContainer from '../containers/LoginContainer';
import SignupContainer from '../containers/SignupContainer';
import GameContainer from '../containers/GameContainer';
import ProfileContainer from '../containers/ProfileContainer';
import BoardContainer from '../containers/BoardContainer';

// Icons

export default [
  {
    path: '/',
    component: HomeContainer,
    icon: 'Home',
    text: 'Домашняя страница',
    meta: {
      id: 1,
    },
  },
  {
    path: '/login',
    component: LoginContainer,
    icon: 'Login',
    text: 'Логин',
    meta: {
      id: 2,
    },
  },
  {
    path: '/signup',
    component: SignupContainer,
    icon: 'AppRegistration',
    text: 'Регистрация',
    meta: {
      id: 3,
    },
  },
  {
    path: '/game',
    component: GameContainer,
    icon: 'SportsEsports',
    text: 'Игра',
    meta: {
      id: 4,
    },
  },
  {
    path: '/profile',
    component: ProfileContainer,
    icon: 'Person',
    text: 'Аккаунт',
    meta: {
      id: 5,
    },
  },
  {
    path: '/board',
    component: BoardContainer,
    icon: 'Dashboard',
    text: 'Борд',
    meta: {
      id: 6,
    },
  },
];
