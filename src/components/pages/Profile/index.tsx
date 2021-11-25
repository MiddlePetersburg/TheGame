import React from 'react';
import { TextField, Box, Button } from '@mui/material';

import './Profile.scss';

const Profile = ({
  login,
  email,
  phone,
  firstName,
  secondName,
  handleLogout,
  handleChangeField,
  handleChangeValue,
}: any) => (
  <div className="profile">
    <h2 className="profile__title">Profile</h2>
    <div className="profile__tab">
      <div className="tab__left">
        <h3>General Information</h3>
      </div>
      <div className="tab__right">
        <Box className="tab__row">
          <TextField
            size="small"
            label="Login"
            onChange={handleChangeField}
            value={login}
            name="login"
          />
        </Box>
        <Box className="tab__row">
          <TextField
            size="small"
            label="First Name"
            onChange={handleChangeField}
            value={firstName}
            name="firstName"
          />

        </Box>
        <Box className="tab__row">
          <TextField
            label="Second Name"
            onChange={handleChangeField}
            size="small"
            value={secondName}
            name="secondName"
          />
        </Box>
        <Box className="tab__row">
          <TextField
            size="small"
            label="Email"
            onChange={handleChangeField}
            value={email}
            name="email"
          />
        </Box>
        <Box className="tab__row">
          <TextField
            label="Phone"
            size="small"
            onChange={handleChangeField}
            value={phone}
            name="phone"
          />
        </Box>
        <div className="profile-buttons">
          <Button
            className="profile-buttons__button"
            type="button"
            variant="contained"
            onClick={handleChangeValue}
            sx={{ mr: 1 }}
          >
            Save
          </Button>
          <Button
            className="profile-buttons__button"
            type="button"
            variant="contained"
            color="error"
            onClick={() => handleLogout()}
          >
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default Profile;
