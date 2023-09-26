import React from 'react'

type Props = {
  name: string
  Icon: React.FC
}

export function Subtitle ({ name, Icon }: Props): any {
  const url = window.location.href

  const partesDaURL = url.split('/')

  const ultimaParte = partesDaURL.pop()

  console.log(ultimaParte)

  return (
    <div>
      <Icon />
      {name}
    </div>
  )
}
