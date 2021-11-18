import React from 'react';
import {
  Avatar, TextField, Box, Button,
} from '@mui/material';

import './Profile.scss';

const Profile = () => {
  const [state, setState] = React.useState({
    name: '',
    surName: '',
    middleName: '',
  });
  const handleChangeSurName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, surName: event.target.value });
  };
  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, name: event.target.value });
  };
  const handleChangeMiddleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, middleName: event.target.value });
  };
  const saveChangeSurName = () => {
    console.log(state.surName);
  };
  const saveChangeName = () => {
    console.log(state.name);
  };
  const saveChangeMiddleName = () => {
    console.log(state.middleName);
  };
  return (
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
              label="Фамилия"
              onChange={handleChangeSurName}
              size="small"
            />
            <Button variant="text" onClick={saveChangeSurName}>Изменить</Button>
          </Box>
          <Box className="tab__row">
            <TextField
              size="small"
              label="Имя"
              onChange={handleChangeName}
            />
            <Button variant="text" onClick={saveChangeName}>Изменить</Button>
          </Box>
          <Box className="tab__row">
            <TextField
              label="Отчество"
              size="small"
              onChange={handleChangeMiddleName}
            />
            <Button variant="text" onClick={saveChangeMiddleName}>Изменить</Button>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Profile;
