import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Components
import Game from '../components/pages/Game';

// Constants
import { getProfile } from '../api/axiosClient';

// eslint-disable-next-line @typescript-eslint/no-shadow
const GameContainer = () => {
  useEffect(() => {
    getProfile();
  }, []);
  return <Game />;
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {})(GameContainer);
