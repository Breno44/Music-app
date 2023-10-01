import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 350px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 16px;

  background-color: #f0f0f0;
`

export const ContentSong = styled.div`
  width: 50%;
  height: 100%;

  padding: 36px 24px;
`

export const ContentArtist = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const SubtitleContent = styled.h2`
  color: #a9a9a9;
  margin-bottom: 8px;
`

export const TitleSong = styled.h1`
  font-size: 38px;
  margin-bottom: 8px;
`

export const ArtistName = styled.h2`
  font-weight: 400;

  margin-bottom: 32px;
`

export const ContentActions = styled.div`
  width: 100%;

  display: flex;

  gap: 10px;
`

export const ButtonPlay = styled.button`
  width: 200px;
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

export const ImageArtist = styled.img`
  width: 250px;

  border-radius: 12px;
`

export const IconContent = styled.img`
  width: 25px;
  height: 25px;
`
