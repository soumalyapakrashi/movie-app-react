import React from 'react';

// Import styles
import { GlobalStyle } from './GlobalStyle';

// Import components
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';

// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
    return (
        <Router>
            <GlobalStyle />
            <Header />

            <Routes>
                <Route path = '/' element = { <Home /> } />
                <Route path = '/:movieId' element = { <Movie /> } />
                <Route path = '/*' element = { <NotFound /> } />
            </Routes>
        </Router>
    );
}

export default App;
