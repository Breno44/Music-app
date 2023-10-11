import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 750px;

  background-color: #f0f0f0;
  border-radius: 12px;

  padding: 20px;
`

export const Title = styled.h2``

export const Content = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;

  margin-bottom: 20px;
`

export const Position = styled.h3`
  width: 50px;
  font-size: 18px;
`

export const ContentTrack = styled.div`
  width: 250px;
  height: 100%;

  display: flex;
  align-items: center;
  gap: 10px;
`

export const ImageArtist = styled.img`
  width: 50px;
  height: 50px;

  border-radius: 12px;
`

export const NameTrack = styled.div`
  width: 75%;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ContentArtist = styled.div`
  width: 200px;
  height: 100%;

  display: flex;
  align-items: center;
  gap: 10px;
`

export const IconContent = styled.img`
  width: 20px;
  height: 20px;
`

export const NameArtist = styled.p`
  width: 85%;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  color: #cececd;
`

export const Duration = styled.div`
  width: 130px;
  height: 100%;

  display: flex;
  align-items: center;
  gap: 10px;

  margin-right: 30px;
`

export const Time = styled.p`
  color: #cececd;
`

export const ActionButtons = styled.div`
  width: 150px;

  display: flex;
  justify-content: space-between;
`

export const ButtonPlay = styled.button`
  width: 50px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 10px;

  background-color: #2c90f6;
  color: #fff;

  border-radius: 12px;
  border: none;

  font-size: 18px;

  cursor: pointer;
`
