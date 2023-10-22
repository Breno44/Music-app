import { type HttpClient } from '../../protocols/http'
import { AxiosHttpClient } from '@/infra/http/axios-http-client'
import { type Search } from '@/domain/usecases/search/search'

export class GetSearch implements Search {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<Search.Model | any>
  ) {}

  async getSearch (params: GetSearch.Params): Promise<Search.Model> {
    const httpResponse = await this.httpClient.request({
      url: `${this.url}/${params.query}`,
      method: 'get'
    })

    return httpResponse.body
  }
}

export namespace GetSearch {
  export type Params = Search.Params

  export type Model = Search.Model
}

export const LoadGetSearch = new GetSearch('https://backend-music-app.vercel.app/search', new AxiosHttpClient())
