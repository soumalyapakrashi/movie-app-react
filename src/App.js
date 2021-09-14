import React from 'react';

// Import styles
import { GlobalStyle } from './GlobalStyle';

// Import components
import Header from './components/Header';
import Home from './components/Home';


function App() {
  return (
      <div className="App">
          <GlobalStyle />
          <Header />
          <Home />
      </div>
  );
}

export default App;
