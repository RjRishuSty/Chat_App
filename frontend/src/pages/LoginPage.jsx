//! Importing installed dependencies ................
import React from "react";
import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import { motion } from 'framer-motion';

//! Importing created file.............
import AnimatedSquares from "../components/AnimatedSquares";
import Cards from "../components/Cards";

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

const LoginPage = () => {

  const isTablet = useMediaQuery("(max-width:768px)");

  return (
    <Stack component="section" sx={{ mt: 9, overflow: 'hidden' }}>
      <Grid container sx={{height:"90vh"}}>
        <Grid
          size={{ xs: 12, sm: isTablet?12:6, md: 6 }}
          sx={{
            backgroundColor: 'background.main',
            height:"100%",
            ...flexCenterColumn

          }}
          component={motion.div}
          variants={fadeSlideLeft}
          initial="hidden"
          animate="visible"
        >
          <Cards useIn="login" />

        </Grid>
        {!isTablet?<Grid
          size={{ xs: 12, sm: 6, md: 6 }}
          sx={{
            backgroundColor: 'background.primary',
            height:"100%",
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
            <Typography variant="h4">Welcome back!</Typography>
            <Typography variant="body1" sx={{ textAlign: 'center', width: '80%', mt: 1, color: 'text.secondary' }}>Log in to continue your conversations, connect with friends, and stay updated in real-time. Your chats are just a click away.</Typography>
          </Box>
        </Grid>:null}
      </Grid>
    </Stack>


  );
};

export default LoginPage;
