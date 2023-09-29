import React, { useEffect, useState } from 'react'
import { ArtistName, ButtonFavorite, ButtonPlay, Container, Content, ContentActions, ContentArtist, ContentCenter, ContentSong, SubtitleContent, TitleContent, TitleSong, TopSongBanner } from './styles'
import { NavigationDrawer } from '@/presentation/components/navigation-drawer'
import { type Track } from '@/domain/usecases/track'
import { LoadGetTopTracks } from '@/data/usecases/track/get-top-tracks'

export function Home (): any {
  const [topTrack, setTopTrack] = useState<Track.Model>()

  async function loadTopTrack (): Promise<void> {
    const topTracks = await LoadGetTopTracks.getTopTracks()

    setTopTrack(topTracks[0])
  }

  useEffect(() => {
    loadTopTrack()
  }, [])

  return (
    <Container>
      <NavigationDrawer />
      <Content>
        <ContentCenter>
          <TitleContent>Discover</TitleContent>
          <TopSongBanner>
            <ContentSong>
              <SubtitleContent>Trending New Hits</SubtitleContent>
              {topTrack && <TitleSong>{topTrack.title}</TitleSong>}
              {topTrack && <ArtistName>{topTrack.artist.name}</ArtistName>}
              <ContentActions>
                <ButtonPlay>Play Now</ButtonPlay>
                <ButtonFavorite></ButtonFavorite>
              </ContentActions>
            </ContentSong>
            <ContentArtist></ContentArtist>
          </TopSongBanner>
        </ContentCenter>
      </Content>
    </Container>
  )
}
