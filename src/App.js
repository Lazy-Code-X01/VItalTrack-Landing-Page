import React from 'react';
import LandingPage from './pages/LandingPage';
import ThemeProvider from './theme';



function App() {
  return (
  <ThemeProvider>
    <LandingPage />
  </ThemeProvider>
  );
}

export default App;
