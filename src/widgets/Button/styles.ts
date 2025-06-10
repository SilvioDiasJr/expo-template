import styled from 'styled-components/native'

import { theme } from '@/styles/theme'
import { TouchableOpacity } from 'react-native-gesture-handler'

const { COLORS, FONT_SIZE } = theme

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 48px;

  background-color: ${COLORS.red};
`

export const Title = styled.Text``
