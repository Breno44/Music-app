import React, { type ReactElement } from 'react'
import { LoaderContainer } from './styles'

export function Loader (): ReactElement {
  return <LoaderContainer data-testid="loader" />
}
