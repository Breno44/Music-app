import { type HttpRequest, type HttpResponse, type HttpClient } from '@/data/protocols/http'
import axios, { type AxiosResponse, type AxiosRequestConfig } from 'axios'

export class AxiosHttpClient implements HttpClient {
  async request (data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse
    try {
      const config: AxiosRequestConfig = {
        url: data.url,
        method: data.method,
        data: data.body,
        params: data.params,
        headers: data.headers
      }
      axiosResponse = await axios.request(config)
    } catch (error) {
      axiosResponse = error.response
    }

    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data
    }
  }
}
