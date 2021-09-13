import React from 'react';

// Import styles
import { GlobalStyle } from './GlobalStyle';

// Import components
import Header from './components/Header';


function App() {
  return (
      <div className="App">
          <GlobalStyle />
          <Header />
      </div>
  );
}

export default App;
