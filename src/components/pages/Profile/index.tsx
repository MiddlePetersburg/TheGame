import React from 'react';
import {
  Avatar, TextField, Box, Button,
} from '@mui/material';

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
    <h2 className="profile__title">Профиль</h2>
    <div className="profile__tab">
      <div className="tab__left">
        <h3>Основная информация</h3>
      </div>
      <div className="tab__right">
        <Avatar alt="user__avatar" sx={{ width: 70, height: 70 }} />
        <Box className="tab__row">
          <TextField
            size="small"
            label="Login"
            onChange={handleChangeField}
            value={login}
            name="login"
          />
          <Button variant="text" onClick={handleChangeValue}>Изменить</Button>
        </Box>
        <Box className="tab__row">
          <TextField
            label="Фамилия"
            onChange={handleChangeField}
            size="small"
            value={secondName}
            name="secondName"
          />
          <Button variant="text" onClick={handleChangeValue}>Изменить</Button>
        </Box>
        <Box className="tab__row">
          <TextField
            size="small"
            label="Имя"
            onChange={handleChangeField}
            value={firstName}
            name="firstName"
          />
          <Button variant="text" onClick={handleChangeValue}>Изменить</Button>
        </Box>
        <Box className="tab__row">
          <TextField
            size="small"
            label="Email"
            onChange={handleChangeField}
            value={email}
            name="email"
          />
          <Button variant="text" onClick={handleChangeValue}>Изменить</Button>
        </Box>
        <Box className="tab__row">
          <TextField
            label="Телефон"
            size="small"
            onChange={handleChangeField}
            value={phone}
            name="phone"
          />
          <Button variant="text" onClick={handleChangeValue}>Изменить</Button>
        </Box>
        <Button type="submit" fullWidth variant="contained" onClick={() => handleLogout()} sx={{ mt: 3, mb: 2 }}>Выйти</Button>
      </div>
    </div>
  </div>
);

export default Profile;
