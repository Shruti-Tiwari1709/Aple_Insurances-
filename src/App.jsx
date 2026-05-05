import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ScrollProgress, WhatsAppButton, FloatingQuote } from './components/FloatingElements';
import HomePage from './pages/HomePage';
import VehicleInsurancePage from './pages/VehicleInsurancePage';
import HealthInsurancePage from './pages/HealthInsurancePage';
import LifeInsurancePage from './pages/LifeInsurancePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import QuotePage from './pages/QuotePage';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <ScrollProgress />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/vehicle-insurance" element={<VehicleInsurancePage />} />
          <Route path="/health-insurance" element={<HealthInsurancePage />} />
          <Route path="/life-insurance" element={<LifeInsurancePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/quote" element={<QuotePage />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
        <FloatingQuote />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
