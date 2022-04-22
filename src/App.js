import { Routes, Route } from 'react-router-dom';
import Episode from './screen/Episode';
import Episodes from './screen/Episodes';
import Home from './screen/Home';
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/episodes' element={<Episodes />} />
        <Route path='/episodes/:id' element={<Episode />} />
      </Routes>
    </div>
  );
}

export default App;
