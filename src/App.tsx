import { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';

import Page404 from './pages/404';
import About from './pages/About';
import HomePage from './pages/Homepage';

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;