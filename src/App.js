import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import useLocalStorage from './components/hooks/useLocalStorage';
import PreferencesProvider from './components/hooks/usePreferences';
import { SearchProvider } from './components/hooks/useSearch';
import Episode from './screen/Episode';
import Episodes from './screen/Episodes';
import Favorites from './screen/Favorites';
import Home from './screen/Home';
import Watched from './screen/Watched';

function App() {
  const [preferences, setPreferences] = useLocalStorage('preferences');
  const [episodes, searchEpisodes] = useState([]);

  return (
    <PreferencesProvider state={[preferences, setPreferences]}>
      <SearchProvider state={[episodes, searchEpisodes]}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/episodes' element={<Episodes />} />
          <Route path='/episodes/:id' element={<Episode />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/watched' element={<Watched />} />
        </Routes>
      </SearchProvider>
    </PreferencesProvider>
  );
}

export default App;
