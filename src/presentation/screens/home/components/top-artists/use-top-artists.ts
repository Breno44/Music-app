import { useContext, useEffect, useState } from 'react'

import { LoadGetTopArtists } from '@/data/usecases/artists/get-top-artists'
import { ArtistContext } from '@/presentation/contexts/artist-context'
import { type ArtistModel } from '@/domain/models/artist-model'

type Return = {
  setArtists: (artists: ArtistModel[]) => void
  artists: ArtistModel[]
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
}

export function useTopArtists (): Return {
  const { setArtists, artists } = useContext(ArtistContext)
  const [isLoading, setIsLoading] = useState(false)

  async function loadArtists (): Promise<void> {
    setIsLoading(true)
    if (artists.length > 0) {
      setIsLoading(false)
      return
    }

    const topArtists = await LoadGetTopArtists.getTopArtists({ limit: 10 })

    setArtists(topArtists)
    sessionStorage.setItem('@topArtists', JSON.stringify(topArtists))
    setIsLoading(false)
  }

  useEffect(() => {
    loadArtists()
  }, [])

  return {
    setArtists,
    artists,
    isLoading,
    setIsLoading
  }
}
