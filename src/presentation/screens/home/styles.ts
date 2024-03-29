import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;

  background-color: #f4f5f8;
`

export const Content = styled.div`
  display: flex;

  width: 100%;
  height: 100%;
`

export const ContentCenter = styled.div`
  width: 60%;
  height: 100%;

  display: flex;
  flex-direction: column;

  padding: 24px;

  gap: 25px;

  position: relative;

  overflow-y: auto;
`

export const TitleContent = styled.h1`
  margin-bottom: -15px;
`
