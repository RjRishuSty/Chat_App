import React from 'react'
import { flexItemCenter } from '../defaultStyle'
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import userImg from '../assets/authuser.jpg'

const UserProfile = () => {
    const authUser = useSelector((state) => state.auth.authUser);
    console.log(authUser);
    return (
        <>
            <Box sx={{ ...flexItemCenter }}>
                <Box
                    component="img"
                    src={authUser.profilePic || userImg}
                    alt="Chat"
                    sx={{
                        width: "50px",
                        height: "50px",
                        boxShadow: "0px 0px 5px #6a4dff",
                        borderRadius: "100%",
                        objectFit: "cover",
                        objectPosition: "center",

                        backgroundColor: 'white',
                    }}
                />
                <Box sx={{ px: 1.5 }}>
                    <Typography variant="body1" sx={{ fontWeight: 700 }}>{authUser.fullname}</Typography>
                    <Typography variant="body2">Online</Typography>
                </Box>
            </Box>
        </>
    )
}

export default UserProfile