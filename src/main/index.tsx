import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from '@/main/routes/router'
import { App } from '@/app'
import { GlobalStyle } from '@/presentation/assets/global-styles'

const root = ReactDOM.createRoot(document.getElementById('main'))

root.render(
  <>
    <GlobalStyle />
    <Router MakeLogin={App} />
  </>
)
