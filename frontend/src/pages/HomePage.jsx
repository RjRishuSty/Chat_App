import { Container, Stack } from '@mui/material'
import React from 'react'
import ChatHeader from '../components/ChatHeader'
import ChatBody from '../components/ChatBody'

const HomePage = () => {
  return (
    <Stack sx={{border:'2px solid blue',mt:10,width:'100%',height:'89vh',overflow:'hidden'}}>
      <Container  disableGutters
        maxWidth={false}
        sx={{
          width:'90%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          border: '2px solid blue'}}>
        <ChatHeader/>
        <ChatBody/>
      </Container>
    </Stack>
  )
}

export default HomePage