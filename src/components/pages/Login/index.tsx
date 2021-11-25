import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Avatar, Box, CssBaseline, Typography, TextField, Button, Container,
} from '@mui/material';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

const Login = ({ handleSubmit, error }: any) => (
  <>
    <Container maxWidth="xs" sx={{ height: '100%' }}>
      <CssBaseline />
      <Box sx={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', alignItems: 'center',
      }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <VpnKeyIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="login"
            label="Login"
            name="login"
            autoComplete="login"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button type="submit" fullWidth variant="contained" onClick={(_) => _} sx={{ mt: 3, mb: 2 }}>Sign In</Button>
        </Box>
        <div style={{ color: 'red' }}>
          {error}
        </div>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 1, mb: 2 }}>
          <RouterLink to="/signup">Don&apos;t have an account? Sign Up</RouterLink>
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          Copyright © Yandex.Practicum Middle Front-End.
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          {new Date().getFullYear()}
        </Typography>
      </Box>
    </Container>
  </>
);

export default Login;
