import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Episode from './screen/Episode';
import Episodes from './screen/Episodes';
import Favorites from './screen/Favorites';
import Home from './screen/Home';
import MyContext from './utils/favoritesContext';
function App() {
  const [favorites, setFavorites] = useState(() => {
    const storageValue = JSON.parse(localStorage.getItem('favorites'));
    console.log(storageValue);
    return storageValue || [];
  });
  console.log(favorites);
  return (
    <div className='App'>
      <MyContext.Provider value={[favorites, setFavorites]}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/episodes' element={<Episodes />} />
          <Route path='/episodes/:id' element={<Episode />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </MyContext.Provider>
    </div>
  );
}

export default App;
