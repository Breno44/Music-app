import React from 'react'
// import HeartIcon from '@/presentation/assets/icons/heart_icon.svg'
import HeartIconFill from '@/presentation/assets/icons/heart_fill_icon.svg'
import { Container, IconContent } from './styles'

export function ButtonFavorite (): any {
  const iconStyle = {
    filter: 'brightness(0) saturate(100%) invert(62%) sepia(61%) saturate(4291%) hue-rotate(335deg) brightness(88%) contrast(89%)'
  }

  return (
    <Container>
      <IconContent src={HeartIconFill} style={iconStyle} />
    </Container>
  )
}
