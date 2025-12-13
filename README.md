A Netflix-style, AI-powered movie browsing and recommendation web app built with React, Firebase, OpenAI, and TMDB API.

## 🎞️ Demo
 
 
- Browse curated movie rows (Now Playing, Trending, Top Rated, Upcoming)
- Sign up or log in with Firebase authentication
- Explore the GPT Search feature to discover movies using natural language prompts
- Experience a responsive Netflix-style interface

## ✨ Features

- 🎬 Netflix-inspired UI with horizontally scrollable movie rows organized by categories (Now Playing, Trending, Top Rated, Upcoming)
- 🔐 Firebase Authentication with email/password sign-up, login, logout, and protected routes
- 🤖 AI-Powered Movie Discovery using OpenAI's GPT API - search with natural language prompts like "feel-good sports movies like Dangal"
- 🎥 Dynamic movie data fetched from TMDB API with posters, titles, overviews, ratings, and genres
- 📱 Fully responsive design optimized for desktop, tablet, and mobile devices
- ⚡ Redux Toolkit for efficient global state management across authentication and movie data
- 🎨 Modern, clean UI built with Tailwind CSS inspired by Netflix's design language
- ⏳ Loading states, error handling, and smooth user experience with feedback mechanisms

## 🛠️ Tech Stack

### Frontend

- **React.js** - Component-based UI library with hooks and functional components
- **Redux Toolkit** - State management for user authentication and movie data
- **React Router** - Client-side routing and protected routes
- **Tailwind CSS** - Utility-first CSS framework for responsive design

### Backend & Services

- **Firebase Authentication** - User sign-up, login, and session management
- **Firebase Hosting** - Production deployment and hosting
- **OpenAI API** - GPT-powered natural language movie recommendations
- **TMDB API** - Real-time movie data including titles, posters, ratings, and genres

### Development Tools

- **Create React App** - Project bootstrapping and build configuration
- **Git & GitHub** - Version control and code repository
- **VS Code** - Primary development environment

## 🚀 Getting Started

### Prerequisites

Before running this project, ensure you have:

- **Node.js** (v14 or higher) and **npm** installed
- An **OpenAI API key** with access to GPT models
- A **Firebase project** configured with Authentication enabled
- A **TMDB API key** for movie data

### Installation

1. **Clone the repository**

```bash
git clone <https://github.com/codeofmohit/netflix-gpt.git>
cd netflix-gpt

```

1. **Install dependencies**

```bash
npm install

```

1. **Set up environment variables**

Create a `.env` file in the root directory and add:

```bash
REACT_APP_OPENAI_API_KEY=your_openai_api_key
REACT_APP_MOVIE_API_KEY=your_tmdb_api_key

REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id

```

1. **Start the development server**

```bash
npm start

```

1. **Open your browser** and navigate to `http://localhost:3000`

## 📂 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.js       # Navigation header with logo and auth buttons
│   ├── Login.js        # Login/Sign up form
│   ├── MovieCard.js    # Individual movie card component
│   ├── MovieList.js    # Horizontal scrollable movie list
│   └── VideoBackground.js  # Hero banner video background
│
├── pages/              # Main application pages
│   ├── Browse.js       # Main browse page with movie rows
│   └── GptSearch.js    # AI-powered search page
│
├── hooks/              # Custom React hooks
│   ├── useNowPlayingMovies.js
│   ├── usePopularMovies.js
│   └── useMovieTrailer.js
│
├── store/              # Redux store and slices
│   ├── store.js        # Redux store configuration
│   ├── userSlice.js    # User authentication state
│   ├── moviesSlice.js  # Movie data state
│   └── gptSlice.js     # GPT search state
│
├── utils/              # Utility functions and constants
│   ├── firebase.js     # Firebase configuration
│   ├── constants.js    # API keys and constants
│   └── validate.js     # Form validation logic
│
└── App.js              # Main app component with routing

## 🤖 How AI Search Works
The GPT Search feature leverages OpenAI's language model to provide intelligent movie recommendations:

1. **User Input**: User types a natural language query (e.g., "romantic comedy movies with strong female leads" or "action movies like John Wick")

2. **GPT Processing**: The query is sent to OpenAI's API with a carefully crafted prompt that instructs GPT to return a list of 5 relevant movie titles

3. **Movie Data Fetching**: For each movie title suggested by GPT, the app queries the TMDB API to fetch complete movie details (poster, overview, rating, release date, etc.)

4. **Results Display**: The curated movies are displayed in a dedicated section with the same card-based UI as the main browse page

5. **State Management**: All GPT search results and status are managed through Redux, enabling smooth UI updates and error handling

This creates a seamless experience where users can discover movies using conversational language rather than traditional keyword search.

## 🚀 Future Improvements
- ⭐ **User Watchlist & Favorites** - Allow users to save movies to a personal watchlist stored in Firebase Firestore
- 🌍 **Multi-language Support** - Add internationalization (i18n) for multiple language interfaces and GPT prompts
- 📊 **Advanced Recommendations** - Implement collaborative filtering based on user viewing history and ratings
- 📹 **Movie Trailers** - Add trailer playback functionality using YouTube API integration
- 👤 **User Profiles** - Support multiple user profiles per account with personalized recommendations
- 📧 **Email Notifications** - Send personalized movie recommendations via email based on user preferences
- 📱 **Progressive Web App (PWA)** - Add offline support and installability for mobile devices
- ⏳ **Skeleton Loaders** - Implement skeleton screens for better perceived performance during data loading
- 📝 **Movie Details Page** - Create dedicated pages with full cast, crew, reviews, and related movies
- 🔍 **Advanced Filters** - Add genre, year, rating, and language filters to the browse experience

## 📜 License & Credits### License
This project is created for **educational and portfolio purposes**. Feel free to fork, modify, and use it for learning.

If you plan to deploy it publicly, please ensure you comply with the terms of service for:
- **TMDB API** - https://www.themoviedb.org/terms-of-use
- **OpenAI API** - https://openai.com/policies/terms-of-use
- **Firebase** - https://firebase.google.com/terms

### Credits & Acknowledgments

- **Movie Data**: Powered by [The Movie Database (TMDB) API](https://www.themoviedb.org/)
- **AI Recommendations**: Powered by [OpenAI GPT API](https://openai.com/)
- **Authentication & Hosting**: [Firebase](https://firebase.google.com/)
- **UI Inspiration**: Inspired by the Netflix user interface and design patterns
- **Learning Resource**: Built while learning React and exploring modern web development practices

### Disclaimer
This project is **not affiliated with, endorsed by, or connected to Netflix, Inc.** It is an independent educational project created to demonstrate React, Firebase, and AI integration skills.

---

**Built with ❤️ by a passionate developer learning full-stack development**

If you found this project helpful, consider giving it a ⭐ on GitHub!

```