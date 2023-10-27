import React from 'react'
import { render, fireEvent } from 'test-utils'

import { MusicPlayer } from '@/presentation/components/music-player'

describe('MusicPlayer tests', () => {
  it('Should be render', async () => {
    const component = render(<MusicPlayer />)

    expect(component).toBeTruthy()
  })

  it('Should be start and stop the music', async () => {
    const component = render(<MusicPlayer />)

    const buttonToggleMusic = await component.findByTestId('togglePlayButton')
    const iconButtonToggleMusic = await component.findByTestId('toggleMusic')

    expect(iconButtonToggleMusic.getAttribute('alt')).toBe('Start music')

    fireEvent.click(buttonToggleMusic)

    expect(component).toBeTruthy()
    expect(iconButtonToggleMusic.getAttribute('alt')).toBe('Stop music')
  })
})
