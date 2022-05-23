import { useContext, useState, useEffect } from 'react'
import { SearchContext } from '../context/search'
import { AnimeList } from '../components/AnimeList'
export function Results() {

  const search = useContext(SearchContext)
  const [dataExists, setDataExists] = useState(true)

  useEffect(() => {
    if (search.animeData === undefined || search.animeData.length === 0) {
      try {
        search.setData(JSON.parse(localStorage.getItem('myData')))
        setDataExists(true)
      } catch (error) {
        console.log(error)
        setDataExists(false)
      }
    }
  }, [search])

  return (
    <div>{(dataExists && <AnimeList data={search.animeData}/>) || 'Data does not exist'}</div>
  )
}