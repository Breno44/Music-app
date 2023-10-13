import React from 'react'
import { Container, Content, ContentSession, Logo, Title } from './styles'

import { Subtitle } from './components/subtitle'
import HomeIcon from '../../assets/icons/house_icon.svg'
import LogoPng from '../../assets/images/logo.png'
import FavoritesIcon from '../../assets/icons/heart_icon.svg'
import SongsIcon from '../../assets/icons/music-library_icon.svg'
import RadioIcon from '../../assets/icons/music-party_icon.svg'
import ArtistsIcon from '../../assets/icons/user-circle_icon.svg'

export function NavigationDrawer (): any {
  return (
    <Container>
      <Content>
        <Logo src={LogoPng} />
        <ContentSession>
          <Title>Menu</Title>
          <Subtitle name='Home' icon={HomeIcon} routerName='' />
          <Subtitle name='Songs' icon={SongsIcon} routerName='songs' />
          <Subtitle name='Artist' icon={ArtistsIcon} routerName='artist' />
          <Subtitle name='Radio' icon={RadioIcon} routerName='radio' />
        </ContentSession>
        <ContentSession>
          <Title>Library</Title>
          <Subtitle name='Favorites' icon={FavoritesIcon} routerName='favorites' />
        </ContentSession>
      </Content>
    </Container>
  )
}
