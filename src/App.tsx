import { Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';

function App() {
  return (
    <Routes>
      <Route element={<NavBar />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
