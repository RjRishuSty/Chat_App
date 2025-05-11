//! Importing installed dependencies ................
import React from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

//! Importing created file.............
import InputesFields from "../components/InputesFields";
import img from '../assets/login.png';

//! Reusable Flex Center Style
const flexCenterColumn = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

const LoginPage = () => {
  return (
    <Stack component="section" sx={{ minHeight: '100vh', ...flexCenterColumn }}>
      <Container component="form">
        <Grid container rowSpacing={3} columnSpacing={3}>
          <Grid
            size={{ xs: 12, sm: 12, md: 6 }}
            sx={{
              py: 5,
              ...flexCenterColumn,
            }}
          >
            <Typography variant="h3" gutterBottom>Login</Typography>
            <InputesFields useIn="login" />
            <Button
              type="submit"
              variant="contained"
              endIcon={<LoginIcon fontSize="medium" />}
            >
              Login
            </Button>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 12, md: 6 }}
            sx={{ ...flexCenterColumn }}
          >
            <Box component='img' src={img} alt="Chat App"/>
            <Typography variant="h3" gutterBottom>
              Welcome Back!
            </Typography>
            <Typography variant="body1" gutterBottom>
              Log in to access your dashboard, manage your chats, and stay
              connected.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default LoginPage;
