import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from "./pages/HomePage";
import AboutMary from "./pages/AboutMary";

function App() {
  return (
      <>
        <Routes>
            <Route path="/" element = {<HomePage />} />
            <Route path="/about" element = {<AboutMary />} />
        </Routes>
      </>
  );
}
// PAGE CONSTRUCTION END //

// EXPORT STATEMENT //
export default App;