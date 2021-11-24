import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Actions
import { changeField, setUser, setAllUserFields } from '../redux/actions/user';
import { setError } from '../redux/actions/errors';

// Components
import Signup from '../components/pages/Signup';

// Constants
import { APIPaths } from '../constants/api';

// eslint-disable-next-line @typescript-eslint/no-shadow
const SignupContainer = ({
  setUser,
  setError,
  error,
  changeField,
  setAllUserFields,
}: any) => {
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
    } catch (e: any) {
      setError(e.response.data.reason);
      console.log('err', e);
    }
  }, []);
  useEffect(() => () => setError(''), []);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    try {
      const result = await axios.post(APIPaths.USER_SIGNUP, {
        first_name: data.get('firstName'),
        second_name: data.get('lastName'),
        login: data.get('login'),
        email: data.get('email'),
        password: data.get('password'),
        phone: data.get('phone'),
      }, {
        withCredentials: true,
      });
      if (result.status === 200) {
        localStorage.setItem('userId', result.data.id);
        changeField('userId', result.data.id);
        setUser(result);
        history('/profile');
      }
    } catch (e: any) {
      setError(e.response.data.reason);
      console.log(e);
    }
  };
  return (
    <>
      <Signup handleSubmit={handleSubmit} error={error} />
    </>
  );
};

const mapStateToProps = (state: any) => ({
  error: state.errorReducer.error,
});

export default connect(mapStateToProps, {
  setUser, setError, changeField, setAllUserFields,
})(SignupContainer);
