import React from 'react'
import { Container, Content, ContentCenter, TitleContent } from './styles'
import { NavigationDrawer } from '@/presentation/components/navigation-drawer'
import { TopSongBanner } from './components/top-song-banner'
import { TopArtists } from './components/top-artists'

export function Home (): any {
  return (
    <Container>
      <NavigationDrawer />
      <Content>
        <ContentCenter>
          <TitleContent>Discover</TitleContent>
          <TopSongBanner />
          <TopArtists />
        </ContentCenter>
      </Content>
    </Container>
  )
}
