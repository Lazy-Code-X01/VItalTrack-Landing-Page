import React, { useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import ThemeProvider from './theme';
import { UIProvider } from './context/ui';
import AppDrawer from './components/drawer';
import Contact from './pages/ContactPage';

function App() {

  useEffect(() => {
    document.title = " VitalTrack Landing Page";
  });


  return (
  <ThemeProvider>
    <UIProvider>
    <AppDrawer />
    <LandingPage />
    </UIProvider>
  </ThemeProvider>
  );
}

export default App;
