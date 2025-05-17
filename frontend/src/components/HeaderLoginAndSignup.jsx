import { Box, Card, Container, Stack, Typography } from "@mui/material";
import React from "react";
import Logo from "./Logo";

const HeaderLoginAndSignup = ({ useIn }) => {
  return (
    <Stack
      sx={{
        // border:'2px solid red',
        width: "100%",
        height:'auto',
        px: 5,
        backgroundColor: "background.default",
        display: "felx",
        justifyContent: "start",
        alignItems: "start",
      }}
    >
      <Box sx={{mt:4}}>
        <Logo useIn="header" />
      <Typography variant="h4" gutterBottom >
        {useIn === "login" ? "Welcome back" : "Create Account"}
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        {useIn === "login"
          ? "Please log in to continue chatting with your friends and communities."
          : "Join Talkative to start chatting instantly with your friends and communities."}
      </Typography>
      </Box>
    </Stack>
  );
};

export default HeaderLoginAndSignup;
