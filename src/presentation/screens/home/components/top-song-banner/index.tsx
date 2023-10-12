import React from 'react'
import { ButtonFavorite } from '@/presentation/components/button-favorite'
import { ArtistName, ButtonPlay, Container, ContentActions, ContentArtist, ContentSong, IconContent, ImageArtist, SubtitleContent, TitleSong } from './styles'
import PlayIcon from '../../../../assets/icons/play_icon.svg'
import { Loader } from '@/presentation/components/loader/loader'
import { useTopSongBanner } from './use-top-song-banner'

export function TopSongBanner (): any {
  const { isLoading, setTrack, topTrack } = useTopSongBanner()
  console.log(topTrack)
  return (
    <Container>
      {isLoading
        ? <Loader />
        : (
        <>
        <ContentSong>
          <SubtitleContent>Trending New Hits</SubtitleContent>
          <TitleSong>{topTrack?.title}</TitleSong>
          <ArtistName>{topTrack?.artist.name}</ArtistName>
          <ContentActions>
            <ButtonPlay onClick={() => { setTrack(topTrack) }}>
              <IconContent src={PlayIcon} />
              Play Now
            </ButtonPlay>
            {!!topTrack?.id && <ButtonFavorite musicId={String(topTrack.id)} />}
          </ContentActions>
        </ContentSong>
        <ContentArtist>
        <ImageArtist src={topTrack?.artist.picture_medium} />
        </ContentArtist>
        </>
          )}
    </Container>
  )
}
