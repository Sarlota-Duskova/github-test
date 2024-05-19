import logo from './logo.svg';
import './App.css';

import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom';

/* -------------- Pages -------------- */
import Home from './pages/Home';
import TeamPage from './pages/TeamPage';
import Pokus from './pages/Pokus';

export default function App() {

  return (
    <div>
      <BrowserRouter basename="/github-test">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/github-test/pokus" element={<Pokus />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

