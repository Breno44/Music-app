import React, { useContext, useEffect, useRef, useState } from 'react'
import { Container, Content, ContentPlay, ContentProgressBar, Icon, ProgressBar, ContentLeft, ContentRight, ImageArtist, ContentTrack, TitleTrack, ArtistName } from './styles'

import PlayIcon from '@/presentation/assets/icons/play_icon.svg'
import PauseIcon from '@/presentation/assets/icons/pause_icon.svg'
import { MusicContext } from '@/presentation/contexts/music-context'
import { ButtonFavorite } from '../button-favorite'

export function MusicPlayer (): any {
  const { track } = useContext(MusicContext)
  const audioRef = useRef<HTMLAudioElement>(null)
  const [currentTime, setCurrentTime] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState({
    preview: '',
    artistPicture: '',
    artistName: '',
    trackName: ''
  })

  function playMusic (): void {
    if (currentTime >= audioRef.current.duration) {
      setCurrentTime(0)
    }

    audioRef.current.play()
    setIsPlaying(true)
  }

  function pauseMusic (): void {
    audioRef.current.pause()
    setIsPlaying(false)
  }

  const handleTimeUpdate = (): void => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('timeupdate', handleTimeUpdate)
      audioRef.current.addEventListener('ended', () => {
        setIsPlaying(false)
      })
    }
  }, [])

  useEffect(() => {
    setCurrentTime(0)

    if (isPlaying) pauseMusic()
  }, [track])

  useEffect(() => {
    setCurrentTrack({
      preview: track.preview ?? '',
      artistName: track.artist?.name ?? '',
      artistPicture: track.artist?.picture ?? '',
      trackName: track.title ?? ''
    })
  }, [track])

  return (
    <Container>
      <ContentLeft>
        {currentTrack?.artistPicture && (
          <>
            <ImageArtist src={currentTrack?.artistPicture} />
            <ContentTrack>
              <TitleTrack>{currentTrack?.trackName}</TitleTrack>
              <ArtistName>{currentTrack?.artistName}</ArtistName>
            </ContentTrack>
            <ButtonFavorite />
          </>
        )}
      </ContentLeft>
      <ContentRight>
        <Content>
          <ContentPlay onClick={isPlaying ? pauseMusic : playMusic } id='togglePlayButton'>
            <Icon src={ isPlaying ? PauseIcon : PlayIcon } />
          </ContentPlay>
        </Content>
        <ContentProgressBar>
          <ProgressBar
            type="range"
            min={0}
            max={audioRef.current ? audioRef.current.duration : 0}
            value={currentTime}
            onChange={(e) => {
              if (audioRef.current) {
                audioRef.current.currentTime = parseFloat(e.target.value)
                setCurrentTime(audioRef.current.currentTime)
              }
            }}
            percent={(currentTime / (audioRef.current ? audioRef.current.duration : 1)) * 100}
          />
        </ContentProgressBar>
        <audio src={currentTrack.preview} ref={audioRef} style={{ display: 'none' }} />
      </ContentRight>
    </Container>
  )
}
