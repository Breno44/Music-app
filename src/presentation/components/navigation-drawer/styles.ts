import styled from 'styled-components'

export const Container = styled.div`
  width: 15%;
  height: 100%;

  display: flex;
  justify-content: center;

  background-color: #f9f9f9;
`

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px 0 20px 15%;
`

export const Logo = styled.img`
  width: 120px;
  height: 120px;
`

export const ContentSession = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: start;

  margin-bottom: 36px;
  gap: 15px;
`

export const Title = styled.h3`
  color: #adadad;
`

export const Subtitle = styled.div`
  font-size: 18px;
`
