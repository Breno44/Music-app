import React from 'react'
import { render } from 'test-utils'

import { Subtitle } from '@/presentation/components/navigation-drawer/components/subtitle'

describe('Subtitle tests', () => {
  it('should be render', () => {
    const component = render(<Subtitle icon='' name='' routerName='' />)

    expect(component).toBeTruthy()
  })

  it('should be render with params', async () => {
    const component = render(<Subtitle icon='test' name='name' routerName='router' />)

    const img = await component.findByTestId('name') as HTMLImageElement
    const name = await component.findByText('name')

    expect(img).toBeTruthy()
    expect(img.alt).toBe('name icon')
    expect(name).toBeTruthy()
  })
})
