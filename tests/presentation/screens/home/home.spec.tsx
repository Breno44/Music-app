import React from 'react'
import { render } from 'test-utils'

import { Home } from '@/presentation/screens/home/index'

describe('Home test', () => {
  it('Should be render', () => {
    const component = render(<Home />)

    expect(component).toBeTruthy()
  })
})
