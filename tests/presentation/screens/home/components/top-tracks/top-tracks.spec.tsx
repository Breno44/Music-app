import React, { type ReactElement } from 'react'
import { type RenderOptions, fireEvent } from 'test-utils'

import { TopTracks } from '@/presentation/screens/home/components/top-tracks'
import { MusicContext } from '@/presentation/contexts/music-context'
import { type RenderResult, render } from '@testing-library/react'
import { type TrackModel } from '@/domain/models/track-model'

const provider = ({ children }: { children: React.ReactNode }): any => (
  <MusicContext.Provider value={{
    track: {} as any,
    handleTrack (track: TrackModel) {},
    tracks: [{ title: 'music 1', artist: { name: 'artist 1' } } as any, { title: 'music 2', artist: { name: 'artist 2' } } as any , { title: 'music 3', artist: { name: 'artist 3' } } as any],
    setTracks (track: TrackModel[]) {},
    favoriteTracks: [],
    handleFavorite (trackId: string) {}
  }}>
    {children}
  </MusicContext.Provider>
)

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
): RenderResult => render(ui, { wrapper: provider, ...options })

describe('TopTracks test', () => {
  it('Should be render', () => {
    const component = customRender(<TopTracks />)

    expect(component).toBeTruthy()
  })

  it('Should be render top tracks', async () => {
    const component = customRender(<TopTracks />)

    const music1 = await component.findByText('music 1')
    const music2 = await component.findByText('music 2')
    const music3 = await component.findByText('music 3')

    expect(music1).toBeTruthy()
    expect(music2).toBeTruthy()
    expect(music3).toBeTruthy()
  })

  it('should be able to call handleTrack', async () => {
    const component = customRender(<TopTracks />)

    const playButton = await component.findByTestId('playButton 0')

    fireEvent.click(playButton)

    expect(playButton).toBeTruthy()
  })
})
