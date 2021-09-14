import React, { useState, useEffect } from 'react';

// Import configurations
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

// Import fallback image
import NoImage from '../images/no_image.jpg';

// Import custom hooks
import { useHomeFetch } from '../hooks/useHomeFetch';

// Import components
import HeroImage from './HeroImage';
import Grid from './Grid';

function Home() {
    const { state, loading, error } = useHomeFetch();

    console.log(state);

    return (
        <>
            { state.results[0] ?
                <HeroImage
                    image = { `${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}` }
                    title = { state.results[0].original_title }
                    text = { state.results[0].overview }
                /> 
                : null
            }

            
        </>
    );
}

export default Home;