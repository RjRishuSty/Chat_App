//! Importing installed dependencies ................
import React from "react";
import { Box, Button, Card, Container, Grid, Stack, Typography } from "@mui/material";
import { motion } from 'framer-motion';

//! Importing created file.............
import AnimatedSquares from "../components/AnimatedSquares";
import Cards from "../components/Cards";
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

  return (
    <Stack component="section" sx={{ mt: 7.5, overflow: 'hidden' }}>
      <Grid container>
        <Grid
          size={{ xs: 12, sm: 12, md: 6 }}
          sx={{
            backgroundColor: 'background.main',
            py: 9.5,
            ...flexCenterColumn

          }}
          component={motion.div}
          variants={fadeSlideLeft}
          initial="hidden"
          animate="visible"
        >
          <Cards useIn="signup" />

        </Grid>
        <Grid
          size={{ xs: 12, sm: 12, md: 6 }}
          sx={{
            backgroundColor: 'background.primary',
            py: 9.5,
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
            <Typography variant="h3">Join our community!</Typography>
            <Typography variant="body1" sx={{ textAlign: 'center', width: '80%', mt: 1, color: 'text.secondary' }}>Create your account to connect, chat, and grow with people around the world. Share ideas, stay updated, and be part of a vibrant, real-time conversation community.</Typography>
          </Box>
        </Grid>
      </Grid>
    </Stack>


  );
};

export default SignupPage