import React from 'react'
import { render, fireEvent } from 'test-utils'

import { ButtonFavorite } from '@/presentation/components/button-favorite'

describe('ButtonFavorite tests', () => {
  it('Should be render', async () => {
    const component = render(<ButtonFavorite musicId="111222" />)

    const heartIcon = await component.findByTestId('heartIcon')

    expect(heartIcon).toBeTruthy()
  })

  it('Should be change favorite state', async () => {
    const component = render(<ButtonFavorite musicId="111222" />)
    const heartIcon = await component.findByTestId('heartIcon')

    expect(heartIcon).toBeTruthy()

    const initialHeartIconAlt = heartIcon.getAttribute('alt')

    fireEvent.click(heartIcon)

    const updatedHeartIcon = await component.findByTestId('heartIcon')
    const updatedHeartIconAlt = updatedHeartIcon.getAttribute('alt')

    expect(initialHeartIconAlt).toBe('Icon heart')
    expect(updatedHeartIconAlt).toBe('Icon red heart')
  })
})
