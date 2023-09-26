import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from '@/main/routes/router'
import { GlobalStyle } from '@/presentation/assets/global-styles'
import { Home } from '@/presentation/screens/home'

const root = ReactDOM.createRoot(document.getElementById('main'))

root.render(
  <>
    <GlobalStyle />
    <Router Home={Home} />
  </>
)
