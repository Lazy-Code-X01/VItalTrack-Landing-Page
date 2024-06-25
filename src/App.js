import React from 'react';
import LandingPage from './pages/LandingPage';
import ThemeProvider from './theme';
import { UIProvider } from './context/ui';
import AppDrawer from './components/drawer';







function App() {
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
