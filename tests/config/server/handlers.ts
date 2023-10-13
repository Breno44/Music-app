import { rest } from 'msw'

export const handlers = [
  rest.get('https://backend-music-app.vercel.app/track', async (req, res, ctx) => {
    return res(
      ctx.json({
        id: 0,
        readable: true,
        title: '',
        title_short: '',
        title_version: '',
        isrc: '',
        link: '',
        share: '',
        duration: 0,
        track_position: 0,
        disk_number: 0,
        rank: 0,
        release_date: 0,
        explicit_lyrics: true,
        explicit_content_lyrics: 0,
        explicit_content_cover: 0,
        preview: '',
        bpm: 0,
        gain: 0,
        artist: {} as any
      })
    )
  })
]
