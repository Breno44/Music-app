import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 250px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #f9f9f9;

  border-radius: 12px;

  padding: 20px;
`

export const ContentTitle = styled.div`
  width: 100%;
  height: 45px;

  display: flex;
  justify-content: space-between;
`

export const Title = styled.h2``

export const ActionButton = styled.button`
  font-size: 18px;

  color: #b9b9b9;
  background-color: transparent;

  border: none;
  cursor: pointer;
`

export const ContentArtists = styled.div`
  width: 100%;
  height: 165px;

  display: flex;
  justify-content: space-around;
`

export const ArtistCard = styled.div`
  width: 14%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 10px;
`

export const ArtistPicture = styled.img`
  width: 90px;

  border-radius: 12px;
  cursor: pointer;
`

export const ArtistName = styled.p`
  width: 100%;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  text-align: center;
`
