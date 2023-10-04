import React from 'react'
import { Container, Content, ContentCenter, TitleContent } from './styles'
import { NavigationDrawer } from '@/presentation/components/navigation-drawer'
import { MusicPlayer } from '@/presentation/components/music-player'
import { TopSongBanner } from './components/top-song-banner'
import { TopArtists } from './components/top-artists'
import { TopTracks } from './components/top-tracks'

export function Home (): any {
  return (
    <Container>
      <NavigationDrawer />
      <Content>
        <ContentCenter>
          <TitleContent>Discover</TitleContent>
          <TopSongBanner />
          <TopArtists />
          <TopTracks />
          <MusicPlayer />
        </ContentCenter>
      </Content>
    </Container>
  )
}
