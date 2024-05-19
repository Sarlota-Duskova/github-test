import logo from './logo.svg';
import './App.css';

//import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';

/* -------------- Pages -------------- */
import Home from './pages/Home';
import TeamPage from './pages/TeamPage';
import Pokus from './pages/Pokus';
//basename="/github-test"
//"homepage": "https://sarlota-duskova.github.io/github-test",
export default function App() {

  return (
    <div>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/github-test/pokus" element={<Pokus />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

