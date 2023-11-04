import React, { type ReactElement } from 'react'

import { ButtonFavorite } from '@/presentation/components/button-favorite'
import { Loader } from '@/presentation/components/loader/loader'

import PlayIcon from '../../../../assets/icons/play_icon.svg'

import { ArtistName, ButtonPlay, Container, ContentActions, ContentArtist, ContentSong, IconContent, ImageArtist, SubtitleContent, TitleSong } from './styles'
import { useTopSongBanner } from './use-top-song-banner'

export function TopSongBanner (): ReactElement {
  const { isLoading, handleTrack, topTrack } = useTopSongBanner()

  return (
    <Container>
      {isLoading || !topTrack
        ? <Loader />
        : (
        <>
        <ContentSong>
          <SubtitleContent>Trending New Hits</SubtitleContent>
          <TitleSong data-testid='trackName'>{topTrack?.title}</TitleSong>
          <ArtistName data-testid='artistName'>{topTrack?.artist.name}</ArtistName>
          <ContentActions>
            <ButtonPlay data-testid='playButton' onClick={() => { handleTrack(topTrack) }}>
              <IconContent alt="Play icon" src={PlayIcon} />
              Play Now
            </ButtonPlay>
            {!!topTrack?.id && <ButtonFavorite musicId={String(topTrack.id)} />}
          </ContentActions>
        </ContentSong>
        <ContentArtist>
        <ImageArtist alt="Top artist picture" src={topTrack?.artist.picture_medium} />
        </ContentArtist>
        </>
          )}
    </Container>
  )
}
