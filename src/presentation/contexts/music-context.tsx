import React, { type ReactNode, createContext, useState } from 'react'
import { type TrackModel } from '@/domain/models/track-model'

interface MusicContextData {
  track: TrackModel
  setTrack: (track: TrackModel) => void
  tracks: TrackModel[]
  setTracks: (track: TrackModel[]) => void
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

  return (
    <MusicContext.Provider value={{
      track,
      setTrack,
      tracks,
      setTracks
    }}>
      {props.children}
    </MusicContext.Provider>
  )
}
