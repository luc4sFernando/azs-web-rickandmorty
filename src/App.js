import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<h1>Elo</h1>} />
      </Routes>
    </div>
  );
}

export default App;
