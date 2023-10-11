import React, { useContext, useEffect, useState } from 'react'

import { LoadGetTopArtists } from '@/data/usecases/artists/get-top-artists'
import { Loader } from '@/presentation/components/loader/loader'
import { Container, ContentArtists, ContentTitle, Title, ActionButton, ArtistCard, ArtistPicture, ArtistName } from './styles'
import { ArtistContext } from '@/presentation/contexts/artist-context'

export function TopArtists (): any {
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

  return (
    <Container>
      {isLoading
        ? <Loader />
        : (
        <>
          <ContentTitle>
        <Title>Top Artist</Title>
        <ActionButton>Show All</ActionButton>
      </ContentTitle>
      <ContentArtists>
        {(artists.slice(0, 6) ?? []).map(artist => {
          return (
            <>
            <ArtistCard>
              <ArtistPicture src={artist?.picture} />
              <ArtistName>{artist?.name}</ArtistName>
            </ArtistCard>
            </>
          )
        })}
      </ContentArtists>
        </>
          )}
    </Container>
  )
}
