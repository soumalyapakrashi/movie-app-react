# React Movie App

An app built with React which gets movie data from the TMDB movie database.

This shows the upcoming and recent movies and also past movies. Movies are searchable by name and each movie has a dedicated page which shows some relevant information about the movie which includes the cast, budget, box office revenue and release date.

This project is made to learn React and understand how its various components work from [https://www.youtube.com/watch?v=nTeuhbP7wdE](https://www.youtube.com/watch?v=nTeuhbP7wdE).

To run this program, we need to have NodeJS installed. Also, remember to store the secret key in a `.env` file in the root directory of the project.

To get the key, we need to get authorized for an API key in the [TMDB Movie Website](https://www.themoviedb.org/). After visiting the `Profile` section, go to `Edit Profile` section and then to the `API` section. Here, we can either sign-up for a new API key or if we already have access to the API key, we can get the latter from here, named `API Key (v3Auth)`.

In the `.env` file, we will create a key named `REACT_APP_API_KEY` with the value containing the key we got from the moviedatabase website from before.
