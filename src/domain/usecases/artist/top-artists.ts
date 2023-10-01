import { type ArtistModel } from '@/domain/models/artist-model'

export interface TopArtists {
  getTopArtists: (params: TopArtists.Params) => Promise<TopArtists.Model | any>
}

export namespace TopArtists {
  export type Model = ArtistModel[]

  export type Params = {
    limit: number
  }
}
