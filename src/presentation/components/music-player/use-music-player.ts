import { type TrackModel } from '@/domain/models/track-model'
import { MusicContext } from '@/presentation/contexts/music-context'
import type React from 'react'
import { useContext, useEffect, useRef, useState } from 'react'

type Return = {
  track: TrackModel
  audioRef: React.MutableRefObject<HTMLAudioElement>
  currentTime: number
  setCurrentTime: (currentTime: number) => void
  currentTrack: {
    preview: string
    artistPicture: string
    artistName: string
    trackName: string
  }
  setCurrentTrack: (track: {
    preview: string
    artistPicture: string
    artistName: string
    trackName: string
  }) => void
  playMusic: () => void
  pauseMusic: () => void
  isPlaying: boolean
}

export function useMusicPlayer (): Return {
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

  return {
    track,
    audioRef,
    currentTime,
    setCurrentTime,
    currentTrack,
    setCurrentTrack,
    playMusic,
    pauseMusic,
    isPlaying
  }
}
