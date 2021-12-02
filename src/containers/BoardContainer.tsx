import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Components
import Board from '../components/pages/Board';

// Constants
import { getProfile } from '../api/axiosClient';

const BoardContainer = () => {
  const data = {
    users: [
      {
        id: 1,
        name: 'test 1',
        score: 100,
        position: 4,
      },
      {
        id: 2,
        name: 'test 2',
        score: 110,
        position: 3,
      },
      {
        id: 3,
        name: 'test 3',
        score: 130,
        position: 2,
      },
      {
        id: 4,
        name: 'test 4',
        score: 140,
        position: 1,
      },
    ],
  };
  useEffect(() => {
    getProfile();
  }, []);
  return <Board usersBoard={data.users} />;
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {})(BoardContainer);
