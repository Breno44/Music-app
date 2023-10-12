import React, { type ReactNode, createContext, useState, useMemo } from 'react'
import { type TrackModel } from '@/domain/models/track-model'

interface MusicContextData {
  track: TrackModel
  setTrack: (track: TrackModel) => void
  tracks: TrackModel[]
  setTracks: (track: TrackModel[]) => void
  favoriteTracks: string[]
  handleFavorite: (trackId: string) => void
}

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const MusicContext = createContext({} as MusicContextData)

interface MusicProviderProps {
  children: ReactNode
}

export function MusicProvider (props: MusicProviderProps): React.ReactElement {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const [track, setTrack] = useState<TrackModel>({} as TrackModel)
  const [tracks, setTracks] = useState<TrackModel[]>(JSON.parse(sessionStorage.getItem('@topTracks')) ?? [])
  const [favoriteTracks, setFavoriteTracks] = useState<string[]>(JSON.parse(localStorage.getItem('@favoriteSongs')) ?? [])

  function handleFavorite (trackId: string): void {
    let newArray = []

    if (favoriteTracks.find(track => track === trackId)) {
      newArray = favoriteTracks.filter(track => track !== trackId)
    } else {
      newArray = [...favoriteTracks, trackId]
    }

    localStorage.setItem('@favoriteSongs', JSON.stringify(newArray))
    setFavoriteTracks(newArray)
  }

  const values = useMemo(() => (
    {
      track,
      setTrack,
      tracks,
      setTracks,
      favoriteTracks,
      handleFavorite
    }
  ), [
    track,
    setTrack,
    tracks,
    setTracks,
    favoriteTracks,
    handleFavorite
  ])

  return (
    <MusicContext.Provider value={values}>
      {props.children}
    </MusicContext.Provider>
  )
}
