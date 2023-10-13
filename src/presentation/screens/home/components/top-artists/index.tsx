import React, { type ReactElement } from 'react'

import { Loader } from '@/presentation/components/loader/loader'
import { Container, ContentArtists, ContentTitle, Title, ActionButton, ArtistCard, ArtistPicture, ArtistName } from './styles'
import { useTopArtists } from './use-top-artists'

export function TopArtists (): ReactElement {
  const { artists, isLoading } = useTopArtists()

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
