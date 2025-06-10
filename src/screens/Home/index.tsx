import React from 'react'

import { Button } from '@/widgets/Button'

import { Container, Title } from './styles'

export const Home: React.FC = () => {
  function teste() {
    console.log('teste')
  }
  return (
    <Container>
      <Title>Hello world! </Title>
      <Button onPress={teste}>Teste</Button>
    </Container>
  )
}
