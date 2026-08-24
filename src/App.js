import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/home';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';

function App() {
  return (
    <Router>
      <Home/>
      <WhatsAppButton phoneNumber="923001234567" message="Hello! I would like to know more." />
    </Router>
  );
}

export default App;
