import { type TopTracks } from '@/domain/usecases/top-tracks'
import { type HttpClient } from '../../protocols/http'
import { AxiosHttpClient } from '@/infra/http/axios-http-client'

export class GetTopTracks implements TopTracks {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<TopTracks.Model | any>
  ) {}

  async getTopTracks (): Promise<TopTracks.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get'
    })

    return httpResponse.body?.tracks?.data
  }
}

export namespace GetTopTracks {
  export type Model = TopTracks.Model
}

export const LoadGetTopTracks = new GetTopTracks('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/tracks', new AxiosHttpClient())
