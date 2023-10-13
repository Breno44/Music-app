import React, { type ReactElement } from 'react'

import { Container, Content, IconContent, IndicatorActive } from './styles'
import { useSubtitle } from './use-subtitle'

type Props = {
  name: string
  icon: string
  routerName: string
}

export function Subtitle ({ name, icon, routerName }: Props): ReactElement {
  const { correctRoute, iconStyle, navigate } = useSubtitle({ name, icon, routerName })

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
