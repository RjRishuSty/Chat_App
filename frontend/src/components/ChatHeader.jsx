import { Box, Grid, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import PeopleIcon from "@mui/icons-material/People";
import ProfileStatus from "./ProfileStatus";
import { flexItemCenter, flexSpaceBetweenCenter } from "../defaultStyle";
import CloseBtn from "./CloseBtn";

const ChatHeader = () => {

    return (
        <Stack>
            <Grid container>
                <Grid
                    size={{ md: 1, sm: 1, xs: 1 }}
                    sx={{ borderBottom: 1, borderRight: 1, pb: 1, ...flexItemCenter }}
                >
                    <IconButton
                        sx={{ borderRadius: 20, backgroundColor: "background.opitonal" }}
                    >
                        <PeopleIcon
                            sx={{ fontSize: "2rem", color: "primary" }}
                        />
                    </IconButton>
                </Grid>
                <Grid
                    size={{ md: 11, sm: 11, xs: 11 }}
                    sx={{ px: 4, pb: 1, borderBottom: 1, ...flexSpaceBetweenCenter }}
                >
                    <ProfileStatus />
                    <CloseBtn />
                </Grid>
            </Grid>
        </Stack>
    );
};

export default ChatHeader;
