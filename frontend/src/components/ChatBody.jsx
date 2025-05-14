import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import ChatFooter from './ChatFooter'
import Messages from './Messages'
import img from "../assets/login.png";

const ChatBody = () => {
  return (
    <Stack sx={{ flex: 1 }}>
      <Grid container sx={{ height: '100%' }}>
        <Grid size={{ md: 1, sm: 1, xs: 1 }}
          sx={{
            borderRight: 1,
            height: '100%',
            display:'flex',
            justifyContent:'center',
            alignItems:'start',
            
          }}
        >
          <Box
            component="img"
            src={img}
            alt="Chat"
            sx={{
              width: "50px",
              height: "50px",
              boxShadow: "0px 0px 5px #6a4dff",
              borderRadius: "100%",
              objectFit: "cover",
              objectPosition: "center",
              p: 1,
              mt:2.5,
              backgroundColor:'white',
            }}
          />
        </Grid>
        <Grid size={{ md: 11, sm: 11, xs: 11 }}
          sx={{
            // border: "2px solid red",
            px: 1,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            overflow: 'hidden',

          }}
        >
          <Messages />
          <ChatFooter />
        </Grid>
      </Grid>
    </Stack>
  )
}

export default ChatBody
