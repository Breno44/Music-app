import React, { useEffect, useState } from 'react'
import { Container, ContentArtists, ContentTitle, Title, ActionButton, ArtistCard, ArtistPicture, ArtistName } from './styles'
import { LoadGetTopArtists } from '@/data/usecases/artists/get-top-artists'
import { type TopArtists as TopArtistsType } from '@/domain/usecases/artist/top-artists'
import { Loader } from '@/presentation/components/loader/loader'

export function TopArtists (): any {
  const [artists, setArtists] = useState<TopArtistsType.Model>()
  const [isLoading, setIsLoading] = useState(false)

  async function loadArtists (): Promise<void> {
    setIsLoading(true)
    const artists = await LoadGetTopArtists.getTopArtists({ limit: 6 })

    setArtists(artists)
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
        {(artists ?? []).map(artist => {
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
