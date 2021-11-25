import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// AxiosClient
import { getProfile } from '../api/axiosClient';

// Components
import Home from '../components/pages/Home';

// eslint-disable-next-line @typescript-eslint/no-shadow
const HomeContainer = () => {
  useEffect(() => {
    getProfile();
  }, []);
  return <Home />;
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {})(HomeContainer);
