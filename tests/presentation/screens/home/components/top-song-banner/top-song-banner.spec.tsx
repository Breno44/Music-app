import React from 'react'
import { render, fireEvent } from 'test-utils'

import { TopSongBanner } from '@/presentation/screens/home/components/top-song-banner'

describe('TopSongBanner test', () => {
  it('should be render', () => {
    const component = render(<TopSongBanner />)

    expect(component).toBeTruthy()
  })

  it('should be show infos of top song', async () => {
    const component = render(<TopSongBanner />)

    const trackName = await component.findByTestId('trackName')
    const artistName = await component.findByTestId('artistName')

    expect(trackName.innerHTML).toBe('Better Place')
    expect(artistName.innerHTML).toBe('*NSYNC')
  })

  it('should be able to call handleTrack', async () => {
    const component = render(<TopSongBanner />)

    const playButton = await component.findByTestId('playButton')

    fireEvent.click(playButton)

    expect(playButton).toBeTruthy()
  })
})
