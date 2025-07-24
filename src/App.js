// src/App.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MockHome from './pages/MockHome';
import FestivalPage from './pages/FestivalPage';
//import FestivalDetail from './pages/FestivalDetail'; // 생성 예정

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MockHome />} />
        <Route path="/festival" element={<FestivalPage />} />
      </Routes>
    </Router>
  );
}

export default App;
