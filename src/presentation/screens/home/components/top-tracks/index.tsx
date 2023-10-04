import React from 'react'

export function TopTracks (): React.ReactElement {
  return (
    <Container>
      <Title></Title>
      <Content>
        <Position></Position>
        <ContentTrack></ContentTrack>
        <ContentArtist></ContentArtist>
        <Duration></Duration>
        <ActionButtons></ActionButtons>
      </Content>
    </Container>
  )
}
