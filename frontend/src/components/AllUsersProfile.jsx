import React from "react";
import userImg from "../assets/user.jpg";
import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import useAxios from "../custom-hooks/useAxios";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../store/slices/message.slice";

const AllUsersProfile = () => {
    const { request } = useAxios();
    const dispatch = useDispatch();
    const users = useSelector((state) => state.message.users);
    const isToggle = useSelector((state) => state.layout.toggle);
    console.log(users);

    useEffect(() => {
        const getUsersList = async () => {
            try {
                const response = await request({
                    url: "/api/messages/users",
                    method: "get",
                });
                dispatch(getUsers(response));
            } catch (error) {
                console.log(error);
            }
        };
        getUsersList();
    }, []);
    return (
        <>
            {users?.map((user) => {
                return (
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "start",
                            alignItems: "center",
                            m: 2,
                            cursor: 'pointer',
                            "&:hover": {
                                backgroundColor: 'primary.main',
                                padding: '5px',
                                borderRadius: 2
                            }
                        }}
                    >
                        <Box
                            key={user._id}
                            component="img"
                            src={user.profilePic || userImg}
                            alt="Chat"
                            sx={{
                                width: "50px",
                                height: "50px",
                                boxShadow: "0px 0px 5px #6a4dff",
                                borderRadius: "100%",
                                objectFit: "cover",
                                objectPosition: "center",
                                backgroundColor: "white",
                            }}
                        />
                        {!isToggle ? <Typography
                            variant="body1"
                            sx={{ ml: 1.5, fontWeight: 500, textTransform: "capitalize" }}
                        >
                            {user.fullname}
                        </Typography> : null}
                    </Box>
                );
            })}
        </>
    );
};

export default AllUsersProfile;
