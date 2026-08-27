import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import TermsAndConditions from './pages/TermsAndConditions';
import About from './pages/About';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import FaqPage from './pages/FaqPage';
import StoreLocator from './pages/StoreLocator/StoreLocator';
import ContactPage from './pages/Contactpage/Contactpage';
// import ProductPage from "./pages/ProductPage/ProductPage";


function App() {
  return (
    <Router>
      <WhatsAppButton phoneNumber="923001234567" message="Hello! I would like to know more." />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/faqs" element={<FaqPage/>} />
        <Route path="/store-locator" element={<StoreLocator/>} />
        {/* <Route path="/product/:id" element={<ProductPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
