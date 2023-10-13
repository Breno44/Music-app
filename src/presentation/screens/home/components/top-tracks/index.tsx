import React, { useContext } from 'react'
import { ButtonFavorite } from '@/presentation/components/button-favorite'

import { ActionButtons, ButtonPlay, Container, Content, ContentArtist, ContentTrack, Duration, IconContent, ImageArtist, NameArtist, NameTrack, Position, Time, Title } from './styles'
import { MusicContext } from '@/presentation/contexts/music-context'
import { type Track } from '@/domain/usecases/track/track'

import ArtistIcon from '../../../../assets/icons/user-circle-gray_icon.svg'
import TimeIcon from '../../../../assets/icons/time_icon.svg'
import PlayIcon from '../../../../assets/icons/play_icon.svg'

export function TopTracks (): React.ReactElement {
  const { setTrack, tracks } = useContext(MusicContext)

  function secondsToMinutes (seconds: number): string {
    const minutes = Math.floor(seconds / 60)
    const secondsRemaining = seconds % 60

    const minutesFormatted = minutes < 10 ? `0${minutes}` : minutes
    const secondsFormatted = secondsRemaining < 10 ? `0${secondsRemaining}` : secondsRemaining

    return `${minutesFormatted}:${secondsFormatted}`
  }

  return (
    <Container>
      <Title>Top Hits</Title>
        {tracks.length <= 0
          ? 'Loading...'
          : tracks.map((track: Track.Model, index: number) => {
            return (
            <Content key={track?.id}>
              <Position># {index + 1}</Position>
              <ContentTrack>
                <ImageArtist src={track?.artist?.picture} />
                <NameTrack>{track?.title}</NameTrack>
              </ContentTrack>
              <ContentArtist>
                <IconContent src={ArtistIcon} />
                <NameArtist>{track?.artist.name}</NameArtist>
              </ContentArtist>
              <Duration>
                <IconContent src={TimeIcon} />
                <Time>{secondsToMinutes(track?.duration ?? 0)}</Time>
              </Duration>
              <ActionButtons>
                <ButtonFavorite musicId={String(track?.id)} />
                <ButtonPlay onClick={() => { setTrack(track ?? {} as any) }}>
                    <IconContent src={PlayIcon} />
                </ButtonPlay>
              </ActionButtons>
            </Content>
            )
          })}
    </Container>
  )
}
