import React from 'react'

import img from "../assets/login.png";
import { flexItemCenter } from '../defaultStyle'
import { Box, Typography } from '@mui/material';

const ProfileStatus = () => {
    return (
        <>
            <Box sx={{ ...flexItemCenter }}>
                <Box
                    component="img"
                    src={img}
                    alt="Chat"
                    sx={{
                        width: "70px",
                        height: "70px",
                        boxShadow: "0px 0px 5px #6a4dff",
                        borderRadius: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                        p: 1
                    }}
                />
                <Box sx={{ px: 1.5 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>Rishu Raj</Typography>
                    <Typography variant="body2">Online</Typography>
                </Box>
            </Box>
        </>
    )
}

export default ProfileStatus