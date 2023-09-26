import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

type Props = {
  Home: React.FC
}

const Router: React.FC<Props> = ({ Home }: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
