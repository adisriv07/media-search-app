# Stock Images & Videos Search App

A React-based stock media search application that allows users to search, browse, and save high-quality stock images and videos using the **Unsplash** and **Pexels APIs**.

The application provides a simple and responsive interface for discovering media based on user searches. Users can switch between images and videos, view search results, and save their favorite media to a personal collection.

## Features

* Search for high-quality stock images and videos
* Browse image results using the Unsplash API
* Browse video results using the Pexels API
* Switch between Photos and Videos using tabs
* Save media to a personal collection
* Remove saved items from the collection
* Clear the entire collection
* Responsive user interface
* Loading and error handling for API requests
* Toast notifications for user actions
* Open original media sources in a new browser tab

## Technologies Used

* **React.js** – Building the user interface
* **Redux Toolkit** – Managing application state
* **React Router** – Handling navigation between pages
* **Axios** – Making API requests
* **Tailwind CSS** – Styling and responsive design
* **React Toastify** – Displaying user notifications
* **Unsplash API** – Fetching stock photos
* **Pexels API** – Fetching stock videos
* **Vite** – Development and build tool

## How It Works

Users can enter a search query to find relevant stock media. The application sends the search request to the appropriate API and displays the returned results in a grid layout.

The **Photos** tab fetches images from Unsplash, while the **Videos** tab fetches videos from Pexels. Users can save individual results to their collection and manage their saved media from the collection page.

## State Management

Redux Toolkit is used to manage the application's global state, including:

* Search query
* Active media tab
* Search results
* Loading state
* API errors
* Saved media collection

## API Integration

This project uses two external APIs:

* **Unsplash API** for stock photos
* **Pexels API** for stock videos

API keys are stored in environment variables rather than being directly included in the source code.

## Getting Started

### 1. Clone the Repository

```bash
git clone <your-repository-url>
```

### 2. Navigate to the Project

```bash
cd stock-images-videos-search-app
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Add Environment Variables

Create a `.env` file in the root directory and add your API keys:

```env
VITE_UNSPLASH_KEY=your_unsplash_api_key
VITE_PEXELS_KEY=your_pexels_api_key
```

### 5. Start the Development Server

```bash
npm run dev
```

The application will start on the local development server provided by Vite.

## Project Structure

```text
src/
├── API/
├── components/
├── pages/
├── Redux/
├── App.jsx
├── main.jsx
└── index.css
```

## Purpose of the Project

This project was built to practice and demonstrate concepts such as **React component development, API integration, Redux Toolkit state management, routing, asynchronous data fetching, and responsive UI development**.

## Future Improvements

Some possible improvements for future versions include:

* Pagination or infinite scrolling
* More advanced search filters
* Media categories
* Better video preview controls
* User authentication
* Cloud-based collections
* Download functionality
* Improved search and sorting options

## License

This project is intended for educational and portfolio purposes.
