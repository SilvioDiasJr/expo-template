import styled from 'styled-components/native'

import { theme } from '@/styles/theme'

const { COLORS, FONT_SIZE } = theme

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  font-size: ${FONT_SIZE['2xl']}px;
  font-weight: 500;
`
