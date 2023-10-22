import { type ArtistModel } from '@/domain/models/artist-model'
import { type TrackModel } from '../../models/track-model'
import { type AlbumModel } from '@/domain/models/album-model'

export interface Search {
  getSearch: (params: Search.Params) => Promise<Search.Model | any>
}

export namespace Search {
  export type Params = {
    query: string
  }

  export type Model = {
    tracks: TrackModel[]
    artists: ArtistModel[]
    albums: AlbumModel[]
  }
}
