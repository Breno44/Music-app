import React, { type ReactElement } from 'react'

import HeartIcon from '../../assets/icons/heart_icon.svg'
import HeartIconFill from '../../assets/icons/heart_fill_icon.svg'
import { Container, IconContent } from './styles'
import { useButtonFavorite } from './use-button-favorite'

type Props = {
  musicId: string
}

export function ButtonFavorite ({ musicId }: Props): ReactElement {
  const { favorite, setFavorite, handleFavorite, iconStyle } = useButtonFavorite({ musicId })

  return (
    <Container onClick={() => {
      handleFavorite(musicId)
      setFavorite(!favorite)
    }}>
      <IconContent src={ favorite ? HeartIconFill : HeartIcon} style={iconStyle} />
    </Container>
  )
}
