import React from "react";
import MarkChatUnreadIcon from "@mui/icons-material/MarkChatUnread";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Logo = ({ useIn }) => {
    return (
        <Stack
            direction={useIn === 'header' ? "row" : "column"}
            alignItems="center"
            spacing={1}
            component={motion.div}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <IconButton
                sx={{
                    //   border: "2px solid red",
                    borderRadius: 2,
                    backgroundColor: "background.opitonal",
                }}
            >
                <MarkChatUnreadIcon fontSize="large" color="primary" />
            </IconButton>
            {useIn === 'header' ? <Typography variant="h5" component="span" fontWeight="bold">
                Talkative
            </Typography> : ""}
        </Stack>
    );
};

export default Logo;
