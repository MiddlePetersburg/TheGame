import React from 'react';
import {
  Avatar, Box, Button, Container, CssBaseline, Grid, TextField, Typography,
} from '@mui/material';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link as RouterLink } from 'react-router-dom';

const Signup = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log('Form:', data);
  };

  return (
    (
      <Container
        maxWidth="xs"
        sx={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', justifyContent: 'center',
        }}
      >
        <CssBaseline />
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="login"
                label="Login"
                name="login"
                autoComplete="login"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="phone"
                label="Phone"
                name="phone"
                autoComplete="phone"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign Up
          </Button>
        </Box>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 1, mb: 2 }}>
          <RouterLink to="/login">Already have an account? Sign Ip</RouterLink>
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          Copyright © Yandex.Practicum Middle Front-End.
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          {new Date().getFullYear()}
        </Typography>
      </Container>
    )
  );
};

export default Signup;
