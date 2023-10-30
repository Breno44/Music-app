import React from 'react'
import { render } from 'test-utils'

import { NavigationDrawer } from '@/presentation/components/navigation-drawer'

describe('NavigationDrawer test', () => {
  it('should be render', () => {
    const component = render(<NavigationDrawer />)

    expect(component).toBeTruthy()
  })

  it('should be render routes', async () => {
    const component = render(<NavigationDrawer />)

    const home = await component.findByText('Home')
    const songs = await component.findByText('Songs')
    const artist = await component.findByText('Artist')
    const radio = await component.findByText('Radio')
    const favorites = await component.findByText('Favorites')

    expect(home).toBeTruthy()
    expect(songs).toBeTruthy()
    expect(artist).toBeTruthy()
    expect(radio).toBeTruthy()
    expect(favorites).toBeTruthy()
  })
})
