import Home from '../components/pages/Home';
import Login from '../components/pages/Login';
import Signup from '../components/pages/Signup';
import Game from '../components/pages/Game';
import Profile from '../components/pages/Profile';
import Board from '../components/pages/Board';

// Icons

export default [
  {
    path: '/',
    component: Home,
    icon: 'Home',
    text: 'Домашняя страница',
    meta: {
      id: 1,
    },
  },
  {
    path: '/login',
    component: Login,
    icon: 'Login',
    text: 'Логин',
    meta: {
      id: 2,
    },
  },
  {
    path: '/signup',
    component: Signup,
    icon: 'AppRegistration',
    text: 'Регистрация',
    meta: {
      id: 3,
    },
  },
  {
    path: '/game',
    component: Game,
    icon: 'SportsEsports',
    text: 'Игра',
    meta: {
      id: 4,
    },
  },
  {
    path: '/profile',
    component: Profile,
    icon: 'Person',
    text: 'Аккаунт',
    meta: {
      id: 5,
    },
  },
  {
    path: '/board',
    component: Board,
    icon: 'Dashboard',
    text: 'Борд',
    meta: {
      id: 6,
    },
  },
];
