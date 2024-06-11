# News App

Welcome to the News App project! This application fetches news articles from the News API and displays them in a user-friendly interface.

## Features

- Fetches news articles from the News API.
- Displays news articles with titles, descriptions, authors, sources, publication dates, and images.
- Allows users to read full articles by clicking on the "Read more" link.

## Technologies Used

- Next.js: React framework for server-rendered React applications.
- News API: API for fetching news articles from various sources.
- CSS Modules: CSS modules for styling React components.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AnoushahWasif/News-App.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env.local` file in the root directory and add your News API key:

   ```
   NEWS_API_KEY=your-api-key
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Folder Structure

- `components`: Contains React components used in the application.
- `pages`: Contains Next.js pages for routing.
- `styles`: Contains CSS modules for styling components.
- `public`: Contains static assets such as images and favicon.

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or feature requests, please open an issue or submit a pull request.
