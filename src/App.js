import { Routes, Route } from 'react-router-dom';
import Home from './screen/Home';
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
