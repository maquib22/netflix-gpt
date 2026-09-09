# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




# Configred Tailwind CSS 
using NPM installed the Tailwind css and configerd the file in the vite.config.js



# Features
- Login/ Sign Up
    - Sign In /Sign Up page
    - redirect to Browse page
    - Routing
    # Netflix GPT

    A Netflix-inspired movie browsing app built with React and Vite. Users can create an account or sign in with Firebase, browse TMDB movie data, watch trailers, and use GPT to get movie recommendations.

    ## Features

    ### Authentication

    - Sign up and sign in with email and password using Firebase Authentication.
    - Client-side email and password validation.
    - Auth-state listener that keeps the user state synchronized with Redux.
    - Automatic navigation between the login and browse pages when authentication changes.
    - Sign out support.

    ### Browse experience

    - Netflix-style header with user profile, sign-out, and GPT search controls.
    - Featured movie with title, description, and a YouTube trailer background.
    - TMDB now-playing and popular movie rows.
    - Reusable movie list and movie card components.
    - Horizontally scrollable movie suggestions.
    - Redux Toolkit state for the authenticated user, movies, trailer, GPT results, and app configuration.

    ### NetflixGPT search

    - GPT-powered movie recommendations from a natural-language prompt.
    - TMDB lookup for each recommended title so results use real movie posters and metadata.
    - Toggle between the browse view and GPT search view.
    - English and Hindi search interface text.

    ## Tech stack

    - React 19 and Vite
    - React Router
    - Redux Toolkit and React Redux
    - Firebase Authentication
    - TMDB API
    - OpenAI API
    - Tailwind CSS

    ## Getting started

    ### Prerequisites

    - Node.js and npm
    - A TMDB API bearer token
    - An OpenAI API key
    - A Firebase project with Email/Password authentication enabled

    ### Install

    ```bash
    npm install
    ```

    Create a `.env` file in the project root:

    ```env
    VITE_TMDB_KEY=your_tmdb_bearer_token
    VITE_OPENAI_KEY=your_openai_api_key
    ```

    The Firebase web configuration is currently defined in `src/utils/firbase.js`. Configure Firebase Authentication before using sign up or sign in.

    ### Run locally

    ```bash
    npm run dev
    ```

    Open the local URL printed by Vite, then use the login page to create an account or sign in.

    ## Available scripts

    ```bash
    npm run dev       # Start the Vite development server
    npm run build     # Create a production build
    npm run preview   # Preview the production build locally
    npm run lint      # Run ESLint
    ```

    ## Project structure

    ```text
    src/
      components/    React UI components and page sections
      hooks/         TMDB and trailer data-fetching hooks
      utils/         Redux slices, API configuration, Firebase, and validation
      App.jsx        Application routes
    ```

    ## Deployment

    Build the app with `npm run build` and deploy the generated `dist` directory using a static hosting provider. Configure the `VITE_TMDB_KEY` and `VITE_OPENAI_KEY` environment variables in the hosting provider before building.
