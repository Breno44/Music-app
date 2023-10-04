import { type Track } from '@/domain/usecases/track/track'
import { type HttpClient } from '../../protocols/http'
import { AxiosHttpClient } from '@/infra/http/axios-http-client'

export class GetTrack implements Track {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<Track.Model | any>
  ) {}

  async getTrack (params: GetTrack.Params): Promise<Track.Model> {
    const httpResponse = await this.httpClient.request({
      url: `${this.url}/${params.id}`,
      method: 'get'
    })

    return httpResponse.body
  }
}

export namespace GetTrack {
  export type Params = Track.Params

  export type Model = Track.Model
}

export const LoadGetTrack = new GetTrack('http://localhost:3001/track', new AxiosHttpClient())
