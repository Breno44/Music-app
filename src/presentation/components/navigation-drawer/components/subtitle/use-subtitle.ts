import { type NavigateFunction, useNavigate } from 'react-router-dom'

type Props = {
  name: string
  icon: string
  routerName: string
}

type Return = {
  navigate: NavigateFunction
  correctRoute: boolean
  iconStyle: {
    filter: string
  }
}

export function useSubtitle ({ name, icon, routerName }: Props): Return {
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

  return {
    navigate,
    correctRoute,
    iconStyle
  }
}
