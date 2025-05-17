//! Importing installed dependencies ................
import React from "react";
import { Box, Button, Card, Container, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import { motion } from 'framer-motion';

//! Importing created file.............
import AnimatedSquares from "../components/AnimatedSquares";
import Cards from "../components/Cards";
import HeaderLoginAndSignup from "../components/HeaderLoginAndSignup";
// import img from '../assets/login.png';

//! Reusable Flex Center Style
const flexCenterColumn = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

//! Animation Variants
const fadeSlideLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.2 } },
};

const fadeSlideRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.2 } },
};

const textFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay: 1.2, duration: 2 } },
};

const SignupPage = () => {

  const isTablet = useMediaQuery("(max-width:768px)");

  return (
    <Stack component="section" sx={{ overflow: 'hidden' }}>
      <Grid container sx={{ height: "100vh" }}>
        <Grid
          size={{ xs: 12, sm: isTablet ? 12 : 6, md: 6 }}
          sx={{
            backgroundColor: 'background.main',
             height: isTablet ? "auto" : "100%",
            order: { xs: 2, sm: 2, md: 1 },
            borderTopLeftRadius: isTablet ? 50 : 0,
            borderTopRightRadius: isTablet ? 50 : 0,
            mt: isTablet ? -5 : 0,
            ...flexCenterColumn

          }}
          component={motion.div}
          variants={fadeSlideLeft}
          initial="hidden"
          animate="visible"
        >
          <Cards useIn="signup" />

        </Grid>
        {!isTablet ? <Grid
          size={{ xs: 12, sm: 6, md: 6 }}
          sx={{
            backgroundColor: 'background.primary',
           height: isTablet ? "auto" : "100%",
           order: { xs: 1, sm: 1, md: 2 },
            ...flexCenterColumn
          }}
          component={motion.div}
          variants={fadeSlideRight}
          initial="hidden"
          animate="visible"

        >
          <AnimatedSquares />
          <Box sx={{ mt: 5, ...flexCenterColumn }} component={motion.div}
            variants={textFade}
            initial="hidden"
            animate="visible">
            <Typography variant="h4">Join our community!</Typography>
            <Typography variant="body1" sx={{ textAlign: 'center', width: '80%', mt: 1, color: 'text.secondary' }}>Create your account to connect, chat, and grow with people around the world. Share ideas, stay updated, and be part of a vibrant, real-time conversation community.</Typography>
          </Box>
        </Grid> : <HeaderLoginAndSignup useIn='signup'/>}
      </Grid>
    </Stack>


  );
};

export default SignupPage