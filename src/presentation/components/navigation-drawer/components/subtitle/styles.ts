import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
`

type PropsContent = {
  correctRoute: boolean
}

export const Content = styled.div<PropsContent>`
  display: flex;
  align-items: center;

  gap: 10px;

  font-weight: light;

  ${({ correctRoute }) => (correctRoute && 'color: #3082d5;')}
`

export const IconContent = styled.img`
  width: 20px;
  height: 20px;
`

export const IndicatorActive = styled.div`
  width: 3px;
  height: 100%;
  background-color: #3082d5;

  border-radius: 3px 0 0 3px;
`
