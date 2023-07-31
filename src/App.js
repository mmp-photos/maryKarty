import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from "./pages/HomePage";
import AboutMary from "./pages/AboutMary";
import ShowPage from "./pages/ShowPage";

function App() {
  return (
      <>
        <Routes>
            <Route path="/" element = {<HomePage />} />
            <Route path="/about" element = {<AboutMary />} />
            <Route path="/show" element = {<ShowPage />} />
        </Routes>
      </>
  );
}
// PAGE CONSTRUCTION END //

// EXPORT STATEMENT //
export default App;