import React from "react";
import MarkChatUnreadIcon from "@mui/icons-material/MarkChatUnread";
import { Box, IconButton, Stack, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";

const Logo = ({ useIn }) => {
    const minTablet = useMediaQuery("(max-width:768px)");
    return (
        <Stack
            direction={useIn === 'header' ? "row" : "column"}
            alignItems="center"
            spacing={1}
            component={motion.div}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            sx={{
                flexGrow: useIn === 'header' ? (minTablet ? 0 : 1) : 0,
                alignSelf: "center", 
                maxHeight: "fit-content",
            }}
        >
            <IconButton
                sx={{
                    borderRadius: 2,
                    backgroundColor: useIn === 'header' ? "" : "background.opitonal"
                }}
            >
                <MarkChatUnreadIcon fontSize="large" color="primary.main" />
            </IconButton>
            {useIn === 'header' ? <Typography variant="h5" component="span" fontWeight="bold">
                Talkative
            </Typography> : ""}
        </Stack>
    );
};

export default Logo;
