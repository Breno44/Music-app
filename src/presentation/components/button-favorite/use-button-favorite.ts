import { useContext, useEffect, useState } from 'react'

import { MusicContext } from '@/presentation/contexts/music-context'

type Props = {
  musicId: string
}

type Return = {
  handleFavorite: (trackId: string) => void
  favorite: boolean
  setFavorite: (favorite: boolean) => void
  iconStyle: {
    filter: string
  }
}

export function useButtonFavorite ({ musicId }: Props): Return {
  const { handleFavorite, favoriteTracks } = useContext(MusicContext)
  const [favorite, setFavorite] = useState(!!favoriteTracks.find(track => track === musicId))
  const iconStyle = {
    filter: 'brightness(0) saturate(100%) invert(62%) sepia(61%) saturate(4291%) hue-rotate(335deg) brightness(88%) contrast(89%)'
  }

  useEffect(() => {
    setFavorite(!!favoriteTracks.find(track => track === musicId))
  }, [favoriteTracks])

  return {
    handleFavorite,
    favorite,
    setFavorite,
    iconStyle
  }
}
