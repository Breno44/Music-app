import React from 'react'
import { Container, Content, IconContent, IndicatorActive } from './styles'
import { useNavigate } from 'react-router-dom'

type Props = {
  name: string
  icon: string
  routerName: string
}

export function Subtitle ({ name, icon, routerName }: Props): any {
  const navigate = useNavigate()

  function currentRoute (): string {
    const url = window.location.href

    const piecesUrl = url.split('/')

    return piecesUrl.pop()
  }

  const correctRoute = currentRoute() === routerName

  const iconStyle = {
    filter: 'brightness(0) saturate(100%) invert(62%) sepia(61%) saturate(4291%) hue-rotate(190deg) brightness(88%) contrast(89%)'
  }

  return (
    <Container onClick={() => { navigate(routerName) }}>
      <Content correctRoute={correctRoute}>
        <IconContent src={icon} style={correctRoute ? iconStyle : {}} />
        {name}
      </Content>
      {correctRoute && <IndicatorActive />}
    </Container>
  )
}
