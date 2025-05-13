import { Grid, Stack } from '@mui/material'
import React from 'react'
import ChatFooter from './ChatFooter'

const ChatBody = () => {
  return (
    <Stack sx={{ flex: 1, border: '2px solid green' }}>
      <Grid container sx={{ height: '100%' }}>
        <Grid
          item
          md={1}
          sm={1}
          xs={1}
          sx={{
            borderRight: 1,
            border: '2px solid black',
            height: '100%'
          }}
        >
          {/* Left sidebar */}
        </Grid>
        <Grid
          item
          md={11}
          sm={11}
          xs={11}
          sx={{
            px: 4,
            border: '2px solid black',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          {/* Chat content */}
          <div style={{ flex: 1 }}>Chat messages go here</div>
          <ChatFooter />
        </Grid>
      </Grid>
    </Stack>
  )
}

export default ChatBody
