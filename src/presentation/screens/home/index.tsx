import React, { type ReactElement } from 'react'

import { NavigationDrawer } from '@/presentation/components/navigation-drawer'
import { MusicPlayer } from '@/presentation/components/music-player'

import { TopSongBanner } from './components/top-song-banner'
import { TopArtists } from './components/top-artists'
import { TopTracks } from './components/top-tracks'
import { Container, Content, ContentCenter, TitleContent } from './styles'
import { Search } from './components/search'

export function Home (): ReactElement {
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
        <Search />
      </Content>
    </Container>
  )
}
