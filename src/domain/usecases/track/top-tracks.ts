import { type TrackModel } from '../../models/track-model'

export interface TopTracks {
  getTopTracks: () => Promise<TopTracks.Model | any>
}

export namespace TopTracks {
  export type Model = TrackModel[]
}
