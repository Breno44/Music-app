import { useContext, useEffect, useState } from 'react'

import { LoadGetTopTracks } from '@/data/usecases/track/get-top-tracks'
import { type TrackModel } from '@/domain/models/track-model'
import { MusicContext } from '@/presentation/contexts/music-context'

type Return = {
  handleTrack: (track: TrackModel) => void
  topTrack: TrackModel
  isLoading: boolean
}

export function useTopSongBanner (): Return {
  const { handleTrack, setTracks, tracks } = useContext(MusicContext)
  const [topTrack, setTopTrack] = useState<TrackModel>()
  const [isLoading, setIsLoading] = useState(false)

  async function loadTopTrack (): Promise<void> {
    setIsLoading(true)

    try {
      if (tracks.length > 0) {
        setTopTrack(tracks[0])
        setIsLoading(false)
        return
      }

      const topTracks = await LoadGetTopTracks.getTopTracks()

      setTopTrack(topTracks[0])
      setTracks(topTracks)
      sessionStorage.setItem('@topTracks', JSON.stringify(topTracks))
    } catch (e) {
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      setTopTrack({} as TrackModel)
      setTracks([])
    } finally {
      setIsLoading(false)
    }
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
