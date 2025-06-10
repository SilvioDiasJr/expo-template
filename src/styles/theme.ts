import { PixelRatio } from 'react-native'

export const BASE_FONT_SIZE = 10

export const rem = (value: number) => {
  return value * BASE_FONT_SIZE * PixelRatio.getFontScale()
}

export const theme = {
  COLORS: {
    red: '#FF0000',
  },
  FONT_SIZE: {
    xs: rem(1.2), // 12px
    sm: rem(1.4), // 14px
    md: rem(1.6), // 16px
    lg: rem(2), // 20px
    xl: rem(2.4), // 24px
    '2xl': rem(3.2), // 32p
  },
}
