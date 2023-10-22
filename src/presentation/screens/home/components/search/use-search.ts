import { useEffect, useState } from 'react'

import { LoadGetSearch } from '@/data/usecases/search/get-search'

type Return = {
  items: any[]
  setValueSearch: (value: string) => void
  isLoading: boolean
}

export function useSearch (): Return {
  const [valueSearch, setValueSearch] = useState('')
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  async function handleSearch (): Promise<void> {
    if (valueSearch.trim().length < 3 || isLoading) {
      return
    }

    setIsLoading(true)

    const response = await LoadGetSearch.getSearch({ query: valueSearch })

    const data = [...response.tracks, ...response.albums, ...response.artists]

    setItems(data)
    setIsLoading(false)
  }

  useEffect(() => {
    handleSearch()
  }, [valueSearch])

  return {
    setValueSearch,
    items,
    isLoading
  }
}
