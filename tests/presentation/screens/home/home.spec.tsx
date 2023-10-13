import React from 'react'
import { render } from 'test-utils'

import { Home } from '@/presentation/screens/home'

describe('Home tests', () => {
  it('should be render', () => {
    const component = render(<Home />)

    expect(component).toBeTruthy()
  })
})
