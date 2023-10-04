import React from 'react'
import ReactDOM from 'react-dom/client'

import Router from '@/main/routes/router'
import { GlobalStyle } from '@/presentation/assets/global-styles'
import { Home } from '@/presentation/screens/home'
import { MusicProvider } from '@/presentation/contexts/music-context'

const root = ReactDOM.createRoot(document.getElementById('main'))

root.render(
  <MusicProvider>
    <GlobalStyle />
    <Router Home={Home} />
  </MusicProvider>
)
