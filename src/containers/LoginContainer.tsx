import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Actions
import { setError } from '../redux/actions/errors';
import { setUser, setAllUserFields } from '../redux/actions/user';

// Components
import Login from '../components/pages/Login';

// Constants
import { APIPaths } from '../constants/api';
import { getProfile } from '../api/axiosClient';

// eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-shadow
const LoginContainer = ({
  error, setError, setUser, setAllUserFields,
}: any) => {
  const history = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('userId')) {
      history('/profile');
      getProfile();
    }
  }, []);
  useEffect(() => () => setError(''), []);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
      await axios.post(APIPaths.USER_SIGNIN, {
        login: data.get('login'),
        password: data.get('password'),
      }, {
        withCredentials: true,
        headers: {
          'content-type': 'application/json',
        },
      });
    } catch (e) {
      console.log(e);
    }
    try {
      const userInfo = await axios.get(APIPaths.GET_USER, {
        withCredentials: true,
      });
      setUser(userInfo.data);
      setAllUserFields(userInfo.data);
      if (!localStorage.getItem('userId') || localStorage.getItem('userId') === 'undefined') {
        localStorage.setItem('userId', userInfo.data.id);
      }
      history('/profile');
    } catch (e: any) {
      setError(e.response.data.reason);
      console.log('err', e);
    }
  };
  // @ts-ignore
  return <Login handleSubmit={handleSubmit} error={error} />;
};

const mapStateToProps = (state: any) => ({
  username: state.userReducer.username,
  password: state.userReducer.password,
  error: state.errorReducer.error,
  user: state.userReducer.user,
});

export default connect(mapStateToProps, { setError, setUser, setAllUserFields })(LoginContainer);
