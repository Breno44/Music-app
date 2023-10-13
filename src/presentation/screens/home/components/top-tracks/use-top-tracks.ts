import { useContext } from 'react'

import { type TrackModel } from '@/domain/models/track-model'
import { MusicContext } from '@/presentation/contexts/music-context'

type Return = {
  handleTrack: (track: TrackModel) => void
  tracks: TrackModel[]
  secondsToMinutes: (seconds: number) => string
}

export function useTopTracks (): Return {
  const { handleTrack, tracks } = useContext(MusicContext)

  function secondsToMinutes (seconds: number): string {
    const minutes = Math.floor(seconds / 60)
    const secondsRemaining = seconds % 60

    const minutesFormatted = minutes < 10 ? `0${minutes}` : minutes
    const secondsFormatted = secondsRemaining < 10 ? `0${secondsRemaining}` : secondsRemaining

    return `${minutesFormatted}:${secondsFormatted}`
  }

  return {
    handleTrack,
    tracks,
    secondsToMinutes
  }
}
