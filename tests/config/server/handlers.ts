import { rest } from 'msw'
import { trackMock } from '../mocks/track-mock'
import { artistMock } from '../mocks/artist-mock'

export const handlers = [
  rest.get('https://backend-music-app.vercel.app/track', async (req, res, ctx) => {
    return res(
      ctx.json(trackMock)
    )
  }),
  rest.get('https://backend-music-app.vercel.app/tracks', async (req, res, ctx) => {
    return res(
      ctx.json({
        data: [trackMock]
      })
    )
  }),
  rest.get('https://backend-music-app.vercel.app/artists/10', async (req, res, ctx) => {
    return res(
      ctx.json({
        data: [artistMock]
      })
    )
  })
]
