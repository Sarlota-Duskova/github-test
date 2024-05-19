import logo from './logo.svg';
import './App.css';

import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom';

/* -------------- Pages -------------- */
import Home from './pages/Home';
import TeamPage from './pages/TeamPage';

export default function App() {

  return (
    <div>
      <BrowserRouter basename="/github-test">
        <Routes>
          <Route exacth path="/" element={<Home />} />
          <Route path="/team" element={<TeamPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

