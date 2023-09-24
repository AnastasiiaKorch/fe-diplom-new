import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import SeatsSelectionPage from "./pages/SeatsSelectionPage/SeatsSelectionPage";
import MainPage from "./pages/MainPages/MainPage";
import TrainSelectionPage from "./pages/TrainSelectionPage/TrainSelectionPage";
import links from "./data/links";
import PassengersPage from "./pages/PassengersPage/PassengersPage";
import PaymentOptionPage from "./pages/PaymentOptionsPage/PaymentOptionPage";
import OrderConfirmationPage from "./pages/OrderConfirmationPage/OrderConfirmationPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={links.main} element={<MainPage />} />
        <Route path={links.trains} element={<TrainSelectionPage />} />
        <Route path={links.seats} element={<SeatsSelectionPage />} />
        <Route path={links.passengers} element={<PassengersPage/>}/>
        <Route path={links.paymentOptions} element={<PaymentOptionPage/>}/>
        <Route path={links.confirmOrder} element={<OrderConfirmationPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
