import React from 'react'

import { TouchableOpacityProps } from 'react-native'

import { Container, Title } from './styles'

interface Props extends TouchableOpacityProps {
  data?: any
}

export const Button: React.FC<Props> = ({ data, children, ...rest }) => {
  return (
    <Container
      activeOpacity={0.5}
      delayPressIn={1}
      delayPressOut={80}
      {...rest}
    >
      <Title>{children}</Title>
    </Container>
  )
}
