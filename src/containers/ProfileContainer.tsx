import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

// Actions
import { setError } from '../redux/actions/errors';
import { setUser, changeField } from '../redux/actions/user';

// Components
import Profile from '../components/pages/Profile';

// Constants
import { APIPaths } from '../constants/api';
import { getProfile } from '../api/axiosClient';

// eslint-disable-next-line @typescript-eslint/no-shadow
const ProfileContainer = ({
  user,
  setError,
  setUser,
  changeField,
  login,
  password,
  email,
  phone,
  firstName,
  secondName,
}:any) => {
  const history = useNavigate();
  useEffect(() => {
    getProfile();
  }, []);
  useEffect(() => {
    if (!localStorage.getItem('userId') && !user) {
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
  setError, setUser, changeField,
})(ProfileContainer);
