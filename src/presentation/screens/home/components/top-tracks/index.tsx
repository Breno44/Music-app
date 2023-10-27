import React from 'react'

import { type Track } from '@/domain/usecases/track/track'
import { ButtonFavorite } from '@/presentation/components/button-favorite'
import { Loader } from '@/presentation/components/loader/loader'

import ArtistIcon from '../../../../assets/icons/user-circle-gray_icon.svg'
import TimeIcon from '../../../../assets/icons/time_icon.svg'
import PlayIcon from '../../../../assets/icons/play_icon.svg'

import { ActionButtons, ButtonPlay, Container, Content, ContentArtist, ContentTrack, Duration, IconContent, ImageArtist, NameArtist, NameTrack, Position, Time, Title } from './styles'
import { useTopTracks } from './use-top-tracks'

export function TopTracks (): React.ReactElement {
  const { handleTrack, secondsToMinutes, tracks } = useTopTracks()

  return (
    <Container>
      <Title>Top Hits</Title>
        {tracks.length <= 0
          ? <Loader />
          : tracks.map((track: Track.Model, index: number) => {
            return (
            <Content key={track?.id}>
              <Position># {index + 1}</Position>
              <ContentTrack>
                <ImageArtist alt={`${track?.artist?.name} picture`} src={track?.artist?.picture} />
                <NameTrack>{track?.title}</NameTrack>
              </ContentTrack>
              <ContentArtist>
                <IconContent alt="Artist icon" src={ArtistIcon} />
                <NameArtist>{track?.artist.name}</NameArtist>
              </ContentArtist>
              <Duration>
                <IconContent alt="Timer icon" src={TimeIcon} />
                <Time>{secondsToMinutes(track?.duration ?? 0)}</Time>
              </Duration>
              <ActionButtons>
                <ButtonFavorite musicId={String(track?.id)} />
                <ButtonPlay onClick={() => { handleTrack(track ?? {} as any) }}>
                    <IconContent alt="Play icon" src={PlayIcon} />
                </ButtonPlay>
              </ActionButtons>
            </Content>
            )
          })}
    </Container>
  )
}
