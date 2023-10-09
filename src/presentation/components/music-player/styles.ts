import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 120px;

  display: flex;

  background-color: #f9f9f9;
  padding: 10px 20px;

  border-radius: 12px;

  position: sticky;
  bottom: 15px;
`

export const ContentLeft = styled.div`
  width: 40%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
`

export const ImageArtist = styled.img`
  width: 75px;
  height: 75px;

  border-radius: 12px;
`

export const ContentTrack = styled.div`
  width: 50%;
`

export const TitleTrack = styled.h3`
  width: 100%;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  text-align: left;

  font-size: 18px;
`

export const ArtistName = styled.p`
  width: 100%;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  text-align: left;

  font-size: 16px;
`

export const ContentRight = styled.div`
  width: 60%;
  height: 100%;
`

export const Content = styled.div`
  width: 100%;
  height: 60px;

  display: flex;
  justify-content: center;
  align-items: center
`

export const ContentPlay = styled.div`
  width: 40px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  background-color: #2c90f6;

  cursor: pointer;
`

export const Icon = styled.img`
  width: 22px;
  height: 22px;
`

export const ContentProgressBar = styled.div`
  width: 100%;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
`

type PropsProgressBar = {
  percent: number
}

export const ProgressBar = styled.input.attrs<PropsProgressBar>({
  type: 'range'
})`
  -webkit-appearance: none;
  width: 100%;
  height: 10px;

  border-radius: 12px;
  background: linear-gradient(to right, #2c90f6 ${({ percent }) => percent ?? 0}%, #e2e4e7 0%);

  &::-moz-range-thumb {
    width: 0;
    height: 0;
    border: none;
  }

  &::-webkit-slider-thumb{
    all:unset;
    -webkit-appearance: none;
    border: none;

    width: 0;
    height: 0;
    border: none;
  }
`
