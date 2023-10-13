import React, { useContext, useState } from 'react'
import { Container, IconContent } from './styles'
import { MusicContext } from '@/presentation/contexts/music-context'

import HeartIcon from '../../assets/icons/heart_icon.svg'
import HeartIconFill from '../../assets/icons/heart_fill_icon.svg'

type ButtonFavoriteProps = {
  musicId: string
}

export function ButtonFavorite ({ musicId }: ButtonFavoriteProps): any {
  const { handleFavorite, favoriteTracks } = useContext(MusicContext)
  const [favorite, setFavorite] = useState(!!favoriteTracks.find(track => track === musicId))
  const iconStyle = {
    filter: 'brightness(0) saturate(100%) invert(62%) sepia(61%) saturate(4291%) hue-rotate(335deg) brightness(88%) contrast(89%)'
  }

  return (
    <Container onClick={() => {
      handleFavorite(musicId)
      setFavorite(!favorite)
    }}>
      <IconContent src={ favorite ? HeartIconFill : HeartIcon} style={iconStyle} />
    </Container>
  )
}
