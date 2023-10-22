import styled from 'styled-components'

export const Container = styled.div`
  width: 40%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  background-color: #f7f7f7;
`

export const ContentSearch = styled.div`
  width: 100%;
  height: 10%;
  margin-bottom: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const InputSearchBox = styled.div`
  width: 80%;
  height: 60%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  border: none;
  border-radius: 12px;

  background-color: #f2f2f3;
`

export const InputSearch = styled.input`
  width: 85%;
  height: 100%;

  background-color: transparent;
  border: none;
  outline: 0;

  font-size: 18px;

  &::placeholder {
    font-size: 18px;
    color: #a7a7a7;
  }
`

export const ContentList = styled.div`
  width: 100%;
  height: 80%;

  display: flex;
  flex-direction: column;

  overflow-y: auto;

  padding: 0 40px;
`

export const Item = styled.div`
  width: 100%;
  height: 60px;
  margin-bottom: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
`

export const ItemContent = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ItemPicture = styled.img`
  width: 60px;
  height: 60px;

  border-radius: 12px;
`

export const ItemInfos = styled.div`
  width: calc(100% - 80px);
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const ItemName = styled.p`
  font-size: 18px;

  width: 100%;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ItemType = styled.p`
  font-size: 18px;
  color: #cacacb;
`

export const IconContent = styled.img`
  width: 40px;
  height: 40px;
`
