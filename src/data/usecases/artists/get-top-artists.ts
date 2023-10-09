import { type HttpClient } from '../../protocols/http'
import { AxiosHttpClient } from '@/infra/http/axios-http-client'
import { type TopArtists } from '@/domain/usecases/artist/top-artists'

export class GetTopArtists implements TopArtists {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<TopArtists.Model | any>
  ) {}

  async getTopArtists (params: TopArtists.Params): Promise<TopArtists.Model> {
    const httpResponse = await this.httpClient.request({
      url: `${this.url}/${params.limit}`,
      method: 'get'
    })

    return httpResponse.body?.data
  }
}

export namespace GetTopArtists {
  export type Model = TopArtists.Model
}

export const LoadGetTopArtists = new GetTopArtists('https://backend-music-app.vercel.app/artists', new AxiosHttpClient())
