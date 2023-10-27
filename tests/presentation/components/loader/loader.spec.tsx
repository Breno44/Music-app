import React from 'react'
import { render } from 'test-utils'

import { Loader } from '@/presentation/components/loader/loader'

describe('Loader tests', () => {
  it('Should be render', async () => {
    const component = render(<Loader />)

    const loader = await component.findByTestId('loader')

    expect(loader).toBeTruthy()
  })
})
