import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

// Actions
import { setUser, setAllUserFields } from '../redux/actions/user';
import { setError } from '../redux/actions/errors';

// Components
import Board from '../components/pages/Board';

// Constants
import { APIPaths } from '../constants/api';

// eslint-disable-next-line @typescript-eslint/no-shadow
const BoardContainer = ({ setUser, setError, setAllUserFields }: any) => {
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
  return (
    <>
      <Board />
    </>
  );
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, { setUser, setError, setAllUserFields })(BoardContainer);
