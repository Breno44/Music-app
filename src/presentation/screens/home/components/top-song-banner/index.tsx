import React, { useContext, useEffect, useState } from 'react'
import { ButtonFavorite } from '@/presentation/components/button-favorite'
import { ArtistName, ButtonPlay, Container, ContentActions, ContentArtist, ContentSong, IconContent, ImageArtist, SubtitleContent, TitleSong } from './styles'
import PlayIcon from '../../../../assets/icons/play_icon.svg'
import { type Track } from '@/domain/usecases/track/track'
import { LoadGetTopTracks } from '@/data/usecases/track/get-top-tracks'
import { Loader } from '@/presentation/components/loader/loader'
import { MusicContext } from '@/presentation/contexts/music-context'

export function TopSongBanner (): any {
  const { setTrack, setTracks } = useContext(MusicContext)
  const [topTrack, setTopTrack] = useState<Track.Model>()
  const [isLoading, setIsLoading] = useState(false)

  async function loadTopTrack (): Promise<void> {
    setIsLoading(true)
    const topTracks = await LoadGetTopTracks.getTopTracks()

    setTopTrack(topTracks[0])
    setTracks(topTracks)
    setIsLoading(false)
  }

  useEffect(() => {
    loadTopTrack()
  }, [])

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
            <ButtonFavorite />
          </ContentActions>
        </ContentSong>
        <ContentArtist>
        <ImageArtist src={topTrack?.artist.picture_big} />
        </ContentArtist>
        </>
          )}
    </Container>
  )
}
