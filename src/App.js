import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';

import MainPage from "./pages/MainPages/MainPage";
import TrainSelectionPage from "./pages/TrainSelectionPage/TrainSelectionPage";
import links from "./data/links";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={links.main} element={<MainPage />} />
        <Route path={links.trains} element={<TrainSelectionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
