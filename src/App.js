import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ExchangePolicy from './pages/ExchangePolicy';
import About from './pages/Aboutpage/About';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import FaqPage from './pages/FaqPage';
import StoreLocator from './pages/StoreLocator/StoreLocator';
import ContactPage from './pages/Contactpage/Contactpage';
import ProductPage from "./pages/ProductPage/ProductPage";
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import CartPage from './pages/CartPage/CartPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import OrderConfirmation from './pages/OrderConfirmation/OrderConfirmation';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import AuthModal from './components/AuthModal/AuthModal';
import CollectionPage from "./pages/CollectionPage/CollectionPage";



function App() {
  return (
 
    <CartProvider>
      <AuthProvider>
        <Router>
        <ScrollToTop />
        <WhatsAppButton phoneNumber="923001234567" message="Hello! I would like to know more." />
        <AuthModal/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/exchange-policy" element={<ExchangePolicy />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/faqs" element={<FaqPage/>} />
          <Route path="/store-locator" element={<StoreLocator/>} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/collection/:categoryName" element={<CollectionPage />} />
        </Routes>
      </Router>
      </AuthProvider>
 
    </CartProvider>
  );
}

export default App;