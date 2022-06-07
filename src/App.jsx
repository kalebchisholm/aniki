import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Landing } from './containers/Landing'
import { Page } from './pages/Page'
import { AnimeSearch } from './containers/anime/AnimeSearch'
import { TopAnime } from './containers/anime/TopAnime'
import { SeasonalAnime } from './containers/anime/SeasonalAnime'
import { MangaSearch } from './containers/manga/MangaSearch'
import { TopManga } from './containers/manga/TopManga'
import { AnimeList } from './containers/lists/AnimeList'
import { MangaList } from './containers/lists/MangaList'
import { MyFriends } from './containers/community/MyFriends'
import { Forum } from './containers/community/Forum'
import { AnimeResults } from './components/anime/AnimeResults'
import { MangaResults } from './components/manga/MangaResults'
import { SearchProvider } from './search/SearchProvider'
import './App.css';
import { TopAnimeResults } from './components/anime/TopAnimeResults'

export default function App() {
  return (
  <SearchProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Page><Landing /></Page>}/>

        {/* ANIME ROUTES */}
        <Route path='/anime-search' element={<Page><AnimeSearch /></Page>}/>
        <Route path='/top-anime' element={<Page><TopAnime /></Page>}/>
        <Route path='/seasonal-anime' element={<Page><SeasonalAnime /></Page>}/>
        
        {/* MANGA ROUTES */}
        <Route path='/manga-search' element={<Page><MangaSearch /></Page>}/>
        <Route path='/top-manga' element={<Page><TopManga /></Page>}/>

        {/* LIST ROUTES */}
        <Route path='/anime-list' element={<Page><AnimeList /></Page>}/>
        <Route path='/manga-list' element={<Page><MangaList /></Page>}/>

        {/* COMMUNITY ROUTES */}
        <Route path='/my-friends' element={<Page><MyFriends /></Page>}/>
        <Route path='/forum' element={<Page><Forum /></Page>}/>

        <Route path='/anime-results' element={<Page><AnimeResults /></Page>}/>
        <Route path='/top-anime-results' element={<Page><TopAnimeResults /></Page>}/>
        <Route path='/manga-results' element={<Page><MangaResults /></Page>}/>
      </Routes>
    </BrowserRouter>
  </SearchProvider>
  );
}