import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Components
import Board from '../components/pages/Board';

// Constants
import { getProfile } from '../api/axiosClient';

// eslint-disable-next-line @typescript-eslint/no-shadow
const BoardContainer = () => {
  useEffect(() => {
    getProfile();
  }, []);
  return <Board />;
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {})(BoardContainer);
