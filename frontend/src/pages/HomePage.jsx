import { Card, Container, Stack } from '@mui/material'
import React from 'react'
import ChatHeader from '../components/ChatHeader'
import ChatBody from '../components/ChatBody'
import { flexItemCenter } from '../defaultStyle'

const HomePage = () => {
  return (
    <Stack sx={{ mt: 12, width: '100%', height: '85vh', overflow: 'hidden', ...flexItemCenter }}>
      <Card
        sx={{
          width: '90%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          borderRadius: 5,
          border: 'none',
          boxShadow: 'none',
          p: 2,
          backgroundColor: 'background.main'
        }}>
        <ChatHeader />
        <ChatBody />
      </Card>
    </Stack>
  )
}

export default HomePage