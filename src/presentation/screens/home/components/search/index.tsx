import React, { type ReactElement } from 'react'

import { Loader } from '@/presentation/components/loader/loader'

import SearchIcon from '../../../../assets/icons/search_icon.svg'
import RightArrowIcon from '../../../../assets/icons/right-arrow_icon.svg'

import { Container, ContentList, ContentSearch, IconContent, InputSearch, Item, ItemInfos, ItemName, ItemPicture, ItemType, ItemContent, InputSearchBox } from './styles'
import { useSearch } from './use-search'

export function Search (): ReactElement {
  const { items, setValueSearch, isLoading } = useSearch()

  return (
    <Container>
      <ContentSearch>
        <InputSearchBox>
          <IconContent src={SearchIcon} />
          <InputSearch placeholder='Search library' onChange={e => { setValueSearch(e.target.value) }}/>
        </InputSearchBox>
      </ContentSearch>
      <ContentList>
        {isLoading && <Loader />}
        {(items ?? []).map(item => {
          return (
            <Item key={item.id}>
              <ItemContent>
                <ItemPicture alt={`${item.type} picture`} src={item.type === 'track' ? item?.artist?.picture : item.type === 'artist' ? item?.picture : item?.cover_small } />
                <ItemInfos>
                  <ItemName>{item.type === 'artist' ? item.name : item.title}</ItemName>
                  <ItemType>{item.type}</ItemType>
                </ItemInfos>
              </ItemContent>
              <IconContent src={RightArrowIcon} />
            </Item>
          )
        })}
      </ContentList>
    </Container>
  )
}
