import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

// Actions
import { setError } from '../redux/actions/errors';
// @ts-ignore
import { setUser, changeField, setAllUserFields } from '../redux/actions/user';

// Components
import Profile from '../components/pages/Profile';

// Constants
import { APIPaths } from '../constants/api';

// eslint-disable-next-line @typescript-eslint/no-shadow
const ProfileContainer = ({
  user,
  setError,
  setUser,
  changeField,
  setAllUserFields,
  login,
  password,
  email,
  phone,
  firstName,
  secondName,
}:any) => {
  const history = useNavigate();
  // @ts-ignore
  useEffect(async () => {
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
  }, []);
  useEffect(() => {
    if (!localStorage.getItem('userId') || !user) {
      history('/login');
      setError('Необходимо войти');
    }
  }, [user]);
  const handleLogout = async () => {
    try {
      await axios.post(APIPaths.USER_LOGOUT, {},
        {
          withCredentials: true,
        });
      setUser('');
      localStorage.removeItem('userId');
    } catch (e) {
      console.log(e);
    }
  };
  const handleChangeField = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeField({ field: event.target.name, value: event.target.value });
  };
  const handleChangeValue = async () => {
    try {
      await axios.put(APIPaths.SET_PROFILE, {
        first_name: firstName,
        second_name: secondName,
        display_name: login,
        login,
        email,
        phone,
      }, {
        withCredentials: true,
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Profile
        user={user}
        login={login}
        password={password}
        email={email}
        phone={phone}
        firstName={firstName}
        secondName={secondName}
        handleLogout={handleLogout}
        handleChangeField={handleChangeField}
        handleChangeValue={handleChangeValue}
      />
    </>
  );
};

const mapStateToProps = (state: any) => ({
  user: state.userReducer.user,
  login: state.userReducer.login,
  username: state.userReducer.username,
  password: state.userReducer.password,
  email: state.userReducer.email,
  phone: state.userReducer.phone,
  firstName: state.userReducer.firstName,
  secondName: state.userReducer.secondName,
});

export default connect(mapStateToProps, {
  setError, setUser, changeField, setAllUserFields,
})(ProfileContainer);
