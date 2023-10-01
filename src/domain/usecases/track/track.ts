import { type TrackModel } from '../../models/track-model'

export interface Track {
  getTrack: (params: Track.Params) => Promise<Track.Model | any>
}

export namespace Track {
  export type Params = {
    id: number
  }

  export type Model = TrackModel
}
