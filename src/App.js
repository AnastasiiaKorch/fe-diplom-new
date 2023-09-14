import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import SeatsSelectionPage from "./pages/SeatsSelectionPage/SeatsSelectionPage";
import MainPage from "./pages/MainPages/MainPage";
import TrainSelectionPage from "./pages/TrainSelectionPage/TrainSelectionPage";
import links from "./data/links";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={links.main} element={<MainPage />} />
        <Route path={links.trains} element={<TrainSelectionPage />} />
        <Route path={links.seats} element={<SeatsSelectionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
