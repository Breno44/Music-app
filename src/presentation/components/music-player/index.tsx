import React, { type ReactElement } from 'react'
import { Container, Content, ContentPlay, ContentProgressBar, Icon, ProgressBar, ContentLeft, ContentRight, ImageArtist, ContentTrack, TitleTrack, ArtistName } from './styles'

import { ButtonFavorite } from '../button-favorite'

import PlayIcon from '../../assets/icons/play_icon.svg'
import PauseIcon from '../../assets/icons/pause_icon.svg'
import { useMusicPlayer } from './use-music-player'

export function MusicPlayer (): ReactElement {
  const { audioRef, currentTrack, isPlaying, pauseMusic, playMusic, track, currentTime, setCurrentTime } = useMusicPlayer()

  return (
    <Container>
      <ContentLeft>
        {currentTrack?.artistPicture && (
          <>
            <ImageArtist alt="Image artist" src={currentTrack?.artistPicture} />
            <ContentTrack>
              <TitleTrack>{currentTrack?.trackName}</TitleTrack>
              <ArtistName>{currentTrack?.artistName}</ArtistName>
            </ContentTrack>
            <ButtonFavorite musicId={String(track?.id) ?? ''} />
          </>
        )}
      </ContentLeft>
      <ContentRight>
        <Content>
          <ContentPlay onClick={isPlaying ? pauseMusic : playMusic } id='togglePlayButton' data-testid='togglePlayButton'>
            <Icon alt={isPlaying ? 'Stop music' : 'Start music'} src={ isPlaying ? PauseIcon : PlayIcon } data-testid='toggleMusic' />
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
            percent={((currentTime / (audioRef.current ? audioRef.current.duration : 1)) * 100) ?? 0}
          />
        </ContentProgressBar>
        <audio src={currentTrack.preview} ref={audioRef} style={{ display: 'none' }} />
      </ContentRight>
    </Container>
  )
}
