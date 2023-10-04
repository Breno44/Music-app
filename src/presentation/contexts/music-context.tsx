import React, { type ReactNode, createContext, useState } from 'react'
import { type TrackModel } from '@/domain/models/track-model'

interface MusicContextData {
  track: TrackModel
  setTrack: (track: TrackModel) => void
}

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const MusicContext = createContext({} as MusicContextData)

interface MusicProviderProps {
  children: ReactNode
}

export function MusicProvider (props: MusicProviderProps): React.ReactElement {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const [track, setTrack] = useState<TrackModel>({} as TrackModel)

  return (
    <MusicContext.Provider value={{
      track,
      setTrack
    }}>
      {props.children}
    </MusicContext.Provider>
  )
}
