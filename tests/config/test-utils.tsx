import React, { type ReactElement } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render, type RenderOptions, type RenderResult } from '@testing-library/react'
import { MusicProvider } from '@/presentation/contexts/music-context'
import { ArtistProvider } from '@/presentation/contexts/artist-context'

const AllTheProviders = ({ children }: { children: React.ReactNode }): any => {
  return (
    <MusicProvider>
      <ArtistProvider>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </ArtistProvider>
    </MusicProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
): RenderResult => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
