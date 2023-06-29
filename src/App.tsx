import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import Header from './Header';
import { EmailForm } from './EmailForm';
import Footer from './Footer';
import HomePage from './HomePage';
import React from 'react';

const App = () => (
  <Router>
    <Header />
    <Container>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='contact' element={<EmailForm />} />
      </Routes>
    </Container>
    <Footer />
  </Router>
);

export default App;
