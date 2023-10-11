import React, { type ReactNode, createContext, useState } from 'react'
import { type ArtistModel } from '@/domain/models/artist-model'

interface ArtistContextData {
  artist: ArtistModel
  setArtist: (artist: ArtistModel) => void
  artists: ArtistModel[]
  setArtists: (track: ArtistModel[]) => void
}

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const ArtistContext = createContext({} as ArtistContextData)

interface ArtistProviderProps {
  children: ReactNode
}

export function ArtistProvider (props: ArtistProviderProps): React.ReactElement {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const [artist, setArtist] = useState<ArtistModel>({} as ArtistModel)
  const [artists, setArtists] = useState<ArtistModel[]>(JSON.parse(sessionStorage.getItem('@topArtists')) ?? [])

  return (
    <ArtistContext.Provider value={{
      artist,
      setArtist,
      artists,
      setArtists
    }}>
      {props.children}
    </ArtistContext.Provider>
  )
}
