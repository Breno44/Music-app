import React from 'react'
import { Container, Content, ContentSession, Logo, Subtitle, Title } from './styles'
import LogoPng from '@/presentation/assets/images/logo.png'

export function NavigationDrawer (): any {
  return (
    <Container>
      <Content>
        <Logo src={LogoPng} />
        <ContentSession>
          <Title>Menu</Title>
          <Subtitle>
            Home
          </Subtitle>
          <Subtitle>
            Songs
          </Subtitle>
          <Subtitle>
            Artists
          </Subtitle>
          <Subtitle>
            Radio
          </Subtitle>
        </ContentSession>
        <ContentSession>
          <Title>Library</Title>
          <Subtitle>
            Favorites
          </Subtitle>
        </ContentSession>
      </Content>
    </Container>
  )
}
