import { useContext, useEffect, useState } from 'react'

import { LoadGetTopTracks } from '@/data/usecases/track/get-top-tracks'
import { type TrackModel } from '@/domain/models/track-model'
import { type Track } from '@/domain/usecases/track/track'
import { MusicContext } from '@/presentation/contexts/music-context'

type Return = {
  handleTrack: (track: TrackModel) => void
  topTrack: Track.Model
  isLoading: boolean
}

export function useTopSongBanner (): Return {
  const { handleTrack, setTracks, tracks } = useContext(MusicContext)
  const [topTrack, setTopTrack] = useState<Track.Model>()
  const [isLoading, setIsLoading] = useState(false)

  async function loadTopTrack (): Promise<void> {
    setIsLoading(true)
    if (tracks.length > 0) {
      setTopTrack(tracks[0])
      setIsLoading(false)
      return
    }

    const topTracks = await LoadGetTopTracks.getTopTracks()

    setTopTrack(topTracks[0])
    setTracks(topTracks)
    sessionStorage.setItem('@topTracks', JSON.stringify(topTracks))
    setIsLoading(false)
  }

  useEffect(() => {
    loadTopTrack()
  }, [])

  return {
    handleTrack,
    topTrack,
    isLoading
  }
}
